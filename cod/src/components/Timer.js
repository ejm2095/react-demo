import React from 'react';

class Timer extends React.Component {
    formatNumber(number) {
        return ('0' + number).slice(-2);
    }

    displayTime(time) {
        return '000000'.slice(time.length).concat(time).match(/.{1,2}/g).join(':');
    }

    render() {
        let time = [...this.props.time].reverse().join('');
        return (
            <div className="timer">
                { this.displayTime(time) }
            </div>
        );
    }
}

export default Timer;
