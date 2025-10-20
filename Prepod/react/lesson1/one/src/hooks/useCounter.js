import React, { useState } from 'react';



export const useCounter = (limit, step) => {
    const [counter, setCounter] = useState(0);


    const increment = () => {
        setCounter((prevCounter) => {
            if (limit === prevCounter) {
                return prevCounter;
            }

            return prevCounter + step;
        });
    };

    const decrement = () => {
        setCounter((prevCounter) => {
            if (prevCounter === 0) {
                return prevCounter;
            }

            return prevCounter - step;
        });
    };


    return {
        increment,
        decrement,
        counter
    };
};