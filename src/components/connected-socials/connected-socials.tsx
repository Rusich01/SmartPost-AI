import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import { useUiStore } from "../../storage/store-ui/use-ui-store";

const ConnectedSocials = () => {
  const store = useUiStore();

  return (
    <div className="bg-[#151515] rounded-3xl p-6 -fit">
      <h2 className="text-xl text-white font-bold mb-6">Connected Socials</h2>

      <div className="space-y-4">
        <button
          className="w-full p-4 rounded-2xl bg-[#222] text-white flex items-center gap-4 cursor-pointer hover:text-green-600 active:scale-95 duration-75"
          onClick={store.changeInstagram}
        >
          <FaInstagram
            size={24}
            className={`${store.instagram ? "text-green-700 drop-shadow-[0_0_10px_green]" : "text-white"}`}
          />
          <span>Instagram</span>
        </button>

        <button
          className="w-full p-4 rounded-2xl bg-[#222] text-white flex items-center gap-4 cursor-pointer hover:text-green-600 active:scale-95 duration-75"
          onClick={store.changeLinkedIn}
        >
          <FaLinkedin
            size={24}
            className={`${store.linkedIn ? "text-green-700 drop-shadow-[0_0_10px_green]" : "text-white"}`}
          />
          <span>LinkedIn</span>
        </button>

        <button
          className="w-full p-4 rounded-2xl bg-[#222] text-white flex items-center gap-4 cursor-pointer hover:text-green-600 active:scale-95 duration-75"
          onClick={store.changeTwitter}
        >
          <FaXTwitter
            size={24}
            className={`${store.twitter ? "text-green-700 drop-shadow-[0_0_10px_green]" : "text-white"}`}
          />
          <span>X / Twitter </span>
        </button>

        <button
          className="w-full  p-4 rounded-2xl bg-[#222] text-white flex items-center gap-4 cursor-pointer hover:text-green-600  active:scale-95 duration-75"
          onClick={store.changeFacebook}
        >
          <FaFacebook
            size={24}
            className={`${store.facebook ? "text-green-700 drop-shadow-[0_0_10px_green]" : "text-white"}`}
          />
          <span>Facebook</span>
        </button>
      </div>
    </div>
  );
};

export default ConnectedSocials;
