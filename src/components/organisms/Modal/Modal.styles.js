import styled from 'styled-components';
import ReactModal from 'react-modal';

export const ModalWrapper = styled(ReactModal)`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 500px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 15px;
    box-shadow: 8px -5px 25px -10px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-flow: column;
    align-items: center;
    padding-bottom: 20px;

    &:focus {
        outline: none;
    }
`;
