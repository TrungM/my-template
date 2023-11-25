import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

const useActionListFullFlag = (api) => {
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



    const [listAllFlags, setlistAllFlags] = useState([]);
    const [loading, setLoading] = useState(false);
    const handleGetList = useRef({});
    handleGetList.current = async () => {
        setLoading(true);
        const c_list = await GetList(api);
        setlistAllFlags(c_list);
        setLoading(false);

    }

    useEffect(() => {
        handleGetList.current();

    }, [api])

    return {
        listAllFlags,
        loading,
    }
};

export default useActionListFullFlag;