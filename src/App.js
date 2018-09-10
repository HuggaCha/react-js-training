import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  

  state = {
    persons : [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29}, 
      {name: 'Stephanie', age: 26}
    ], 

    otherState : 'some other value', 

    showPersons: false
  }

switchNameHandler = (newName) => {
 //console.log('Was clicked!'); 
 // Don't do this: this.state.persons[0].name = 'Maximilian'; 
 this.setState({
  persons : [
      {name: newName, age: 28},
      {name: 'Manu', age: 29}, 
      {name: 'Stephanie', age: 29 }
    ]


 })
}

nameChangedHandler = (event) => {

  this.setState({
  persons : [
      {name:  'Max', age: 28},
      {name: event.target.value, age: 29}, 
      {name: 'Stephanie', age: 26}
    ]

 })
}

togglePersonsHandler = () => {
  const doesShow = this.state.showPersons; 
  this.setState({
    showPersons: !doesShow
  });
}



render() {

 const style = {
  backgroundColor: 'white',
  font: 'inherit',
  border: '1px solid blue',
  borderRadius: '5px', 
  padding: '8px', 
  cursor: 'pointer',
  color: 'red'
 };

 let persons = null; 

 if (this.state.showPersons){

  persons = (
     <div>
           <Person 
           name = {this.state.persons[0].name} 
           age = {this.state.persons[0].age}
           click = {this.switchNameHandler.bind(this,"Echo 1")} />
          <Person 
           name = {this.state.persons[1].name} 
           age = {this.state.persons[1].age}
           click = {this.switchNameHandler.bind(this, 'Murka')}
           changed = {this.nameChangedHandler}> 
           My Hobbies: Racing 
           </Person> 
          <Person 
           name = "Stephanie" 
           age = "26" />
    </div> 
    );

 }

return (
      <div className="App">
      <h1>Hi,I am React App </h1>
      <p>This is really working !</p>
      <button 
      style = {style}
      onClick = {this.togglePersonsHandler}> Switch Name </button> 
      {persons}
     
             
      
     </div>
   );
 //return React.createElement('div', {className: 'App' }, React.createElement('h1', null,  'Does this work now?'));
  
  }
}

export default App;
