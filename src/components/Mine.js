import React, { Component } from 'react';
function Mine(props){

        return ( 
            <section>
            <h3>Mine</h3>
              <img src='https://res.cloudinary.com/engineering-com/image/upload/w_640,h_640,c_limit,q_auto,f_auto/Asteroid_2_he1p7w.jpg' alt='Mine Image'/>
              <button onClick={
                () =>  props.loadShip()
              }>Mine</button>
          </section>
         )

}
 
export default Mine;