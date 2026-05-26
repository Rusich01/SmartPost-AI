import { FaEye } from "react-icons/fa6";
import { useUiStore } from "../../storage/store-ui/use-ui-store";
import { motion } from "framer-motion";
import { UseUiErrors } from "../../storage/store-ui/use-ui-errors";
import { useRegisterValidation } from "../../hooks/register-validation/use-register-validation";

const Register = () => {
  const {
    switchSignIn,
    isShowPasswordConfirm,
    isShowRegisterPassword,
    changeRegisterPassword,
    changePasswordConfirm,
  } = useUiStore();

  const {
    errorFullName,
    errorEmailRegister,
    errorPasswordRegister,
    errorPasswordConfirm,
  } = UseUiErrors();

  const { validateRegister } = useRegisterValidation();

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = {
      fullName: String(formData.get("fullName")),
      email: String(formData.get("email")),
      password: String(formData.get("password")),
      confirmPassword: String(formData.get("confirmPassword")),
    };

    const isValid = validateRegister(
      data.fullName,
      data.email,
      data.password,
      data.confirmPassword,
    );

    if (!isValid) return;

    console.log(data);

    e.currentTarget.reset();
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-(--bg-wrap) flex items-center justify-center p-6"
    >
      <div className="w-full max-w-md bg-(--main-bg) rounded-3xl p-8">
        <h1 className="text-3xl text-(--white) font-bold mb-2">
          SocialCopilot
        </h1>

        <p className="text-(--text-zinc) mb-8">Create your account</p>

        <form onSubmit={handleForm} className="space-y-5">
          <div>
            <label className="text-(--text-zinc)">
              <span>Full name</span>
              <input
                type="text"
                name="fullName"
                placeholder="John Doe"
                className={`${errorFullName ? "border-(--text-error)" : "border-transparent"} border w-full mt-2 p-4 rounded-2xl bg-(--btn-bg-black) text-(--white) outline-none`}
              />
            </label>
            <span className="text-(--text-error) animate-pulse pl-2">
              {errorFullName}
            </span>
          </div>

          <div>
            <label className="text-(--text-zinc)">
              <span>Email</span>
              <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                className={`${errorEmailRegister ? "border-(--text-error)" : "border-transparent"} border w-full mt-2 p-4 rounded-2xl bg-(--btn-bg-black) text-(--white) outline-none`}
              />
            </label>
            <span className="text-(--text-error) animate-pulse pl-2">
              {errorEmailRegister}
            </span>
          </div>

          <div>
            <label className="text-(--text-zinc)">
              <span>Password</span>
              <div className="relative">
                <input
                  name="password"
                  type={isShowRegisterPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className={`${errorPasswordRegister ? "border-(--text-error)" : "border-transparent"} border w-full mt-2 p-4 rounded-2xl bg-(--btn-bg-black) text-(--white) outline-none`}
                />
                <FaEye
                  onClick={changeRegisterPassword}
                  className="text-(--text-zinc) absolute top-7 right-4 cursor-pointer hover:text-(--greenIconHover) active:scale-95 duration-75 transition"
                />
              </div>
            </label>
            <span className="text-(--text-error) animate-pulse pl-2">
              {errorPasswordRegister}
            </span>
          </div>

          <div>
            <label className="text-(--text-zinc)">
              <span>Confirm password</span>
              <div className="relative">
                <input
                  name="confirmPassword"
                  type={isShowPasswordConfirm ? "text" : "password"}
                  placeholder="••••••••"
                  className={`${errorPasswordConfirm ? "border-(--text-error)" : "border-transparent"} border w-full mt-2 p-4 rounded-2xl bg-(--btn-bg-black) text-(--white) outline-none`}
                />
                <FaEye
                  onClick={changePasswordConfirm}
                  className="text-(--text-zinc) absolute top-7 right-4 cursor-pointer hover:text-(--greenIconHover) active:scale-95 duration-75 transition"
                />
              </div>
            </label>
            <span className="text-(--text-error) animate-pulse pl-2">
              {errorPasswordConfirm}
            </span>
          </div>
          <button
            type="submit"
            className="w-full mt-8 p-4 rounded-2xl bg-(--btn-bg-green) text-(--black) font-semibold cursor-pointer active:scale-95 duration-75"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-(--text-zinc) mt-8">
          Already have an account?
          <button
            onClick={() => switchSignIn()}
            className="text-(--btn-bg-green) font-semibold hover:underline cursor-pointer"
          >
            Login
          </button>
        </p>
      </div>
    </motion.div>
  );
};

export default Register;
