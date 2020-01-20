import React, { Component } from 'react'
import Dice from './Dice'
import './RollDice.css'

class RollDice extends Component {
  state = {
    dice1: "one",
    dice2: "one",
    isRolling: false
  }

  roll = e => {
    this.setState({
      dice1: this.getRandNum(),
      dice2: this.getRandNum(),
      isRolling: true
    })
    //wait one second then set isRolling to false
    setTimeout(() => {
      this.setState({ isRolling: false });
    }, 1000);
  }

  getRandNum = () => {
    let nums = ["one", "two", "three", "four", "five", "six"]
    let randIndx = Math.floor(Math.random() * nums.length)
    return nums[randIndx]
  }

  render() {
    const { dice1, dice2, isRolling } = this.state
    return (
      <div className="RollDice">
        <div className="RollDice-container">
          <Dice num={dice1} isRolling={isRolling}/>
          <Dice num={dice2} isRolling={isRolling}/>
        </div>
        <button onClick={this.roll} disabled={isRolling}>
          {isRolling 
          ? "Rolling..."
          : "Roll Dice!"}
        </button>
      </div>
    )
  }
}

export default RollDice
