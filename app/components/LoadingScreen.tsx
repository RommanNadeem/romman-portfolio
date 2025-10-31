'use client';

import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

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
      <div className="text-center">
        <div className="text-9xl mb-6 animate-bounce" style={{ animationDuration: '1.5s' }}>
          ☕
        </div>
        <div className="space-y-4 animate-pulse" style={{ animationDuration: '2s' }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Please wait for Romman...
          </h2>
          <p className="text-xl text-gray-800 max-w-lg mx-auto leading-relaxed font-medium">
            He doesn't work without coffee.
          </p>
          <p className="text-lg text-gray-600 italic max-w-lg mx-auto">
            Yes, his portfolio needs caffeine too ☕️
            <br />
            <span className="text-base text-gray-500 mt-2 block">
              (We're brewing something great...)
            </span>
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

