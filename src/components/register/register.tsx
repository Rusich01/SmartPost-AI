import { useUiStore } from "../../storage/store-ui/use-ui-store";

const Register = () => {
  const { switchSignIn } = useUiStore();

  return (
    <div className="min-h-screen bg-[#0D0D0D] flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-[#151515] rounded-3xl p-8">
        <h1 className="text-3xl text-white font-bold mb-2">SocialCopilot</h1>

        <p className="text-zinc-400 mb-8">Create your account</p>

        <div className="space-y-5">
          <div>
            <label className="text-zinc-300">Full name</label>

            <input
              type="text"
              placeholder="John Doe"
              className="w-full mt-2 p-4 rounded-2xl bg-[#222] text-white outline-none"
            />
          </div>

          <div>
            <label className="text-zinc-300">Email</label>

            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full mt-2 p-4 rounded-2xl bg-[#222] text-white outline-none"
            />
          </div>

          <div>
            <label className="text-zinc-300">Password</label>

            <input
              type="password"
              placeholder="••••••••"
              className="w-full mt-2 p-4 rounded-2xl bg-[#222] text-white outline-none"
            />
          </div>

          <div>
            <label className="text-zinc-300">Confirm password</label>

            <input
              type="password"
              placeholder="••••••••"
              className="w-full mt-2 p-4 rounded-2xl bg-[#222] text-white outline-none"
            />
          </div>
        </div>

        <button className="w-full mt-8 p-4 rounded-2xl bg-green-500 text-black font-semibold cursor-pointer active:scale-95 duration-75">
          Create Account
        </button>

        <p className="text-center text-zinc-400 mt-8">
          Already have an account?
          <button
            onClick={() => switchSignIn()}
            className="text-green-500 font-semibold hover:underline cursor-pointer"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;
