import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { HiMenuAlt2 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleMenu = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  useEffect(() => {
    toggleMenu();
  }, []);

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="" />
            <span className="text-xl tracking-tight">VirtualR</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex space-x-12 justify-center items-center">
            <button className="border rounded-md px-3 py-2 bg-transparent">
              Sign in
            </button>
            <button className="border rounded-md px-6 py-2 bg-gradient-to-r from-orange-600 to-orange-900">
              Create your account
            </button>
          </div>

          {/* toggle menu button logic for medium devices */}

          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleMenu}>
              {mobileDrawerOpen ? <AiOutlineClose /> : <HiMenuAlt2 />}
            </button>
          </div>
        </div>

        {/* Logic to dislay the navitems in medium devices] */}

        {mobileDrawerOpen && (
          <div className="lg:hidden z-20 flex flex-col items-center bg-neutral-900 justify-center w-full fixed right-0 p-12 ">
            <ul className="space-y-4">
              {navItems.map((item, index) => (
                <li key={index} className="py-4  ">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6 mt-4">
              <button className="border rounded-md px-3 py-2 bg-transparent">
                Sign in
              </button>
              <button className="border rounded-md px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-800">
                Create an account
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
