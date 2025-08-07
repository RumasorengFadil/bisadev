"use client"
import FormField from "@/design-system/molecules/FormField";
import toastUtils from "@/utils/toastUtils";
import withLoading from "../components/WithLoading";
import SpinnerWithLabel from "../molecules/SpinnerWithLabel";
import PrimaryButton from "../molecules/PrimaryButton";
import { useRouter } from 'next/navigation';
import { useForm } from "@/hooks/useForm";
import api from "@/utils/jwt";
import { useAuthStore } from "@/store/useAuthStore";
import { Token } from "@/typdata/Token";

const LoginForm = () => {
  const { submit, setData, loading, data, errors, reset } = useForm({
    email: "",
    password: "",
  })
  const {setAccessToken} = useAuthStore();
  const router = useRouter();
  
  const submitForm = async (e:React.FormEvent) => {
    e.preventDefault();
    const res:Token = await api.post("/login", {email:data.email, password:data.password});

    setAccessToken(res.access_token);

    console.log(res);
  }
  const ButtonWithLoading = withLoading({
    SpinnerWithLabel,
  })(PrimaryButton);

  return (
    <form onSubmit={submitForm} className="flex flex-col space-y-4 items-center">
      <FormField
        name="email"
        label="Email"
        type="email"
        placeholder="Masukan email"
        className="px-4 w-96"
        value={data.email}
        error={errors.email}
        onChange={(e) => setData("email", e.target.value)}
      />
      <FormField
        name="password"
        label="Password"
        type="password"
        placeholder="Masukan password"
        className="px-4 w-96"
        value={data.password}
        error={errors.password}
        onChange={(e) => setData("password", e.target.value)}
      />
      <ButtonWithLoading
        isLoading={loading}
        className="bg-primary flex justify-center"
        disabled={loading}
      >
        Masuk
      </ButtonWithLoading>
      <span className="text-xs underline cursor-pointer">Lupa Password</span>
    </form>
  );
};

export default LoginForm;
