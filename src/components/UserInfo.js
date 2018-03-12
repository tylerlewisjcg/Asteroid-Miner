import React, { Component } from 'react';
import axios from 'axios';
import Login from './Login';
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
        this.createPlayer=this.createPlayer.bind(this);
        this.createUser=this.createUser.bind(this);
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

    createUser(){
        let newUser = {userName: this.state.userName, 
        shipName: this.state.shipName
        }
        axios.post('http://localhost3005/api/users', newUser)
        .then(res => {
          console.log(res);
        })
      }

    render() { 
        return ( 
        <div>
         {this.state.showForm ?
            <form className="userInfo" onSubmit={ (e) => this.handleSubmit()}>
            <span className="inputLabel">Name:</span>
            <input name='userName' value={this.state.userName} onChange= { (e) => this.handleChange(e)} className="userInput"/>
            <span className="inputLabel">Ship Name:</span>
            <input name='shipName' value={this.state.shipName} onChange={ (e) => this.handleChange(e)} className="userInput"/>
            <button className="submit" onClick={this.createUser}>Submit</button>
            </form>
            :
            <Login
            createPlayer = {this.createPlayer}
            />}
            {console.log(this.state.users)}

        </div> 
        )
    }
}
 
export default UserInfo;
