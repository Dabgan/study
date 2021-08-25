import React, { useEffect, useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper.js';
import StudentsList from 'components/organisms/StudentsList/StudentsList';
import { Title } from 'components/atoms/Title/Title.js';
import { Modal } from 'components/organisms/Modal/Modal';
import { Button } from 'components/atoms/Button/Button';
import ChangeGroup from 'components/molecules/ChangeGroup/ChangeGroup';
import { ReactComponent as ArrowIcon } from 'assets/icons/arrow-right.svg';
import { useStudents } from 'hooks/useStudents';
import useModal from 'hooks/useModal';
import { StyledHeader } from './Dashboard.styles';

const Dashboard = () => {
    const [groups, setGroups] = useState([]);
    const { getGroups } = useStudents();
    const { id } = useParams();
    const { isOpen, handleOpenModal, handleCloseModal } = useModal();

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
                <Button onClick={handleOpenModal} margin="5px 0 0 25px">
                    change group <ArrowIcon />
                </Button>
                <Modal handleClose={handleCloseModal} isOpen={isOpen}>
                    <ChangeGroup groups={groups} handleClose={handleCloseModal} />
                </Modal>
            </StyledHeader>
            <StudentsList />
        </ViewWrapper>
    );
};

export default Dashboard;
