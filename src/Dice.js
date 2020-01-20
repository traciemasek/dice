import React from 'react'
import './Dice.css'

function Dice(props) {
  const { num, isRolling } = props
  return (
    <div>
      <i className={`Dice fas fa-dice-${num} ${isRolling && 'rolling' }`}></i>
    </div>
  )
}

export default Dice
