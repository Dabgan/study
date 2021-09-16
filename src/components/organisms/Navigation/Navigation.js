import { useAuth } from 'hooks/useAuth.js';
import React from 'react';
import { Wrapper, Logo, StyledLink } from './Navigation.styles.js';

const Navigation = () => {
    const auth = useAuth();

    return (
        <Wrapper>
            <Logo>
                <h1>Study</h1>
                <h1>Buddy</h1>
            </Logo>
            <StyledLink to="/group" exact>
                Groups
            </StyledLink>
            <StyledLink to="/notes" exact>
                Notes
            </StyledLink>
            <StyledLink as="a" to="/" onClick={auth.signOut}>
                Logout
            </StyledLink>
        </Wrapper>
    );
};

export default Navigation;
