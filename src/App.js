import React, { Component } from 'react';
import './App.css';
import Message from './Message/Message';
import Radium, {StyleRoot} from 'radium';
import Login from './Login/Login';

class App extends Component {
  

  state = {
    persons : [
    
    ], 

    otherState : 'some other value', 

    showPersons: false
  }

render () {

 const style = {
  backgroundColor: 'green',
  font: 'inherit',
  border: '1px solid blue',
  padding: '8px', 
  cursor: 'pointer',
  color: 'yellow',
  ':hover': {
    backgroundColor: 'lightgreen',
    color: 'black'
  }
 };

 return (
  <StyleRoot>
    <div className="App">
      <h2 style={style}>React App Prototype </h2>
      <p>Please enter your username and password below:</p>
      <Login />
     </div>
   </StyleRoot>
   );
 //return React.createElement('div', {className: 'App' }, React.createElement('h1', null,  'Does this work now?'));
  
  }
}

export default Radium (App); 

