import React from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper.js';
import UsersList from 'components/organisms/UsersList/UsersList';
import PropTypes from 'prop-types';
import { UserShape } from 'types';

const Dashboard = ({ users, deleteUser }) => {
    return (
        <>
            <ViewWrapper>
                <UsersList users={users} deleteUser={deleteUser}></UsersList>
            </ViewWrapper>
        </>
    );
};

Dashboard.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
    deleteUser: PropTypes.func.isRequired,
};

export default React.memo(Dashboard);
