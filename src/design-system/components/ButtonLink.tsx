import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ButtonLinkProps {
  href: string;
  title: string;
  icon: React.ComponentType<{ size?: number | string }>;
}

const ButtonLink = ({ href, title, icon: Icon }: ButtonLinkProps) => {
  return (
    <Link href={href} className="flex justify-end px-4 lg:px-6">
      <Button className="flex items-center gap-2">
        <Icon size={16} />
        {title}
      </Button>
    </Link>
  );
};

export default ButtonLink;
