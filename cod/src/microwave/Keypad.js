import React, { Component } from 'react'

function NumberKey(props) {
    return (
        <button className="key" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Keypad extends Component {
  constructor(props) {
    super(props);            
  }

  render() {
    const numbers = (() => Array.from({length: 10}, (value, key) => key))().map((val) => {
      return <NumberKey value={val}/>
    })
    return (
      <div class="keys-container">      
        {numbers}
      </div>
    )
  }
}

export default Keypad