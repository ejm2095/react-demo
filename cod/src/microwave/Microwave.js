import React, { Component } from 'react'
import CookingChamber from './CookingChamber'
import Keypad from './Keypad'

class Microwave extends Component {
  constructor(props) {
    super(props);        
  }

  render() {    
    return (
      <div class="microwave-oven">
        <CookingChamber />
        <Keypad />
      </div>
    )
  }
}

export default Microwave