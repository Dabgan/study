import Average from 'components/atoms/Average/Average';
import {
    Wrapper,
    StyledTitle,
    StyledInfo,
    StyledAverage,
    StyledList,
    StyledListItem,
    StyledSpecialization,
} from './StudentDetails.styles';

const StudentDetails = ({ student: { name, group, average, attendance } }) => {
    return (
        <Wrapper>
            <StyledAverage isBig averageData={average} marginRight={'0px'}>
                {average}
            </StyledAverage>

            <StyledTitle>
                {name} | Group: {group}
            </StyledTitle>
            <StyledInfo>
                <h3>Course:</h3> <StyledSpecialization>Economy and finances </StyledSpecialization>
                <h3>Average grades:</h3>
                <StyledList>
                    <StyledListItem>
                        <p>Modern Economy</p>
                        <Average averageData={4.2} marginRight={'0px'}>
                            {average}
                        </Average>
                    </StyledListItem>
                    <StyledListItem>
                        <p>Trade and Logistics</p>
                        <Average averageData={3.2} marginRight={'0px'}>
                            {average}
                        </Average>
                    </StyledListItem>
                    <StyledListItem>
                        <p>Business Philosophy</p>
                        <Average averageData={average} marginRight={'0px'}>
                            {average}
                        </Average>
                    </StyledListItem>
                </StyledList>
                <h3>Attendance:</h3>
                <p>{attendance}</p>
            </StyledInfo>
        </Wrapper>
    );
};

export default StudentDetails;
