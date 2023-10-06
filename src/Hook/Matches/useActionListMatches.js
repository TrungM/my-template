import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

const useActionListMatches = (api) => {

    const [clubID, setclubID] = useState(0);

    const GetList = async (api, id) => {
        // /api/stadiums/all
        try {
            const response = await axios.get(`${api}?id=${id}`, {});
            if (response.data) {
                return response.data;
            } else {
                return [];
            }
        } catch (error) {
            console.error(error);
        }
    }

    const GetListFull = async (api) => {
        // /api/stadiums/all
        try {
            const response = await axios.get(`${api}?id=0`, {});
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
    const [new2, setNew2] = useState([]);

    const handleGetList = useRef({});
    handleGetList.current = async (clubID) => {
            setLoading(true);
            const c_list = await GetList(api,clubID);
            setlistContentClub(c_list);
            setLoading(false);
    }

    useEffect(() => {
        handleGetList.current(clubID);

    }, [api,clubID])

    return {
        listContentClub,
        loading,
        new2,
        setclubID
    }
};

export default useActionListMatches;