import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { addTime, startMicrowave, stopMicrowave, stepTime } from '../actions/microwave';

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

    render() {
        const {addTime, startMicrowave, stopMicrowave, stepTime} = this.props;
        const start = () => {
            startMicrowave();
            setInterval(stepTime, 1000)
        }

        const numbers = (() => Array.from({length: 10}, (value, key) => key))().map((val) => {
            let number = (val+1)%10;
            return (
                <NumberKey value={number}
                    key={`key_${number}`}
                    onClick={ () => {return addTime(number)} }
                />
            );
        });
        return (
            <div className="keys-container">
                {numbers}
                <div>
                    <StartKey onClick={ start } />
                    <StopKey onClick={ stopMicrowave } />
                    <OpenButton />
                </div>
            </div>
        );
    }
}

Keypad.propTypes = {
  running: PropTypes.bool,
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addTime,
    startMicrowave,
    stopMicrowave,
    stepTime,
  }, dispatch)
);

export default connect(
  null, mapDispatchToProps,
)(Keypad);
