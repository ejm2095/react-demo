import React, { Component } from 'react';
import CookingChamber from './CookingChamber';
import Keypad from './Keypad';
import Timer from './Timer';
import { Provider } from 'react-redux'
import store from "./store"

class Microwave extends Component {
  constructor(props) {
    super(props);    
  }

  

  render() {    
    let running = store.getState().running;
    return (
      <Provider store={store}>
          <div className="microwave-oven">        
            <CookingChamber running={running} />
            <div>
              <Timer />
              <Keypad running={running}/>
            </div>
          </div>
      </Provider>
      
    )
  }
}

export default Microwave