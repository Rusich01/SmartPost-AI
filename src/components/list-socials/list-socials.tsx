import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import { useUiStore } from "../../storage/store-ui/use-ui-store";
import { motion } from "framer-motion";

const ListSocials = () => {
  const store = useUiStore();

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col bg-(--main-bg) rounded-3xl p-6 h-full"
    >
      <div>
        <h2 className="text-xl text-(--white) font-bold mb-6">
          Connected Socials
        </h2>
        <div className="space-y-4">
          <button
            className="w-full p-4 rounded-2xl bg-(--btn-bg-black) text-(--white) flex items-center gap-4 cursor-pointer hover:text-(greenIconHover) active:scale-95 duration-75"
            onClick={store.changeInstagram}
          >
            <FaInstagram
              size={24}
              className={`${store.instagram ? "text-(--greenIcon) drop-shadow-[0_0_10px_green]" : "text-(--white)"}`}
            />
            <span>Instagram</span>
          </button>

          <button
            className="w-full p-4 rounded-2xl bg-(--btn-bg-black) text-(--white) flex items-center gap-4 cursor-pointer hover:text-(greenIconHover) active:scale-95 duration-75"
            onClick={store.changeLinkedIn}
          >
            <FaLinkedin
              size={24}
              className={`${store.linkedIn ? "text-(--greenIcon) drop-shadow-[0_0_10px_green]" : "text-(--white)"}`}
            />
            <span>LinkedIn</span>
          </button>

          <button
            className="w-full p-4 rounded-2xl bg-(--btn-bg-black) text-(--white) flex items-center gap-4 cursor-pointer hover:text-(greenIconHover) active:scale-95 duration-75"
            onClick={store.changeTwitter}
          >
            <FaXTwitter
              size={24}
              className={`${store.twitter ? "text-(--greenIcon) drop-shadow-[0_0_10px_green]" : "text-(--white)"}`}
            />
            <span>X / Twitter </span>
          </button>

          <button
            className="w-full  p-4 rounded-2xl bg-(--btn-bg-black) text-(--white) flex items-center gap-4 cursor-pointer hover:text-(greenIconHover)  active:scale-95 duration-75"
            onClick={store.changeFacebook}
          >
            <FaFacebook
              size={24}
              className={`${store.facebook ? "text-(--greenIcon) drop-shadow-[0_0_10px_green]" : "text-(--white)"}`}
            />
            <span>Facebook</span>
          </button>
        </div>
      </div>

      <button
        className="mt-auto px-6 py-4 rounded-2xl bg-(--btn-bg-green) text-(--black) font-semibold cursor-pointer active:scale-95 duration-75"
        onClick={store.closeEditor}
      >
        Log out
      </button>
    </motion.div>
  );
};

export default ListSocials;
