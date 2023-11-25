import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useActionGetOne from '../useActionGetOne';

const useActionPut = (formik) => {
    const { id } = useParams();
    const {GetOne}=useActionGetOne("/api/table");
    const [nameClubs, setNameClubs] = useState("");
    const [season, setSeason] = useState("");
    const handleApiUpdate = async (api, id, values) => {
        try {
            await axios.put(`${api}/${id}`, values);
        } catch (error) {
            console.log(error);
        }
    }

    const [code, setCode] = useState(id);
    const [nextMatch, setNextMatch] = useState(null);

    const handleGeItemsPosition = useRef({});
    handleGeItemsPosition.current = async (code) => {
        const s_items = await GetOne(code);
        setNameClubs( s_items.clubName?.name);
        setNextMatch(s_items.nextmatch?.name);

        formik.setFieldValue("position", s_items.position)
        formik.setFieldValue("clubName", s_items.clubName)
        formik.setFieldValue("season", s_items.season)
        formik.setFieldValue("clubid", s_items.clubid)
        formik.setFieldValue("active", s_items.active)


        formik.setFieldValue("played", s_items.played ?? 0)
        formik.setFieldValue("won", s_items.won ?? 0)
        formik.setFieldValue("draw", s_items.draw ?? 0)
        formik.setFieldValue("lose", s_items.lose ?? 0)
        formik.setFieldValue("gf", s_items.gf ?? 0)
        formik.setFieldValue("ga", s_items.ga ?? 0)
        formik.setFieldValue("gd", s_items.gd ?? 0)
        formik.setFieldValue("points", s_items.points ?? 0)
        formik.setFieldValue("nextmatch", s_items.nextmatch ?? null)
    }

    useEffect(() => {
        handleGeItemsPosition.current(code);
        document.title = "Edit Table";
    }, [code])

    return {
        handleApiUpdate,
        nameClubs,
        nextMatch
    }
};

export default useActionPut;