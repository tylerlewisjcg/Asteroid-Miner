import React, { Component } from 'react';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="login_screen">
                <button onClick={ ()=> this.state.createPlayer()}>New Player</button>
                <button>Login</button>
            </div>
         )
    }
}
 
export default Login;