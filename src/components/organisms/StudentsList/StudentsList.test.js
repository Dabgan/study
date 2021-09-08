import StudentsList from './StudentsList';
import { setupServer } from 'msw/node';
import { handlers } from 'mocks/handlers';
import { screen, render } from 'test-utils';
import { Route, MemoryRouter } from 'react-router-dom';

const server = setupServer(...handlers);

describe('Students List', () => {
    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());

    it('Renders the component and displays students from group A', async () => {
        render(
            <MemoryRouter initialEntries={['/group/A']}>
                <Route path="/group/:id?">
                    <StudentsList />
                </Route>
            </MemoryRouter>
        );
        const student = await screen.findByText(/Lonnie Deckow/);
        expect(student).toBeInTheDocument();
    });
});
