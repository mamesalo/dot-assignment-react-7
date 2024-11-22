import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0); // State to track the count
  const [isRunning, setIsRunning] = useState(false); //
  useEffect(() => {
    let timer;

    if (isRunning) {
      // Start the timer
      timer = setInterval(() => {
        setCount((prevCount) => prevCount + 1); // Increment the count every second
      }, 1000);
    }

    return () => {
      // Cleanup the timer when the component unmounts or isRunning changes
      clearInterval(timer);
    };
  }, [isRunning]);

  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">Counter: {count}</h1>
      <div className="flex justify-center gap-4">
        <button
          disabled={isRunning}
          className={`px-4 py-2 text-white rounded ${
            isRunning ? `bg-gray-600 ` : `bg-green-500 hover:bg-green-600`
          }`}
          onClick={() => setIsRunning(true)}
        >
          Start
        </button>
        <button
          disabled={!isRunning}
          className={`px-4 py-2 text-white rounded ${
            !isRunning ? `bg-gray-600 ` : `bg-red-500 hover:bg-red-600`
          }`}
          onClick={() => setIsRunning(false)}
        >
          Stop
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
