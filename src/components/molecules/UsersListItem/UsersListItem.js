import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import Average from 'components/atoms/Average/Average';
import { Wrapper, StyledInfo } from './UsersListItem.styles';

const UsersListItem = ({ deleteUser, userData: { average, name, attendance = '0%' } }) => {
    return (
        <Wrapper>
            <Average averageData={average}>{average}</Average>
            <StyledInfo>
                <p>{name}</p>
                <p>attendance:{attendance}</p>
            </StyledInfo>
            <Button onClick={() => deleteUser(name)} />
        </Wrapper>
    );
};

UsersListItem.propTypes = {
    delete: PropTypes.func.isRequired,
    userData: PropTypes.shape({
        name: PropTypes.string.isRequired,
        average: PropTypes.number.isRequired,
        attendance: PropTypes.string,
    }),
};

export default UsersListItem;
