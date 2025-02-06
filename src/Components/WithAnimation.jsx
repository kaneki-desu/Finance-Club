import React, { useEffect, useState } from "react";
import { useAnimation, motion } from "framer-motion";

// Define the animation variants
const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 0, filter: "blur(10px)" },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: { duration: 1, ease: "easeInOut", delay: 0 },
  },
};
const yfadeInAnimationVariants = {
  initial: { opacity: 0, y: 20, filter: "blur(10px)" },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: { duration: 1, ease: "easeInOut", delay: 0 },
  },
};

const yfadeInAnimationVariant1={
    initial: { opacity: 0, y: 20, filter: "blur(10px)" },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: "easeInOut", delay: 10},
  },
}
const yfadeInAnimationVariant2={
    initial: { opacity: 0, y: 20, filter: "blur(10px)" },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: { duration: 1, ease: "easeInOut", delay: 2 },
  },
}
const withAnimation = (Component) => {
  return function AnimatedComponent(props) {
    const controls = useAnimation();
    const yfadeControls = useAnimation();
    const yfadeControls1 = useAnimation();
    const yfadeControls2 = useAnimation();
  const [loadOnce, setLoadOnce]=useState(false)

    useEffect(() => {
      // Start the animation after 4 seconds delay
      setTimeout(() => {
        // Trigger the animation using Framer Motion controls
        controls.start("animate");
        setLoadOnce(true)
      }, loadOnce?1000:3000);
    }, [controls,loadOnce]);

    return (
      <div>
        {/* Wrap the components you want to animate with motion.div */}
        <motion.div
          className="fade-me"
          variants={fadeInAnimationVariants}
          initial="initial"
          animate={controls}
        >
          <Component {...props} />
        </motion.div>
        
      </div>
    );
  };
};

export default withAnimation;
