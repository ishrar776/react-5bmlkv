import React, { useContext } from 'react';
import GlobalStateContext from './App';
const Child = () => {
  const myvalue = useContext(GlobalStateContext);
  return <div>what {myvalue}</div>;
};
export default Child;
