import { Outlet } from "react-router-dom";
import {
  BigSidebar,
  DashboardNavbar,
  SmallSidebar,
} from "../../components/index";
import { useAppContext } from "../../context/AppContext";
const SharedLayout = () => {
  const { showSidebar } = useAppContext();
  return (
    <>
      <main>
        <div>
          <SmallSidebar />
          <BigSidebar />
        </div>
        <div
          className={`relative ${showSidebar && "md:ml-60"} bg-blueGray-100`}
        >
          <DashboardNavbar />
          <div className="px-4 md:px-10 mx-auto w-full mt-[4.25rem] bg-green-400">
            <Outlet />
          </div>
        </div>
      </main>
    </>
  );
};
export default SharedLayout;
