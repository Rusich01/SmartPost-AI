import { useUiStore } from "../../storage/store-ui/use-ui-store";

const Login = () => {
  const { switchRegister } = useUiStore();

  return (
    <div className="min-h-screen bg-[#0D0D0D] flex items-center justify-center p-6">
      <div className=" w-full max-w-md bg-[#151515] rounded-3xl p-8">
        <h1 className="text-3xl text-white font-bold mb-2">SocialCopilot</h1>

        <p className="text-zinc-400 mb-8">Login to continue</p>

        <div className="space-y-5">
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
        </div>

        <button className=" w-full mt-8 p-4 rounded-2xl bg-green-500 text-black font-semibold cursor-pointer active:scale-95 duration-75">
          Login
        </button>

        <p className="text-center text-zinc-400 mt-8">
          Don't have an account?
          <button
            onClick={() => switchRegister()}
            className="text-green-500 font-semibold hover:underline cursor-pointer"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
