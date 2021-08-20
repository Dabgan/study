import React from 'react';
import { Wrapper } from './Average.styles.js';
import PropTypes from 'prop-types';

const Average = ({ averageData, marginRight, isBig, ...props }) => {
    return (
        <Wrapper isBig={isBig} value={averageData} marginRight={marginRight} {...props}>
            {averageData}
        </Wrapper>
    );
};

Average.propTypes = {
    averageData: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Average;
