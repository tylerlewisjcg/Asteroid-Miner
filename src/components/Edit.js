import React, { Component } from 'react';
import axios from 'axios';
class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            users:"",
            userName:"",
            shipName:""
         }
    }

   
    render() { 
        return ( 
            <div className = "editInfo">
               <div className = "buttons">
         <h2>Edit Profile</h2>
        </div>
        <span className="inputLabel">Name:</span>
            <input name='userName' value={this.props.userName} onChange= { (e) => this.props.userChange(e)} className="userInput"/>
            <span className="inputLabel">Ship Name:</span>
            <input name='shipName' value={this.props.shipName} onChange={ (e) => this.props.userChange(e)} className="userInput"/>
            <button className="submit">Submit</button>
            </div>
         )
    }
}
 
export default Edit;