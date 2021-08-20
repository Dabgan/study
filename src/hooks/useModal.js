import { useState } from 'react';
import { ModalCrafted as Modal } from 'components/organisms/ModalCrafted/ModalCrafted.js';

const useModal = (initialState = false) => {
    const [isOpen, setModalState] = useState(initialState);

    const handleOpenModal = () => setModalState(true);
    const handleCloseModal = () => setModalState(false);

    return { Modal, isOpen, handleOpenModal, handleCloseModal };
};

export default useModal;
