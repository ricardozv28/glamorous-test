import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import glamorous, { Div } from 'glamorous';

const MyComponent = glamorous.div(
  props => props
)

const myProps = {
  color: 'red',
  fontSize: 30
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <MyComponent {...myProps}>Welcome to React</MyComponent>
        </div>
        <Div {...myProps} className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </Div>
      </div>
    );
  }
}

export default App;
