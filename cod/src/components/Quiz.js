import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as firebase from 'firebase'

class Quiz extends Component {
  constructor(props) {
    super(props);    
    this.state = {
      value: 2
    }
  }
  
  componentDidMount() {
    const rootRef = firebase.database().ref();
    const data = rootRef.child('data');        
    data.on('value', snap => {
      this.setState({
        value: 666
      })
    })
  }

  render() {    
    return (
      <p>
        Welcome {this.state.value}
      </p>
    )
  }
}

Quiz.propTypes = {
  questions: PropTypes.number.isRequired
}

export default Quiz