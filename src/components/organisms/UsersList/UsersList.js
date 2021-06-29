import React, { useState } from 'react';
import { users as usersData } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList, Wrapper } from './UsersList.styles';

const UsersList = () => {
    const [users, setUsers] = useState(usersData);

    const deleteUser = name => {
        const filteredUsers = users.filter(user => user.name !== name);
        setUsers(filteredUsers);
    };

    return (
        <Wrapper>
            <StyledList>
                {users.map((userData, i) => (
                    <UsersListItem key={userData.name} deleteUser={deleteUser} userData={userData} index={i} />
                ))}
            </StyledList>
        </Wrapper>
    );
};

export default UsersList;
