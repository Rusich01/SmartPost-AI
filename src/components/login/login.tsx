import { FaEye } from "react-icons/fa6";
import { useUiStore } from "../../storage/store-ui/use-ui-store";
import { motion } from "framer-motion";
import { UseUiErrors } from "../../storage/store-ui/use-ui-errors";
import { useLoginValidation } from "../../hooks/login-validation/use-login-validation";

const Login = () => {
  const { switchRegister, openEditor, isShowPassword, changeLoginPassword } =
    useUiStore();

  const { errorEmail, errorPassword } = UseUiErrors();
  const { validateLogin } = useLoginValidation();

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = String(formData.get("email")).trim();
    const password = String(formData.get("password")).trim();
    const isValid = validateLogin(email, password);

    if (!isValid) return;
    openEditor();
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
      <div className=" w-full max-w-md bg-(--main-bg) rounded-3xl p-8">
        <h1 className="text-3xl text-(--white) font-bold mb-2">
          SocialCopilot
        </h1>

        <p className="text-(--text-zinc) mb-8">Login to continue</p>

        <form onSubmit={handleForm} className="space-y-5">
          <div>
            <label className="text-(--text-zinc)">
              <span> Email</span>
              <input
                name="email"
                type="email"
                placeholder="example@gmail.com"
                className="w-full mt-2 p-4 rounded-2xl bg-(--btn-bg-black) text-(--white) outline-none"
              />
            </label>
            <span className="text-(--text-error) animate-pulse pl-2">
              {errorEmail}
            </span>
          </div>

          <div>
            <label className="text-(--text-zinc)">
              <span>Password</span>
              <div className="relative">
                <input
                  name="password"
                  type={isShowPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full mt-2 p-4 rounded-2xl bg-(--btn-bg-black) text-(--white) outline-none"
                />
                <FaEye
                  onClick={changeLoginPassword}
                  className="text-(--text-zinc) absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer hover:text-(--greenIconHover) active:scale-95 duration-75 transition"
                />
              </div>
            </label>
            <span className="text-(--text-error) animate-pulse pl-2">
              {errorPassword}
            </span>
          </div>

          <button
            type="submit"
            className=" w-full mt-8 p-4 rounded-2xl bg-(--btn-bg-green) text-black font-semibold cursor-pointer active:scale-95 duration-75"
          >
            Login
          </button>
        </form>

        <p className="text-center text-(--text-zinc) mt-8">
          Don't have an account?
          <button
            onClick={() => switchRegister()}
            className="text-(--btn-bg-green) font-semibold hover:underline cursor-pointer"
          >
            Sign up
          </button>
        </p>
      </div>
    </motion.div>
  );
};

export default Login;
