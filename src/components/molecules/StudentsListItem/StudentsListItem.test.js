import React from 'react';
import StudentsListItem from './StudentsListItem';
import { renderWithProvider } from 'helpers/renderWithProvider';

describe('Students List Item', () => {
    const userData = { name: 'Gabriel', attendance: '95%', average: 4.9 };

    it('Renders the component', () => {
        renderWithProvider(<StudentsListItem userData={userData} />);
    });
});
