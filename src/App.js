import React, { Component } from 'react';
import './App.css';

import UserOutput from './userOutput/userOutput';
import UserInput from './userInput/userInput';

class App extends Component {

  state = {
    users: [
      { userName: 'm_kempinsky'}
    ]
  }

  changeUserNameHandler = (event) => {
    this.setState({
      users: [
        { userName: event.target.value }
      ]
    })
  }
  clearUserNameHandler = (event) => {
    this.setState({
      users: [
        { userName: '' }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h2>React Demo Project #2</h2>
        <UserInput  
          userName={this.state.users[0].userName} 
          changed={this.changeUserNameHandler} 
          clicked={this.clearUserNameHandler}
        />
        <UserOutput userName={this.state.users[0].userName} />
      </div>
    );
  }
}

export default App;
