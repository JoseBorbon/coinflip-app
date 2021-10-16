import React, { Component } from 'react';
import Coin from './Coin';
import './FlipCoin.css';

class FlipCoin extends Component {
  static defaultProps = {
    coinFlip: ['heads', 'tails'],
  };
  constructor(props) {
    super(props);
    this.state = {
      flipping: true,
      side: this.props.coinFlip[0],
    };
    this.flip = this.flip.bind(this);
  }

  flip() {
    this.setState({
      flipping: true,
      side: this.props.coinFlip[
        Math.floor(Math.random() * this.props.coinFlip.length)
      ],
    });
  }

  render() {
    return (
      <>
        <div>
          <Coin tossResult={this.state.side} />
        </div>
        <button onClick={this.flip}>Click To Flip!</button>
      </>
    );
  }
}

export default FlipCoin;
