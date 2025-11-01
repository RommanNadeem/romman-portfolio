'use client';

import Image from 'next/image';
import { Building2 } from 'lucide-react';

const logos = [
  { name: 'Aura Health', src: '/logos/aura.png' },
  { name: 'CreditBook', src: '/logos/creditbook.png' },
  { name: 'Insightio', src: '/logos/insightio.png' },
  { name: 'RepairDesk', src: '/logos/repairdesk.png' },
  { name: 'Studio Stream', src: '/logos/StudioStream.png' },
  { name: 'ABC', src: '/logos/abc.png' },
  { name: 'Nuwave', src: '/logos/nuwave.png' },
  { name: 'Paqqup', src: '/logos/Paqqup.png' },
  { name: 'Tech Circle', src: '/logos/techcircle.png' },
  { name: 'Truly Will', src: '/logos/trulyWill.png' },
];

export default function ClientLogos() {
  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="w-full overflow-hidden pt-24 pb-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-2">
        <div className="flex items-center justify-center gap-3">
          <Building2 className="w-5 h-5 text-gray-400" />
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
            Companies and Teams I Have Worked With
          </p>
          <Building2 className="w-5 h-5 text-gray-400" />
        </div>
      </div>
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, rgb(249, 250, 251), rgba(249, 250, 251, 0))' }}></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, rgb(249, 250, 251), rgba(249, 250, 251, 0))' }}></div>
        
        <div className="flex animate-scroll">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center group"
              style={{ width: '200px', height: '100px' }}
            >
              <Image
                src={logo.src}
                alt={`${logo.name} logo`}
                width={180}
                height={80}
                className="object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
                style={{ maxHeight: '80px', width: 'auto' }}
                unoptimized
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

