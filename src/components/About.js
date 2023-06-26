import React from "react";
import PortfolioCard from "./card/PortfolioCard";

const About = () => {
  return (
    <div name='about' className=" h-screen w-full bg-gradient-to-b from-gray-500 to-black text-white">
      <div className="max-w-screen-lg p-4 m-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
          </div>
          <div>
          <p className="text-xl mt-20">
            I am a highly motivated individual with strong analytical and
            critical thinking skills developed through my degree in History and
            current pursuit of a Master's in Archaeology. As an experienced
            front-end developer with expertise in HTML, CSS, JavaScript, and
            React JS, I have a keen eye for detail and a creative
            problem-solving approach to building visually appealing and
            functional websites. 
          </p>
          <br />
          <p className="text-xl">
          I am passionate about front-end development and
            continuously seek opportunities to expand my skills. I thrive in
            collaborative environments and enjoy working with others to bring
            ideas to life. With my diverse background and experience, I bring a
            unique perspective and skill set to any team or project.
          </p>
        </div>
     
      </div>
    </div>

  );
};

export default About;
