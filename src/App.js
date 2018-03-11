import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Mine from './components/Mine';
import Ship from './components/Ship';
import Warehouse from './components/Warehouse';
import UserInfo from './components/UserInfo';


class App extends Component {
  constructor() {
    super();
    this.state = { 
      totalCash: 0,
      totalStorage: 0,
      shipCapacity: 0,
      amtToSell:0,
      asteroids: [],
      asteroid: '',
      loggedIn: true
     }

    this.loadShip = this.loadShip.bind( this ); 
    this.unloadCargo = this.unloadCargo.bind(this);
    this.sellAmount = this.sellAmount.bind(this);
    this.sell = this.sell.bind(this);
  }


  componentDidMount() {

    this.getAsteroids();
    
    }


    getAsteroids() {

      axios.get('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY')
      
      .then(response => this.setState(
      
      {asteroids: response.data.near_earth_objects}
      
      ))
      
      
    }

    
setAsteroid(e) {

  this.setState(
  
  {asteroid: e.target.value}
  
  )
  
  }

sellAmount(val){
    this.setState({
     amtToSell: val
    });

}

sell(val){
  let numberized = Number(this.state.totalStorage);
  let numberized2 = Number(this.state.amtToSell)
 
  if(this.state.totalStorage<=0){
    this.setState({totalStorage:0,
      totalCash: this.state.totalCash += 0
    })
    alert("You Must Construct Additonal Pylons");
  }
  else {
    this.setState({
      totalStorage: numberized -= numberized2,
      totalCash: this.state.totalCash += numberized2 * 5
     })
  }

}

loadShip(){
  this.setState({shipCapacity: this.state.shipCapacity += 1})
  if(this.state.shipCapacity >= 50){
    alert("Your Ship is Full!");
    this.setState({shipCapacity: 50});
  
}
}
unloadCargo() {
  this.setState({totalStorage: this.state.totalStorage += this.state.shipCapacity,
    shipCapacity:0  
  })
}
logout(){
  this.setState ({
    loggedIn: false
  })
}


  render() { 
    return ( 
      <div className="app">
      {this.state.loggedIn ?
        <div> 
        <h1>Asteroid Miner</h1>
        <div className="logoutDiv">
        <h2>Hello Captain"PlayerName"</h2>
        <section className="headerButtons">
          <button className="editProfile">Edit Profile</button>
        <button className="logoutButton" onClick = {()=> this.logout()}>Logout</button>
        </section>
        </div>
        <h2>Captain of the Cargo Ship "ShipName"</h2>
        <h2>Mining on Asteroid{this.state.asteroid}</h2>
        <header>  
            <select onChange={ (e) => this.setAsteroid(e) }>
              <option value=''>Select an Asteroid</option>
              {this.state.asteroids.map(function(asteroid, index){
              return <option value={asteroid.name}>{asteroid.name}</option>
              })}
            </select>
          <h2>Total Cash: ${this.state.totalCash}</h2>
        </header>
        <div className="main_div">
        <Mine
        loadShip={this.loadShip}
        />
        <Ship
          unloadCargo={this.unloadCargo}
          shipCapacity={this.state.shipCapacity}
        />
        <Warehouse
        sellAmount={this.sellAmount}
        sell={this.sell}
        totalStorage={this.state.totalStorage}
        />
        </div> 
        </div>
        :
        <UserInfo/>
      }
      </div>
    )
  }
}
 
export default App;