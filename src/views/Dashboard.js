import React, { useEffect, useState } from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper.js';
import { Redirect, useParams } from 'react-router-dom';
import StudentsList from 'components/organisms/StudentsList/StudentsList';
import { Title } from 'components/atoms/Title/Title.js';
import { StyledHeader } from './Dashboard.styles';
import Modal from 'components/organisms/Modal/Modal';
import { useStudents } from 'hooks/useStudents';

const Dashboard = () => {
    const [groups, setGroups] = useState([]);
    const { getGroups } = useStudents();
    const { id } = useParams();

    useEffect(() => {
        (async () => {
            const groups = await getGroups();
            setGroups(groups);
        })();
    }, [getGroups]);

    if (!id && groups.length > 0) return <Redirect to={`/group/${groups[0]}`} />;

    return (
        <ViewWrapper>
            <StyledHeader>
                <Title>Group {id || groups[0]}</Title>
                <Modal groups={groups} />
            </StyledHeader>

            <StudentsList />
        </ViewWrapper>
    );
};

export default Dashboard;
