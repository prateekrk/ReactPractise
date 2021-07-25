import React, { Component, createElement } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'; 
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import Validation from './Components/Validation'
import CharComponent from './Components/CharComponent'
import userInput from './UserInput/UserInput';
class App extends Component {
  state={
    persons:[
      {name:"Prateek",year:22,userName:"strangermf"},
      {name:"James",year:28,userName:"400+Bowler"},
      {name:"Ricciardo",year:35,userName:"Oz"}
    ],
    showPersons:false,
    userInput: ""
  }  

  inputChangeHandler= (event) =>{
    this.setState({
      userInput:event.target.value
    })
  }

  nameChangeHandler=( event, id)=>{
    const personIndex=this.state.persons.findIndex(p =>{
      return p.userName===id;
    })

    const person={
      ...this.state.persons[personIndex]
    }
    // const persons=Object.age({},this.state.persons[personIndex]);

    person.name=event.target.value;

    const persons=[...this.state.persons];
    persons[personIndex]=person;

    this.setState({
      persons:persons
    })
  }

  deletePersonHandler= (personIndex) => {
    // const persons=this.state.persons.slice();
    const persons=[...this.state.persons]
    persons.splice(personIndex,1);
    this.setState({persons:persons})
  }

  togglePersonsHandler = () =>{
    const res=this.state.showPersons;
    this.setState({showPersons:!res})
  }

  deleteCharHandler=(charIndex) =>{
    const userInput=[...this.state.userInput]
    userInput.splice(charIndex,1);
    const updatedUserInput=userInput.join('')
    this.setState({userInput:userInput})
  }



  render() {
    const charList=this.state.userInput.toString().split(' ').map((ch,index) => {
      return (
        <CharComponent 
          char={ch}
          key={index}
          changed={()=>this.deleteCharHandler(index)}
        />
      )
    })

    const style={
      backgroundColor: "lightblue",
      font: 'inherit',
      padding: '8px ',
      border: '1px solid rgb(157, 24, 245)',
      borderRadius: '6px'
    }

    let persons=null;

    if(this.state.showPersons){
      persons =(
        
        <div>
          Dynamic List
          {this.state.persons.map((persons,index) => {
             return <Person 
              click={() => this.deletePersonHandler(index)}
              name={persons.name} 
              age={persons.age}
              userName={persons.userName}
              changed={(event) => this.nameChangeHandler(event,persons.userName)}
            />
          })}
        {/* <Person 
        name={this.state.persons[0].name} 
        year={this.state.persons[0].year}
        click={() => this.switchNameHandler("Prateek RK")}>UserName : {this.state.persons[0].userName}
      </Person>
      <Person  
        name={this.state.persons[2].name} 
        year={this.state.persons[2].year}>
          UserName : {this.state.persons[1].userName}
      </Person>
      <Person  
        name={this.state.persons[1].name} 
        year={this.state.persons[1].year}
        changed={this.nameChangeHandler}>
          UserName : {this.state.persons[2].userName}
      </Person> */}
      
    </div> 
      )
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> 
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>
            Switch Name
        </button>
        {persons}
        <hr/>
        <input 
          type="text" 
          onChange={this.inputChangeHandler}
          value={this.state.userInput}/>
        
        <Validation 
          inputLength={this.state.userInput.length}> 
        </Validation>
        <p>{this.state.userInput}</p>
        {charList}
      </div>
    );

  }
}

export default App;

