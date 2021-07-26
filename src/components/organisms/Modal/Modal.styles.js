import styled from 'styled-components';

export const Wrapper = styled.div`
    ${({ theme }) => theme.flexCenter('column')}
`;

export const Subtitle = styled.h2`
    font-family: ${({ theme }) => theme.fontFamily.secondary};
    color: ${({ theme }) => theme.colors.darkGrey};
    font-weight: 700;
    letter-spacing: 0.02em;
`;

export const List = styled.ul`
    width: 100%;
`;

export const Item = styled.li`
    list-style: none;
    color: ${({ isSelected, theme }) => (isSelected ? theme.colors.lightGrey : theme.colors.darkGrey)};
    font-weight: 500;
    font-family: ${({ theme }) => theme.fontFamily.secondary};
    width: 100%;
    text-align: center;
    margin: 20px 0;
    padding: 5px 0;
    cursor: pointer;
    background-color: ${({ isSelected, theme }) => (isSelected ? theme.colors.darkGrey : 'inherit')};

    :hover {
        background-color: ${({ isSelected, theme }) => (isSelected ? theme.colors.darkGrey : theme.colors.lightGrey)};
    }
`;
