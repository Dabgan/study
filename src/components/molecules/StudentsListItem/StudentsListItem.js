import React, { useContext } from 'react';
import { UsersContext } from 'providers/UsersProvider';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import Average from 'components/atoms/Average/Average';
import PropTypes from 'prop-types';
import { UserShape } from 'types';
import { Wrapper, StyledInfo } from './StudentsListItem.styles';

const StudentsListItem = ({ userData: { average, name, attendance = '0%' }, ...props }) => {
    const { deleteUser } = useContext(UsersContext);

    return (
        <Wrapper {...props}>
            <Average averageData={average}>{average}</Average>
            <StyledInfo>
                <p>{name}</p>
                <p>attendance: {attendance}%</p>
            </StyledInfo>
            <DeleteButton onClick={() => deleteUser(name)} data-testid="delete-button" />
        </Wrapper>
    );
};

StudentsListItem.propTypes = {
    userData: PropTypes.shape(UserShape),
};

export default React.memo(StudentsListItem);
