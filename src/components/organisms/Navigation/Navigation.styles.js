import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.nav`
    height: 100%;
    border-right: 1.5px solid ${({ theme }) => theme.colors.darkPurple};
    padding: 30px 0;

    ${({ theme }) => theme.flexCenter('column', 'flex-start')}
`;

export const Logo = styled.div`
    background-color: ${({ theme }) => theme.colors.darkGrey};
    height: 60px;
    width: 100%;
    margin-bottom: 30px;

    ${({ theme }) => theme.flexCenter('column', 'center', 'flex-end')}

    h1 {
        font-size: ${({ theme }) => theme.fontSize.ml};
        margin: 0;
        color: ${({ theme }) => theme.colors.white};
        margin-right: 20px;
    }
`;

export const StyledLink = styled(Link)`
    color: ${({ theme }) => theme.colors.darkGrey};
    font-size: ${({ theme }) => theme.fontSize.ml};
    text-decoration: none;
    font-weight: bold;
    margin: ${({ theme }) => theme.margin.s} 20px ${({ theme }) => theme.margin.s} auto;
    text-align: right;
`;
