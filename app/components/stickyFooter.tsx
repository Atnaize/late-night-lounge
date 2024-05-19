'use client'

import { useRef, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import WaveForm from './waveForm';

const StickyFooter = () => {
    const [analyzerData, setAnalyzerData] = useState(null);
    const audioElmRef:any = useRef(null);

    const audioAnalyzer = () => {
        const audioCtx = new (window.AudioContext)();

        const analyzer = audioCtx.createAnalyser();
        analyzer.fftSize = 2048;

        const bufferLength = analyzer.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        const source = audioCtx.createMediaElementSource(audioElmRef.current);
        source.connect(analyzer);
        source.connect(audioCtx.destination);

        // @ts-ignore
        setAnalyzerData({ analyzer, bufferLength, dataArray });
    }

    return (
        <div className='test-mc-test'>
            {analyzerData && <WaveForm analyzerData={analyzerData} />}
            <div className='w-full fixed left-0 bottom-0 text-center bg-zinc-900 p-4'>
                <figure className='flex justify-center items-center'>
                    <audio
                        controls
                        src="/audio/The Swinghoppers & Wolfgang Lohr - Party Like 1920.mp3"
                        ref={audioElmRef}
                        onPlay={audioAnalyzer}
                    ></audio>
                    <figcaption className="font-victorian-decade">
                        The Swinghoppers & Wolfgang Lohr - Party Like It is 1920
                    </figcaption>
                </figure>
            </div>
        </div>
    )
}

export default StickyFooter;