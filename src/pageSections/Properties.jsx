import React, { useEffect } from "react";
import { useDarkMode } from "../components/common/DarkModeContext";
import { property } from "../utils/export";
import {
  FaBath,
  FaShareAlt,
  FaBed,
  FaUserCircle,
  FaPlus,
  FaMapMarkerAlt,
  FaVideo,
  FaCamera,
  FaHeart,
} from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";

const Properties = () => {
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
        id="properties"
        className="lg:w-[90%] m-auto lg:px-20 px-6 py-20 w-full flex flex-col justify-center items-start gap-10"
      >
        <div className="flex flex-col justify-center items-start gap-4">
          <h1
            data-aos="fade-down-right"
            className="text-red-500 dark:text-white"
          >
            PROPERTIES
          </h1>
          <h1
            data-aos="fade-down-right"
            data-aos-delay="150"
            className="text-black text-4xl font-semibold dark:text-white"
          >
            Explore the Latest
          </h1>
        </div>

        {/* properties grid starts here */}
        <div
          id="grid-box"
          className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8"
        >
          {property?.length > 0 &&
            property?.map((item) => (
              <div
                key={item?.id}
                data-aos="fade-up"
                data-aos-delay="200"
                className="bg-white dark:bg-gray-800 rounded-xl w-full"
              >
                <div
                  id="image-box"
                  className="bg-cover bg-center h-[250px] rounded-xl p-4 flex flex-col justify-between items-end"
                  style={{ backgroundImage: `url(${item?.images})` }}
                >
                  <div
                    id="top"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="w-full flex justify-between items-end"
                  >
                    <div>
                      <button className="bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-white dark:hover:text-gray-900 text-sm py-1 px-4 text-white rounded-full cursor-pointer  transition-colors duration-200">
                        Featured
                      </button>
                    </div>
                    <div className="flex justify-between items-center gap-3">
                      <button className="bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-white dark:hover:text-gray-900 text-sm py-1 px-4 text-white rounded-full cursor-pointer   transition-colors duration-200">
                        Sales
                      </button>
                      <button className="bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-white dark:hover:text-gray-900 text-sm py-1 px-4 text-white  rounded-full cursor-pointer  transition-colors duration-200">
                        Active
                      </button>
                    </div>
                  </div>
                  <div
                    id="bottom"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="w-full flex justify-between items-end"
                  >
                    <div className="flex justify-start items-center gap-4">
                      <FaMapMarkerAlt className="size-4 text-white" />
                      <h1 className="text-white">{item?.address}</h1>
                    </div>
                    <div className="flex justify-between items-center gap-3">
                      <FaVideo className="size-4 text-white" />
                      <FaCamera className="size-4 text-white" />
                    </div>
                  </div>
                </div>
                <div
                  id="content-box"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="px-6 py-3 flex flex-col justify-center items-start gap-2 w-full"
                >
                  <h1 className="text-xl text-black font-semibold dark:text-white">
                    {item?.name}
                  </h1>
                  <h1 className="text-2xl text-red-600 font-bold dark:text-white">
                    {item?.price}
                  </h1>
                  <p className="dark:text-white">{item?.about}</p>
                  <div
                    id="icons"
                    className="flex justify-center items-start gap-4"
                  >
                    <div className="flex justify-between items-center gap-2">
                      <FaBath className="size-5 text-red-400" />
                      <h1 className="dark:text-white">{item?.bath}</h1>
                    </div>
                    <div className="flex justify-between items-center gap-2">
                      <FaBed className="size-5 text-red-400" />
                      <h1 className="dark:text-white">{item?.bed}</h1>
                    </div>
                    <div className="flex justify-between items-center gap-2">
                      <MdSpaceDashboard className="size-5 text-red-400" />
                      <h1 className="dark:text-white">{item?.area}</h1>
                    </div>
                  </div>

                  <div className="w-full h-[1px] bg-gray-200 mt-8"></div>

                  <div
                    id="owner-info"
                    className="flex justify-between items-center w-full mt-2"
                  >
                    <div className="flex justify-center items-center gap-2">
                      <FaUserCircle className="size5 text-red-400" />
                      <h1 className="dark:text-white">{item?.owner}</h1>
                    </div>
                    <div className="flex justify-center items-center gap-4">
                      <div className="p-2 border-2 border-gray-200 hover:bg-black hover:text-white text-red-400 cursor-pointer transition-colors duration-300">
                        <FaShareAlt className="size-4" />
                      </div>
                      <div className="p-2 border-2 border-gray-200 hover:bg-black hover:text-white text-red-400 cursor-pointer transition-colors duration-300">
                        <FaHeart className="size-4" />
                      </div>
                      <div className="p-2 border-2 border-gray-200 hover:bg-black hover:text-white text-red-400 cursor-pointer transition-colors duration-300">
                        <FaPlus className="size-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Properties;
