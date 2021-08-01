import { useEffect, useState } from 'react';
import axios from 'axios';

export const useStudents = ({ groupId = '' } = {}) => {
    const [students, setStudents] = useState([]);
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        axios
            .get('/groups')
            .then(({ data }) => setGroups(data.groups))
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        axios
            .get(`/students/${groupId || groups[0]}`)
            .then(({ data }) => setStudents(data.students))
            .catch(err => console.log(err));
    }, [groupId, groups]);

    return { students, groups };
};
