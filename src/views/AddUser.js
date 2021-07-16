import React, { useContext, useReducer } from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper.js';
import { Title } from 'components/atoms/Title/Title.js';
import { Button } from 'components/atoms/Button/Button';
import FormField from 'components/molecules/FormField/FormField';
import { UsersContext } from 'providers/UsersProvider.js';

const initialFormState = {
    name: '',
    attendance: '',
    average: '',
    consent: false,
    error: '',
};

const actionTypes = {
    inputChange: 'INPUT CHANGE',
    clearForm: 'CLEAR FORM',
    agreeToTerms: 'AGREE TO TERMS',
    throwError: 'THROW ERROR',
};

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.inputChange:
            return {
                ...state,
                [action.field]: action.value,
            };
        case actionTypes.clearForm:
            return initialFormState;
        case actionTypes.agreeToTerms:
            return {
                ...state,
                error: '',
                consent: !state.consent,
            };
        case actionTypes.throwError:
            return {
                ...state,
                error: action.errorMsg,
            };
        default:
            return state;
    }
};

const AddUser = () => {
    const [formValues, dispatch] = useReducer(reducer, initialFormState);
    const { handleAddUser } = useContext(UsersContext);

    const handleInputChange = e => {
        dispatch({
            type: actionTypes.inputChange,
            field: e.target.name,
            value: e.target.value,
        });
    };

    const handleSubmitUser = e => {
        e.preventDefault();
        if (formValues.consent) {
            handleAddUser(formValues);
            dispatch({ type: actionTypes.clearForm });
        } else {
            dispatch({ type: actionTypes.throwError, errorMsg: 'You need to agree to terms!' });
        }
    };

    return (
        <>
            <ViewWrapper as="form" onSubmit={handleSubmitUser}>
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
                <FormField
                    type="checkbox"
                    label="consent"
                    id="consent"
                    name="consent"
                    value={formValues.consent}
                    onChange={() => dispatch({ type: actionTypes.agreeToTerms })}
                />
                {formValues.error ? <p>{formValues.error}</p> : null}
                <Button type="submit">Add</Button>
            </ViewWrapper>
        </>
    );
};

export default React.memo(AddUser);
