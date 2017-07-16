import React, { Component } from 'react'
import { connect } from "react-redux"

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
      let number = (val+1)%10;
      return <NumberKey value={number}
      onClick={()=>{ return this.props.dispatch({type:'TIME', value: number})}} />
    })
    return (
      <div className="keys-container">      
        {numbers}
        <div>
          <StartKey onClick={()=>this.props.dispatch({type:'RUN'}) }/>
          <StopKey onClick={()=>this.props.dispatch({type:'OFF'}) }/>
          <OpenButton />
        </div>
      </div>
    )
  }
}
Keypad = connect((store) => {return {running: store.running}})(Keypad)
export default Keypad