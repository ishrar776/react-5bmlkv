// import React, { createContext } from 'react';
// import './style.css';
// import ComB from './Child.js';
// const FirstNmae = createContext();
// export default function App() {
//   return (
//     <>
//       <FirstNmae.Provider value={'israrKhan'}>
//         <ComB />
//       </FirstNmae.Provider>
//     </>
//   );
// }
// export { FirstNmae };

// import React, { useState, createContext } from 'react';
// import ChildComponent from './Child';
// const GlobalStateContext = createContext();

// const App = ({ children }) => {
//   const [state, setState] = useState({});

//   return (
//     <GlobalStateContext.Provider value={[state, setState]}>
//       {children} <ChildComponent />
//     </GlobalStateContext.Provider>
//   );
// };
// export default App;
// export { GlobalStateContext };

import React, { useContext, createContext } from 'react';
import { GlobalStateContext } from './Child';
import ChildComponent from './Child';
const App = () => {
  const [state, setState] = useContext(GlobalStateContext);
  const handleClick = () => {
    setState((prevState) => ({ ...prevState, message: 'Hello, world!' }));
  };
  return (
    <div>
      <ChildComponent />
      <p>{state.message}</p>
      <button onClick={handleClick}>Update State</button>
    </div>
  );
};
export default App;
