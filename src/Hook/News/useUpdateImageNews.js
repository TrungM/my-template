import axios from 'axios';
import React from 'react';

const useUpdateImageNews = () => {

    const handleApiUpdateImage = async (api, id) => {
        try {
            await axios.put(`${api}/${id}`);
        } catch (error) {
            console.log(error);
        }

    }

    return {
        handleApiUpdateImage
    }
};

export default useUpdateImageNews;