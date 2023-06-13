import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  return (
    <div>
      <button
        onClick={() => setNumbers((numbers) => [numbers[0] - 1, ...numbers])}
      >
        Add to beginning
      </button>
      <button
        onClick={() => {
          setNumbers([...numbers, numbers[numbers.length - 1] + 1]);
        }}
      >
        Add to end
      </button>
      {numbers.map((number) => {
        return <div key={number}>{number}</div>;
      })}
    </div>
  );
}
