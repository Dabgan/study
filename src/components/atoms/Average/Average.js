import React from 'react';
import { Wrapper } from './Average.styles.js';
import PropTypes from 'prop-types';

const Average = ({ averageData }) => {
    return <Wrapper value={averageData}>{averageData}</Wrapper>;
};

Average.propTypes = {
    averageData: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Average;
