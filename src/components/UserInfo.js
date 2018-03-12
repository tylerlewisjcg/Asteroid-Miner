import React, { Component } from 'react';
import axios from 'axios';
import Login from './Login';
class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            users: [],
            userName: "",
            shipName: "",

        }
        this.createPlayer=this.createPlayer.bind(this);
       
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }


    createPlayer(){
        console.log("run");
        let newUser = {userName: this.state.userName, 
            shipName: this.state.shipName
            }
        axios.post('/api/users', this.state)
        .then(res=> 
            {  console.log(res);
                this.setState({users: res.body});
        
        });
    }


    render() { 
        return ( 
        <div className="newPlayer">
            <form className="userInfo" >
            <h2>New Player</h2>
            <span className="inputLabel">Name:</span>
            <input name='userName' value={this.state.userName} onChange= { (e) => this.handleChange(e)} className="userInput"/>
            <span className="inputLabel">Ship Name:</span>
            <input name='shipName' value={this.state.shipName} onChange={ (e) => this.handleChange(e)} className="userInput"/>
            </form>
            <button className="submit" onClick={this.createPlayer}>Submit</button>

        </div> 
        )
    }
}
 
export default UserInfo;
