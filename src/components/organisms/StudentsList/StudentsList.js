import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StudentsListItem from 'components/molecules/StudentsListItem/StudentsListItem';
import { StyledList } from './StudentsList.styles';
import { useStudents } from 'hooks/useStudents';
import useModal from 'hooks/useModal';
import { Modal } from 'components/organisms/Modal/Modal';
import StudentDetails from 'components/molecules/StudentDetails/StudentDetails';

const StudentsList = () => {
    const [students, setStudents] = useState([]);
    const { id } = useParams();
    const [currentStudent, setCurrentStudent] = useState();
    const { getStudentById, getStudentsByGroup } = useStudents();
    const { isOpen, handleOpenModal, handleCloseModal } = useModal();

    useEffect(() => {
        (async () => {
            const students = await getStudentsByGroup(id);
            setStudents(students);
        })();
    }, [getStudentsByGroup, id]);

    const handleOpenStudentDetails = async id => {
        const student = await getStudentById(id);
        setCurrentStudent(student);
        handleOpenModal();
    };

    return (
        <>
            <StyledList>
                {students.map(userData => {
                    return (
                        <StudentsListItem
                            key={userData.name}
                            userData={userData}
                            onClick={() => handleOpenStudentDetails(userData.id)}
                        />
                    );
                })}
            </StyledList>

            {isOpen ? (
                <Modal handleClose={() => handleCloseModal()} isOpen={isOpen} withButton>
                    <StudentDetails student={currentStudent} />
                </Modal>
            ) : null}
        </>
    );
};

export default React.memo(StudentsList);
