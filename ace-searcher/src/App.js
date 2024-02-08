import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      name : 'King Eddie'
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Hello I'm {this.state.name}</h1>
          <button onClick={() =>{
            this.setState(
              () => {
                return{
                  name: "Queen Esther"
                }
              },
              () => {
                console.log(this.state)
              }
              )
          }}>
            Change Name
          </button>
          render()
        </div>
        
      </div>
    );
  }
}

export default App;
