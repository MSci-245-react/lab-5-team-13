import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {incrementByAmount} from './counterSlice';

export default function Increment() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  const [inputCount, setInputCount] = React.useState(0);

  const handleChange = e => {
    const value = Number(e.target.value);
    if (!value){
      setInputCount(0);
    } else {
      setInputCount(value);
    }
  };

  return (
    <div>
      <div>
        <span>Current count: {count}</span>
      </div>
      <div>
        <input type="text" aria-label='Increment Amount' onChange={ handleChange }
          onKeyDown={(event) => {
            if (!/[0-9]/.test(event.key) && event.key != 'Backspace' && event.key != '-') {
              event.preventDefault();
            }
          }}
        ></input>
      </div>
      <div>
        <button
          aria-label="Increment by amount"
          onClick={() => dispatch(incrementByAmount(inputCount))}
          // onClick={() => dispatch({type: 'counter/incrementByAmount', payload: inputCount})}
        >
          Increment by Amount
        </button>
      </div>
    </div>
  );
}
