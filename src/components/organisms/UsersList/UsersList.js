import React, { useState } from 'react';
import { users as usersData } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList, Wrapper, StyledTitle } from './UsersList.styles';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';

const initialFormState = {
    name: '',
    attendance: '',
    average: '',
};

const UsersList = () => {
    const [users, setUsers] = useState(usersData);
    const [formValues, setFormValues] = useState(initialFormState);

    console.log(users);

    const deleteUser = name => {
        const filteredUsers = users.filter(user => user.name !== name);
        setUsers(filteredUsers);
    };

    const handleInputChange = e => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    const handleAddUser = e => {
        e.preventDefault();

        const newUser = {
            name: formValues.name,
            attendance: formValues.attendance,
            average: parseFloat(formValues.average),
        };

        setUsers([newUser, ...users]);

        setFormValues(initialFormState);
    };

    return (
        <>
            <Wrapper as="form" onSubmit={handleAddUser}>
                <StyledTitle>Add new student:</StyledTitle>
                <FormField
                    label="Name"
                    id="name"
                    name="name"
                    value={formValues.name}
                    onChange={handleInputChange}
                ></FormField>
                <FormField
                    label="Attendance"
                    id="attendance"
                    name="attendance"
                    value={formValues.attendance}
                    onChange={handleInputChange}
                ></FormField>
                <FormField
                    label="Average"
                    id="average"
                    name="average"
                    value={formValues.average}
                    onChange={handleInputChange}
                ></FormField>
                <Button type="submit">Add</Button>
            </Wrapper>

            <Wrapper>
                <StyledTitle>UsersList</StyledTitle>
                <StyledList>
                    {users.map((userData, i) => (
                        <UsersListItem key={userData.name} deleteUser={deleteUser} userData={userData} index={i} />
                    ))}
                </StyledList>
            </Wrapper>
        </>
    );
};

export default React.memo(UsersList);
