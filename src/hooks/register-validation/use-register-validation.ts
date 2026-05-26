import { UseUiErrors } from "../../storage/store-ui/use-ui-errors";

export const useRegisterValidation = () => {
  const {
    putErrorFullName,
    putErrorEmailRegister,
    putErrorPasswordRegister,
    putErrorPasswordConfirm,
  } = UseUiErrors();

  const validateRegister = (
    fullName: string,
    email: string,
    password: string,
    confirmPassword: string,
  ) => {
    let hasError = false;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (fullName.trim().length < 3) {
      putErrorFullName("Minimum 3 characters");

      hasError = true;
    } else {
      putErrorFullName(null);
    }

    if (!emailRegex.test(email.trim())) {
      putErrorEmailRegister("Invalid email");

      hasError = true;
    } else {
      putErrorEmailRegister(null);
    }

    if (password.trim().length < 8) {
      putErrorPasswordRegister("Minimum 8 characters");

      hasError = true;
    } else {
      putErrorPasswordRegister(null);
    }

    if (password.trim() !== confirmPassword.trim()) {
      putErrorPasswordConfirm("Passwords do not match");

      hasError = true;
    } else {
      putErrorPasswordConfirm(null);
    }

    return !hasError;
  };

  return {
    validateRegister,
  };
};
