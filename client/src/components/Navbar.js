import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import Button from "./Button";
import Logo from "./Logo";

export default function Navbar({ showLoginBtn }) {
  return (
    <header className="max-w-[1200px] mx-auto px-6 lg:px-0 my-8">
      <div className="flex items-center justify-between">
        <Link to="/landing">
          <Logo imgSrc={logo} text="/JobHuntly" />
        </Link>
        {showLoginBtn && (
          <div>
            <Button variant="login" title="Login" url="/register" />
          </div>
        )}
      </div>
    </header>
  );
}
