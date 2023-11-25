import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import useActionDelete from '../useActionDelete';

const useActionListFullClub = (api, keyword = null) => {

    const GetList = async (api, keyword = null) => {
        try {
            if (keyword != null && keyword?.length > 0) {
                const response = await axios.get(`${api}?name=${keyword}`, {});
                if (response.data) {
                    return response.data;
                } else {
                    return [];
                }
            } else {
                const response = await axios.get(`${api}`, {});
                if (response.data) {
                    return response.data;
                } else {
                    return [];
                }
            }

        } catch (error) {
            console.error(error);
        }
    }



    const [listContentClub, setlistContentClub] = useState([]);
    const [loading, setLoading] = useState(false);

    const [new2, setNew2] = useState([]);
    const newArray = []
    const handleGetList = useRef({});
    handleGetList.current = async (keyword) => {
        setLoading(true);
        const c_list = await GetList(api, keyword);
        setlistContentClub(c_list);
        setLoading(false);
        c_list.map((items, index) => {
            return newArray.push(items.codeClub)

        })
        // console.log(newArray)
        setNew2(newArray)



    }

    useEffect(() => {
        handleGetList.current(keyword);

    }, [api, keyword])

    return {
        listContentClub,
        loading,
        new2,
    }
};

export default useActionListFullClub;