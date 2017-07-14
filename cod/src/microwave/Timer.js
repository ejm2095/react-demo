import React, { Component } from 'react'

class Timer extends Component {
  constructor(props) {
    super(props);        
  }

  render() {    
    return (
      <div className="timer">
        00:00:00
      </div>
    )
  }
}

export default Timer