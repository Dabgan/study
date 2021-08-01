import StudentsList from './StudentsList';
import { screen } from '@testing-library/react';
import { renderWithProvider } from 'helpers/renderWithProvider';

describe('Users List', () => {
    it('Renders the component', () => {
        renderWithProvider(<StudentsList />);
    });

    it('displays users', () => {
        renderWithProvider(<StudentsList />);
        screen.getByText('Patrycja Gonciarz');
        screen.getByText('Olga Hahn');
        screen.getByText('Paweł Roman');
    });
});
