import React, { Component } from 'react';
import './Coin.css';
import heads from './assets/images/heads.png';
import tails from './assets/images/tails.png';

class Coin extends Component {
  render() {
    return (
      <img
        src={this.props.tossResult === 'heads' ? heads : tails}
        alt="coin"
        className="Coin"
      />
    );
  }
}

export default Coin;
