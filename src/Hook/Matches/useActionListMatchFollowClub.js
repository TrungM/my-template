import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import useActionGetOne from '../useActionGetOne';

const useActionListMatchFollowClub = (api, id, season) => {
    const GetListMatch = async () => {
        try {
            const response = await axios.get(`${api}/${id}/${season}`, {});
            if (response.data) {
                return response.data;
            } else {
                return [];
            }
        } catch (error) {
            console.error(error);
        }
    }

    const [listMatch, setlistMatch] = useState([]);
    const [listClubNext, setlistClubNext] = useState([]);
    const [code, setCode] = useState(id);
    const { GetOne } = useActionGetOne("/api/table");
    const [loading, setLoading] = useState(false);

    const handleGetList = useRef({});
    handleGetList.current = async () => {
        setLoading(true);
        const c_list = await GetListMatch();
        const s_items = await GetOne(code);
        console.log(c_list);

        c_list.map((item, index) => {
            if (item.clubHome.clubName.id === s_items.clubid && item.status == null) {
                return listClubNext.push(item.clubAway.clubName);
            }else if (item.clubAway.clubName.id === s_items.clubid  && item.status == null) {
                return listClubNext.push(item.clubHome.clubName);
            }
        })
        setlistMatch(c_list);
        setLoading(false);
    }

    useEffect(() => {
        handleGetList.current();
    }, [])

    return {
        listMatch,
        loading,
        listClubNext
    }

};

export default useActionListMatchFollowClub;