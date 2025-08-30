import Link from 'next/link';
import React from 'react';

export function ExternalLink({ href, children, className }:{href:string, children:React.ReactNode, className?:string}) {
    return (
        <Link href={href} className={className} target="_blank" rel="noopener noreferrer">
            {children}
        </Link>
    );
}
