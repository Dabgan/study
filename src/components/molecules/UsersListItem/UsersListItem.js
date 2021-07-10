import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/DeleteButton/DeleteButton';
import Average from 'components/atoms/Average/Average';
import { Wrapper, StyledInfo } from './UsersListItem.styles';
import { UserShape } from 'types';

const UsersListItem = ({ deleteUser, userData: { average, name, attendance = '0%' } }) => {
    return (
        <Wrapper>
            <Average averageData={average}>{average}</Average>
            <StyledInfo>
                <p>{name}</p>
                <p>attendance: {attendance}</p>
            </StyledInfo>
            <Button onClick={() => deleteUser(name)} />
        </Wrapper>
    );
};

UsersListItem.propTypes = {
    deleteUser: PropTypes.func.isRequired,
    userData: PropTypes.shape(UserShape),
};

export default React.memo(UsersListItem);
