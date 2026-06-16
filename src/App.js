import React from 'react';
import EmpList from './Components/EmpList/EmpList'; // Point to the JS file

function App() {
  return (
    <div className="App">
      {/*  Make sure you are rendering it as a component tag */}
      <EmpList /> 
    </div>
  );
}

export default App;