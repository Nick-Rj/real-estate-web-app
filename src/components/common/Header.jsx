import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaXmark, FaBars } from "react-icons/fa6";
import logo from "../../assets/images/logo.png";
import { useDarkMode } from "./DarkModeContext";
import { FaPhoneAlt, FaUserCircle } from "react-icons/fa";

const Header = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      link: "Home",
      path: "home",
    },
    {
      link: "About",
      path: "about",
    },
    {
      link: "Properties",
      path: "properties",
    },
    {
      link: "Services",
      path: "services",
    },
    {
      link: "Testimonials",
      path: "testimonials",
    },
    {
      link: "Contact",
      path: "contact",
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`${
        darkMode ? "dark bg-slate-800" : "light bg-[#f3f3f3]"
      } flex justify-between items-center gap-4 lg:px-20 px-4 py-4 sticky top-0 z-30`}
    >
      <div id="logo">
        <img
          src={logo}
          alt="Tributary Real Estate"
          className="lg:w-[150px] w-[120px] dark:invert"
        />
      </div>
      <ul className="lg:flex justify-center items-center gap-8 hidden">
        {navItems?.map((item) => (
          <Link
            key={item?.link}
            className="text-black text-[15px] uppercase font-semibold cursor-pointer px-3 py-2 dark:text-white rounded-lg hover:bg-red-600 hover:text-white transition-colors duration-200"
            to={item?.path}
            smooth={true}
            offset={-100}
            spy={true}
          >
            {item?.link}
          </Link>
        ))}
      </ul>
      <div className="flex justify-between gap-6">
        {/* Contact number */}
        <div className="flex justify-center items-center lg:gap-8 gap-3">
          <div className="flex justify-center items-center lg:gap-3 gap-1">
            <FaPhoneAlt className="size-5 text-red-500 dark:text-red-700" />
            <h1 className="lg:text-xl text-sm text-red-500 dark:text-red-700 font-semibold">
              +216 2902 0296
            </h1>
          </div>
          <FaUserCircle className="size-6 text-red-500 dark:text-red-700" />
        </div>

        {/* mobile menu icon */}
        <div
          className="flex justify-center items-center lg:hidden"
          onClick={toggleMenu}
        >
          <div>
            {isMenuOpen ? (
              <FaXmark className="text-black dark:text-white text-2xl cursor-pointer" />
            ) : (
              <FaBars className="text-black dark:text-white text-2xl cursor-pointer" />
            )}
          </div>
        </div>

        {/* mobile navigation menu */}
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } w-full h-fit bg-slate-300 dark:bg-slate-800 p-4 absolute top-[80px] left-0`}
          onClick={closeMenu}
        >
          <ul className="flex flex-col justify-center items-center gap-2 w-full">
            {navItems?.map((item) => (
              <Link
                key={item?.path}
                className="text-black dark:text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-red-600 hover:text-black dark:hover:text-white w-full"
                to={item?.path}
                smooth={true}
                offset={-100}
                spy={true}
                onClick={closeMenu}
              >
                {item?.link}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
