import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Input } from 'components/atoms/Input/Input';
import {
    SearchBarWrapper,
    StatusInfo,
    StyledDropdown,
    StyledListItem,
    SearchList,
} from 'components/organisms/SearchBar/SearchBar.styles';

export const SearchBar = () => {
    const [inputValue, setInputValue] = useState('');
    const [matchingStudents, setMatchingStudents] = useState([]);

    const handleInputChange = e => {
        setInputValue(e.target.value);
    };

    useEffect(() => {
        if (inputValue) {
            axios
                .get(`/student/${encodeURIComponent(inputValue)}`)
                .then(({ data }) => {
                    setMatchingStudents(data.students);
                })
                .catch(err => console.log(err));
        } else {
            setMatchingStudents([]);
        }
    }, [inputValue]);

    return (
        <SearchBarWrapper>
            <StatusInfo>
                <p>Logged as:</p>
                <p>
                    <strong>Teacher</strong>
                </p>
            </StatusInfo>

            <StyledDropdown>
                <Input value={inputValue} onChange={e => handleInputChange(e)} />
                {matchingStudents.length ? (
                    <SearchList>
                        {matchingStudents.map((student, index) => {
                            return (
                                <StyledListItem key={student.id} index={index} isSelected>
                                    {student.name}
                                </StyledListItem>
                            );
                        })}
                    </SearchList>
                ) : null}
            </StyledDropdown>
        </SearchBarWrapper>
    );
};
