import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "skills",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className="flex justify-between items-center text-white bg-black px-4 w-full h-20 fixed">
      <div>
        <h1 className="text-5xl font-signature ml-2">Omar</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => {
          return (
            <li
              key={id}
              className="capitalize px-4 cursor-pointer text-gray-500 hover:scale-105- hover:text-white font-medium duration-200 "
            >
              <Link to={link} smooth duration={500}> {link}</Link>
            </li>
          );
        })}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="text-gray-500 cursor-pointer pr-4 z-10 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col py-4 justify-center items-center absolute top-0 left-0 w-full h-screen text-gray-500 bg-gradient-to-b from-black to-gray-800   ">
          {links.map(({ id, link }) => {
            return (
              <li
                key={id}
                className="capitalize px-4 py-6 cursor-pointer text-4xl "
              >
                          <Link onClick={()=>setNav(!nav)} to={link} smooth duration={500}> {link}</Link>

              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
