import { useAppContext } from "../context/AppContext";
import Logo from "./Logo";
import logo from "../assets/images/logo.png";
import NavLinks from "./NavLinks";

const BigSidebar = () => {
  const { showSidebar } = useAppContext();
  return (
    <nav
      className={`md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-lg hidden lg:flex flex-wrap items-center justify-between relative md:w-60 z-10 py-4 px-6 transform -translate-x-full transition-all duration-300 ease-linear mt-5 ${
        showSidebar && "translate-x-0"
      }`}
    >
      <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center w-full mx-auto">
        <header>
          <Logo imgSrc={logo} text="/JobHuntly" />
        </header>
        <NavLinks />
      </div>
    </nav>
  );
};
export default BigSidebar;
