import { useState, useRef, useEffect } from "react";

export default function MutationObs() {
    const [log, setLog] = useState('');
    const [children, setChildren] = useState([]);
    const observedRef = useRef(null);

    useEffect(() => {
        const targetElement = observedRef.current;
        const config = { attributes: true, childList: true, subtree: true };

        if (targetElement) {
            const callback = (mutations) => {

                console.log(mutations);
                setLog((prev) => [
                    ...prev,
                    "Child node added or removed.",
                ]);

            }
            const observer = new MutationObserver(callback);
            observer.observe(targetElement, config);
            return () => observer.disconnect();
        }

    }, []);

    const addElement = () => {
        setChildren((prev) => [...prev, <h1 key={Date.now()}>Hello dear</h1>]);
    }
    return (
        <div ref={observedRef}>
            {children}
            <button onClick={addElement}>Create</button>
        </div>
    );

}