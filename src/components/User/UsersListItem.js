import React from 'react';
import PropTypes from 'prop-types';

const UsersListItem = ({ userData: { name, average, attendance = '0%' } }) => {
    return (
        <li>
            <div>{average}</div>
            <div>
                <p>{name}</p>
                <p>{attendance}</p>
            </div>
            <button>X</button>
        </li>
    );
};

UsersListItem.propTypes = {
    userData: PropTypes.shape({
        name: PropTypes.string.isRequired,
        average: PropTypes.number.isRequired,
        attendance: PropTypes.string,
    }),
};

export default UsersListItem;
