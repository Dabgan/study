import { Input } from 'components/atoms/Input/Input';
import React, { useState } from 'react';
import debounce from 'lodash.debounce';
import { useCombobox } from 'downshift';
import {
    SearchBarWrapper,
    SearchResults,
    SearchResultsItem,
    SearchWrapper,
    StatusInfo,
} from 'components/organisms/SearchBar/SearchBar.styles';
import { useStudents } from 'hooks/useStudents';

export const SearchBar = () => {
    const [matchingStudents, setMatchingStudents] = useState([]);
    const { findStudents } = useStudents();

    const getMatchingStudents = debounce(async ({ inputValue }) => {
        const { students } = await findStudents(inputValue);
        setMatchingStudents(students);
    }, 500);

    const { isOpen, getMenuProps, getInputProps, getComboboxProps, highlightedIndex, getItemProps } = useCombobox({
        itemToString: item => (item ? item.name : ''),
        items: matchingStudents,
        onInputValueChange: getMatchingStudents,
    });

    return (
        <SearchBarWrapper>
            <StatusInfo>
                <p>Logged as:</p>
                <p>
                    <strong>Teacher</strong>
                </p>
            </StatusInfo>
            <SearchWrapper {...getComboboxProps()}>
                <Input {...getInputProps()} name="Search" id="Search" placeholder="Search" />
                <SearchResults
                    isVisible={isOpen && matchingStudents.length > 0}
                    {...getMenuProps()}
                    aria-label="results"
                >
                    {isOpen &&
                        matchingStudents.map((item, index) => (
                            <SearchResultsItem
                                key={item.id}
                                isHighlighted={highlightedIndex === index}
                                {...getItemProps({ item, index })}
                            >
                                {item.name}
                            </SearchResultsItem>
                        ))}
                </SearchResults>
            </SearchWrapper>
        </SearchBarWrapper>
    );
};
