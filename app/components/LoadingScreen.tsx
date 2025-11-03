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
      <div className="text-center max-w-2xl mx-auto px-6">
        <div className="w-64 h-64 mx-auto mb-8">
          <Lottie animationData={coffeeAnimation} loop={true} />
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Booting Romman. Installing caffeine package
          </h2>
          <p className="text-xl text-gray-700 max-w-lg mx-auto leading-relaxed font-medium mb-6">
            OKR one is coffee. Then we ship.
          </p>
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-lg font-bold text-gray-900 mb-3">
              Did you know?
            </p>
            <p className="text-base text-gray-600 max-w-lg mx-auto leading-relaxed">
              {randomFact}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

