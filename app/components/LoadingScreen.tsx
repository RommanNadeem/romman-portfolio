'use client';

import { useEffect, useState, useMemo } from 'react';
import Lottie from 'lottie-react';
import coffeeAnimation from '@/public/coffee-animation.json';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const facts = [
    "He spent 3 nights alone in a middle of jungle in Hunza Aliabad",
    "He networks with strangers at strange places. (Naan shop)",
    "He practically lives in coffee places",
    "He would share AI ideas with you at 4am",
    "He would spend hours staring stars.",
    "Ask him to sing few lines of his songs, he will probably say \"He has a bad throat\"."
  ];

  const randomFact = useMemo(() => {
    return facts[Math.floor(Math.random() * facts.length)];
  }, []);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 3500); // Start fading at 3.5 seconds

    const hideTimer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // Completely hide at 4 seconds

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-orange-50 transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="text-center max-w-3xl mx-auto px-6 flex flex-col items-center justify-center">
        {/* Lottie Animation */}
        <div className="w-56 h-56 sm:w-64 sm:h-64 mx-auto mb-1">
          <Lottie animationData={coffeeAnimation} loop={true} />
        </div>
        
        {/* Main Content */}
        <div className="space-y-6 flex flex-col items-center">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight text-center">
            Booting Romman. Installing caffeine package
          </h2>
          
          {/* Subheading */}
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto font-medium text-center">
            OKR one is coffee. Then we ship.
          </p>
          
          {/* Did You Know Section */}
          <div className="mt-10 pt-8 border-t border-gray-300/50 max-w-xl mx-auto text-center">
            <p className="text-base sm:text-lg font-bold text-blue-600 mb-4">
              Did you know?
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed px-4 text-center">
              {randomFact}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

