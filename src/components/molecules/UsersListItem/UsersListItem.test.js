import React from 'react';
import UsersListItem from './UsersListItem';
import { renderWithProvider } from 'helpers/renderWithProvider';

describe('Users List Item', () => {
    const userData = { name: 'Gabriel', attendance: '95%', average: 4.9 };

    it('Renders the component', () => {
        renderWithProvider(<UsersListItem userData={userData} />);
    });
});
