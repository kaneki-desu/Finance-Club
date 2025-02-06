import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { fadeIn, StaggeredfadeIn } from "./fadeInAnimation";

const sponsors = [
  "https://www.stockgro.club/_next/image/?url=%2Fstatic%2FstockgroBlack.png&w=256&q=75",
  "https://i.postimg.cc/vmqwFxSL/Sec-Services.jpg",
  "https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/svg/unstop-logo.svg",

];

export default function SponsorsMarquee() {
  const [isShining, setIsShining] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsShining(true);
      setTimeout(() => {
        setIsShining(false);
      }, 2000);
    }, 6000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
    <div className="mt-52 mobile:absolute mobile:hidden" style={{ height: 600 }}
    variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{
          once:true,
        }}
    >
      <motion.h1 className="text-6xl font-semibold pt-4"
       variants={fadeIn}
       initial="initial"
       whileInView="animate"
       viewport={{
         once:true,
       }}
      >Sponsers</motion.h1>
    <div className="  py-4 h-full flex flex-col justify-center" >
      {/* <div
        className="flex space-x-8 w-max bg-green-400"
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity,  ease: "linear" }}
      >
        {[...sponsors, ...sponsors].map((src, index) => (
          <img key={index} src={src} alt="Sponsor" className="h-16 w-auto" />
        ))}
      </motion.div> */}
      {/* <motion.div>
        <div className={`wrap ${isShining ? "shine" : ""}`}>
          <img src="https://i.postimg.cc/X7bV6fzb/Fin-farewell.jpg"/>
        </div>
      </motion.div> */}
      <div className="mobile:absolute mobile:hidden flex flex-wrap justify-center items-center m-auto gap-10 p-4 w-4/5">
      {sponsors.map((src, index) => (
        <motion.div
        variants={StaggeredfadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{
          once:true,
        }}
        custom={index}
        >

        <img key={index} src={src} alt="Sponsor" className="h-32 w-auto hover:grayscale-0 grayscale" />
        </motion.div>
      ))}
      <div className="h-32 text-6xl font-mono font-bold w-auto">Avnit's Production</div>
    </div>
      
    </div>
    </div>
    <div className="mt-2 pc:absolute pc:hidden"
    variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{
          once:true,
        }}
    >
      <motion.h1 className="text-6xl font-semibold mb-10 text-opacity-40"
       variants={fadeIn}
       initial="initial"
       whileInView="animate"
       viewport={{
         once:true,
       }}
      >Sponsers</motion.h1>
    <div className="  py-4 h-full flex flex-col justify-center" >
      {/* <motion.div
        className="flex space-x-8 w-max bg-green-400"
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity,  ease: "linear" }}
      >
        {[...sponsors, ...sponsors].map((src, index) => (
          <img key={index} src={src} alt="Sponsor" className="h-16 w-auto" />
        ))}
      </motion.div> */}
      {/* <motion.div>
        <div className={`wrap ${isShining ? "shine" : ""}`}>
          <img src="https://i.postimg.cc/X7bV6fzb/Fin-farewell.jpg"/>
        </div>
      </motion.div> */}
      <div className=" flex flex-wrap justify-center items-center m-auto gap-10 p-4 w-4/5">
      {sponsors.map((src, index) => (
        <motion.div
        variants={StaggeredfadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{
          once:true,
        }}
        custom={index}
        > 

        <img key={index} src={src} alt="Sponsor" className="h-auto w-28 hover:backdrop-grayscale-0 hover:scale-125 " />
        </motion.div>
      ))}
      <motion.div className="h-32 text-4xl font-sans font-bold w-auto hover:scale-125"
      variants={StaggeredfadeIn}
      initial="initial"
      whileInView="animate"
      viewport={{
        once:true,
      }}
      custom={4}
      >Avnit's Production</motion.div>
    </div>
      
    </div>
    </div>
    </>

  );
}



// import React from 'react';
// import SponserData from '../Data/SponserData';
// // import Marquee from './components/ui/Marquee';
// import SponserCard from '../Components/SponserCard';
// // import BlurFade from './ui/BlurFade';

// const Sponsors = () => {
//   const zeroRow = SponserData.slice(0, SponserData.length);

//   return (
//     <div id="sponsors" className="sponser-container ">
//       <div className="sponser_intro pb-8 text-center ">
//         {/* <BlurFade> */}
//           <span className="w-fit bg-white bg-clip-text p-2 text-3xl font-bold text-transparent sm:text-4xl lg:text-5xl xl:text-6xl ">
//             Past Sponsors
//           </span>
//         {/* </BlurFade> */}
//       </div>

//       <div className="sponser_cards ">
//         <div className="relative flex flex-col items-center justify-center w-full overflow-hidden rounded-lg py-1 bg-background md:shadow-xl">
//           < pauseOnHover className="[--duration:30s]">
//             {zeroRow.map((item, index) => (
//               <SponserCard key={index} {...item} />
//             ))}
//           </pauseOnHover>

//           <div className="dark:from-background pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black"></div>
//           <div className="dark:from-background pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sponsors;








