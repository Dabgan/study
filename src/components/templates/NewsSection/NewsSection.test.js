import React from 'react';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import NewsSection, { query } from 'components/templates/NewsSection/NewsSection';
import { screen, render } from 'test-utils';

const mock = new MockAdapter(axios);

describe('News Section', () => {
    afterEach(() => {
        mock.reset();
    });

    it('displays error when articles are not loaded correctly', async () => {
        mock.onPost('https://graphql.datocms.com/', { query }).reply(500);
        render(<NewsSection />);
        await screen.findByText(/Sorry/);
    });

    it('displays posts news when articles are loaded correctly', async () => {
        mock.onPost('https://graphql.datocms.com/', { query }).reply(200, {
            data: {
                allArticles: [{ id: 1, title: 'Test', category: 'Test', content: 'Test' }],
            },
        });
        render(<NewsSection />);
        await screen.findAllByText(/Test/);
    });

    it('displays Loading text before loading posts', async () => {
        mock.onPost('https://graphql.datocms.com/', { query }).reply(200, {
            data: {
                allArticles: [{ id: 1, title: 'Test', category: 'Test', content: 'Test' }],
            },
        });
        render(<NewsSection />);
        await screen.findByText(/Loading/);
    });
});
