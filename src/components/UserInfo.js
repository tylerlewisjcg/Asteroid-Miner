import React, { Component } from 'react';
class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            userName: "",
            shipName: "",
            currentCash: 0,
            currentStorage: 0,
            currentShipCapacity: 0,
            inServiceSince: new Date(),
            showForm: false
        }
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(){
        this.setState({showForm: false});
    }

    createPlayer(){
        this.setState({showForm: true});
    }

    // need  a ternary function to show user info on submit
    // need an edit feature to edit userName and shipName
    // need axios request methods to communicate with my API
    // needendpoints in my controller to handle requests

    render() { 
        return ( 
        <div>
         {this.state.showForm ?
            <form className="userInfo" onSubmit={ (e) => this.handleSubmit()}>
            <span className="inputLabel">Name:</span>
            <input name='userName' value={this.state.userName} onChange= { (e) => this.handleChange(e)} className="userInput"/>
            <span className="inputLabel">Ship Name:</span>
            <input name='shipName' value={this.state.shipName} onChange={ (e) => this.handleChange(e)} className="userInput"/>
            <button className="submit">Submit</button>
            </form>
            :
            <button onClick={ ()=> this.createPlayer()}>New Player</button>}

        </div> 
        )
    }
}
 
export default UserInfo;
