import React from "react";
// We are going to stick to the convention of making one react component per file
// To improve maintainability


export default class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currTime: 0,
        }
    }
    
    incrementer() {
        this.setState({
            currTime: this.state.currTime + 1.
        });
    }
    render() {
        return (
            <div>
                <button class = "button" onClick={() => this.incrementer()}>
                </button>
                <h3>
                    {this.state.currTime}
                </h3>
            </div>
        )
    }
    
}