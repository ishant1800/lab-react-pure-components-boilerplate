import React, { useState } from 'react';

const PureCounter = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  const toggleToggle = () => {
    setToggle(!toggle);
  };

  const increment = () => {
    if (toggle) {
      setCount(count + 1);
    }
  };

  console.log('This is a pure Component');

  return (
    <div>
      <h1>Pure Component</h1>
      <p>{count}</p>
      <button onClick={toggleToggle}>SetToggle</button>
      <button onClick={increment}>Counter</button>
    </div>
  );
};

export default PureCounter;