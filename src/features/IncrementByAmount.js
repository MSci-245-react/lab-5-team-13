import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementByAmount } from './counterSlice';

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('');

  const handleIncrement = () => {
    dispatch(incrementByAmount(Number(incrementAmount) || 0));
    setIncrementAmount('');
  };

  return (
    <div>
      <div>
        <input
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
          type="text"
          placeholder="Enter increment amount"
        />
        <button
          aria-label="Increment value by amount"
          onClick={handleIncrement}
        >
          Increment by amount
        </button>
        <span>{count}</span>
      </div>
    </div>
  );
}