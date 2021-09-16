import React from 'react';
import { Button } from 'components/atoms/Button/Button';
import Note from 'components/molecules/Note/Note';
import { useDispatch, useSelector } from 'react-redux';
import { addNote } from 'store';
import { FormWrapper, NotesWrapper, StyledFormField, Wrapper } from 'views/Notes.styles';
import { Title } from 'components/atoms/Title/Title';
import { useForm } from 'react-hook-form';

const Notes = () => {
    const notes = useSelector(state => state.notes);
    const dispatch = useDispatch();

    const handleAddNote = () => {
        dispatch(
            addNote({ title: `New Note ${Math.floor(Math.random() * 10)}`, content: 'Lorem ipsum dolor sit amet' })
        );
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <Wrapper>
            <FormWrapper>
                <form onSubmit={handleSubmit(handleAddNote)} style={{ width: '100%' }}>
                    <StyledFormField
                        {...register('title', { required: false })}
                        label="Title"
                        name="title"
                        id="title"
                    />
                    <StyledFormField
                        {...register('content', { required: true })}
                        isTextarea
                        label="Content"
                        name="content"
                        id="content"
                    />
                    {errors.content && <span>Please provide content!</span>}
                    <Button type="submit">Add</Button>
                </form>
            </FormWrapper>
            <NotesWrapper>
                {notes.length ? (
                    notes.map(({ title, content, id }) => <Note id={id} key={id} title={title} content={content} />)
                ) : (
                    <Title>Create your first note!</Title>
                )}
            </NotesWrapper>
        </Wrapper>
    );
};

export default Notes;
