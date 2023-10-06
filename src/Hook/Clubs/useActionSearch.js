import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

const useActionSearch = (api) => {

    const handleSearch = async (api,search) => {
        // /api/stadiums/all
        try {
            const response = await axios.get(`${api}?name=${search}`, {});
            if (response.data) {
                return response.data;
            } else {
                return [];
            }
        } catch (error) {
            console.error(error);
        }
    }





    const [listContentClub, setlistContentClub] = useState([]);
    const [loading, setLoading] = useState(false);

    const [search, setSearchClubs]=useState("");

    const [new2, setNew2] = useState([]);
    const newArray = []
    const handleGetList = useRef({});
    handleGetList.current = async (search) => {
        setLoading(true);
        const c_list = await handleSearch(api,search);
        setlistContentClub(c_list);
        setLoading(false);
    

    }

    useEffect(() => {
        handleGetList.current(api,search);

    }, [api,search])

    return {
        listContentClub,
        loading,
        setSearchClubs
    }
};

export default useActionSearch;