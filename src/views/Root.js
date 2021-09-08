import React from 'react';
import { Wrapper } from './Root.styles';
import { Switch, Route, Redirect } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import Dashboard from './Dashboard';
import FormField from 'components/molecules/FormField/FormField';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Button } from 'components/atoms/Button/Button';
import { useForm } from 'react-hook-form';
import { useAuth } from 'hooks/useAuth';
import { useError } from 'hooks/useError';
import ErrorMessage from 'components/molecules/ErrorMessage/ErrorMessage';

const AuthenticatedApp = () => {
    return (
        <MainTemplate>
            <Wrapper>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/group" />
                    </Route>
                    <Route path="/group/:id?">
                        <Dashboard />
                    </Route>
                </Switch>
            </Wrapper>
        </MainTemplate>
    );
};

const UnauthenticatedApp = () => {
    const auth = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <Wrapper style={{ height: '100vh', alignItems: 'center' }}>
            <ViewWrapper style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <form onSubmit={handleSubmit(auth.signIn)}>
                    <FormField
                        defaultValue=""
                        {...register('login', { required: true })}
                        label="login"
                        name="login"
                        id="login"
                    />
                    {errors.login && <span>Login is required</span>}
                    <FormField
                        {...register('password', { required: true })}
                        label="password"
                        name="password"
                        id="password"
                        type="password"
                    />
                    {errors.password && <span>Please provide a password</span>}
                    <Button type="submit">Sign in</Button>
                </form>
            </ViewWrapper>
        </Wrapper>
    );
};

const Root = () => {
    const auth = useAuth();
    const { error } = useError();

    return (
        <>
            {error ? <ErrorMessage message={error}></ErrorMessage> : null}
            {auth.user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
        </>
    );
};

export default Root;
