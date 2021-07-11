import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { users as usersData } from 'data/users';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import AddUser from './AddUser';
import Dashboard from './Dashboard';

export const UsersContext = React.createContext({
    users: [],
    handleAddUser: () => {},
    deleteUser: () => {},
});

const Root = () => {
    const [users, setUsers] = useState(usersData);

    const deleteUser = name => {
        const filteredUsers = users.filter(user => user.name !== name);
        setUsers(filteredUsers);
    };

    const handleAddUser = values => {
        const newUser = {
            name: values.name,
            attendance: values.attendance,
            average: parseFloat(values.average),
        };

        setUsers([newUser, ...users]);
    };

    return (
        <Router>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <MainTemplate>
                    <UsersContext.Provider
                        value={{
                            users,
                            handleAddUser,
                            deleteUser,
                        }}
                    >
                        <Wrapper>
                            <Switch>
                                <Route path="/add-user">
                                    <AddUser />
                                </Route>
                                <Route path="/" exact>
                                    <Dashboard />
                                </Route>
                            </Switch>
                        </Wrapper>
                    </UsersContext.Provider>
                </MainTemplate>
            </ThemeProvider>
        </Router>
    );
};

export default Root;
