import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import useActionDelete from '../useActionDelete';

const useActionListActive = (api) => {

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

    const [listContentClubActive, setlistContentClubActive] = useState([]);
    const [loading, setLoading] = useState(false);

    const [new2, setNew2] = useState([]);
    const newArray = []
    const handleGetList = useRef({});
    handleGetList.current = async () => {
        setLoading(true);
        const c_list = await GetList(api);
        setlistContentClubActive(c_list);
        setLoading(false);
        c_list.map((items, index) => {
            return newArray.push(items.codeClub)

        })
        setNew2(newArray)



    }

    useEffect(() => {
        handleGetList.current();

    }, [api])

    return {
        listContentClubActive,
        loading,
        new2,
    }
};

export default useActionListActive;