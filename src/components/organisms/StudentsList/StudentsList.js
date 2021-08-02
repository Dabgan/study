import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StudentsListItem from 'components/molecules/StudentsListItem/StudentsListItem';
import { StyledList } from './StudentsList.styles';
import { useStudents } from 'hooks/useStudents';

const StudentsList = () => {
    const [students, setStudents] = useState([]);
    const { id } = useParams();
    const { getStudents } = useStudents();

    useEffect(() => {
        (async () => {
            const students = await getStudents(id);
            setStudents(students);
        })();
    }, [getStudents, id]);

    return (
        <>
            <StyledList>
                {students.map(userData => (
                    <StudentsListItem key={userData.name} userData={userData} />
                ))}
            </StyledList>
        </>
    );
};

export default React.memo(StudentsList);
