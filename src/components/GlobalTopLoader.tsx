'use client';

import { useLoaderStore } from '@/context/stores/use-loader.store';
import { useTopLoader } from 'nextjs-toploader';
import { useEffect } from 'react';

export function GlobalTopLoader() {
    const { loadingCount } = useLoaderStore();
    const loader = useTopLoader();

    useEffect(() => {
        if (loadingCount > 0) {
            loader.start();
        } else {
            loader.done();
        }
    }, [loadingCount]);

    return null;
}