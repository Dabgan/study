import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import Average from 'components/atoms/Average/Average';
import { Wrapper, Name, Attendance } from './UsersListItem.styles';

const UsersListItem = ({ userData: { name, average, attendance = '0%' } }) => {
    return (
        <Wrapper>
            <Average averageData={average}>{average}</Average>
            <div>
                <Name>{name}</Name>
                <Attendance>attendance:{attendance}</Attendance>
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
