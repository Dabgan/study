import PropTypes from 'prop-types';
import Average from 'components/atoms/Average/Average';
import { UserShape } from 'types';
import {
    Wrapper,
    StyledTitle,
    StyledInfo,
    StyledAverage,
    StyledList,
    StyledListItem,
    StyledSpecialization,
} from './StudentDetails.styles';

const StudentDetails = ({ student: { name, group, average, attendance, course, grades } }) => {
    return (
        <Wrapper>
            <StyledAverage isBig averageData={average} marginRight={'0px'}>
                {average}
            </StyledAverage>

            <StyledTitle>
                {name} | Group: {group}
            </StyledTitle>
            <StyledInfo>
                <h3>Course:</h3> <StyledSpecialization>{course}</StyledSpecialization>
                <h3>Average grades:</h3>
                <StyledList>
                    {grades.map(grade => (
                        <StyledListItem key={grade.subject}>
                            <p>{grade.subject}</p>
                            <Average averageData={grade.average} marginRight={'0px'}>
                                {grade.average}
                            </Average>
                        </StyledListItem>
                    ))}
                </StyledList>
                <h3>Attendance:</h3>
                <p>{attendance}%</p>
            </StyledInfo>
        </Wrapper>
    );
};

export default StudentDetails;

StudentDetails.propTypes = {
    student: PropTypes.shape(UserShape),
};
