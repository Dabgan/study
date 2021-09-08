import { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *,
    *::after,
    *::before {
        box-sizing: inherit;
    }

    body {
        font-family: ${({ theme }) => theme.fontFamily.primary};
        margin: 0;
        padding: 0;
        overflow-y: hidden;
    }

    a,
    button {
        font-family: ${({ theme }) => theme.fontFamily.primary};
    }

    p,
    ul {
        margin: 0 0;
        padding: 0 0;
    }
`;
