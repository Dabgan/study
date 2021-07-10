import React from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper.js';
import { Title } from 'components/atoms/Title/Title.js';
import { StyledList } from './UsersList.styles';

const UsersList = ({ users, deleteUser }) => {
    return (
        <>
            <ViewWrapper>
                <Title>Students list</Title>
                <StyledList>
                    {users.map(userData => (
                        <UsersListItem deleteUser={deleteUser} key={userData.name} userData={userData} />
                    ))}
                </StyledList>
            </ViewWrapper>
        </>
    );
};

export default React.memo(UsersList);
