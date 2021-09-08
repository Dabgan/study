import styled from 'styled-components/macro';

export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.lightGrey};
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: auto;
    margin-top: 1rem;
`;
