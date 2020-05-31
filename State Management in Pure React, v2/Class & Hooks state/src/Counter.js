import React, { useState, useEffect } from 'react';

const useLocalStorage = (initialState, key) => {
  const get = () => {
    const storage = localStorage.getItem(key);
    if (storage) return JSON.parse(storage).value;
    return initialState;
  };

  const [value, setValue] = useState(get());

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify({ value }));
  }, [value, key]);

  return [value, setValue];
};

const Counter = ({ step }) => {
  const [count, setCount] = useLocalStorage(0, 'count');
  const countRef = React.useRef();

  let message = '';
  if (countRef.current > count && count !== 0) {
    message = 'Lower';
  } else if (countRef.current < count && count !== 0) {
    message = 'Higher';
  }

  countRef.current = count;

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => setCount(count - step);
  const reset = () => setCount(0);

  useEffect(() => {
    document.title = `Counter: ${count}`;
  }, [count]);

  useEffect(() => {
    const id = setInterval(() => {
      console.log('Count: ', count);
    }, 3000);

    return () => clearInterval(id);
  }, [count]);

  return (
    <div className="Counter">
      <p>{message}</p>
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </section>
    </div>
  );
};

export default Counter;
