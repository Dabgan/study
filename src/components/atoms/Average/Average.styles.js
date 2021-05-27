import styled from 'styled-components';

export const Wrapper = styled.div`
    ${({ theme }) => theme.flexCenter};
    font-size: ${({ theme }) => theme.fontSize.m};
    color: ${({ theme }) => theme.colors.white};
    width: 34px;
    height: 34px;
    border-radius: 50%;
    font-weight: 700;
    margin-right: ${({ theme }) => theme.margin.m};
    background-color: ${({ theme, value }) => {
        if (value > 4) return theme.colors.success;
        if (value > 3) return theme.colors.warning;
        if (value > 2) return theme.colors.error;
        return theme.colors.grey;
    }};
`;
