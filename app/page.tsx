"use client"

import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  return (
    <main className="flex max-h-screen flex-col items-center justify-between p-24">
      <div className="text-6xl text-gray-400 font-sans font-light underline underline-offset-8 pb-5">Late Night Lounge</div>
      <div className="">
        <TypeAnimation
          sequence={[
            "Elegance in Every Sip",
            1000,
            "Laughter on Every Lip",
            1000,
          ]}
          speed={20}
          repeat={Infinity}
          className="text-grey-600"
        />
      </div>

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
