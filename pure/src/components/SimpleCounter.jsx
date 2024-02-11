import React, { useReducer } from 'react';

const initialState = {
  count: 0,
  toggle: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'toggle':
      return {
        ...state,
        toggle: !state.toggle,
      };
    case 'increment':
      if (state.toggle) {
        return {
          ...state,
          count: state.count + 1,
        };
      }
      return state;
    default:
      throw new Error();
  }
};

const SimpleCounter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Simple Component</h1>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: 'toggle' })}>SetToggle</button>
      <button onClick={() => dispatch({ type: 'increment' })}>Counter</button>
    </div>
  );
};

export default SimpleCounter;