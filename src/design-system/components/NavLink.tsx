import Link from "next/link";

export default function NavLink({ active = false, className = '', children, ...props }: NavLinkProps) {
    return (
        <Link {...props} >
            {children}
        </Link>
    );
}

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    className?: string;
    active?: boolean;
    children: React.ReactNode;
    href: string
}