import React from 'react';
import logo from './logo.svg';
import './App.css';
import Example1 from './example1';
import UserContextComponent from './usecontextComponent'
import FinalReducer from './usereducerComponent';
function App() {
  return (
    <div className="App">
      <Example1/>
      <h1>UseContext</h1>
      <UserContextComponent/>
      <h1>useReducer</h1>
      <FinalReducer/>

    </div>
  );
}

export default App;
