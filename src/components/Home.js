import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import HeroImage from "../assets/heroImage.jpg";
import {Link} from 'react-scroll'
const Home = () => {
  return (
    <div name='home' className="h-screen w-full bg-gradient-to-b  from-black via-black to-gray-500 "> 
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white ">I am a Front End Developer</h2>
          <p className="text-gray-500 py-4 max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            animi eligendi veniam possimus adipisci eum illum hic aliquam!
            Reprehenderit consequatur minus ex quaerat, maxime eligendi fuga
            error perspiciatis sint sapiente. Ipsam, odit ad magni nobis sit

          </p>
          <div>
            <Link to="portfolio" smooth duration={500}>
            <button className=" capitalize group text-white font-bold py-3 px-6 w-fit flex items-center rounded-md bg-gradient-to-r from-amber-200 to-teal-700  ">
              portfolio
              <span className="group-hover:rotate-90 duration-200">
              <MdOutlineKeyboardArrowRight size={25} className="ml-5 " />
              </span>
            </button>
            </Link>
          </div>
        </div>
        <div>
        <img src={HeroImage} style={{width:250, height:300}}  alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-full" />

        </div>
      </div>
    </div>
  );
};

export default Home;
