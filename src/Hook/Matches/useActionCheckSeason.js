import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

const useActionCheckSeason = (api,count) => {
    const getCountActive = async () => {
        try {
            const response = await axios.get(`${api}/${count}`, {});
            if (response.data) {
                return  response.data;
            } else {
                return [];
            }
        } catch (error) {
            console.error(error);
        }
    }
    const [checkSeason, setcheckSeason] = useState();

    const handleGetList = useRef({});
    handleGetList.current = async () => {
        const count = await getCountActive();
        setcheckSeason(count);
    }

    useEffect(() => {
        handleGetList.current();
    }, [])

    return {
        checkSeason,
        setcheckSeason
    }
};

export default useActionCheckSeason;