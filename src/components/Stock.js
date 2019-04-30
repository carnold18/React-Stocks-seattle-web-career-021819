import React from 'react'

// Calling props.stock.name VS props.name (look at the nesting of your data)

const Stock = (props) => (
  
  <div>

    <div className="card" onClick={() => props.handleClick(props.stock)}>
      <div className="card-body">
        <h5 className="card-title">{props.stock.name}</h5>
        <p className="card-text">{props.stock.price}</p>
      </div>
    </div>

  </div>
);

export default Stock
