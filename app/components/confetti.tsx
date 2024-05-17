'use client'

import { useEffect, useMemo } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { type ISourceOptions, OutMode } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';

const Confetti = () => {
    useEffect(() => {
        const initializeParticles = async () => {
            await initParticlesEngine(async (engine) => {
                await loadSlim(engine);
            });
        };

        initializeParticles();
    }, []);

    const options: ISourceOptions = useMemo(
        () => ({
            preset: 'confetti',
            fpsLimit: 120,
            fullScreen: {
                zIndex: 1,
            },
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: 'push',
                    },
                },
                modes: {
                    push: {
                        quantity: 50,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: [
                        '#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'
                    ],
                },
                move: {
                    enable: true,
                    gravity: {
                        enable: true,
                        acceleration: 10
                    },
                    speed: {
                        min: 10,
                        max: 20
                    },
                    decay: 0.1,
                    straight: false,
                    outModes: {
                        default: OutMode.destroy,
                    },
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 80,
                },
                opacity: {
                    value: {
                        min: 0,
                        max: 1
                    },
                    animation: {
                        enable: true,
                        speed: 2,
                        startValue: 'max',
                        destroy: 'min'
                    }
                },
                shapes: ['circle', 'square'],
                size: {
                    value: { min: 1, max: 5 },
                },

            },
        }),
        [],
    );

    return (
        <Particles
            id="tsparticles"
            options={options}
        />
    );
};

export default Confetti;
