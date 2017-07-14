import React, { Component } from 'react';
import CookingChamber from './CookingChamber';
import Keypad from './Keypad';
import Timer from './Timer';

class Microwave extends Component {
  constructor(props) {
    super(props);    
  }

  

  render() {    
    let running = 'abc';
    return (
      <div>
        <div className="microwave-oven">        
          <CookingChamber running={running} />
          <div>
            <Timer />
            <Keypad running={running}/>
          </div>
        </div>
        <p>running: {running}</p>
      </div>
      
    )
  }
}

export default Microwave