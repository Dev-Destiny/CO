import { create } from "zustand";

interface AuthState {
	isAuthenticated: boolean;
	isLoading: boolean;
	user: Record<string, any> | null;
	login: (userData: Record<string, any>) => void;
	logout: () => void;
}



export const AuthStore = create<AuthState>((set) => ({
	isAuthenticated: false,
	isLoading: false,
	user: null,
	login: (userData) => set({ isAuthenticated: true, user: userData }),
	logout: () => set({ isAuthenticated: false, user: null }),
}));
