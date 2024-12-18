import React, { useState } from "react";
import Logo from "../Components/Logo";
import NavLink from "../Components/NavLink";
import SocualMediaLinks from "../Components/SocialmediaLinks";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed z-50 shadow-md shadow-gray-950 bg-[rgba(0,0,0,0.64)] backdrop-blur-lg rounded-b-xl border-slate-800 border px-10 py-6 w-full">
      <div className="relative flex">
        {/* <div className="relative grid items-center grid-cols-2 lg:grid-cols-3"> */}
        <ul className="items-center hidden space-x-8 lg:flex">
          <li>
            <NavLink to="about">About Me</NavLink>
          </li>
          <li>
            <NavLink to="project">Projects</NavLink>
          </li>
          <li>
            <NavLink to="ContenCreationService">Stand-Up Shows</NavLink>
          </li>
          <li>
            <NavLink to="contact">Contact Me</NavLink>
          </li>
        </ul>
        <Logo />
        <div className="ml-auto lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-50" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 shadow-md bg-[rgba(0,0,0,0.9)] backdrop-blur-lg rounded-md">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Logo />
                  </div>
                  <div className="justify-end">
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-500 focus:bg-gray-900 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-50" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4 pb-4 ">
                    <li>
                      <NavLink to="about">About Me</NavLink>
                    </li>
                    <li>
                      <NavLink to="project">Projects</NavLink>
                    </li>
                    <li>
                      <NavLink to="ContenCreationService">Photography</NavLink>
                    </li>
                    <li>
                      <NavLink to="contact">Contact Me</NavLink>
                    </li>
                  </ul>
                  <SocualMediaLinks />
                </nav>
              </div>
            </div>
          )}
        </div>
        <div className="ml-auto hidden lg:flex">
          <SocualMediaLinks />
        </div>
      </div>
    </div>
  );
}
