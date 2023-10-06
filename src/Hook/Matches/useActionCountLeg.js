import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

const useActionCountLeg = (api, leg,count) => {
    const getCountActive = async () => {
        try {
            const response = await axios.get(`${api}/${leg}/${count}`, {});
            if (response.data) {
                return  response.data;
            } else {
                return [];
            }
        } catch (error) {
            console.error(error);
        }
    }
    const [countLeg, setcountLeg] = useState(0);

    const handleGetList = useRef({});
    handleGetList.current = async () => {
        const count = await getCountActive();
        setcountLeg(count);
    }

    useEffect(() => {
        handleGetList.current();
    }, [])

    return {
        countLeg,
        setcountLeg
    }
};

export default useActionCountLeg;