"use client";

import React, { useState } from "react";

type CounterProps = {};

const Counter: React.FC<CounterProps> = () => {
  const [count, setCount] = useState<number>(1);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div>
      <button
        onClick={decrement}
        className='px-2 m-1 text-2xl font-bold text-green-500 border-2 rounded-lg hover:bg-green-500 hover:text-white'
      >
        -
      </button>
      <span className='font-bold text-xl mx-1 text-gray-700'>{count}</span>
      <button
        onClick={increment}
        className='px-1.5 m-1 text-2xl font-semibold text-green-500 border-2 rounded-lg hover:bg-green-500 hover:text-white'
      >
        +
      </button>
    </div>
  );
};

export default Counter;
