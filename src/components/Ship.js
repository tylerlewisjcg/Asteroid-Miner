import React, { Component } from 'react';
function Ship (props){
        return ( 
            <section>
            <h3>Cargo Ship</h3>
            <img src='https://pre00.deviantart.net/fb8b/th/pre/f/2014/337/9/9/cargo_ship_by_stoupa-d88j33s.jpg' alt='Cargo Ship Image'/>          
              <span className="count">Capacity: {props.shipCapacity}/50</span>
              <button onClick={
                () =>  props.unloadCargo()
              }>Ship</button>
          </section>
         )
    
}
 
export default Ship;