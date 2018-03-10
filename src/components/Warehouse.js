import React, { Component } from 'react';
function Warehouse(props){
        return ( 
            <section>
            <h3>Warehouse</h3>
            
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa-TxhUVYJHdTcnFK2zWFErnJtfPAFZruhlH1cqidrZWq1_Npc' alt='Warehouse Image'/> 
            <span>Storage: {props.totalStorage}</span>
            <div className="sell_div">
              <span> Amount:</span>
              <input className="sell_amount" onChange={(e) =>props.sellAmount(e.target.value) }/>
              <button onClick={
                () =>  {props.sell()}
              }>Sell</button>
            </div>
          </section>
         )
    }
 
export default Warehouse;