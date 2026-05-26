import ListSocials from "../list-socials/list-socials";
import icon from "../../assets/icon/icon-AI.png";
import { motion } from "framer-motion";

const PostEditor = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-[#0D0D0D] p-8"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_320px] gap-8">
        <div className="bg-(--main-bg) rounded-3xl p-8">
          <h1 className="text-3xl text-(--white) font-bold">Create Post</h1>

          <p className="text-(--text-zinc) mt-2 mb-">
            Write your content and improve it with AI
          </p>

          <div className="relative">
            <textarea
              placeholder="
Write your post...

Example:
🚀 New feature released today...
            "
              className="w-full h-80 bg-(--btn-bg-black) rounded-3xl p-6 text-(--white) resize-none outline-none"
            />
            <img
              src={icon}
              alt=""
              className="w-24 h-24 absolute bottom-0 right-0"
            />
          </div>

          <div className="flex gap-4 mt-6">
            <button className="px-6 py-4 rounded-2xl bg-(--btn-bg-green) text-(--black) font-semibold cursor-pointer active:scale-95 duration-75">
              Improve with AI
            </button>

            <button className="px-6 py-4 rounded-2xl bg-(--white) text-(--black) font-semibold cursor-pointer active:scale-95 duration-75">
              Publish
            </button>
          </div>
        </div>

        {/* component */}
        <ListSocials />
        {/* component */}
      </div>
    </motion.div>
  );
};

export default PostEditor;
