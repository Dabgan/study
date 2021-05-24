import React from 'react';
import { users } from 'data/users.js';
import UsersListItem from 'components/User/UsersListItem';

const UsersList = () => {
    return (
        <div>
            <ul>
                {users.map(userData => (
                    <UsersListItem userData={userData} key={userData.name} />
                ))}
            </ul>
        </div>
    );
};

export default UsersList;
