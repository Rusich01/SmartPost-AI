import { useUiStore } from "../../storage/store-ui/use-ui-store";
import { motion } from "framer-motion";

const Register = () => {
  const { switchSignIn } = useUiStore();

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

        <div className="space-y-5">
          <div>
            <label className="text-(--text-zinc)">Full name</label>

            <input
              type="text"
              placeholder="John Doe"
              className="w-full mt-2 p-4 rounded-2xl bg-(--btn-bg-black) text-(--white) outline-none"
            />
          </div>

          <div>
            <label className="text-(--text-zinc)">Email</label>

            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full mt-2 p-4 rounded-2xl bg-(--btn-bg-black) text-(--white) outline-none"
            />
          </div>

          <div>
            <label className="text-(--text-zinc)">Password</label>

            <input
              type="password"
              placeholder="••••••••"
              className="w-full mt-2 p-4 rounded-2xl bg-(--btn-bg-black) text-(--white) outline-none"
            />
          </div>

          <div>
            <label className="text-(--text-zinc)">Confirm password</label>

            <input
              type="password"
              placeholder="••••••••"
              className="w-full mt-2 p-4 rounded-2xl bg-(--btn-bg-black) text-(--white) outline-none"
            />
          </div>
        </div>

        <button className="w-full mt-8 p-4 rounded-2xl bg-(--btn-bg-green) text-(--black) font-semibold cursor-pointer active:scale-95 duration-75">
          Create Account
        </button>

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
