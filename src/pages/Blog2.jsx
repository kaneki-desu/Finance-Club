import React from "react";
import Blogdata from "../Data/Blogdata";
import "../css/Blog.css"
import {motion} from 'framer-motion'
import { fadeIn } from "../Components/fadeInAnimation";
const Blog2 = () => {
  return (
    <div className="blogcover h-full w-full flex justify-center">

    <div class="flex flex-wrap justify-center w-4/5 mobile:w-full mobile:gap-5 gap-10 my-20">
    {Blogdata.map((item,index)=>
        (<motion.div
            className="card h-[50vh] pc:w-[33vw] flex flex-col justify-end mobile:w-72 p-10  text-ellipsis overflow-hidden"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
          >
            <div className="blogTypo">

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
            <h4 className="pc:text-2xl">{item.title}</h4>
            <p className="text-ellipsis overflow-hidden whitespace-normal ">
              {item.content}
            </p>
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
          )
    )}
</div>
</div>

  );
};

export default Blog2;
