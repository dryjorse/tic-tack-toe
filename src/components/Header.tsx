import { FC } from "react";
import { Link, useLocation } from "react-router-dom";

const Header: FC = () => {
  const location = useLocation();

  const backgroundColor =
    location.pathname === "/profile"
      ? "#FFDCA3"
      : location.pathname === "/login"
      ? "linear-gradient(to right, #FFDCA3 50%, transparent 50%)"
      : location.pathname === "/register"
      ? "linear-gradient(to right, #FFDCA3 50%, transparent 50%)"
      : "#FFF3D9";

  return (
    <header style={{ background: backgroundColor }}>
      <div className="container flex justify-around sm:justify-between pt-3">
        <Link to="/">
          <img
            src="/logo.svg"
            alt="Logo"
            width={45}
            height={45}
            className="mt-3 mb-3"
          />
        </Link>
        <nav className="mt-5 mb-5">
          <ul className="flex gap-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/rules">Rules</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
