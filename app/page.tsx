'use client'

import CountdownItem from './components/countdownItem';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { useEffect, useRef, useState } from 'react';

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const ShiftingCountdown = () => {
  const intervalRef = useRef<number | null>(null);

  const [remaining, setRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    intervalRef.current = window.setInterval(handleCountdown, 1000);
    return () => clearInterval(intervalRef.current || undefined);
  }, []);

  const handleCountdown = () => {
    const end = new Date('2024/05/23 17:30:00');
    const now = new Date();
    const distance = +end - +now;

    const days = Math.floor(distance / DAY);
    const hours = Math.floor((distance % DAY) / HOUR);
    const minutes = Math.floor((distance % HOUR) / MINUTE);
    const seconds = Math.floor((distance % MINUTE) / SECOND);

    setRemaining({
      days,
      hours,
      minutes,
      seconds,
    });
  };

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
      <div className='mx-auto my-auto'>
        <h2 className="text-2xl p-4">Abitbol ! L'homme le plus classe du monde !</h2>
        <Image
          className='mx-auto'
          src='/abitbol.jpg'
          width={200}
          height={100}
          alt=''
          priority
        />
      </div>
      <div className='w-full max-w-5xl mx-auto flex items-center bg-gray-400 bottom-0 rounded-full'>
        <CountdownItem num={remaining.days} text='days' />
        <CountdownItem num={remaining.hours} text='hours' />
        <CountdownItem num={remaining.minutes} text='minutes' />
        <CountdownItem num={remaining.seconds} text='seconds' />
      </div>
    </div>
  );
};


export default ShiftingCountdown;