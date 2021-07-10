import React from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper.js';
import { Title } from 'components/atoms/Title/Title.js';
import { Button } from 'components/atoms/Button/Button';
import FormField from 'components/molecules/FormField/FormField';

const Form = ({ handleAddUser, formValues, handleInputChange }) => {
    return (
        <>
            <ViewWrapper as="form" onSubmit={handleAddUser}>
                <Title>Add new student</Title>
                <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
                <FormField
                    label="Attendance"
                    id="attendance"
                    name="attendance"
                    value={formValues.attendance}
                    onChange={handleInputChange}
                />
                <FormField
                    label="Average"
                    id="average"
                    name="average"
                    value={formValues.average}
                    onChange={handleInputChange}
                />
                <Button type="submit">Add</Button>
            </ViewWrapper>
        </>
    );
};

export default Form;
