import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import CookingChamber from './CookingChamber';
import Keypad from './Keypad';
import Timer from './Timer';
import { getState } from '../actions/microwave';

class Microwave extends React.Component {
    componentWillMount() {
        this.props.getState();
    }

    render() {
        let { running, time} = this.props;
        return (
            <div className="microwave-oven">
                <CookingChamber running={running} />
                <div className="microwave-side">
                    <Timer time={time} />
                    <Keypad
                        running={running}
                    />
                </div>
            </div>
        );
    }
}

Microwave.propTypes = {
    running: PropTypes.bool,
    time: PropTypes.array,
};

const mapStateToProps = ({ running, time }) => ({
    running: running,
    time: time,
});

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        getState,
    }, dispatch)
);

export default connect(
    mapStateToProps, mapDispatchToProps
)(Microwave);
