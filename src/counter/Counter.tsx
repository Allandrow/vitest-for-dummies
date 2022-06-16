import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button
        type="button"
        onClick={() => setCount((previousCount) => previousCount - 1)}>
        Decrement
      </button>
      <h2>Count is : </h2>
      <h3>{count}</h3>
      <button
        type="button"
        onClick={() => setCount((previousCount) => previousCount + 1)}>
        Increment
      </button>
    </>
  );
}

export default Counter;
