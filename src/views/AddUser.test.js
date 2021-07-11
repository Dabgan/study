import AddUser from './AddUser';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithProvider } from 'helpers/renderWithProvider';
import Dashboard from './Dashboard';

describe('Add user', () => {
    it('Renders the component', () => {
        renderWithProvider(<AddUser />);
    });

    it('adds new user and display it on dashboard', () => {
        renderWithProvider(
            <>
                <AddUser />
                <Dashboard />
            </>
        );
        fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Gabriel' } });
        fireEvent.change(screen.getByLabelText('Attendance'), { target: { value: '95%' } });
        fireEvent.change(screen.getByLabelText('Average'), { target: { value: '5.9' } });
        fireEvent.click(screen.getByText('Add'));

        screen.getByText('Gabriel');
    });
});
