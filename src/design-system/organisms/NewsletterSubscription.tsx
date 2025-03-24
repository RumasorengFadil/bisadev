import FormAction from "../molecules/FormAction";
import FormField from "../molecules/FormField";

const NewsletterSubscription: React.FC = () => {
  return (
    <div className="flex flex-col space-y-3 text-center px-10">
      <h1 className="font-bold text-xl">Yuk Berlangganan, Gratis!</h1>
      <p>
        Subscribe Newsletter bbyts untuk mendapatkan insight eksklusif seputar
        bisnis digital, pengembangan software, desain UI/UX, dan inovasi
        teknologi langsung ke email Anda! 🚀
      </p>

      <div className="flex flex-col space-y-3 items-center">
        <FormField
          name="name"
          label=""
          type="text"
          placeholder="Nama kamu"
          className="px-4 w-96"
        />
        <FormField
          name="email"
          label=""
          type="email"
          placeholder="Email kamu"
          className="px-4 w-96"
        />

        <FormAction className="rounded-b-2xl bg-primary border-primary">
          Berlangganan
        </FormAction>
      </div>
    </div>
  );
};

export default NewsletterSubscription;
