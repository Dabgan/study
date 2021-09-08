import { SearchBar } from './SearchBar';

import { fireEvent, screen, render } from 'test-utils';
import { waitFor } from '@testing-library/react';

describe('SearchBar', () => {
    it('should render component properly', () => {
        render(<SearchBar />);
    });

    it('renders header with text correctly', () => {
        render(<SearchBar />);
        const header = screen.getByText('Teacher');
        expect(header).toBeInTheDocument();
    });

    it('renders input correctly', () => {
        render(<SearchBar />);
        const input = screen.getByPlaceholderText('Search');
        expect(input).toBeInTheDocument();
    });

    it('displays users when search phrase is matching', async () => {
        render(<SearchBar />);
        const input = screen.getByPlaceholderText('Search');
        fireEvent.change(input, { target: { value: 'Lon' } });
        const student = await screen.findByText(/Lonnie/);
        expect(student).toBeInTheDocument();
    });
    it('hides users list when input is empty', async () => {
        render(<SearchBar />);
        const input = screen.getByPlaceholderText('Search');
        fireEvent.change(input, { target: { value: 'Lon' } });
        await screen.findByText(/Lonnie/);

        fireEvent.change(input, { target: { value: '' } });

        await waitFor(() => {
            const list = screen.getByLabelText('results');
            expect(list).toBeEmptyDOMElement();
        });
    });
});
