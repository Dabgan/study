import React, { useContext } from 'react';
import { UsersContext } from 'providers/UsersProvider';
import Button from 'components/atoms/DeleteButton/DeleteButton';
import Average from 'components/atoms/Average/Average';
import PropTypes from 'prop-types';
import { UserShape } from 'types';
import { Wrapper, StyledInfo } from './UsersListItem.styles';

const UsersListItem = ({ userData: { average, name, attendance = '0%' } }) => {
    const { deleteUser } = useContext(UsersContext);

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
    userData: PropTypes.shape(UserShape),
};

export default React.memo(UsersListItem);
