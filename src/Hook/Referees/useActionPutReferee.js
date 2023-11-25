import React from 'react';
import { useParams } from 'react-router-dom';
import useActionGetOne from '../useActionGetOne';
import axios from 'axios';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

const useActionPutReferee = (formik) => {
    const { id } = useParams();
    const { GetOne } = useActionGetOne("/api/referees");

    const handleApiUpdate = async (api, id, values) => {
        try {
            await axios.put(`${api}/${id}`, values);
        } catch (error) {

            console.log(error);

        }
    }

    const [code, setCode] = useState(id);
    const [Nationalitystate, setNationalitystate] = useState("");

    const handleGeItemsReferees = useRef({});
    handleGeItemsReferees.current = async (code) => {
        const s_items = await GetOne(code);
        setNationalitystate(s_items.nationality.name )
        formik.setFieldValue("name", s_items.name)
        formik.setFieldValue("nationality", s_items.nationality.id)
    }


    useEffect(() => {
        handleGeItemsReferees.current(code);
        document.title = "Edit Referees";
    }, [code])

    return {
        handleApiUpdate,Nationalitystate
    }
};

export default useActionPutReferee;