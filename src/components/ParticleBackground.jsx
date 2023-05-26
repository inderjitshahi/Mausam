import React, { useEffect } from "react";
import Particles from "particles.js";

const ParticleBackground = () => {
  useEffect(() => {
    const particlesConfig = {
      particles: {
        color: {
          value: ["#FF0000"], // Add your desired colors here
        },
        shape: {
          type: ["circle"], // Array of shape types
        },
        size: {
          value: 3,
        },
        line_linked: {
          distance:75, // Set the distance between connected particles
          color:"#007bff", // Set the color of the lines
          opacity: 0.5, // Set the opacity of the lines
        },
      },
      // Other configurations...
    };

    // Initialize Particle.js
    window.particlesJS("particles-js", particlesConfig);

    // Clean up Particle.js when the component is unmounted
    return () => {
      window.pJSDom[0].pJS.fn.vendors.destroypJS();
    };
  }, []);

  return (
    <div id="particles-js" className="fixed inset-0 z-[-1]">
      {/* Content */}
    </div>
  );
};

export default ParticleBackground;
