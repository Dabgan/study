import styled from 'styled-components';
import { Input } from 'components/atoms/Input/Input';

export const SearchBarWrapper = styled.div`
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    border-bottom: 1px solid ${({ theme }) => theme.colors.darkGrey};
    ${({ theme }) => theme.flexCenter('row', 'flex-start')}
    align-items: center;
    padding: 0 40px;

    ${Input} {
        font-size: ${({ theme }) => theme.fontSize.l};
        width: 100%;
        max-width: 350px;
        border: 2px solid ${({ theme }) => theme.colors.lightGrey};
        border-radius: 7px;
    }
`;

export const StatusInfo = styled.div`
    color: ${({ theme }) => theme.colors.darkGrey};
    font-size: ${({ theme }) => theme.fontSize.l};
    margin-right: 40px;

    p {
        margin: 5px;
    }
    strong {
        font-size: ${({ theme }) => theme.fontSize.l};
    }
`;

export const SearchWrapper = styled.div`
    position: relative;
    width: 50%;
    max-width: 300px;
`;

export const SearchResults = styled.ul`
    visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
    z-index: 1000;
    max-height: 420px;
    overflow-y: scroll;
    padding: 10px;
    border-radius: 15px;
    list-style: none;
    width: 100%;
    position: absolute;
    left: 0;
    top: 30px;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.white};
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    box-shadow: 3px 3px 6px ${({ theme }) => theme.colors.grey}, -3px 3px 6px ${({ theme }) => theme.colors.grey};
`;

export const SearchResultsItem = styled.li`
    font-weight: bold;
    color: ${({ theme }) => theme.colors.darkGrey};
    background-color: ${({ theme, isHighlighted }) => (isHighlighted ? theme.colors.darkPurple : theme.colors.white)};
    width: 100%;
    padding: 15px 5px;
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.colors.darkPurple};
    }

    &:not(:last-child) {
        border-bottom: 1px solid ${({ theme }) => theme.colors.darkGrey};
    }
`;
