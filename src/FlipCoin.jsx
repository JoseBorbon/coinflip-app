import React, { Component } from 'react';
import Coin from './Coin';
import './FlipCoin.css';

class FlipCoin extends Component {
  static defaultProps = {
    coinFlip: ['heads', 'tails'],
    flipLimit: 5,
  };
  constructor(props) {
    super(props);
    this.state = {
      flipping: false,
      side: this.props.coinFlip[0],
      headsCount: 0,
      tailsCount: 0,
    };
    this.flip = this.flip.bind(this);
    // this.incrementCount = this.incrementCount.bind(this);
    this.resetCounts = this.resetCounts.bind(this);
  }

  flip() {
    //guard clause to prevent further flips from occuring
    if (
      this.props.flipLimit ===
      this.state.headsCount + this.state.tailsCount
    ) {
      return;
    }
    let stopFlip = 0;
    const startFlip = setInterval(() => {
      if (this.state.side === 'heads') {
        this.setState(() => {
          return { flipping: true, side: this.props.coinFlip[1] };
        });
      } else {
        this.setState(() => {
          return { flipping: true, side: this.props.coinFlip[0] };
        });
      }

      if (stopFlip === 10) {
        this.setState(() => {
          return {
            flipping: false,
            side: this.props.coinFlip[
              Math.floor(Math.random() * this.props.coinFlip.length)
            ],
          };
        });
        clearInterval(startFlip);
        this.incrementCount();
      } else {
        stopFlip++;
      }
    }, 500);
  }

  incrementCount() {
    if (this.state.side === 'heads') {
      this.setState((curState) => {
        return { headsCount: ++curState.headsCount };
      });
    } else {
      this.setState((curState) => {
        return { tailsCount: ++curState.tailsCount };
      });
    }
  }

  resetCounts() {
    this.setState(() => {
      return { headsCount: 0, tailsCount: 0 };
    });
  }

  render() {
    return (
      <>
        <div>
          <Coin
            tossResult={this.state.side}
            flipping={this.state.flipping ? 'CoinFlipping' : ''}
          />
        </div>
        <p>
          There have been {this.state.headsCount} heads and{' '}
          {this.state.tailsCount} tails so far!{' '}
          {this.props.flipLimit > this.state.headsCount + this.state.tailsCount
            ? `${
                this.props.flipLimit -
                (this.state.headsCount + this.state.tailsCount)
              } flips remaining!`
            : `No more flips, reset to get more flips!`}{' '}
        </p>
        <button onClick={this.flip}>Click To Flip!</button>
        <button onClick={this.resetCounts}>Reset</button>
      </>
    );
  }
}

export default FlipCoin;
