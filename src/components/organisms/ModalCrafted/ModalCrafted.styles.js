import styled from 'styled-components';

export const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.darkGrey};
    opacity: 0.5;
`;

export const ModalWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 600px;
    min-height: 700px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 15px;
    box-shadow: 8px -5px 25px -10px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-flow: column;
    align-items: center;
    padding-bottom: 20px;
`;
