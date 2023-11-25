import React from 'react';
import axios from 'axios';

const useActionPutFinishSeason = () => {
    const handleApiFinishSeason = async (api, id) => {
        try {
            await axios.put(`${api}/${id}`);
        } catch (error) {
            console.log(error);
        }

    }

    return {
        handleApiFinishSeason
    }
};

export default useActionPutFinishSeason;