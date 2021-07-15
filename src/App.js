import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'; './Person/Person'

class App extends Component {
  state={
    persons:[
      {name:"Prateek",year:22},
      {name:"James",year:28},
      {name:"Ricciardo",year:35}
    ]
  }

  switchNameHandler = (newName) =>{
    this.setState({
      persons:[
      {name:newName,year:22},
      {name:"James",year:28},
      {name:"Ricciardo",year:35}
    ]
  })
  }

  nameChangeHandler=(event)=>{
    this.setState({
      persons:[
      {name:"Prateek",year:22},
      {name:event.target.value,year:28},
      {name:"Ricciardo",year:35}
    ]
  })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> 
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.switchNameHandler.bind(this,"Prateek Kovalli")}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          year={this.state.persons[0].year}
          click={() => this.switchNameHandler("Prateek RK")}>My hobbies: Racing</Person>
        <Person  
          name={this.state.persons[2].name} 
          year={this.state.persons[2].year}>F1 racer</Person>
        <Person  
          name={this.state.persons[1].name} 
          year={this.state.persons[1].year}
          changed={this.nameChangeHandler}>Fast Bowler</Person>
       

      </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,"Hey i am prateek"))

  }
}

export default App;

