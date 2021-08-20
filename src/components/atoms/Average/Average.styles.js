import styled from 'styled-components';

export const Wrapper = styled.div`
    ${({ theme }) => theme.flexCenter()};
    font-size: ${({ isBig, theme }) => (isBig ? theme.fontSize.xl : theme.fontSize.m)};
    color: ${({ theme }) => theme.colors.white};
    width: ${({ isBig }) => (isBig ? '64px' : '34px')};
    height: ${({ isBig }) => (isBig ? '64px' : '34px')};
    border-radius: 50%;
    font-weight: 700;
    margin-right: ${({ marginRight, theme }) => (marginRight ? marginRight : theme.margin.m)};
    background-color: ${({ theme, value }) => {
        if (value >= 4) return theme.colors.success;
        if (value >= 3) return theme.colors.warning;
        if (value >= 2) return theme.colors.error;
        return theme.colors.grey;
    }};
`;
