import React from 'react';
import { Wrapper, Logo, StyledLink } from './Navigation.styles.js';

const Navigation = () => {
    return (
        <Wrapper>
            <Logo>
                <h1>Study</h1>
                <h1>Buddy</h1>
            </Logo>
            <StyledLink to="/group" exact>
                Group
            </StyledLink>
        </Wrapper>
    );
};

export default Navigation;
