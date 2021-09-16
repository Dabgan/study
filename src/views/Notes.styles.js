import styled from 'styled-components/macro';
import FormField from 'components/molecules/FormField/FormField';

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
    grid-gap: 30px;
    padding: 30px;
`;

export const FormWrapper = styled.div`
    padding: 40px;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 25px;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const StyledFormField = styled(FormField)`
    height: ${({ isTextarea }) => (isTextarea ? '300px' : 'unset')};
    width: ${({ isTextarea }) => (isTextarea ? '100%' : 'initial')};
    resize: vertical;
    min-height: ${({ isTextarea }) => (isTextarea ? '80%' : 'initial')};
`;

export const NotesWrapper = styled.div`
    padding: 20px 60px;
    display: flex;
    flex-direction: column;
    width: 100%;
`;
