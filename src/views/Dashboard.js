import React, { useEffect, useState } from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper.js';
import { useParams } from 'react-router-dom';
import UsersList from 'components/organisms/UsersList/UsersList';
import { Title } from 'components/atoms/Title/Title.js';
import { StyledHeader } from './Dashboard.styles';

import axios from 'axios';
import Modal from 'components/organisms/Modal/Modal';

const Dashboard = () => {
    const [students, setStudents] = useState([]);
    const [groups, setGroups] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios
            .get('/groups')
            .then(({ data }) => setGroups(data.groups))
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        axios
            .get(`/students/${id || groups[0]}`)
            .then(({ data }) => setStudents(data.students))
            .catch(err => console.log(err));
    }, [id, groups]);

    return (
        <ViewWrapper>
            <StyledHeader>
                <Title>Group {id || groups[0]}</Title>
                <Modal groups={groups} />
            </StyledHeader>

            <UsersList users={students} />
        </ViewWrapper>
    );
};

export default Dashboard;
