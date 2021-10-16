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
      flipping: false,
      side: this.props.coinFlip[0],
    };
    this.flip = this.flip.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }

  flip() {
    let stopFlip = 0;
    const startFlip = setInterval(() => {
      if (this.state.side === 'heads') {
        this.setState({
          flipping: true,
          side: this.props.coinFlip[1],
        });
      } else {
        this.setState({
          flipping: true,
          side: this.props.coinFlip[0],
        });
      }

      if (stopFlip === 20) {
        clearInterval(startFlip);
      } else {
        stopFlip++;
      }
    }, 500);
  }

  //   getFlipResult() {
  //     this.setState({
  //       side: this.props.coinFlip[
  //         Math.floor(Math.random() * this.props.coinFlip.length)
  //       ],
  //       flipping: false,
  //     });
  //     console.log('we done')
  //   }

  //   handleClick() {
  //     this.flip();
  //     this.getFlipResult();
  //   }

  //button gets clicked
  //heads -> tails -> heads -> tails -> heads -> tails while spin animation occurs
  //get result after however many seconds passed

  render() {
    return (
      <>
        <div>
          <Coin
            tossResult={this.state.side}
            flipping={this.state.flipping ? 'CoinFlipping' : ''}
          />
        </div>
        <button onClick={this.flip}>Click To Flip!</button>
      </>
    );
  }
}

export default FlipCoin;
