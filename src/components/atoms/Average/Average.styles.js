import styled from 'styled-components';

export const Wrapper = styled.div`
    ${({ theme }) => theme.flexCenter};
    font-size: ${({ theme }) => theme.fontSize.m};
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ avColor }) => avColor};
    width: 34px;
    height: 34px;
    border-radius: 50%;
    font-weight: 700;
    margin-right: ${({ theme }) => theme.margin.m};
`;
