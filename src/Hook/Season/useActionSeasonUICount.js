import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

const useActionSeasonUICount = () => {

    const GetValues = async () => {
        try {
            const response = await axios.get("/api/season/seasonUI/count");
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }



    const [value, setValue] = useState([]);

    const handleGetList = useRef({});
    handleGetList.current = async () => {
        const c_list = await GetValues();
        setValue(c_list);
    }

    useEffect(() => {
        handleGetList.current();
    }, [])

    return {
        value,
    }
};

export default useActionSeasonUICount;