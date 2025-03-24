import FormField from "@/design-system/molecules/FormField";
import FormAction from "@/design-system/molecules/FormAction";

const LoginForm: React.FC = () => {
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
      <FormAction className="bg-primary border-primary">Masuk</FormAction>
      <span className="text-xs underline cursor-pointer">Lupa Password</span>
    </div>
  );
};

export default LoginForm;
