import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

const useActionMatchHomePage = () => {
    const handleApiUpdateActive = async (api, isHome, roundmatch) => {
        try {
            await axios.put(`${api}/${isHome}/${roundmatch}`);
        } catch (error) {

            console.log(error);

        }
    }

    const handleApiUpdateResetActive = async (api, roundmatch) => {
        try {
            await axios.put(`${api}/${roundmatch}`);
        } catch (error) {

            console.log(error);

        }
    }


    const handleApiGetMatchWeek = async () => {

        try {
            const response = await axios.get("/api/match/homepage", []);
            if (response.data) {
                return response.data;
            } else {
                return [];
            }
        } catch (error) {
            console.error(error);
        }
    }

    const [loadingMatch, setLoadingMatch] = useState(false);
    const [listMatchWeek, setlistMatchWeek] = useState([]);
    const [getMatchWeek, setMatchWeek] = useState(0);

    const handleGetList = useRef({});
    handleGetList.current = async () => {
        setLoadingMatch(true);
        const c_list = await handleApiGetMatchWeek();
        setlistMatchWeek(c_list);
        setLoadingMatch(false);
        setMatchWeek(c_list[0].roundmatch)
    }

    useEffect(() => {
        handleGetList.current();
    }, [])


    return {
        handleApiUpdateActive,
        loadingMatch,
        listMatchWeek,
        handleApiUpdateResetActive,
        getMatchWeek
    }
};

export default useActionMatchHomePage;