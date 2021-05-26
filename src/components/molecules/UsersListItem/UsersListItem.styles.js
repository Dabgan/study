import styled from 'styled-components';

export const Wrapper = styled.li`
    display: flex;
    position: relative;
    color: ${({ theme }) => theme.colors.fontColor};
    padding: 30px;
    &:not(:last-child)::after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 1px;
        background-color: lightgrey;
    }
`;

export const Name = styled.p`
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: bold;
`;

export const Attendance = styled.p`
    font-size: ${({ theme }) => theme.fontSize.m};
`;
