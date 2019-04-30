import React, { Component } from 'react';
import Stock from '../components/Stock';

class PortfolioContainer extends Component {

  // Need double returns here, if we return just the 2nd one, it will render
  // an empty div

  listStocks() {
    return this.props.stocks.map(stock => {
      return <Stock stock={stock} handleClick={this.props.handleClick} key={stock.id} />
    })
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
        {this.listStocks()}
      </div>
    );
  }

}

export default PortfolioContainer;
