import React from 'react';
import useActionGetOne from '../useActionGetOne';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import axios from 'axios';

const useActionGetOneNewsUI = (id) => {

    const [loading, setLoading] = useState(false);
    const [content, setContent] = useState([]);
    const GetOne = async (id) => {
        try {
            const response = await axios.get(`/api/news/show/${id}`);
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
    handleGetList.current = async (id) => {
        setLoading(true);
        const item = await GetOne(id);
        setContent(item);
        setLoading(false);

    }

    useEffect(() => {
        handleGetList.current(id);
    }, [id])

    return {
        loading,
        content

    }

};

export default useActionGetOneNewsUI;