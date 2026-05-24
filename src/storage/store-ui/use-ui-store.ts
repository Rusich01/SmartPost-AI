import { create } from "zustand";

type AuthType = "signin" | "register";

interface UiStore {
  authType: AuthType;
  instagram: boolean;
  linkedIn: boolean;
  twitter: boolean;
  facebook: boolean;

  switchSignIn: () => void;
  switchRegister: () => void;
  changeInstagram: VoidFunction;
  changeLinkedIn: VoidFunction;
  changeTwitter: VoidFunction;
  changeFacebook: VoidFunction;
}

export const useUiStore = create<UiStore>((set) => ({
  authType: "signin",
  instagram: false,
  linkedIn: false,
  twitter: false,
  facebook: false,

  switchSignIn: () => set({ authType: "signin" }),
  switchRegister: () => set({ authType: "register" }),
  changeInstagram: () => set((state) => ({ instagram: !state.instagram })),
  changeLinkedIn: () => set((state) => ({ linkedIn: !state.linkedIn })),
  changeTwitter: () => set((state) => ({ twitter: !state.twitter })),
  changeFacebook: () => set((state) => ({ facebook: !state.facebook })),
}));
