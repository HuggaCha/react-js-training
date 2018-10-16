import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
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

deletePersonHandler = (personIndex) => {
  //const persons = this.state.persons.slice(); //this will create a copy of the persons array
  const persons = [...this.state.persons]; // a copy of a new array with "spread operator"
  persons.splice(personIndex, 1); // removes one element 
  this.setState({persons: persons})
}

nameChangedHandler = (event, id) => {

const personIndex = this.state.persons.findIndex(p => {
  return p.id === id; 
});

const person = {
  ...this.state.persons[personIndex]
};
//const person = Object.assign({}, this.state.persons[personIndex])

person.name = event.target.value; 
const persons = [...this.state.persons];
persons[personIndex]=person;



  this.setState({persons: persons})
}

togglePersonsHandler = () => {
  const doesShow = this.state.showPersons; 
  this.setState({
    showPersons: !doesShow
  });
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

 let persons = null; 

 if (this.state.showPersons){

  persons = (
     <div>
          {this.state.persons.map((person, index) => {
            return <Person
            click = {(event) => this.deletePersonHandler(index)} 
            name={person.name}
            age={person.age} 
            key={person.id} 
            changed={(event)=>this.nameChangedHandler(event, person.id)}/>
          })}
           
    </div> 
    );

    style.backgroundColor = 'red';
    style[':hover']= {
    backgroundColor: 'lightred',
    color: 'black'
  }
 }

 const classes = [];
 if (this.state.persons.length <= 2){
  classes.push('red'); // classes =['red']
 }
 if (this.state.persons.length <= 1){
  classes.push('bold');//classes = ['red', 'bold']
 }


return (
  <StyleRoot>
      <div className="App">
      <h1>Hi,I am React App </h1>
      <p className={classes.join(' ')}>This is really working !</p>
      <button 
      style = {style}
      onClick = {this.togglePersonsHandler}> Switch Name </button> 
      {persons}
      
     </div>
    </StyleRoot>
   );
 //return React.createElement('div', {className: 'App' }, React.createElement('h1', null,  'Does this work now?'));
  
  }
}

export default Radium (App);