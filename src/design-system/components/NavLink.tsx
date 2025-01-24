import Link from "next/link";

export default function NavLink({ className = '', children, ...props }: NavLinkProps) {
    return (
        <Link className={className} {...props} >
            {children}
        </Link>
    );
}

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    className?: string;
    children: React.ReactNode;
    href: string
}