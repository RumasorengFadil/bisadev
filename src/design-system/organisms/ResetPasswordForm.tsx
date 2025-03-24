import FormField from "@/design-system/molecules/FormField";
import FormAction from "@/design-system/molecules/FormAction";

const ResetPasswordForm: React.FC = () => {
  return (
    <div className="flex flex-col space-y-4 items-center">
      <FormField
        name="newPassword"
        label="Password baru"
        type="password"
        placeholder="Masukan password baru"
        className="px-4 w-96"
      />
      <FormField
        name="confirmPassword"
        label="Konfirmasi Password"
        type="password"
        placeholder="Masukan konfirmasi password"
        className="px-4 w-96"
      />
      <FormAction className="bg-primary border-primary">Ubah Password</FormAction>
    </div>
  );
};

export default ResetPasswordForm;
