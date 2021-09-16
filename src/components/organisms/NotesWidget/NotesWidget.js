import React from 'react';
import Note from 'components/molecules/Note/Note';
import { useSelector } from 'react-redux';
import { NotesWrapper, WidgetHandler, Wrapper } from 'components/organisms/NotesWidget/NotesWidget.styles';
import { Title } from 'components/atoms/Title/Title';

const NotesWidget = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const notes = useSelector(state => state.notes);

    const handleToggleWidget = () => setIsOpen(prevState => !prevState);

    return (
        <Wrapper isOpen={isOpen}>
            <WidgetHandler onClick={handleToggleWidget}>notes</WidgetHandler>
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

export default NotesWidget;
