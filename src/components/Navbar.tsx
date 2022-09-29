import navLogo from "../assets/images/burger-logo.png";
import Backdrop from "./ui/Backdrop";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [show, setShow] = useState<boolean>(false);

  const handleBackdrop = () => {
    setShow(false);
  };

  return (
    <>
      {/* Backdrop */}
      {show && <Backdrop toggle={handleBackdrop} />}
      <nav className="w-full h-14 p-4 flex items-center justify-between bg-[#703B09] relative">
        {/* Hamburger Icon */}
        <div
          onClick={() => setShow(true)}
          className="flex flex-col items-center justify-between w-max h-full cursor-pointer md:hidden"
        >
          <span className="bg-white w-8 h-[2px]"></span>
          <span className="bg-white w-8 h-[2px]"></span>
          <span className="bg-white w-8 h-[2px]"></span>
        </div>
        {/* Nav Logo */}
        <div className="w-12">
          <img
            className="w-full h-full object-cover"
            src={navLogo}
            alt="logo"
          />
        </div>
        {/* Nav Links */}
        <motion.ul
          animate={{
            left: show ? "0" : "-100%",
          }}
          className={`${
            show ? "left-0 z-10" : "-left-full z-0"
          } fixed top-0 h-screen bg-white w-64 py-8 px-4 md:static md:flex md:items-center md:bg-inherit md:py-0 md:w-max md:h-full`}
        >
          {/* Burger Img Again😪 */}
          <img
            className="w-14 object-cover my-5 md:hidden"
            src={navLogo}
            alt="logo"
          />
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "#e98a0dd3" : "black",
            })}
            className="md:mx-3"
          >
            <motion.li
              className="my-5 font-semibold md:m-0 md:text-white"
              whileHover={{
                scale: 1.15,
                originX: 0,
                color: "#e98a0dd3",
              }}
            >
              Build my burger
            </motion.li>
          </NavLink>
          <NavLink
            to="/orders"
            style={({ isActive }) => ({
              color: isActive ? "#e98a0dd3" : "black",
            })}
            className="md:mx-3"
          >
            <motion.li
              className="my-5 font-semibold md:m-0 md:text-white"
              whileHover={{
                scale: 1.15,
                originX: 0,
                color: "#e98a0dd3",
              }}
            >
              Orders
            </motion.li>
          </NavLink>
        </motion.ul>
      </nav>
    </>
  );
};

export default Navbar;
