import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

const useActionListUI = () => {

    const [loading, setLoading] = useState(false);
    const [listContent, setlistContent] = useState([]);

    const GetListTable = async () => {
        try {
            const response = await axios.get('/api/table/index', {});
            if (response.data) {
                return response.data;
            } else {
                return [];
            }
        } catch (error) {
            console.error(error);
        }
    }

    const handleGetList = useRef({});
    handleGetList.current = async () => {
        setLoading(true);
        const c_list = await GetListTable();
        setlistContent(c_list);
        setLoading(false);

    }

    useEffect(() => {
        handleGetList.current();
    }, [])

    return {
        loading,
        listContent
    }
};

export default useActionListUI;