import styled from 'styled-components';

export const Wrapper = styled.li`
    display: flex;
    position: relative;
    color: ${({ theme }) => theme.colors.darkGrey};
    padding: 30px;
    &:not(:last-child)::after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 1px;
        background-color: lightgrey;
    }
    cursor: pointer;
`;

export const StyledInfo = styled.div`
    p:first-child {
        font-size: ${({ theme }) => theme.fontSize.l};
        font-weight: bold;
    }
    p:last-child {
        font-size: ${({ theme }) => theme.fontSize.m};
    }
`;
