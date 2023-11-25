import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

const useActionListNewsUI = () => {
    const [loadingNews, setLoading] = useState(false);
    const [listContentNews, setlistContent] = useState([]);

    const GetList = async () => {
        try {
            const response = await axios.get('/api/news/home', {});
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
        const c_list = await GetList();
        setlistContent(c_list);
        setLoading(false);

    }

    useEffect(() => {
        handleGetList.current();
    }, [])

    return {
        loadingNews,
        listContentNews
    }
};

export default useActionListNewsUI;