import React from "react";
import { useState, useEffect } from "react";
// Note: here we are going to build a custom hook so we need to start the function name with 'use' and this is must and filename can be of any name
// Note again: function name must Star with 'use' to use custom hooks and thereafter name it however you want
// copy the code which is causing duplication and place it inside the custom hook function 
// custom hooks can also accept the parameters to check certain condition
const useCounter = (backward = true) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (backward) {
                setCounter((prevCounter) => prevCounter - 1);
            }
            else {
                setCounter((prevCounter) => prevCounter + 1);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [backward]);

    return counter
}

export default useCounter