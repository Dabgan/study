import PropTypes from 'prop-types';

export const UserShape = {
    name: PropTypes.string.isRequired,
    average: PropTypes.string | PropTypes.number,
    attendance: PropTypes.string,
};
