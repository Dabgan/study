import React, { useState } from 'react';
import { List, Item, Subtitle, Wrapper } from './ChangeGroup.styles';
import { Button } from 'components/atoms/Button/Button';
import { useHistory } from 'react-router-dom';

const ChangeGroup = ({ groups, handleClose }) => {
    const [selectedGroup, setSelectedGroup] = useState('');
    const history = useHistory();

    const handleSelectGroup = e => setSelectedGroup(e.target.innerHTML);

    const submitSelectedGroup = () => {
        history.push(`/group/${selectedGroup}`);
        handleClose();
    };

    return (
        <Wrapper>
            <Subtitle>Select a group</Subtitle>
            <List>
                {groups.map(group => (
                    <Item key={group} onClick={e => handleSelectGroup(e)} isSelected={selectedGroup === group}>
                        {group}
                    </Item>
                ))}
            </List>
            <Button onClick={submitSelectedGroup} isBig>
                Save
            </Button>
        </Wrapper>
    );
};

export default ChangeGroup;
