export const theme = {
    colors: {
        white: '#FFFFFF',
        grey: '#C0C7D6',
        lightGrey: '#F7F8FA',
        darkGrey: '#737C8E',
        black: '#111111',
        success: '#8FCB81',
        error: '#CB8581',
        warning: '#E1D888',
        darkPurple: '#DFE2E8',
    },
    fontSize: {
        l: '17px',
        ml: '15px',
        m: '12px',
        s: '11px',
    },
    margin: {
        m: '24px',
        sm: '20px',
        s: '14px',
    },
    flexCenter: (direction = 'row', justify = 'center', align = 'center') =>
        `display: flex; flex-flow: ${direction}; justify-content: ${justify}; align-items: ${align};`,
};
