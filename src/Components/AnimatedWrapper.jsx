import React from "react";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 20, filter: "blur(10px)"},
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: "easeInOut", delay:3},
    
  },
};

const AnimatedWrapper = (Component) => {
  return function WrappedComponent(props) {
    return (
      <motion.div
        variants={fadeInAnimationVariants}
        initial="initial"
        animate="animate"
      >
        <Component {...props} />
      </motion.div>
    );
  };
};

export default AnimatedWrapper;
