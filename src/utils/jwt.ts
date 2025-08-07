import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api',
  withCredentials: true,
});

api.interceptors.response.use(
  res => res,
  async err => {
    const originalRequest = err.config;

    // jika error karena token expired
    if (err.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshRes = await api.post('/refresh');
        const newToken = refreshRes.data.access_token;

        axios.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
        originalRequest.headers['Authorization'] = `Bearer ${newToken}`;

        return api(originalRequest);
      } catch (refreshError) {
        // gagal refresh, redirect ke login
        window.location.href = '/login';
      }
    }

    return Promise.reject(err);
  }
);

export default api;
