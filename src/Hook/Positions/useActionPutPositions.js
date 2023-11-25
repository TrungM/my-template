import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import useActionGetOne from '../useActionGetOne';
import axios from 'axios';

const useActionPutPositions = (formik) => {
    const { id } = useParams();
    const { GetOne } = useActionGetOne("/api/positions");
    const handleApiUpdate = async (api, id, values) => {
        try {
            await axios.put(`${api}/${id}`, values);
        } catch (error) {

            console.log(error);

        }
    }

    const [code, setCode] = useState(id);

    const handleGeItemsPosition = useRef({});
    handleGeItemsPosition.current = async (code) => {
        const s_items = await GetOne(code);
        formik.setFieldValue("position", s_items.position)
    }

    useEffect(() => {
        handleGeItemsPosition.current(code);
        document.title = "Edit Positions";
    }, [code])

    return {
        handleApiUpdate,
    }
};

export default useActionPutPositions;