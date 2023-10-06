import React from 'react';
import axios from 'axios';

const useActionPutSeasonUI = () => {
    const handleApiSeasonIDActive = async (api, id) => {
        try {
            await axios.put(`${api}/${id}`);
        } catch (error) {
            console.log(error);
        }

    }

    return {
        handleApiSeasonIDActive
    }
};

export default useActionPutSeasonUI;