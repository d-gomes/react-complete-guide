import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Max2', age: 26 },
      { name: 'Max3', age: 24 }

    ], 
    otherState: 'Some other Value'
  }

  switchNameHandler = (newName) => {
    // console.log('Was Clicked');
    // DON'T DO THIS: this.state.persons[0].name = "Maximium";
    this.setState({
      persons: [
        {name: newName, age: 28},
        {name: 'Manu', age: 29},
        {name:'Vanessa', age:26}
      ]
    })
  }

  nameChangedHandler = (event) => {
    // console.log('Was Clicked');
    // DON'T DO THIS: this.state.persons[0].name = "Maximium";
    this.setState({
      persons: [
        {name: 'Maxi', age: 28},
        {name: event.target.value, age: 29},
        {name:'Vanessa', age:26}
      ]
    })
  }

  render() {

        //const tagh1 = React.createElement('h1', null, 'Hi, Im a React App');
        
        //const tagPerson = React.createElement( 'Person', { name: this.state.persons[0].name, age: this.state.persons[0].age } );
        //const tagPerson1 = React.createElement( 'Person', { name: this.state.persons[1].name, age: this.state.persons[1].age } );
        //const tagPerson2 = React.createElement( 'Person', { name: this.state.persons[2].name, age: this.state.persons[2].age });
        
        //const tagButton = React.createElement( 'button', { onClick: this.switchNameHandler }, 'Switch Name');

      //return React.createElement( 'div', { className: 'app' }, tagh1 );

      const style = {
        background: 'white',
        font: 'inherit',
        border: '1px solid blue',
        paddind: '8px',
        cursor: 'pointer'
      }

      return (
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p>This is really working!</p>
          <button 
            style={style} 
            onClick={() => this.switchNameHandler('Maximiliuns!!')}>Switch Name</button>
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}/>
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Blab')}
            changed={this.nameChangedHandler}>My Hobbies: Racing</Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}/>
        </div>
      );
  }
}


export default App;
