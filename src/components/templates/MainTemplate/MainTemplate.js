import React from 'react';
import Navigation from 'components/organisms/Navigation/Navigation';
import { Wrapper } from './MainTemplate.styles.js';

const MainTemplate = ({ children }) => {
    return (
        <Wrapper>
            <Navigation />
            {children}
        </Wrapper>
    );
};

export default MainTemplate;
