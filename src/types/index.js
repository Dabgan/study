import PropTypes from 'prop-types';

export const UserShape = {
    name: PropTypes.string.isRequired,
    average: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    attendance: PropTypes.string,
    group: PropTypes.string,
    course: PropTypes.string,
    grades: PropTypes.arrayOf(
        PropTypes.shape({
            subject: PropTypes.string,
            average: PropTypes.number,
        })
    ),
};
