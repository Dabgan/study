import styled from 'styled-components';

export const Label = styled.label`
    font-family: Montserrat, sans-serif;
    font-weight: bold;
    margin: 5px 0;
    color: ${({ theme }) => theme.colors.darkGrey};
`;
