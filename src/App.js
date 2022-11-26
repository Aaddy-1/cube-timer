import './App.css';
import StopWatch from './StopWatch.jsx';
import React, {Component} from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: new Date().getTime(),
    }
  }
  
  render() {
    return (
      <>
      <div className="App">
          <StopWatch startTime={this.state.startTime} />
        </div>
      </>
    );
  }
}
export default App;
