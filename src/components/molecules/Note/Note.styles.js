import styled from 'styled-components/macro';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';

export const NoteWrapper = styled.div`
    margin-bottom: 20px;
    :last-child {
        margin-bottom: 0px;
    }
    display: grid;
    grid-template-columns: 30px 1fr;
    grid-template-rows: auto 1fr;
    align-items: center;
    grid-gap: 16px 8px;
    h2,
    p {
        margin: 0;
        color: ${({ theme }) => theme.colors.darkGrey};
    }

    p {
        grid-column: 2/3;
    }
`;

export const StyledDeleteButton = styled(DeleteButton)`
    margin: 0 0;
    grid-column: 1/2;
    justify-self: center;
`;
