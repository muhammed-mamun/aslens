import { Link } from "react-router-dom";

const Header = () => {
  const links = (
    <>
      <li><a href="#home">Home</a></li>
      <li><a href="#products">Products</a></li>
      <li><a href="#team">About</a></li>
    </>
  );

  return (
    <div className="navbar px-3 mt-2 backdrop-brightness-125 border-1 rounded-2xl">
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <Link to={"/"} className="text-2xl font-bold text-blue-700">
          ASLens
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-4">
        <Link to={'/try-now'} className="btn btn-sm text-white border-0 rounded-lg bg-[#1d68ff] hover:bg-[#172b7a]">
          Try
        </Link>
      </div>
    </div>
  );
};

export default Header;
