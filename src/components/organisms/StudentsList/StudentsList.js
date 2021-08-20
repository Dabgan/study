import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StudentsListItem from 'components/molecules/StudentsListItem/StudentsListItem';
import { StyledList } from './StudentsList.styles';
import { useStudents } from 'hooks/useStudents';

const StudentsList = ({ handleOpenStudentDetails }) => {
    const [students, setStudents] = useState([]);
    const { id } = useParams();
    const { getStudentsByGroup } = useStudents();

    useEffect(() => {
        (async () => {
            const students = await getStudentsByGroup(id);
            setStudents(students);
        })();
    }, [getStudentsByGroup, id]);

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
        </>
    );
};

export default React.memo(StudentsList);
