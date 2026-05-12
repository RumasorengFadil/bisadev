// stores/use-loader.store.ts
import { create } from 'zustand';

type LoaderState = {
    loadingCount: number;
    start: () => void;
    done: () => void;
};

export const useLoaderStore = create<LoaderState>((set) => ({
    loadingCount: 0,

    start: () =>
        set((state) => ({
            loadingCount: state.loadingCount + 1,
        })),

    done: () =>
        set((state) => ({
            loadingCount: Math.max(0, state.loadingCount - 1),
        })),
}));