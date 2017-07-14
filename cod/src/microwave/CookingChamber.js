import React, { Component } from 'react'
import store from "./store"

class CookingChamber extends Component {
  constructor(props) {
    super(props);        

  }

  render() {    
    return (
      <div className={"cooking-chamber "+ (store.getState() && store.getState().running ? 'running' : '') }>
      </div>
    )
  }
}

export default CookingChamber