import { NavLink } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/donations">Donations</NavLink>
      </li>
      <li>
        <NavLink to="/statistics">Statistics</NavLink>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar bg-transparent px-5 md:px-[100px] lg:px-[150px] md:container mx-auto py-14">
        <div className="navbar-start">
          <img src="/src/assets/logo/Logo.png" className="w-[200px]" />
        </div>

        <div className="navbar-end">
          <ul className="hidden md:flex gap-12 text-lg">{links}</ul>
          <div className="dropdown dropdown-bottom dropdown-end">
            <label tabIndex={0} className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                transform="scale(-1,1)"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="text-lg space-y-4 dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
