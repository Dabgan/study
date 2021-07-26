import React from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList } from './UsersList.styles';

const UsersList = ({ users = [] }) => {
    return (
        <>
            <StyledList>
                {users.map(userData => (
                    <UsersListItem key={userData.name} userData={userData} />
                ))}
            </StyledList>
        </>
    );
};

export default React.memo(UsersList);
