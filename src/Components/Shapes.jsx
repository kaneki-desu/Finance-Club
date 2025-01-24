import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState, useContext } from "react";
import { ThemeContext } from "../contexts/theme";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent2 = (props) => {
  const { themeMode } = useContext(ThemeContext); 
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // Load slim to reduce package size
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: themeMode === "dark" ? "#121212" : "#f5f5f5",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "bubble", 
          },
        },
        modes: {
          bubble: {
            distance: 200,
            duration: 2,
            size: 10,
            opacity: 0.8,
          },
          push: {
            quantity: 4,
          },
        },
      },
      particles: {
        color: {
          value: themeMode === "dark" ? ["#00d1ff", "#ff00d1", "#aaff00"] : ["#0077ff", "#ff0077", "#11cc55"], 
        },
        links: {
          color: themeMode === "dark" ? "#ffffff" : "#000000",
          distance: 150,
          enable: true,
          opacity: 0.4,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800, 
          },
          value: 100,
        },
        opacity: {
          value: 0.6,
          random: true,
        },
        shape: {
          type: ["circle", "triangle", "star"], 
        },
        size: {
          value: { min: 3, max: 7 },
          random: true,
        },
      },
      detectRetina: true,
    }),
    [themeMode]
  );

  return <Particles id={props.id} options={options} />;
};

export default ParticlesComponent2;
