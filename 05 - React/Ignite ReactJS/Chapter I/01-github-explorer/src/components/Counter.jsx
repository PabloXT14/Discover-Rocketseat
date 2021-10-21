import { useState } from "react";

export function Counter() {
    const [counter, setCounter] = useState(0);

    function increment() {
        setCounter(counter + 1);
    }

    return (
        <div>
            <h2>Contador</h2>
            <div className="counterBox">
                <span>{counter}</span>
                <button type="button" onClick={increment}>
                    Increment
                </button>
            </div>

        </div>
    );
}