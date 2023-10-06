import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

const useActionListSeasonUI = (api) => {

    const GetList = async (api) => {
        // /api/stadiums/all
        try {
            const response = await axios.get(`${api}`, {});
            if (response.data) {
                return response.data;
            } else {
                return [];
            }
        } catch (error) {
            console.error(error);
        }
    }



    const [listActiveUI, setlistActiveUI] = useState([]);
    const [loading, setLoading] = useState(false);
    const handleGetList = useRef({});
    handleGetList.current = async () => {
        setLoading(true);
        const c_list = await GetList(api);
        setlistActiveUI(c_list);
        setLoading(false);
    }

    useEffect(() => {
        handleGetList.current();

    }, [api])

    return {
        listActiveUI,
        loading,
    }
};

export default useActionListSeasonUI;