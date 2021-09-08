import { useCallback } from 'react';
import axios from 'axios';
import { useError } from './useError';

const studentsAPI = axios.create({});

studentsAPI.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');

        if (token) {
            config.headers.authorization = `Bearer ${token}`;
        }

        return config;
    },
    function (err) {
        return Promise.reject(err);
    }
);

export const useStudents = () => {
    const { dispatchError } = useError();
    const getErrorMsg = msg => {
        return `Couldn't load ${msg}. Please try again or contact our support`;
    };

    const getGroups = useCallback(async () => {
        try {
            const result = await studentsAPI.get('/groups');
            return result.data.groups;
        } catch (e) {
            dispatchError(getErrorMsg('groups'));
        }
    }, [dispatchError]);

    const getStudentsByGroup = useCallback(
        async groupId => {
            try {
                const result = await studentsAPI.get(`/groups/${groupId}`);
                return result.data.students;
            } catch (e) {
                dispatchError(getErrorMsg('group'));
            }
        },
        [dispatchError]
    );

    const getStudentById = useCallback(
        async studentId => {
            try {
                const result = await studentsAPI.get(`/students/${studentId}`);
                return result.data.student;
            } catch (e) {
                dispatchError(getErrorMsg('this student'));
            }
        },
        [dispatchError]
    );

    const findStudents = async searchPhrase => {
        try {
            const { data } = await studentsAPI.post(`/students/search`, {
                searchPhrase,
            });
            return data;
        } catch (e) {
            dispatchError(getErrorMsg('students'));
        }
    };

    return {
        getGroups,
        getStudentsByGroup,
        getStudentById,
        findStudents,
    };
};
