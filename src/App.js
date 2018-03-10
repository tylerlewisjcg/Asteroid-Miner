import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Mine from './components/Mine';
import Ship from './components/Ship';
import Warehouse from './components/Warehouse';


class App extends Component {
  constructor() {
    super();
    this.state = { 
      totalCash: 0,
      totalStorage: 0,
      shipCapacity: 0,
      amtToSell:0
     }

    this.loadShip = this.loadShip.bind( this ); 
    this.unloadCargo = this.unloadCargo.bind(this);
    this.sellAmount = this.sellAmount.bind(this);
    this.sell = this.sell.bind(this);
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
    alert("You Must Aquire More Minerals");
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



  render() { 
    return ( 
      <div className="app">
        <h1>Asteroid Miner</h1>
        <header>  
          <button onClick={
            ()=> console.log("hello")
            } >Select Asteroid to Mine</button>
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
    )
  }
}
 
export default App;