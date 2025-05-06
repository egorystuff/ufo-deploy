import { useState, useEffect } from "react";
import './site-styles/counter-block.css'

const Counter = () => {
    const start = 17515132;
    const end = 17515999;
    const [count, setCount] = useState(start);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prev) => (prev < end ? prev + 1 : start));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <p className="counter">
            {count.toLocaleString("ru-RU")}
        </p>
    );
};

export default Counter;
