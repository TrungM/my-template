import React from 'react';
import axios from 'axios';

const useActionResetSeasonUI = () => {
    const handleApiResetSeasonIDActive = async (api, id) => {
        try {
            await axios.put(`${api}/${id}`);
        } catch (error) {
            console.log(error);
        }

    }

    return {
        handleApiResetSeasonIDActive
    }
};

export default useActionResetSeasonUI;