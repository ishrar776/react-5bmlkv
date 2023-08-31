import React, { useState, createContext } from 'react';
import './style.css';
import Child from './Child';
const GlobalStateContext = createContext();
export default function App() {
  const [state, setState] = useState({});
  return (
    <GlobalStateContext.Provider value={'khan'}>
      <Child />
    </GlobalStateContext.Provider>
  );
}
export { GlobalStateContext };
