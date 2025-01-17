
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState, useContext } from "react";
import { ThemeContext } from '../contexts/theme';

// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.
import { IndianRupee } from "lucide-react";
import { Bitcoin } from "lucide-react";
import bitcoin from "../assets/bitcoin.png"
const ParticlesComponent = (props) => {
      const [bgImg,setBgImg]= useState("#000")
      const [colorImg,setcolorImg]= useState("#000")
        const {themeMode}=useContext(ThemeContext)
  const [init, setInit] = useState(false);
  // this should be run only once per application lifetime
  useEffect(() => {themeMode==="dark"?setBgImg("#000"):setBgImg("#fff");
          themeMode!="dark"?setcolorImg("#000"):setcolorImg("#fff")
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      // await loadFull(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, [themeMode]);

  const particlesLoaded = (container) => {
    console.log(container);
  };


  const options = useMemo(
    () => ({
      background: {
        color: {
          value: {bgImg},
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
          onHover: {
            enable: true,
            mode: 'grab',
          },
        },
        modes: {
          push: {
            distance: 200,
            duration: 15,
          },
          grab: {
            distance: 150,
          },
        },
      },
      fullScreen: {
        enable: false, // Disable full-screen mode
      },
      
      particles: {
        color: {
          value:`${colorImg}`,
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 150,
        },
        opacity: {
          value: 1.0,
        },
        shape: {
            type:"circle",
            image: 
              {
                src: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=040", // Replace with your rupee icon path
                width: 20,
                height: 20,
              },
              
          },
        size: {
          value: 2,
          random:true,
        },
      },
      detectRetina: true,
    }),
    [],
  );


  return <Particles id={props.id} init={particlesLoaded} options={options} />; 
};

export default ParticlesComponent;