import React from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper.js';
import UsersList from 'components/organisms/UsersList/UsersList';

const Dashboard = () => {
    return (
        <>
            <ViewWrapper>
                <UsersList></UsersList>
            </ViewWrapper>
        </>
    );
};

export default Dashboard;
