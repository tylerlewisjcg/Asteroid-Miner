import React, { Component } from 'react';
import axios from 'axios';
import './App.css';




class App extends Component {
  constructor() {
    super();
    this.state = { 
      totalCash: 0,
      totalStorage: 0,
      shipCapacity: 0,

     }
  }

sellAmount(val){
    this.setState({
      totalStorage: this.state.totalStorage-val,
      totalCash: this.state.totalCash += val *2
    });
}

loadShip(){
  this.setState({shipCapacity: this.state.shipCapacity += 1})
  console.log(this.state.shipCapacity);
  if(this.state.shipCapacity >= 50){console.log("Ship is Full");
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
          <section>
            <h3>Mine</h3>
              <img src='https://res.cloudinary.com/engineering-com/image/upload/w_640,h_640,c_limit,q_auto,f_auto/Asteroid_2_he1p7w.jpg' alt='Mine Image'/>
              <button onClick={
                () =>   this.loadShip()
              }>Mine</button>
          </section>
          <section>
            <h3>Cargo Ship</h3>
            <img src='https://pre00.deviantart.net/fb8b/th/pre/f/2014/337/9/9/cargo_ship_by_stoupa-d88j33s.jpg' alt='Cargo Ship Image'/>          
              <span>Capacity: {this.state.shipCapacity}/50</span>
              <button onClick={
                () =>  this.unloadCargo()
              }>Ship</button>
          </section>
          <section>
            <h3>Warehouse</h3>
            
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa-TxhUVYJHdTcnFK2zWFErnJtfPAFZruhlH1cqidrZWq1_Npc' alt='Warehouse Image'/> 
            <span>Storage: {this.state.totalStorage}</span>
            <div className="sell_div">
              <span> Amount:</span>
              <input className="sell_amount" onChange={(e) =>this.sellAmount(e.target.value) }/>
              <button onClick={
                () =>  console.log("Storage Sold")
              }>Sell</button>
            </div>
          </section>
        </div> 
      </div>
    )
  }
}
 
export default App;