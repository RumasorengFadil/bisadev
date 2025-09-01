import { ReactNode } from "react";
import { PropsWithChildren } from 'react';
import ExploreLayoutClient from "./ExploreLayoutClient";

export default async function ExploreLayout({ children }: PropsWithChildren<{ children: ReactNode }>) {
    
    return <>
        <ExploreLayoutClient >
            {children}
        </ExploreLayoutClient>
    </>
}
