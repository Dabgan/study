import styled from 'styled-components';
import { Input } from 'components/atoms/Input/Input';

export const SearchBarWrapper = styled.div`
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 40px;
`;

export const StatusInfo = styled.div`
    color: ${({ theme }) => theme.colors.darkGrey};
    font-size: ${({ theme }) => theme.fontSize.m};
    margin-right: 40px;
    p {
        margin: 5px;
    }
    strong {
        font-size: ${({ theme }) => theme.fontSize.l};
    }
`;

export const StyledDropdown = styled.div`
    ${({ theme }) => theme.flexCenter('column')}
    min-width: 50%;
    position: relative;
    ${Input} {
        font-size: ${({ theme }) => theme.fontSize.xl};
        width: 100%;
        border: 2px solid ${({ theme }) => theme.colors.grey};
        border-radius: 5px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }
`;

export const SearchList = styled.ul`
    z-index: 1000;
    max-height: 300px;
    overflow-y: auto;
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
    border: 2px solid ${({ theme }) => theme.colors.grey};
    border-top-left-radius: 0;
    border-top-right-radius: 0;

    box-shadow: 3px 3px 6px ${({ theme }) => theme.colors.grey}, -3px 3px 6px ${({ theme }) => theme.colors.grey};

    li:not(:last-child) {
        border-bottom: 1px solid ${({ theme }) => theme.colors.darkGrey};
    }
`;

export const StyledListItem = styled.li`
    font-weight: bold;
    color: ${({ theme }) => theme.colors.darkGrey};
    background-color: ${({ theme }) => theme.colors.white};
    width: 100%;
    padding: 10px 5px;
    cursor: pointer;

    :hover,
    :focus {
        background-color: ${({ theme }) => theme.colors.lightGrey};
    }
`;
