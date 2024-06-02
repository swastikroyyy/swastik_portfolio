import React, { useEffect, useState } from 'react';
import Typed from 'typed.js';

const Home = () => {
    const [particles, setParticles] = useState([]);
    useEffect(() => {
        let typed1, typed2, typed3;
    
        const startTyping = () => {
          const options1 = {
            strings: ['Hey,'],
            typeSpeed: 80,
            backSpeed: 50,
            showCursor: false,
            onComplete: () => {
              setTimeout(() => {
              typed2 = new Typed('#typed-text2', options2);
            }, 1000);
            },
          };
    
          const options2 = {
            strings: ['This is Swastik Roy.'],
            typeSpeed: 80,
            backSpeed: 50,
            showCursor: false,
            onComplete: () => {
              setTimeout(() => {
              typed3 = new Typed('#typed-text3', options3);
            }, 1000);
            },
          };
    
          const options3 = {
            strings: ['Front-End Developer.'],
            typeSpeed: 80,
            backSpeed: 50,
            showCursor: false,
            onComplete: () => {
                setTimeout(() => {
                  // Clear the typed text elements
                  document.querySelector('#typed-text1').innerHTML = '';
                  document.querySelector('#typed-text2').innerHTML = '';
                  document.querySelector('#typed-text3').innerHTML = '';
      
                  // Restart typing effect
                  startTyping();
                }, 1000);
              },
            };
      
            typed1 = new Typed('#typed-text1', options1);
          };
      
          startTyping();
      
          return () => {
            if (typed1) typed1.destroy();
            if (typed2) typed2.destroy();
            if (typed3) typed3.destroy();
          };
        }, []);
      
  useEffect(() => {
    const createParticle = () => {
      const particle = {
        id: Date.now(), // Unique identifier for each particle
        left: `${Math.random() * 100}%`, // Random horizontal position
        animationDuration: `${Math.random() * 5 + 3}s`, // Random animation duration
      };

      setParticles(prevParticles => [...prevParticles, particle]);

      // Remove particle after animation completes
      setTimeout(() => {
        setParticles(prevParticles => prevParticles.filter(p => p.id !== particle.id));
      }, parseFloat(particle.animationDuration) * 1000);
    };

    // Create particles continuously
    const intervalId = setInterval(() => {
      if (particles.length < 40) {
        createParticle();
      }
    }, 100); // Adjust the interval duration as needed

    // Clean up on unmount
    return () => clearInterval(intervalId);
  }, [particles]);




  return (
    <div id="home"  className="relative h-screen bg-gray-800">
      {/* CSS Animation background */}
      <div className="animation-bg absolute inset-0 ">
      <div className="particle-container">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="particle"
            style={{ left: particle.left, animationDuration: particle.animationDuration }}
          ></div>
        ))}
      </div>
      

     </div>

     <div className="absolute inset-0 flex flex-col justify-center items-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white"> 
            <span id="typed-text1"></span>
          </h1>
          <h1 className="text-4xl font-bold text-white"> 
            <span id="typed-text2"></span>
          </h1>
          <h1 className="text-4xl font-bold text-white"> 
            <span id="typed-text3"></span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
