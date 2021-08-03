import { SearchBar } from './SearchBar';
import { setupServer } from 'msw/node';
import { handlers } from 'mocks/handlers';
import { fireEvent, screen, render } from 'test-utils';

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
    it('is not displaying matching users list when input is empty', async () => {
        render(<SearchBar />);
        const input = screen.getByPlaceholderText('Search');
        fireEvent.change(input, { target: { value: 'Paw' } });
        fireEvent.change(input, { target: { value: '' } });
        const list = await screen.findByTestId('students-list');
        expect(list).toBeEmptyDOMElement();
    });
});
