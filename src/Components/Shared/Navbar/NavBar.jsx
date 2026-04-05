import { NavLink } from "react-router";

const NavBar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `font-semibold text-lg mr-1 ${isActive ? "text-[#23BE0A] border border-[#23BE0A] rounded-lg" : ""}`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `font-semibold text-lg mr-1 ${isActive ? "text-[#23BE0A] border border-[#23BE0A] rounded-lg" : ""}`
          }
          to={"/books"}
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `font-semibold text-lg mr-1 ${isActive ? "text-[#23BE0A] border border-[#23BE0A] rounded-lg" : ""}`
          }
          to={"/page-to-read"}
        >
          Page to Read
        </NavLink>
      </li>
    </>
  );
  return (
    <nav className="bg-base-100 shadow-sm">
      <div className="navbar container mx-auto">
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
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <h2 className="font-bold text-[28px]">Book Vibe</h2>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-4 ">
          <button className="btn bg-[#23BE0A] text-white">Sign In</button>
          <button className="btn bg-[#59C6D2] text-white">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
