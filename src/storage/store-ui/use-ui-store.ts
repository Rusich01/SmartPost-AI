import { create } from "zustand";

type AuthType = "signin" | "register";

interface UiStore {
  authType: AuthType;
  isOpenEditor: boolean;

  isShowPassword: boolean;
  isShowRegisterPassword: boolean;
  isShowPasswordConfirm: boolean;

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

  changeLoginPassword: VoidFunction;
  changeRegisterPassword: VoidFunction;
  changePasswordConfirm: VoidFunction;
}

export const useUiStore = create<UiStore>((set) => ({
  authType: "signin",
  isOpenEditor: false,

  isShowPassword: false,
  isShowRegisterPassword: false,
  isShowPasswordConfirm: false,

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

  changeLoginPassword: () =>
    set((state) => ({ isShowPassword: !state.isShowPassword })),

  changeRegisterPassword: () =>
    set((state) => ({ isShowRegisterPassword: !state.isShowRegisterPassword })),

  changePasswordConfirm: () =>
    set((state) => ({ isShowPasswordConfirm: !state.isShowPasswordConfirm })),
}));
