import React from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Title } from 'components/atoms/Title/Title.js';
import { StyledList } from './UsersList.styles';
import PropTypes from 'prop-types';
import { UserShape } from 'types';

const UsersList = ({ users, deleteUser }) => {
    return (
        <>
            <Title>Students list</Title>
            <StyledList>
                {users.map(userData => (
                    <UsersListItem deleteUser={deleteUser} key={userData.name} userData={userData} />
                ))}
            </StyledList>
        </>
    );
};

UsersList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
    deleteUser: PropTypes.func.isRequired,
};

export default React.memo(UsersList);
