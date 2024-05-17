'use client'

import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import Countdown from './components/countdown';

const Page = () => {
  return (
    <div className='h-screen flex flex-col justify-end p-4 bg-gradient-to-br from-gray-600 to-gray-900'>
      <div className="text-center mb-8">
        <h1 className="text-white text-4xl font-bold mb-2">Late Night Lounge</h1>
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
      </div>
      <Image
        className='mx-auto my-auto rounded-full'
        src='/abitbol.jpg'
        width={200}
        height={100}
        alt=''
        priority
      />
      <Countdown />
    </div>
  );
};


export default Page;