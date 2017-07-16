import React, { Component } from 'react'
import { connect } from 'react-redux'

class CookingChamber extends Component {

  constructor(props) {
    super(props);    
  }

  render() {    
    return (
      <div className={"cooking-chamber "+ (this.props.running ? 'running' : '') }>
      </div>
    )
  }
}

CookingChamber = connect((store) => {return {running: store.running}})(CookingChamber)
export default CookingChamber