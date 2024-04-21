import React, { useEffect } from "react";
import aboutImg from "../assets/images/about.jpg";
import { useDarkMode } from "../components/common/DarkModeContext";
import Aos from "aos";
import "aos/dist/aos.css";

export const About = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-out-back",
      delay: 100,
    });
  }, []);

  return (
    <section
      id="about"
      className={`${
        darkMode ? "dark bg-gray-800" : "light bg-transparent"
      } w-full m-auto lg:px-40 px-10 lg:py-6 py-10  grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10`}
    >
      <div>
        <img
          data-aos="fade-up"
          src={aboutImg}
          alt="About Image"
          className="rounded-2xl lg:w-[500px] lg:h-[600px]"
        />
      </div>
      <div className="flex flex-col justify-center items-start gap-8">
        <h1 data-aos="fade-down-right" className="text-red-500 dark:text-white">
          WHO WE ARE
        </h1>
        <h1
          data-aos="fade-down-right"
          data-aos-delay="200"
          className="text-black text-[40px] font-semibold leading-10 dark:text-white"
        >
          We help clients buy and sell houses since 1989
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-xl text-gray-600 dark:text-white text-justify"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores quis
          laudantium dolor aperiam consequuntur. Adipisci amet animi in maxime
          deserunt?
        </p>
        <div data-aos="fade-up" data-aos-delay="300">
          <button className="bg-red-500 dark:bg-red-700 hover:bg-black dark:hover:bg-white dark:hover:text-gray-900 text-lg p-4 text-white font-semibold rounded-xl cursor-pointer transform hover:scale-110 transition-transform duration-200">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
