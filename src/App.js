import logo from './logo.svg';
import './App.css';
import FirstComponent from './first-component';
import Timer from './timer';
import React, {Component} from 'react';


class App extends Component {
  render() {
    return (
      <div className="App">
        
        <FirstComponent displaytext="Edited data"/>
        <Timer/>
      </div>
    );
  }
}
export default App;
