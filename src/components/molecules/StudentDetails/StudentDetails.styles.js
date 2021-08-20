import styled from 'styled-components';
import Average from 'components/atoms/Average/Average';

export const Wrapper = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 65px 65px 1fr 50px 50px;
    grid-template-rows: 120px 392px 120px;
    align-items: center;
    justify-items: center;
    flex: 1;
    overflow: auto;
    min-height: 100%;
    font-family: ${({ theme }) => theme.fontFamily.secondary} !important;
`;

export const StyledAverage = styled(Average)`
    grid-column: 1/3;
`;

export const StyledTitle = styled.h2`
    color: ${({ theme }) => theme.colors.darkGrey};
    font-size: ${({ theme }) => theme.fontSize.xxl};
    text-align: center;
    grid-column: 3/4;
`;

export const StyledInfo = styled.header`
    grid-column: 2/5;
    grid-row: 2/3;
    width: 100%;
    height: 100%;
    margin-top: 30px;

    h3 {
        color: ${({ theme }) => theme.colors.darkGrey};
        font-size: ${({ theme }) => theme.fontSize.l};
        font-weight: 800;
        margin: 20px 0;

        :nth-of-type(2) {
            margin: 40px 0 0 0;
        }

        :last-of-type {
            margin: 40px 0 10px 0;
        }
    }
`;

export const StyledList = styled.ul`
    margin-top: 10px;
`;
export const StyledListItem = styled.li`
    list-style: none;
    ${({ theme }) => theme.flexCenter('row', 'space-between')}
    padding: 1em 1em 0em 0;
    max-width: 55%;
`;

export const StyledSpecialization = styled.p`
    font-size: ${({ theme }) => theme.fontSize.xl};
    color: ${({ theme }) => theme.colors.darkGrey};
`;
