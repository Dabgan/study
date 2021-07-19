import React from 'react';
import { screen } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import NewsSection, { query } from 'components/templates/NewsSection/NewsSection';
import { renderWithProvider } from 'helpers/renderWithProvider';

const mock = new MockAdapter(axios);

describe('News Section', () => {
    afterEach(() => {
        mock.reset();
    });

    it('displays error when articles are not loaded correctly', async () => {
        mock.onPost('https://graphql.datocms.com/', { query }).reply(500);
        renderWithProvider(<NewsSection />);
        await screen.findByText(/Sorry/);
    });

    it('displays posts news when articles are loaded correctly', async () => {
        mock.onPost('https://graphql.datocms.com/', { query }).reply(200, {
            data: {
                allArticles: [{ id: 1, title: 'Test', category: 'Test', content: 'Test' }],
            },
        });
        renderWithProvider(<NewsSection />);
        await screen.findAllByText(/Test/);
    });

    it('displays Loading text before loading posts', async () => {
        mock.onPost('https://graphql.datocms.com/', { query }).reply(200, {
            data: {
                allArticles: [{ id: 1, title: 'Test', category: 'Test', content: 'Test' }],
            },
        });
        renderWithProvider(<NewsSection />);
        await screen.findByText(/Loading/);
    });
});
