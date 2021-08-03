import React, { useState } from 'react';
import ModalComponent from 'react-modal';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Button } from 'components/atoms/Button/Button';
import { List, Item, Subtitle, Wrapper } from './Modal.styles';
import { ReactComponent as ArrowIcon } from 'assets/icons/arrow-right.svg';
import { useHistory } from 'react-router-dom';

if (process.env.NODE_ENV !== 'test') ModalComponent.setAppElement('#root');

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        background: 'none',
        border: 'none',
    },
    overlay: {
        background: 'rgb(115, 124, 142, 0.4)',
    },
};

const Modal = ({ children, groups = [] }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedGroup, setSelectedGroup] = useState('');
    const history = useHistory();

    const handleModalOpen = () => {
        setSelectedGroup('');
        setIsModalOpen(true);
    };
    const handleModalClose = () => setIsModalOpen(false);
    const handleSelectGroup = e => setSelectedGroup(e.target.innerHTML);

    const submitSelectedGroup = () => {
        history.push(`/group/${selectedGroup}`);
        handleModalClose();
    };

    return (
        <>
            <Button onClick={handleModalOpen} margin="5px 0 0 25px">
                change group <ArrowIcon />
            </Button>
            <ModalComponent
                isOpen={isModalOpen}
                onRequestClose={handleModalClose}
                style={customStyles}
                contentLabel="Example Modal"
            >
                {children}
                <ViewWrapper margin="0 0">
                    <Wrapper>
                        <Subtitle>Select a group</Subtitle>
                        <List>
                            {groups.map(group => (
                                <Item
                                    key={group}
                                    onClick={e => handleSelectGroup(e)}
                                    isSelected={selectedGroup === group}
                                >
                                    {group}
                                </Item>
                            ))}
                        </List>

                        <Button isBig onClick={submitSelectedGroup}>
                            Select
                        </Button>
                    </Wrapper>
                </ViewWrapper>
            </ModalComponent>
        </>
    );
};

export default Modal;
