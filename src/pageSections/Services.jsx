import React, { useEffect } from "react";
import { service } from "../utils/export";
import { useDarkMode } from "../components/common/DarkModeContext";
import Aos from "aos";
import "aos/dist/aos.css";

const Services = () => {
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
      className={`${
        darkMode ? "dark bg-gray-900" : "light bg-transparent"
      } pb-20`}
    >
      <section
        id="services"
        className={`${
          darkMode ? "dark bg-gray-700" : "light bg-red-100"
        } lg:w-[95%] w-full h-fit m-auto rounded-xl flex flex-col justify-center items-start lg:px-20 px-6 py-20 gap-10`}
      >
        <div className="flex flex-col justify-center items-start gap-4">
          <h1
            data-aos="fade-down-right"
            className="text-red-500 dark:text-white"
          >
            OUR SERVICES
          </h1>
          <h1
            data-aos="fade-down-right"
            data-aos-delay="150"
            className="text-black text-[40px] font-semibold leading-10 dark:text-white"
          >
            Top real estate <br /> services available
          </h1>
        </div>
        <div
          id="service-box"
          className="grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8"
        >
          {service?.map((item) => (
            <div
              key={item?.id}
              data-aos="fade-up"
              data-aos-delay="200"
              className="bg-white dark:bg-gray-900 h-[350px] px-8 flex flex-col justify-center items-start gap-4 rounded-xl border-b-[5px] border-red-600 hover:bg-red-300 cursor-pointer"
            >
              <div className="p-6 rounded-full bg-red-200 text-red-600 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">
                <item.icon
                  data-aos="fade-up"
                  data-aos-delay="250"
                  className="size-10 transition-colors duration-300 cursor-pointer"
                />
              </div>

              <h1
                data-aos="fade-up"
                data-aos-delay="250"
                className="text-black text-[22px] font-semibold dark:text-white"
              >
                {item?.title}
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="250"
                className="text-lg text-slate-700 dark:text-white"
              >
                {item?.desc}
              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="250"
                className="border-b-2 border-red-600 text-red-600 font-semibold p-0 dark:text-white"
              >
                READ MORE
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
