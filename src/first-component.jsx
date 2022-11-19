import React, {Component} from 'react';
// We make react components in jsx in order to differentiate it from our normal js files
export default class FirstComponent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const element = (<div>Changing the value of element</div>)
        //  displaytext is whatever text is passed into the input whenever this component is called, since it is part of the props
        return (<div className="comptext">
            <h3>Changed the heading</h3>
                {this.props.displaytext}
                {element}
            </div>
        )
    }
}