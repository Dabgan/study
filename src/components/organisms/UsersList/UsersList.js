import React from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Title } from 'components/atoms/Title/Title.js';
import { StyledList } from './UsersList.styles';

const UsersList = ({ users = [] }) => {
    return (
        <>
            <Title>Students list</Title>
            <StyledList>
                {users.map(userData => (
                    <UsersListItem key={userData.name} userData={userData} />
                ))}
            </StyledList>
        </>
    );
};

export default React.memo(UsersList);
