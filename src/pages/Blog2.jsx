import React, { useState, useContext } from "react";
import Blogdata from "../Data/Blogdata";
import "../css/Blog.css";
import { motion } from 'framer-motion';
import { fadeIn } from "../Components/fadeInAnimation";
import { ThemeContext } from "../contexts/theme";

const Blog2 = () => {
  const { themeMode } = useContext(ThemeContext);

  return (
    <div className="blogcover h-full w-full flex justify-center">
      <div className="flex flex-wrap justify-center w-4/5 mobile:w-full mobile:gap-5 gap-10 my-20">
        {Blogdata.map((item, index) => {
          const [isExpanded, setIsExpanded] = useState(false);

          const handleReadMoreClick = () => {
            setIsExpanded(!isExpanded);
          };

          return (
            <motion.div
              key={index}
              className={`card justify-center h-fit pc:w-[33vw] flex flex-col mobile:w-72 p-10 `}
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
            >
              {/* <button
                className={`absolute ${isExpanded?"-z-10 hidden":"z-10"} top-[35%] mobile:left-[25%] pc:left-[40%] ${themeMode === 'dark' ? 'button-33' : 'button-33'}`}
                onClick={handleReadMoreClick}
              >
                {isExpanded ? 'Read Less' : 'Read More'}
              </button> */}

              <div className="blogTypo  ">
                <span className="icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14.5 3.5C14.5 3.5 14.5 5.5 12 5.5C9.5 5.5 9.5 3.5 9.5 3.5H7.5L4.20711 6.79289C3.81658 7.18342 3.81658 7.81658 4.20711 8.20711L6.5 10.5V20.5H17.5V10.5L19.7929 8.20711C20.1834 7.81658 20.1834 7.18342 19.7929 6.79289L16.5 3.5H14.5Z" />
                  </svg>
                </span>

                <h4 className="text-xl">{item.title}</h4>

                <p
                  className={`${isExpanded  ? 'whitespace-normal overflow-y-auto  h-72' : 'text-ellipsis'} transition-all display-item duration-300`}
                >
                  {item.content}
                </p>
                <motion.button
                className={`  mt-10 ${themeMode === 'dark' ? 'button-33' : 'button-33'}`}
                onClick={handleReadMoreClick}
              >
                {isExpanded ? 'Read Less' : 'Read More'}
              </motion.button>
              </div>

              <div className="shine"></div>
              <div className="background">
                <div className="tiles">
                  <div className="tile tile-1"></div>
                  <div className="tile tile-2"></div>
                  <div className="tile tile-3"></div>
                  <div className="tile tile-4"></div>
                  <div className="tile tile-5"></div>
                  <div className="tile tile-6"></div>
                  <div className="tile tile-7"></div>
                  <div className="tile tile-8"></div>
                  <div className="tile tile-9"></div>
                  <div className="tile tile-10"></div>
                </div>
                <div className="line line-1"></div>
                <div className="line line-2"></div>
                <div className="line line-3"></div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog2;
