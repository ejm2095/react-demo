import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { addTime, startMicrowave, stopMicrowave, stepTime } from '../actions/microwave';

const NumberKey = ({value, onClick}) => {
    return (
        <button className="key number-key" onClick={onClick}>
            {value}
        </button>
    );
};

const StartKey = ({onClick}) => (
    <button className="key start-key" onClick={onClick}>
        Start
    </button>
);

const StopKey = ({onClick}) => (
    <button className="key start-key" onClick={onClick}>
        Stop
    </button>
);

const OpenButton = ({onClick}) => (
    <button className="key open-button" onClick={onClick}>

    </button>
);

class Keypad extends React.Component {

    componentWillReceiveProps(nextProps) {
        const { running } = this.props;
        const { runningNext } = nextProps;
        if(running && !runningNext) {
            clearInterval(this.interval);
        }
    }

    render() {
        const {addTime, startMicrowave, stopMicrowave, stepTime} = this.props;

        const start = () => {
            startMicrowave();
            this.interval = setInterval(stepTime, 1000);
        };

        const numbers = (() => Array.from({length: 10}, (value, key) => key))().map((val) => {
            let number = (val+1)%10;
            return (
                <NumberKey value={number}
                    key={`key_${number}`}
                    onClick={ () => {return addTime(number);} }
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
    null, mapDispatchToProps
)(Keypad);
