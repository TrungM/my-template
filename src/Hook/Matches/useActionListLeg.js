import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

const useActionListLeg = (api,leg,season) => {
    const handleListLeg = async () => {
        try {
            const response =await axios.get(`${api}/${leg}/${season}`,{});
            if (response.data) {
                return response.data;
            } else {
                return [];
            }
        } catch (error) {

            console.log(error);

        }

    }
    const [loading, setLoading] = useState(false);
    const [listContent, setlistContent] = useState([]);

    const handleGetList = useRef({});
    handleGetList.current = async () => {
        setLoading(true);
        const c_list = await handleListLeg();
        setlistContent(c_list);
        setLoading(false);

    }

    useEffect(() => {
        handleGetList.current();
    }, [])


    return {
        loading,
        listContent,
    }
};

export default useActionListLeg;