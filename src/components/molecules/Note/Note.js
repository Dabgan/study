import React from 'react';
import { Title } from 'components/atoms/Title/Title';
import { useDispatch } from 'react-redux';
import { removeNote } from 'store';
import { NoteWrapper, StyledDeleteButton } from 'components/molecules/Note/Note.styles';

const Note = ({ title = 'Untitled', content = 'No content', id }) => {
    const dispatch = useDispatch();

    const handleRemoveNote = () => {
        dispatch(removeNote({ id: id }));
    };

    return (
        <NoteWrapper>
            <StyledDeleteButton onClick={handleRemoveNote} />
            <Title>{title}</Title>
            <p>{content}</p>
        </NoteWrapper>
    );
};

export default Note;
