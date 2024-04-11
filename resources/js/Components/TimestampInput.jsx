import React, { forwardRef, useEffect, useRef } from 'react';

const TimestampInput = forwardRef(({ className = '', isFocused = false, ...props }, ref) => {
    const inputRef = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            inputRef.current.focus();
        }
    }, [isFocused]);

    return (
        <input
            {...props}
            type="date" 
            className={
                'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm' +
                className
            }
            ref={inputRef}
        />
    );
});

export default TimestampInput;
