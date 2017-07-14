import React, { Component } from 'react'
import store from "./store"

function NumberKey(props) {
    return (
        <button className="key number-key" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

function StartKey(props) {
    return (
        <button className="key start-key" onClick={props.onClick}>
            Start
        </button>
    );
}

function StopKey(props) {
    return (
        <button className="key start-key" onClick={props.onClick}>
            Stop
        </button>
    );
}

function OpenButton(props) {
    return (
        <button className="key open-button" onClick={props.onClick}>
            
        </button>
    );
}

class Keypad extends Component {
  constructor(props) {
    super(props);            
  }

  render() {
    const numbers = (() => Array.from({length: 10}, (value, key) => key))().map((val) => {
      return <NumberKey value={(val+1)%10}/>
    })
    return (
      <div className="keys-container">      
        {numbers}
        <div>
          <StartKey onClick={()=>store.dispatch({type:'RUN'}) }/>
          <StopKey onClick={()=>store.dispatch({type:'OFF'}) }/>
          <OpenButton />
        </div>
      </div>
    )
  }
}

export default Keypad