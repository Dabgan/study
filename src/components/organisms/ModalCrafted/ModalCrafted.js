import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ModalBackground, ModalWrapper } from 'components/organisms/ModalCrafted/ModalCrafted.styles';
import { Button } from 'components/atoms/Button/Button';

const modalContainer = document.getElementById('modal-container');

export const ModalCrafted = ({ handleClose, children }) => {
    const modalNode = document.createElement('div');
    useEffect(() => {
        modalContainer.appendChild(modalNode);
        return () => {
            modalContainer.removeChild(modalNode);
        };
    }, [modalNode]);

    return ReactDOM.createPortal(
        <>
            <ModalBackground onClick={handleClose} />
            <ModalWrapper>
                {children}
                <Button isBig onClick={handleClose}>
                    Close
                </Button>
            </ModalWrapper>
        </>,
        modalNode
    );
};
