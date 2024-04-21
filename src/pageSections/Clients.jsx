import React, { useEffect } from "react";
import { useDarkMode } from "../components/common/DarkModeContext";
import { client } from "../utils/export";
import { FaStar } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

const Clients = () => {
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
        id="testimonials"
        className="lg:w-[95%] w-full h-fit m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-start lg:px-20 px-6 py-20 gap-20"
      >
        <div className="flex flex-col justify-center items-start gap-4">
          <h1
            data-aos="fade-down-right"
            className="text-red-500 dark:text-white"
          >
            OUR CLIENTS
          </h1>
          <h1
            data-aos="fade-down-right"
            data-aos-delay="150"
            className="text-black dark:text-white text-[40px] font-semibold leading-10"
          >
            What our clients <br /> saying about us?
          </h1>
        </div>
        <div
          id="clients-box"
          className="grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8 w-full"
        >
          {client?.map((item) => {
            const rateArr = [];
            for (let i = 1; i <= item?.rating; i++) {
              rateArr.push(i);
            }
            return (
              <div
                key={item?.id}
                data-aos="fade-up"
                data-aos-delay="200"
                className="bg-white dark:bg-gray-700 hover:bg-red-100 cursor-pointer p-12 flex flex-col justify-center items-center gap-6 rounded-xl w-full"
              >
                <div className="flex justify-start items-center w-full gap-4">
                  <img
                    src={item?.image}
                    alt=""
                    className="w-[70px] transform hover:scale-110 transition-transform duration-300"
                  />
                  <div className="flex flex-col justify-center items-start gap-1">
                    <h1 className="text-xl text-black font-semibold dark:text-white">
                      {item?.name}
                    </h1>
                    <h1 className="text-slate-600 dark:text-white">
                      {item?.text}
                    </h1>
                  </div>
                </div>
                <p className="text-lg text-justify text-slate-600 dark:text-white">
                  {item?.feedback}
                </p>
                <div className="flex justify-start items-start gap2 w-full">
                  {rateArr?.map((item) => (
                    <FaStar key={item} className="size-4 text-yellow-400" />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Clients;
