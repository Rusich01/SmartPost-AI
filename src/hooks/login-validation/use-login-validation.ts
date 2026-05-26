import { UseUiErrors } from "../../storage/store-ui/use-ui-errors";

export const useLoginValidation = () => {
  const { putErrorEmail, putErrorPassword } = UseUiErrors();

  const validateLogin = (email: string, password: string) => {
    let hasError = false;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      putErrorEmail("Enter email");

      hasError = true;
    } else if (!emailRegex.test(email)) {
      putErrorEmail("Invalid email");

      hasError = true;
    } else {
      putErrorEmail(null);
    }

    if (!password) {
      putErrorPassword("Enter password");

      hasError = true;
    } else if (password.length < 8) {
      putErrorPassword("Minimum 8 characters");

      hasError = true;
    } else {
      putErrorPassword(null);
    }

    return !hasError;
  };

  return {
    validateLogin,
  };
};
