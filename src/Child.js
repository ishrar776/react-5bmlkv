// import React, { useContext, useState } from 'react';
// import { FirstNmae } from './App';
// const Child = () => {
//   const myvalue = useContext(FirstNmae);
//   return <div>what {myvalue}</div>;
// };
// export default Child;

import React, { useContext, createContext } from 'react';
import { GlobalStateContext } from './App';
const ChildComponent = () => {
  const [state, setState] = useContext(GlobalStateContext);
  const handleClick = () => {
    setState((prevState) => ({ ...prevState, message: 'Hello, world!' }));
  };
  return (
    <div>
      <p>{state.message}</p>
      <button onClick={handleClick}>Update State</button>
    </div>
  );
};
export default ChildComponent;
