import { Title } from 'components/atoms/Title/Title';
import React from 'react';
import { Wrapper } from './ErrorMessage.styles';
import PropTypes from 'prop-types';

const defaultErrorMessage = 'Something went wrong, please try again or contact our administration';

const ErrorMessage = ({ message = defaultErrorMessage }) => {
    return (
        <Wrapper>
            <Title>Ooops!</Title>
            <p>{message}</p>
        </Wrapper>
    );
};

export default ErrorMessage;

ErrorMessage.propTypes = {
    message: PropTypes.string,
};
