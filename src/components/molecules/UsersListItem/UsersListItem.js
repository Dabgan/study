import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import Average from 'components/atoms/Average/Average';
import { Wrapper, StyledInfo } from './UsersListItem.styles';

const UsersListItem = ({ userData: { name, average, attendance = '0%' } }) => {
    return (
        <Wrapper>
            <Average averageData={average}>{average}</Average>
            <StyledInfo>
                <p>{name}</p>
                <p>attendance:{attendance}</p>
            </StyledInfo>
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
