// src/stores/auth.store.ts
import { UserResponse } from '@/features/auth/types';
import { create } from 'zustand';

type AuthState = {
  user: UserResponse | null;
  setUser: (user: UserResponse | null) => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
