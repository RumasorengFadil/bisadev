"use client"
import FormField from "@/design-system/molecules/FormField";
import FormAction from "@/design-system/molecules/FormAction";
import axios from "axios";

const LoginForm: React.FC = () => {

  const login = async () => {
    axios.defaults.withCredentials = true;
    await axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie');
    // Contoh login
    // await axios.post('http://127.0.0.1:8000/api/login', {
    //   email: 'limitvariabel@gmail.com',
    //   password: 'fadil321'
    // }).then(response => {
    //   console.log(response.data);
    // });
    // const { data } = await axios.get("http://127.0.0.1:8000/api/user");
    // console.log(data)
  }
  return (
    <div className="flex flex-col space-y-4 items-center">
      <FormField
        name="username"
        label="Username"
        type="text"
        placeholder="Masukan username"
        className="px-4 w-96"
      />
      <FormField
        name="password"
        label="Password"
        type="password"
        placeholder="Masukan password"
        className="px-4 w-96"
      />
      <FormAction onClick={login} className="bg-primary border-primary">Masuk</FormAction>
      <span className="text-xs underline cursor-pointer">Lupa Password</span>
    </div>
  );
};

export default LoginForm;
