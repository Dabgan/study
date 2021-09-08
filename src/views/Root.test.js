import React from 'react';
import { render, screen, fireEvent, waitFor } from 'test-utils';
import Root from './Root';

describe('Root Component', () => {
    it('Renders the root component as Unauthenticated user', () => {
        render(<Root />);
        screen.getAllByLabelText('login');
    });

    it('Displays error when wrong credentials are provided', async () => {
        render(<Root />);

        const loginInput = screen.getByLabelText('login');
        const passwordInput = screen.getByLabelText('password');
        const btn = screen.getByText('Sign in');

        fireEvent.change(loginInput, { target: { value: 'Test' } });
        fireEvent.change(passwordInput, { target: { value: '1234' } });
        fireEvent.click(btn);

        await waitFor(() => {
            screen.getByText(/Ooops/);
        });
    });

    it('Displays authenticated application after successful login', async () => {
        render(<Root />);

        const loginInput = screen.getByLabelText('login');
        const passwordInput = screen.getByLabelText('password');
        const btn = screen.getByText('Sign in');

        fireEvent.change(loginInput, { target: { value: 'teacher@studybuddy.com' } });
        fireEvent.change(passwordInput, { target: { value: '1234' } });
        fireEvent.click(btn);

        await waitFor(() => {
            screen.getByText(/Logged as/);
        });
    });
});
