import React from 'react';
import StudentsListItem from './StudentsListItem';
import { render } from 'test-utils';

describe('Students List Item', () => {
    const userData = { name: 'Gabriel', attendance: '95%', average: 4.9 };

    it('Renders the component', () => {
        render(<StudentsListItem userData={userData} />);
    });
});
