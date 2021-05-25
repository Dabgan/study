import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import { Wrapper } from './UsersListItem.styles';

const UsersListItem = ({ userData: { name, average, attendance = '0%' } }) => {
    return (
        <Wrapper>
            <div>{average}</div>
            <div>
                <p>{name}</p>
                <p>{attendance}</p>
            </div>
            <Button />
        </Wrapper>
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
