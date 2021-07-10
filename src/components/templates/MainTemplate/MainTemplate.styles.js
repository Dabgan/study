import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 150px 1fr;
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.lightGrey};
`;
