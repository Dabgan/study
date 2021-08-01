import React from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper.js';
import { useParams } from 'react-router-dom';
import StudentsList from 'components/organisms/StudentsList/StudentsList';
import { Title } from 'components/atoms/Title/Title.js';
import { StyledHeader } from './Dashboard.styles';
import Modal from 'components/organisms/Modal/Modal';
import { useStudents } from 'hooks/useStudents';

const Dashboard = () => {
    const { id } = useParams();
    const { groups } = useStudents();

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
