import { FaTimes } from "react-icons/fa";
import Logo from "./Logo";
import logo from "../assets/images/logo.png";
import { useAppContext } from "../context/AppContext";
import NavLinks from "./NavLinks";

const SmallSidebar = () => {
  const { toggleSidebar, showSidebar } = useAppContext();

  return (
    <aside
      className={`fixed flex md:hidden lg:hidden inset-0 bg-black bg-opacity-70 opacity-0 justify-center items-center -z-10 transition-all duration-300 ease-in-out ${
        !showSidebar && "opacity-100 z-50"
      }`}
    >
      <div className="bg-white h-[95vh] w-[90vw] relative flex items-center flex-col pt-4 px-2 rounded-lg">
        <button
          type="button"
          onClick={toggleSidebar}
          className="absolute top-3 left-3 text-2xl text-blue-700"
        >
          <FaTimes />
        </button>
        <header>
          <Logo imgSrc={logo} text="/JobHuntly" />
        </header>
        <NavLinks toggleSidebar={toggleSidebar} showBigSidebar={true} />
      </div>
    </aside>
  );
};
export default SmallSidebar;
