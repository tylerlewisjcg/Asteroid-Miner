import React, { Component } from 'react';
class UserInfo extends Component {
    constructor() {
        super();
        this.state = {  
            userName: "",
            shipName: "",
            currentCash: 0,
            currentStorage: 0,
            currentShipCapacity: 0,
            inServiceSince: 0
        }
    }

    /// need to onchange state for name input and ship name input, need an onclick submit to initialize
    ///need an onclick for new player to show player information, after submit is clicked, all new player buttons, submit buttons, everything is hidden and a new property shows up displaying there information
    ///need to pass in props from App.js to set state, also need axios methods to push everything to the server side database.
    render() { 
        return ( 
        <div className="userInfo">
            <button>New Player</button>
            <span className="inputLabel">Name:</span>
            <input className="userInput"/>
            <span className="inputLabel">Ship Name:</span>
            <input className="userInput"/>
            <button className="submit">Submit</button>
        </div> 
        )
    }
}
 
export default UserInfo;
