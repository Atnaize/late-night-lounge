"use client"

import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

export default function Home(Elem: React.ComponentClass<any>) {
  return (
    <main className="flex max-h-screen flex-col items-center justify-between p-24">
      <div className="text-6xl font-bold text-gray-400 tracking-wide leading-tight">Late Night Lounge</div>
      <TypeAnimation
        sequence={[
          "Elegance in Every Sip",
          1000,
          "Laughter on Every Lip",
          1000,
        ]}
        speed={99}
        repeat={Infinity}
      />
      <div className="">
        <Image
          className="relative dark:invert"
          src="/logo.png"
          alt="Next.js Logo"
          width={800}
          height={400}
          priority
        />
      </div>
    </main>
  );
}
