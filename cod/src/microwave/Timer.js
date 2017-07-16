import React, { Component } from 'react'
import { connect } from 'react-redux'

class Timer extends Component {
  constructor(props) {
    super(props);        
  }

  formatNumber(number) {
    return ("0" + number).slice(-2);
  }
  
  render() {    
    return (
      <div className="timer">
        {this.props.time}
      </div>
    )
  }
}

Timer = connect((store) => {return {time: store.time}})(Timer)
export default Timer