import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const sponsors = [
  "https://i.postimg.cc/vmqwFxSL/Sec-Services.jpg",
  "https://www.stockgro.club/_next/image/?url=%2Fstatic%2FstockgroBlack.png&w=256&q=75",
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
    <div className="mt-32" style={{ height: 600 }}>
      <h1>Sponsers</h1>
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
      <div className="flex flex-wrap justify-center items-center m-auto gap-10 p-4 w-4/5">
      {sponsors.map((src, index) => (
        <img key={index} src={src} alt="Sponsor" className="h-32 w-auto" />
      ))}
      <div className="h-32 text-6xl font-extrabold w-auto">Avnit's Production</div>
    </div>
    </div>
    </div>

  );
}
