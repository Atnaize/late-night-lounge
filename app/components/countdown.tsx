'use client'

import Confetti from './confetti';
import CountdownItem from './countdownItem';
import { useEffect, useRef, useState } from 'react';

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const Countdown = () => {
    const intervalRef = useRef<number | null>(null);
    const [open, setOpen] = useState<boolean>(false);

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

        if ([days, hours, minutes, seconds].every(unit => unit === 0)) {
            return setOpen(true);
        }

        setRemaining({
            days,
            hours,
            minutes,
            seconds,
        });
    };

    if (open) {
        return (
            <div className="text-center pb-52">
                <Confetti />

                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">The lounge is <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">officialy open</span> 🎉</h1>
                <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Come with us, enjoy a beer 🍻</p>

            </div>
        )
    }

    return (
        <div className='w-full max-w-5xl mx-auto flex items-center bottom-0 bg-neutral-950/50 font-victorian-decade'>
            <CountdownItem num={remaining.days} text='days' />
            <CountdownItem num={remaining.hours} text='hours' />
            <CountdownItem num={remaining.minutes} text='minutes' />
            <CountdownItem num={remaining.seconds} text='seconds' />
        </div>
    );
};


export default Countdown;