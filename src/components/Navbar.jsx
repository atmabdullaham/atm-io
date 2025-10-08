import { FaGithub } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="bg-white shadow-sm">
      <div className="navbar  w-11/12  mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className="btn bg-transparent border-0 pl-0 hover:shadow-none text-base font-bold bg-gradient-to-r from-violet-700 to-purple-500 text-transparent bg-clip-text"
          >
            <img src={logo} className="w-8" alt="" /> ATM.IO
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="px-1 space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-gradient-to-r from-violet-700 to-purple-500 text-transparent bg-clip-text border-b-2 border-violet-700"
                  : ""
              }
            >
              <a className="text-base font-semibold">Home</a>
            </NavLink>
            <NavLink
              to="/all-apps"
              className={({ isActive }) =>
                isActive
                  ? "bg-gradient-to-r from-violet-700 to-purple-500 text-transparent bg-clip-text border-b-2 border-violet-700"
                  : ""
              }
            >
              <a className="text-base font-semibold">Apps</a>
            </NavLink>
            <NavLink
              to="/installation"
              className={({ isActive }) =>
                isActive
                  ? "bg-gradient-to-r from-violet-700 to-purple-500 text-transparent bg-clip-text border-b-2 border-violet-700"
                  : ""
              }
            >
              <a className="text-base font-semibold">Installation</a>
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-gradient-to-r from-violet-700 to-purple-500 text-white text-base font-semibold border-0">
            <FaGithub /> Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
