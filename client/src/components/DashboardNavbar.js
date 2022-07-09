import { useState } from "react";
import { FaUserCircle, FaCaretDown, FaAlignLeft } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import { useAppContext } from "../context/AppContext";
import Logo from "./Logo";

const DashboardNavbar = () => {
  const [showLogOut, setShowLogOut] = useState(false);
  const { user, logoutUser, toggleSidebar } = useAppContext();

  return (
    <nav className="w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
      <div className=" absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap justify-between flex items-center p-4">
        <button
          className="text-2xl text-blue-700"
          type="button"
          onClick={toggleSidebar}
        >
          <FaAlignLeft />
        </button>
        <div className="text-3xl font-bold text-blue-700">
          {/* <Logo imgSrc={logo} /> */}
          <h3>Dashboard</h3>
        </div>
        <div className="relative">
          <button
            className="flex items-center gap-2 p-2 rounded bg-blue-600 hover:bg-blue-800 text-white text-sm"
            type="button"
            onClick={() => setShowLogOut(!showLogOut)}
          >
            <FaUserCircle /> {user?.name} <FaCaretDown />
          </button>
          <div
            className={`absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-full flex items-center justify-center h-[40px] rounded bg-blue-200 text-blue-700 text-sm ${
              showLogOut ? "flex" : "hidden"
            }`}
          >
            <button type="button" onClick={logoutUser}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default DashboardNavbar;
