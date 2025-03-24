import ApplicationLogoBlack from "../components/ApplicationLogoBlack";

const LoginHeader = ({title}:{title:string}) => {
  return (
    <div
      className="flex flex-col justify-center bg-primary relative h-40 px-4"
      style={{ clipPath: "ellipse(70% 100% at 50% 0%)" }}
    >
      <div>
        <ApplicationLogoBlack className="cursor-pointer -translate-y-[30%] w-24" />
      </div>
      <h1 className="flex text-2xl font-bold justify-center">{title}</h1>
    </div>
  );
};

export default LoginHeader;
