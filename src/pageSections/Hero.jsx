import React, { useEffect } from "react";
import { useDarkMode } from "../components/common/DarkModeContext";
import heroImg from "../assets/images/hero1.webp";
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-out-back",
      delay: 50,
    });
  }, []);

  return (
    <>
      {/* Conditional based theme rendering */}
      <div className={`${darkMode ? "dark bg-gray-800" : " light bg-transparent"}`}>
        {/* Using tailwind css classes with dynamic values */}
        {/* Media Breakpoints=> lg: means min-width: 1024px */}
        <section
          id="hero"
          className="w-[95%] h-[600px] m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-start lg:px-28 px-10 gap-7 z-20"
          style={{ backgroundImage: `url(${heroImg})` }}
        >
          {/* leading: line-height */}
          <h1
            data-aos="fade-down-right"
            className="text-6xl text-white font-semibold lg:pr-[500px] pr-0 lg:leading-[70px] leading-[60px]"
          >
            Find your next Home in Las Vegas
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-white text-xl lg:pr-[500px] pr-0"
          >
            Through our proprietary platform, WpResidence is changing how agents
            and clients navigate the process of finding or selling a home
          </p>
        </section>
      </div>

      {/* Form starts here */}
      {/* Note: the dark and light classes added will be used as params for setting dark/light styles for each child elements */}
      <div
        className={`${darkMode ? "dark bg-gray-900" : " light bg-transparent"} z-10`}
      >
        {/* For adding classes with negative values: margin-top with negative values=> -mt-14 */}
        <div
          data-aos="fade-up"
          id="form"
          className={`${
            darkMode ? "dark bg-gray-700" : " light bg-white"
          } lg:w-[70%] w-full m-auto grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-6 p-8 rounded-xl -mt-14`}
        >
          {/* Adding styles in h1 element with respect to dark class */}
          <div className="w-full">
            <h1 className="text-black font-semibold dark:text-white">
              LOCATION
            </h1>
            <input
              type="text"
              placeholder="Enter an address, state, city or pincode"
              className="bg-white p-2 w-full mt-2 border-b-[1px] border-[#c9c7c1]"
            />
          </div>
          <div className="w-full">
            <h1 className="text-black font-semibold dark:text-white">TYPE</h1>
            <select
              name="type"
              id="type"
              className="bg-white p-2 border-b-[1px] w-full mt-2 border-[#c9c7c1] text-gray-500 text-md"
            >
              <option value={""} disabled selected>
                {" "}
                Select Property
              </option>
              <option value={"rentals"}>Rentals</option>
              <option value={"sales"}>Sales</option>
              <option value={"commercial"}>Commercial</option>
            </select>
          </div>
          <div className="w-full">
            <h1 className="text-black font-semibold dark:text-white">TYPE</h1>
            <select
              name="type"
              id="type"
              className="bg-white p-2 border-b-[1px] w-full mt-2 border-[#c9c7c1] text-gray-500 text-md"
            >
              <option value={""} disabled selected>
                {" "}
                Select Property Category
              </option>
              <option value={"rentals"}>Apartments</option>
              <option value={"sales"}>Duplex</option>
              <option value={"commercial"}>Condos</option>
              <option value={"commercial"}>Penthouse</option>
              <option value={"commercial"}>Suite</option>
            </select>
          </div>
          <div className="w-full flex justify-center">
            {/* Note: use hover: for adding hovering styles */}
            {/* Note: for adding transforming styles on hover use transform hover:<transform value> */}
            {/* Note: we can also add transition to different style properties available, example: transition-transform, transition-all, transition-opacity, etc */}
            <button className="bg-red-500 dark:bg-red-700 hover:bg-black dark:hover:bg-white dark:hover:text-gray-900 text-lg p-4 lg:w-full w-[80%] text-white font-semibold rounded-xl cursor-pointer transform hover:scale-110 transition-transform duration-200">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
