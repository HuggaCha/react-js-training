import React, { Component } from 'react';
import './App.css';
import Message from './Message/Message';
import Radium, {StyleRoot} from 'radium'

class App extends Component {
  

  state = {
    persons : [
      {id:'asfa1', name: 'Max', age: 28},
      {id:'vasdf1', name: 'Manu', age: 29}, 
      {id:'asdf11', name: 'Stephanie', age: 26}
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
  color: 'white',
  ':hover': {
    backgroundColor: 'lightgreen',
    color: 'black'
  }
 };

 


return (
  <StyleRoot>
    <div className="App">
      <h1>React App </h1>
      <Message style={style} />

     </div>
   </StyleRoot>
   );
 //return React.createElement('div', {className: 'App' }, React.createElement('h1', null,  'Does this work now?'));
  
  }
}

export default Radium (App);