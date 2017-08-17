import React from 'react';
import PropTypes from 'prop-types';

class CookingChamber extends React.Component {
    render() {
        return (
            <div className={'cooking-chamber '+ (this.props.running ? 'running' : '') } />
        );
    }
}

CookingChamber.propTypes = {
    running: PropTypes.bool,
};

export default CookingChamber;
