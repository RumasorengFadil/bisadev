"use client"
import FormField from "@/design-system/molecules/FormField";
import FormAction from "@/design-system/molecules/FormAction";
import { useState } from "react";
import { useForm } from "@/hooks/useForm";
import toastUtils from "@/utils/toastUtils";
import { toast } from "react-toastify";

const LoginForm: React.FC = () => {

  const {submit, setData, loading, data, errors} = useForm({
    email:"",
    password:"",
  })

  const submitForm = () => {
    submit("post", "http://127.0.0.1:8000/api/login", {
      onSuccess(res) {
        console.log(res, "berhasil");
      },
      onError(errors) {
        toastUtils.showError(errors);
      },
    })
  }

  return (
    <div className="flex flex-col space-y-4 items-center">
      <FormField
        name="email"
        label="Email"
        type="text"
        placeholder="Masukan email"
        className="px-4 w-96"
        value={data.email}
        error={errors.email}
        onChange={(e)=> setData("email", e.target.value)}
      />
      <FormField
        name="password"
        label="Password"
        type="password"
        placeholder="Masukan password"
        className="px-4 w-96"
        value={data.password}
        error={errors.password}
        onChange={(e)=> setData("password",e.target.value)}
      />
      <FormAction onClick={submitForm} className="bg-primary border-primary">Masuk</FormAction>
      <span className="text-xs underline cursor-pointer">Lupa Password</span>
    </div>
  );
};

export default LoginForm;
