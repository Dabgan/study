import styled from 'styled-components';

export const ViewWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    width: 100%;
    max-width: 500px;
    padding: 40px 30px;
    border-radius: 25px;
    box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
    margin: 25px;
    /* border: 2px solid #f11b1b; */
    /* max-height: 100%; */
    height: 100%;
`;
