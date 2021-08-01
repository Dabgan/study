import React from 'react';
import StudentsListItem from 'components/molecules/StudentsListItem/StudentsListItem';
import { useStudents } from 'hooks/useStudents';
import { StyledList } from './StudentsList.styles';
import { useParams } from 'react-router-dom';

const StudentsList = () => {
    const { id } = useParams();
    const { students } = useStudents({ groupId: id });

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
