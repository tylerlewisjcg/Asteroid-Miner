import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Mine from './components/Mine';
import Ship from './components/Ship';
import Warehouse from './components/Warehouse';
import UserInfo from './components/UserInfo';
import Asteroid from './components/Asteroid';
import Edit from './components/Edit';
import Logo from './components/Logo';
class App extends Component {
  constructor() {
    super();
    this.state = { 
      users: [],
      totalCash: 0,
      totalStorage: 0,
      shipCapacity: 0,
      amtToSell:0,
      asteroids: [],
      asteroid: '',
      userName: "",
      shipName: "",
      id: 0
     }
    this.loadShip = this.loadShip.bind( this ); 
    this.unloadCargo = this.unloadCargo.bind(this);
    this.sellAmount = this.sellAmount.bind(this);
    this.sell = this.sell.bind(this);
    this.getUsers = this.getUsers.bind(this);
    this.userChange = this.userChange.bind(this);
    this.changeShipName = this.changeShipName.bind(this);
    this.changeUserName = this.changeUserName.bind(this);
  }
  componentDidMount() {
    this.getAsteroids();
    }
    getAsteroids() {
      axios.get('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=PgYNn5EOacMDJevdz4nESPNvJ4W4qPcz7yB1capC')
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
    alert("You Have Nothing to Sell!");
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


getUsers(){
  axios.get('/api/users')
  .then(res=> 
      {  console.log(res);
        if(res.data.length === 0){
          this.setState({
            userName: '',
            shipName:''
          })
        }
        else{
    this.setState({
      users: res,
      userName: res.data[res.data.length - 1].userName,
      shipName: res.data[res.data.length - 1].shipName,
      id: res.data[res.data.length - 1].id
    })}
    console.log(this.state.users);
      });
}


removeUser(id) {
  axios.delete( '/api/users'+ `/${id}`).then( response => {
    console.log(response);
  });
}

userChange(event) {
  this.setState({[event.target.name]: event.target.value});
console.log(event.target.value);
}

changeUserName(id, userName){
axios.put('/api/users' + `/${id}`, {userName})
.then(res => {
  this.setState({userName: res.data.userName})
})
}
changeShipName(id, shipName){
  axios.put('/api/users' + `/${id}`, {shipName})
  .then(res => {
    this.setState({shipName: res.data.shipName})
  })
  }


  render() { 
    return ( 
      <div className="app">
    
        <div> 
        <div className="logoBar"><Logo/><h1>Asteroid Miner</h1><Logo/></div>
        <button onClick ={this.getUsers}>Load Current Profile</button>
        <div className="logoutDiv">
        <section className="headerButtons">
        <div className="editDiv">
        <h2>Hello Captain {this.state.userName}</h2>
        <h2>Commander of the cargo ship {this.state.shipName}</h2>
        <h2>Mining on Asteroid {this.state.asteroid}</h2>
      
        </div>







        </section>
        </div>
       
        <header>  
            <select onChange={ (e) => this.setAsteroid(e) }>
              <option value=''>Select an Asteroid</option>
              {this.state.asteroids.map(function(asteroid, index){
              return <Asteroid
              asteroid={asteroid.name}
              />
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
        <div className="footer">
        <UserInfo /> 
        
        <Edit
       changeShipName={this.changeShipName}
       userChange={this.userChange}
       changeUserName={this.changeUserName}
       userName={this.state.userName}
       shipName={this.state.shipName}
       id={this.state.id}
       
       />
       <div className="deleteDiv">
        <button onClick = {()=>this.removeUser(this.state.id)} className="deleteButton">Delete Profile</button>
       </div>
       </div>
      </div>
    )
  }
}
export default App;