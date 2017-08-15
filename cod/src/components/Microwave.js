import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import CookingChamber from './CookingChamber';
import Keypad from './Keypad';
import Timer from './Timer';
import { startMicrowave, getRunningState } from '../actions/microwave';

class Microwave extends Component {
    componentWillMount() {
        this.props.getRunningState();
    }

    render() {
        const { running} = this.props;
        return (
            <div className="microwave-oven">
                <CookingChamber running={running} />
                <div className="microwave-side">
                    <Timer />
                    <Keypad running={running}/>
                </div>
            </div>
        );
    }
}

Microwave.propTypes = {
  running: PropTypes.bool,
};

const mapStateToProps = ({ running }) => ({
  running: running,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    getRunningState,
  }, dispatch)
);

export default connect(
  mapStateToProps, mapDispatchToProps,
)(Microwave);
