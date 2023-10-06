import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

const useActionCountActive = (api) => {
    const getCountActive = async (api) => {
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
    const [countActive, setcountActive] = useState(0);

    const handleGetList = useRef({});
    handleGetList.current = async () => {
        const count = await getCountActive(api);
        setcountActive(count);
    }

    useEffect(() => {
        handleGetList.current();
    }, [api])

    return {
        countActive,
        setcountActive
    }
};

export default useActionCountActive;