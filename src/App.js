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

import React, { useState, createContext } from 'react';
import ChildComponent from './Child';
const GlobalStateContext = createContext();

const App = ({ children }) => {
  const [state, setState] = useState({});

  return (
    <GlobalStateContext.Provider value={[state, setState]}>
      {children}israr <ChildComponent/>
    </GlobalStateContext.Provider>
  );
};
export default App;
export {GlobalStateContext};