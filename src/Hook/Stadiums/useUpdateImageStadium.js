import axios from 'axios';
import React from 'react';

const useUpdateImageStadium = () => {

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

export default useUpdateImageStadium;