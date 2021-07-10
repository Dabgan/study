import React from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper.js';
import UsersList from 'components/organisms/UsersList/UsersList';

const Dashboard = ({ users, deleteUser }) => {
    return (
        <>
            <ViewWrapper>
                <UsersList users={users} deleteUser={deleteUser}></UsersList>
            </ViewWrapper>
        </>
    );
};

export default React.memo(Dashboard);
