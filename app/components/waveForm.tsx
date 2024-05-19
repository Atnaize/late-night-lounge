import { useRef, useEffect } from 'react';

/* https://dev.to/ssk14/visualizing-audio-as-a-Waveform-in-react-o67 */
function animateBars(analyzer:any, canvas:any, canvasCtx:any, dataArray:any, bufferLength:any) {
    analyzer.getByteFrequencyData(dataArray);

    const HEIGHT = canvas.height;
    const WIDTH_MOD = 4.0;

    let barWidth = Math.ceil(canvas.width / bufferLength) * WIDTH_MOD;

    let barHeight;
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
        barHeight = (dataArray[i] / 255) * HEIGHT / 4;

        let r = 193;
        let g = 146;
        let b = 87;

        const gradient = canvasCtx.createLinearGradient(0, canvas.width / 4, canvas.height, canvas.height);
        gradient.addColorStop(0, `rgba(${r},${g},${b},0.757)`);
        gradient.addColorStop(1, 'rgba(91,69,41,0.357)');

        canvasCtx.fillStyle = gradient;
        canvasCtx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

        x += barWidth + 1;
    }
}

const WaveForm = ({ analyzerData }:any) => {

    const canvasRef = useRef(null);
    const { dataArray, analyzer, bufferLength } = analyzerData;

    const draw = (dataArray:any, analyzer:any, bufferLength:any) => {
        const canvas: HTMLCanvasElement = canvasRef.current!;
        if (!canvas || !analyzer) return;
        const canvasCtx: CanvasRenderingContext2D = canvas.getContext('2d')!;

        const animate = () => {
            requestAnimationFrame(animate);
            canvas.width = canvas.width;
            animateBars(analyzer, canvas, canvasCtx, dataArray, bufferLength);
        }

        animate();
    }

    useEffect(() => {
        draw(dataArray, analyzer, bufferLength);
    }, [dataArray, analyzer, bufferLength])

    return (
        <canvas
            style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                zIndex: '-0'
            }}
            ref={canvasRef}
            width={window.innerWidth}
            height={window.innerHeight}
        />
    );
};

export default WaveForm;