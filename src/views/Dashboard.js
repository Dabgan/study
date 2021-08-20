import React, { useEffect, useState } from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper.js';
import { Redirect, useParams } from 'react-router-dom';
import StudentsList from 'components/organisms/StudentsList/StudentsList';
import { Title } from 'components/atoms/Title/Title.js';
import { StyledHeader } from './Dashboard.styles';
import { useStudents } from 'hooks/useStudents';
import useModal from 'hooks/useModal';
import StudentDetails from 'components/molecules/StudentDetails/StudentDetails';
import { ModalCrafted } from 'components/organisms/ModalCrafted/ModalCrafted';
import Modal from 'components/organisms/Modal/Modal';

const Dashboard = () => {
    const [groups, setGroups] = useState([]);
    const [currentStudent, setCurrentStudent] = useState();
    const { getStudentById, getGroups } = useStudents();
    const { id } = useParams();
    const { isOpen, handleOpenModal, handleCloseModal } = useModal();

    useEffect(() => {
        (async () => {
            const groups = await getGroups();
            setGroups(groups);
        })();
    }, [getGroups]);

    if (!id && groups.length > 0) return <Redirect to={`/group/${groups[0]}`} />;

    const handleOpenStudentDetails = async id => {
        const student = await getStudentById(id);
        setCurrentStudent(student);
        handleOpenModal();
    };

    return (
        <ViewWrapper>
            <StyledHeader>
                <Title>Group {id || groups[0]}</Title>
                <Modal groups={groups} />
            </StyledHeader>
            <StudentsList handleOpenStudentDetails={handleOpenStudentDetails} />
            {isOpen ? (
                <ModalCrafted handleClose={() => handleCloseModal()}>
                    <StudentDetails student={currentStudent} />
                </ModalCrafted>
            ) : null}
        </ViewWrapper>
    );
};

export default Dashboard;
