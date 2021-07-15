import UsersList from './UsersList';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithProvider } from 'helpers/renderWithProvider';

describe('Users List', () => {
    it('Renders the component', () => {
        renderWithProvider(<UsersList />);
    });

    it('displays users', () => {
        renderWithProvider(<UsersList />);
        screen.getByText('Patrycja Gonciarz');
        screen.getByText('Olga Hahn');
        screen.getByText('Paweł Roman');
    });
});
