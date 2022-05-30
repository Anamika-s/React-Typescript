import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './Profile';
import {Todo} from './Todo';
import {TodoUn} from './TodoUn';

function App() {
  return (
    <div className="App">
     <TodoUn/>
      {/* <Todo/> */}
     {/* <Profile name="Ajay" age={23} status="tester"/>
     
     <Profile age={21} status="tester"/>
     <Profile age={21} status="coder"/>
     <Profile age={21} status="tester">
       <span style={{color:"red"}}> salary - 25 K </span>
       </Profile> */}
     </div>
  );
}

export default App;
