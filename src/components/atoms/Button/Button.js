import styled from 'styled-components';

export const Button = styled.button`
    margin: ${({ margin }) => (margin ? margin : '15px 0px')};
    padding: ${({ isBig }) => (isBig ? '10px 38px' : '7px 20px')};
    font-size: ${({ isBig, theme: { fontSize } }) => (isBig ? fontSize.m : fontSize.s)};
    font-family: ${({ theme }) => theme.fontFamily.secondary};
    background-color: ${({ theme }) => theme.colors.lightPurple};
    border-radius: 20px;
    border: none;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.darkGrey};
    cursor: pointer;
    &:hover {
        background-color: ${({ theme }) => theme.colors.darkGrey};
        color: ${({ theme }) => theme.colors.lightGrey};
        svg path {
            stroke: ${({ theme }) => theme.colors.lightGrey};
        }
    }
    a {
        font-family: inherit;
        color: inherit;
        text-decoration: none;
    }
`;
