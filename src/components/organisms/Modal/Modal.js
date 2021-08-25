import React from 'react';
import PropTypes from 'prop-types';
import { ModalWrapper } from 'components/organisms/Modal/Modal.styles';
import { Button } from 'components/atoms/Button/Button';

export const Modal = ({ handleClose, isOpen, children, withButton }) => {
    return (
        <ModalWrapper isOpen={isOpen} onRequestClose={handleClose} appElement={document.getElementById('root')}>
            {children}
            {withButton ? (
                <Button isBig onClick={handleClose}>
                    Close
                </Button>
            ) : null}
        </ModalWrapper>
    );
};

Modal.propTypes = {
    handleClose: PropTypes.func,
    isOpen: PropTypes.bool.isRequired,
    children: PropTypes.element,
    withButton: PropTypes.bool,
};
