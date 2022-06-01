import React, { useContext } from 'react';
import Particles from 'react-tsparticles';
import { ThemeContext } from '../../Context/ThemeContext';

import './Particles.css';

export default function ParticlesCustom() {
  const { themePreference } = useContext(ThemeContext);
  const particlesInit = main => {
    // console.log(main);
  };

  const particlesLoaded = container => {
    // console.log(container);
  };
  return (
    <>
      <Particles
        id='tsparticles'
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 60,
          interactivity: {
            detectsOn: 'canvas',
            events: {
              onClick: {
                enable: false,
                mode: 'push',
              },
              onHover: {
                enable: false,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.5,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: themePreference.darkmode ? '#ffffff' : '#222222',
            },
            links: {
              color: themePreference.darkmode ? '#ffffff' : '#222222',
              distance: 150,
              enable: true,
              opacity: themePreference.darkmode ? 0.095 : 0.08,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outMode: 'bounce',
              random: true,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 40,
            },
            opacity: {
              value: themePreference.darkmode ? 0.095 : 0.08,
            },
            shape: {
              type: 'circle',
            },
            size: {
              random: true,
              value: 4,
            },
          },
          detectRetina: true,
        }}
      />
    </>
  );
}
