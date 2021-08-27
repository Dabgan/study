import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.nav`
    height: 100%;
    border-right: 1.5px solid ${({ theme }) => theme.colors.darkPurple};
    padding: 30px 0;

    ${({ theme }) => theme.flexCenter('column', 'flex-start')}

    grid-row: 1 / 3;
    grid-column: 1 / 1;
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

const activeClassName = 'active-link';
export const StyledLink = styled(NavLink).attrs({ activeClassName })`
    font-weight: bold;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.darkGrey};
    text-align: right;
    margin: 15px 20px 15px auto;
    position: relative;
    cursor: pointer;
    &.${activeClassName} {
        &::after {
            opacity: 1;
        }
    }
    &::after {
        opacity: 0;
        transition: opacity 0.4s ease-in-out;
        content: '';
        position: absolute;
        width: 18px;
        height: 3px;
        top: 50%;
        transform: translateY(-50%);
        right: -20px;
        background-color: ${({ theme }) => theme.colors.grey};
    }
`;
