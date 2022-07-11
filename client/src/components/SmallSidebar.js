import { FaTimes } from "react-icons/fa";
import Logo from "./Logo";
import logo from "../assets/images/logo.png";
import { useAppContext } from "../context/AppContext";
import { NavLink } from "react-router-dom";
import links from "../utils/links";

const SmallSidebar = () => {
  const { toggleSidebar, showSidebar } = useAppContext();

  let className =
    "flex items-center text-gray-700 font-light px-4 py-3 rounded-lg capitalize hover:text-blue-500";
  let activeClassName = `${className} bg-gradient-to-tr from-blue-500 to-blue-700 text-gray-50 shadow-md
`;
  return (
    <aside
      className={`fixed flex lg:hidden inset-0 bg-black bg-opacity-70 opacity-0 justify-center items-center -z-10 transition-all duration-300 ease-in-out ${
        showSidebar && "opacity-100 z-50"
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
        <div className="mt-8 space-y-4">
          {links.map((link) => {
            const { text, id, path, icon } = link;
            return (
              <NavLink
                onClick={toggleSidebar}
                key={id}
                to={path}
                className={({ isActive }) =>
                  isActive ? activeClassName : className
                }
              >
                <span className="grid place-items-center text-xl mr-4">
                  {icon}
                </span>
                {text}
              </NavLink>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
export default SmallSidebar;
