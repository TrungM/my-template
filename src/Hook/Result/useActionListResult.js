import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

const useActionListResult = () => {
    const [loading, setLoading] = useState(false);
    const [listContent, setlistContent] = useState([]);

    const GetListMatch = async () => {
        try {
            const response = await axios.get('/api/match/result', {});
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
    const [timeArray, setTimeArray] = useState([])
    const [uniqueTime, setUniqueTime] = useState([])
    handleGetList.current = async () => {
        setLoading(true);
        const c_list = await GetListMatch();
        c_list.map((item) => {
            timeArray.push(item.matchDay);
        })
        let uniqueTime = timeArray.filter((value, index, self) => {
            return self.indexOf(value) === index;
        });
        setUniqueTime(uniqueTime);
        setlistContent(c_list);
        setLoading(false);

    }

    useEffect(() => {
        handleGetList.current();
    }, [])

    return {
        loading,
        listContent,
        uniqueTime
    }
};

export default useActionListResult;