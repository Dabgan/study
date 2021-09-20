import React from 'react';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { useForm } from 'react-hook-form';
import { useAuth } from 'hooks/useAuth';
import { LoginViewWrapper, LoginWrapper } from './UnauthenticatedApp.styles';

const UnauthenticatedApp = () => {
    const auth = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <LoginWrapper>
            <LoginViewWrapper>
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
            </LoginViewWrapper>
        </LoginWrapper>
    );
};

export default UnauthenticatedApp;
