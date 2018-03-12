import React, { Component } from 'react';
class Logo extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <img src= "https://solarstory.net/img/articles/big/image-of-ceres-taken-by-dawn-spacecraft.jpg" alt="cool story" className="logo"/>
        </div> )
    }
}
 
export default Logo;