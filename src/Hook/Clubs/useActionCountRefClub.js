import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

const useActionCountRefClub = () => {

    const handleCountRef = async (count) => {
        try {
            const response = await axios.get(`/api/clubs/countClubRef/${count}`, {});
            if (response.data) {
                return response.data;
            } else {
                return [];
            }
        } catch (error) {
            console.error(error);
        }
    }

    const [seasonCount, setSeasonCount]=useState([]);
    const [count, setcount]=useState(0);

    const handleGetList = useRef({});
    handleGetList.current = async (count) => {
        const c_list = await handleCountRef(count);
        setSeasonCount(c_list);
    }

    useEffect(() => {
        handleGetList.current(count);

    }, [count])

    return {
        handleCountRef,
        seasonCount,
        setcount,
        count
    }
};

export default useActionCountRefClub;