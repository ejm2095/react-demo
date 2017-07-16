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
    const time = this.props.time.map((t) => this.formatNumber(t))
    time.reverse()
    return (
      <div className="timer">
        {time.join(':')}
      </div>
    )
  }
}

Timer = connect((store) => {return {time: [...store.time]}})(Timer)
export default Timer