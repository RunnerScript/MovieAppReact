import { useState, useRef, useEffect } from "react";
export default function StopWatch() {

    const [time, setTime] = useState(0);;
    let interval = useRef(null);
    useEffect(() => {
        return () => {
            clearInterval(interval.current);
        }
    }, [time]);
    const handleStart = () => {
        interval.current = setInterval(() => {
            setTime((time) => time + 1);
        }, 1000);

    }
    const handlePause = () => {
        clearInterval(interval.current);
    }
    const handleReset = () => {
        setTime(0);
    }
    return (
        <div className="flex flex-col flex-wrap justify-center text-center">
            <h1 className="text-lg font-bold py-3">Stop Watch</h1>
            <h3 className="text-green-600 font-bold text-xl">{time}</h3>

            <button className="bg-black text-white font-bold rounded-lg mb-2" onClick={handleStart}>Start</button>
            <button className="bg-black text-white font-bold rounded-lg mb-2" onClick={handlePause}>Pause</button>
            <button className="bg-black text-white font-bold rounded-lg" onClick={handleReset}>Reset</button>
        </div>
    )
}