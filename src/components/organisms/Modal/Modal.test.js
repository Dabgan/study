import Modal from './Modal';
import { setupServer } from 'msw/node';
import ModalComponent from 'react-modal';
import { handlers } from 'mocks/handlers';
import { fireEvent, screen, render } from 'test-utils';
import { Route, MemoryRouter } from 'react-router-dom';
import StudentsList from '../StudentsList/StudentsList';
import { act } from 'react-dom/test-utils';

const server = setupServer(...handlers);

describe('Modal', () => {
    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());

    it('Renders the modal button correctly', async () => {
        render(
            <MemoryRouter initialEntries={['/group/A']}>
                <Route path="/group/:id?">
                    <div id="root">
                        <Modal />
                    </div>
                </Route>
            </MemoryRouter>
        );
        ModalComponent.setAppElement('#root');
        const button = await screen.findByText(/change group/);
        expect(button).toBeInTheDocument();
    });

    it('correctly opens modal after button click', async () => {
        render(
            <MemoryRouter initialEntries={['/group/A']}>
                <Route path="/group/:id?">
                    <div id="root">
                        <Modal />
                    </div>
                </Route>
            </MemoryRouter>
        );
        ModalComponent.setAppElement('#root');
        const button = await screen.findByText(/change group/i);
        fireEvent.click(button);
        const modalHeader = await screen.findByText(/select a group/i);
        expect(modalHeader).toBeInTheDocument();
    });

    it('changes the displayed group of students after subbmiting a modal', async () => {
        act(() => {
            render(
                <MemoryRouter initialEntries={['/group/A']}>
                    <Route path="/group/:id?">
                        <div id="root">
                            <StudentsList />
                            <Modal groups={['A', 'B', 'C']} />
                        </div>
                    </Route>
                </MemoryRouter>
            );
        });

        ModalComponent.setAppElement('#root');
        const button = await screen.findByText(/change group/i);
        fireEvent.click(button);
        const groupB = await screen.findByText(/b/i);
        const submitBtn = await screen.findAllByText(/select/i);
        fireEvent.click(groupB);
        fireEvent.click(submitBtn[1]);
        const student = await screen.findByText(/roman połajko/i);
        expect(student).toBeInTheDocument();
    });
});
