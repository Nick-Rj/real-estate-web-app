import React, { useEffect } from "react";
import { useDarkMode } from "../components/common/DarkModeContext";
import area1 from "../assets/images/area1.jpg";
import area2 from "../assets/images/area2.jpg";
import area3 from "../assets/images/area3.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const PopularAreas = () => {
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
    <div
      className={`${darkMode ? "dark bg-gray-900" : "light bg-transparent"}`}
    >
      <section
        className={`${
          darkMode ? "dark bg-gray-700" : "light bg-red-200"
        } lg:w-[90%] w-full h-fit m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-center lg:px-20 px-6 py-20 gap-20`}
      >
        <div
          id="top"
          className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8"
        >
          <div>
            <h1
              data-aos="fade-down-right"
              className="text-red-500 dark:text-white"
            >
              POPULAR AREAS
            </h1>
            <h1
              data-aos="fade-down-right"
              data-aos-delay="150"
              className="text-black text-[40px] font-semibold leading-10 mt-4 dark:text-white"
            >
              Explore most <br /> popular areas
            </h1>
          </div>
          <div className="grid lg:grid-cols-3 col-span-2 grid-cols-1 justify-center items-center gap-6">
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="h-[400px] bg-cover bg-center rounded-xl"
              style={{ backgroundImage: `url(${area1})` }}
            ></div>
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="h-[400px] bg-cover bg-center rounded-xl"
              style={{ backgroundImage: `url(${area2})` }}
            ></div>
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="h-[400px] bg-cover bg-center rounded-xl"
              style={{ backgroundImage: `url(${area3})` }}
            ></div>
          </div>
        </div>
        <div
          id="bottom"
          className="w-full grid lg:grid-cols-3 grid-cols-1 lg:justify-center justify-start items-center gap-6"
        >
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex justify-center lg:items-center gap-8 w-full text-black dark:text-white"
          >
            <h1 className="text-7xl font-semibold">5K</h1>
            <h1>
              ACTIVE <br /> LISTINGS
            </h1>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex justify-center lg:items-center gap-8 w-full text-black dark:text-white"
          >
            <h1 className="text-7xl font-semibold">9K</h1>
            <h1>
              SOLID <br /> LISTINGS
            </h1>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex justify-center lg:items-center gap-8 w-full text-black dark:text-white"
          >
            <h1 className="text-7xl font-semibold">6K</h1>
            <h1>
              CLIENTS <br /> LISTINGS
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PopularAreas;
