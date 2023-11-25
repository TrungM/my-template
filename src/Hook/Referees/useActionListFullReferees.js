import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
const useActionListFullReferees = (api) => {
    const GetList = async (api) => {
        try {
            const response = await axios.get(`${api}`, {});
            if (response.data) {
                return response.data;
            } else {
                return [];
            }
        }
        catch (error) {
            console.error(error);
        }
    }

    const [listAllReferees, setlistAllReferees] = useState([]);
    const [loading, setLoading] = useState(false);
    const handleGetList = useRef({});
    handleGetList.current = async () => {
        setLoading(true);
        const c_list = await GetList(api);
        setlistAllReferees(c_list);
        setLoading(false);

    }

    useEffect(() => {
        handleGetList.current();

    }, [api])

    return {
        listAllReferees,
        loading,
    }
};

export default useActionListFullReferees;