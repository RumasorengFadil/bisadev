// utils/axios.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000', // ganti sesuai URL backend kamu
  withCredentials: true, // penting jika pakai Sanctum
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

export default api;
