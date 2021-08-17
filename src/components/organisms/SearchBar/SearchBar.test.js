import { SearchBar } from './SearchBar';
import { setupServer } from 'msw/node';
import { handlers } from 'mocks/handlers';
import { fireEvent, screen, render } from 'test-utils';
import { waitFor } from '@testing-library/react';

const server = setupServer(...handlers);

describe('SearchBar', () => {
    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());

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
        fireEvent.change(input, { target: { value: 'weł' } });
        const student = await screen.findByText(/Paweł Andrzejewski/);
        expect(student).toBeInTheDocument();
    });
    it('hides users list when input is empty', async () => {
        render(<SearchBar />);
        const input = screen.getByPlaceholderText('Search');
        fireEvent.change(input, { target: { value: 'Paw' } });
        await screen.findByText(/Paweł Andrzejewski/);

        fireEvent.change(input, { target: { value: '' } });

        await waitFor(() => {
            const list = screen.getByLabelText('results');
            expect(list).toBeEmptyDOMElement();
        });
    });
});
