import { create } from "zustand";

interface UiErrors {
  errorEmail: null | string;
  errorPassword: null | string;

  errorFullName: null | string;
  errorEmailRegister: null | string;

  errorPasswordRegister: null | string;
  errorPasswordConfirm: null | string;

  putErrorEmail: (value: string | null) => void;
  putErrorPassword: (value: string | null) => void;

  putErrorFullName: (value: string | null) => void;
  putErrorEmailRegister: (value: string | null) => void;
  putErrorPasswordRegister: (value: string | null) => void;
  putErrorPasswordConfirm: (value: string | null) => void;
}

export const UseUiErrors = create<UiErrors>((set) => ({
  errorEmail: null,
  errorPassword: null,

  errorFullName: null,
  errorEmailRegister: null,
  errorPasswordRegister: null,
  errorPasswordConfirm: null,

  putErrorEmail: (value) => set({ errorEmail: value }),
  putErrorPassword: (value) => set({ errorPassword: value }),

  putErrorFullName: (value) => set({ errorFullName: value }),
  putErrorEmailRegister: (value) => set({ errorEmailRegister: value }),
  putErrorPasswordRegister: (value) => set({ errorPasswordRegister: value }),
  putErrorPasswordConfirm: (value) => set({ errorPasswordConfirm: value }),
}));
