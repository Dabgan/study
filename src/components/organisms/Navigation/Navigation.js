import React from 'react';
import { Wrapper, Logo, StyledLink } from './Navigation.styles.js';

const Navigation = () => {
    return (
        <Wrapper>
            <Logo>
                <h1>Study</h1>
                <h1>Buddy</h1>
            </Logo>
            <StyledLink to="/" exact>
                Dashboard
            </StyledLink>
            <StyledLink to="/add-user">Add user</StyledLink>
            <StyledLink to="/settings">Settings</StyledLink>
            <StyledLink to="/logout">Logout</StyledLink>
        </Wrapper>
    );
};

export default Navigation;
