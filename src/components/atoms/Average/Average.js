import React from 'react';
import { Wrapper } from './Average.styles.js';
import PropTypes from 'prop-types';
import { theme } from 'assets/styles/theme.js';

const Average = ({ averageData }) => {
    const chooseColor = () => {
        const { error, warning, success } = theme.colors;
        let color = error;
        if (averageData >= 3 && averageData < 4) {
            color = warning;
        } else if (averageData >= 4) {
            color = success;
        }
        return color;
    };

    return <Wrapper avColor={chooseColor}>{averageData}</Wrapper>;
};

Average.propTypes = {
    averageData: PropTypes.number.isRequired,
};

export default Average;
