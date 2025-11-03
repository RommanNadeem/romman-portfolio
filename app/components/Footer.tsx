'use client';

import { Mail, Linkedin, Phone, Calendar, Coffee } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-br from-blue-50 via-blue-100/80 to-indigo-50 mt-20 border-t border-blue-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-12">
          {/* Left Side */}
          <div className="flex-1">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3">
              Let's build something meaningful.
            </h2>
          </div>
          
          {/* Right Side - Contact Options */}
          <div className="flex flex-wrap items-center gap-8 md:gap-12">
            <a
              href="mailto:romman818@gmail.com"
              className="group flex items-center gap-3 text-gray-900 hover:text-blue-600 transition-colors"
            >
              <div className="w-10 h-10 rounded-full border-2 border-gray-300 group-hover:border-blue-500 bg-white flex items-center justify-center transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <span className="font-medium">Email</span>
            </a>
            
            <a
              href="https://www.linkedin.com/in/muhammadromman/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-gray-900 hover:text-blue-600 transition-colors"
            >
              <div className="w-10 h-10 rounded-full border-2 border-gray-300 group-hover:border-blue-500 bg-white flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </div>
              <span className="font-medium">LinkedIn</span>
            </a>
            
            <a
              href="tel:+923214044498"
              className="group flex items-center gap-3 text-gray-900 hover:text-blue-600 transition-colors"
            >
              <div className="w-10 h-10 rounded-full border-2 border-gray-300 group-hover:border-blue-500 bg-white flex items-center justify-center transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <span className="font-medium">Call</span>
            </a>
            <button
              data-cal-link="romman/30min"
              data-cal-namespace="30min"
              data-cal-config='{"layout":"month_view"}'
              className="group flex items-center gap-3 text-gray-900 hover:text-blue-600 transition-colors cursor-pointer bg-transparent border-none p-0"
            >
              <div className="w-10 h-10 rounded-full border-2 border-gray-300 group-hover:border-blue-500 bg-white flex items-center justify-center transition-colors">
                <Calendar className="w-5 h-5" />
              </div>
              <span className="font-medium">Schedule a Call</span>
            </button>
          </div>
        </div>
        
        {/* Separator */}
        <div className="border-t border-blue-200 mb-8"></div>
        
        {/* Bottom Section */}
        <div className="text-center">
          <p className="text-gray-600 text-sm">
            Built with <Coffee className="inline w-4 h-4 text-amber-700" /> by Romman
          </p>
        </div>
      </div>
    </footer>
  );
}

