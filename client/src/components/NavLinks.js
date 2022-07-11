import { NavLink } from "react-router-dom";
import links from "../utils/links";

const NavLinks = ({ toggleSidebar }) => {
  let className =
    "flex items-center text-gray-700 font-light px-4 py-3 rounded-md w-full capitalize hover:bg-gray-200 transition-all duration-200 ease-linear hover:pl-8";
  let activeClassName = `${className} bg-gradient-to-tr from-blue-500 to-blue-700 text-gray-50 shadow-md
`;
  return (
    <div className="mt-8 space-y-4 w-full">
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
            <span className="grid place-items-center text-xl mr-4 hover:text-blue-500">
              {icon}
            </span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};
export default NavLinks;
