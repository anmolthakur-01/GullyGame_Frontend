import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleLogout = () => {
    alert("Logout hoo gya 🙋‍♂️");
  };
  return (
    <nav className="bg-gray-900 text-white ">
      <div className="container mx-auto flex justify-between items-ce20nter p-4">
        <div className="logo flex items-center pl-30">
          <Link to="/" className="text-xl font-bold">
            Gully Game
          </Link>
        </div>
        <div className="space-x-20 hidden md:flex ">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/match-result" className="hover:text-gray-300">
            Match Results
          </Link>
          <Link to="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </div>

        {!showProfile ? (
          <div className="space-x-4 pr-20">
            <button className="inline-block px-4 py-2 bg-red-700 text-white rounded hover:bg-red-800 ">
              <Link to="/login" className="hover:text-gray-300">
                Login
              </Link>
            </button>
            <button className="inline-block px-4 py-2 bg-red-700 text-white rounded hover:bg-red-800">
              <Link to="/signup" className="hover:text-gray-300">
                Sign Up
              </Link>
            </button>
          </div>
        ) : (
          <div className="pr-20 relative inline-block">
            <img
              id="avatarButton"
              type="button"
              data-dropdown-toggle="userDropdown"
              data-dropdown-placement="bottom-start"
              className="w-10 h-10 rounded-full cursor-pointer focus:outline-none"
              src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              alt="User dropdown"
              onClick={toggleDropdown}
            />

            {showDropdown && (
              <div
                id="userDropdown"
                className="absolute bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600 mt-2 p-2  left-1/2 -translate-x-32"
              >
                <div className="px-2 py-1 text-sm text-gray-900 dark:text-white">
                  <div>Bonnie Green</div>
                  <div className="font-medium truncate">name@flowbite.com</div>
                </div>
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    onClick={handleLogout}
                  >
                    Sign out
                  </a>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
