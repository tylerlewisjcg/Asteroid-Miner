import React, { Component } from 'react';
class Asteroid extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <option value={this.props.asteroid}>{this.props.asteroid}</option>
         )
    }
}
 
export default Asteroid;