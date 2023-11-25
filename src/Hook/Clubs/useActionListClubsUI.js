import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

const useActionListClubsUI = () => {

    const handleGetListClub = async () => {

        try {
            const response = await axios.get("/api/clubs/index", {});
            if (response.data) {
                return response.data;
            } else {
                return [];
            }
        } catch (error) {
            console.error(error);
        }
    }
    const [listContent, setlistContent] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleGetList = useRef({});
    handleGetList.current = async () => {
        setLoading(true);
        const c_list = await handleGetListClub();
        setlistContent(c_list);
        setLoading(false);
    }
    useEffect(() => {
        handleGetList.current();
    }, [])

    return {
        listContent,
        loading
    }
};

export default useActionListClubsUI;