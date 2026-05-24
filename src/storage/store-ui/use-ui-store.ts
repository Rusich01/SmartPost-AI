import { create } from "zustand";

type AuthType = "signin" | "register";

interface UiStore {
  authType: AuthType;
  isOpenEditor: boolean;

  instagram: boolean;
  linkedIn: boolean;
  twitter: boolean;
  facebook: boolean;

  // functions
  switchSignIn: VoidFunction;
  switchRegister: VoidFunction;

  changeInstagram: VoidFunction;
  changeLinkedIn: VoidFunction;
  changeTwitter: VoidFunction;
  changeFacebook: VoidFunction;

  openEditor: VoidFunction;
  closeEditor: VoidFunction;
}

export const useUiStore = create<UiStore>((set) => ({
  authType: "signin",
  isOpenEditor: false,
  instagram: false,
  linkedIn: false,
  twitter: false,
  facebook: false,

  switchSignIn: () => set({ authType: "signin" }),
  switchRegister: () => set({ authType: "register" }),

  openEditor: () => set({ isOpenEditor: true }),
  closeEditor: () => set({ isOpenEditor: false }),

  //change social media
  changeInstagram: () => set((state) => ({ instagram: !state.instagram })),
  changeLinkedIn: () => set((state) => ({ linkedIn: !state.linkedIn })),
  changeTwitter: () => set((state) => ({ twitter: !state.twitter })),
  changeFacebook: () => set((state) => ({ facebook: !state.facebook })),
}));
