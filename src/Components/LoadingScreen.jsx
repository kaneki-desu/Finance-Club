import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide the loading screen after 3 seconds
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null; // Remove the screen after loading

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white z-[1000]">
      {/* Falling Money Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-green-400 text-4xl"
            style={{ left: `${Math.random() * 100}vw` }}
            initial={{ y: "-10vh", opacity: 0 }}
            animate={{ y: "100vh", opacity: 1 }}
            exit={{opacity:0}}
            transition={{
              duration: Math.random() * 2 + 2,
              ease: "easeInOut",
              repeat: Infinity,
              delay: Math.random(),
            }}
          >
            💵
          </motion.div>
        ))}
      </div>

      {/* Loading Text */}
      <motion.h1
        className="text-3xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        Loading...
      </motion.h1>
    </div>
  );
};

export default LoadingScreen;
