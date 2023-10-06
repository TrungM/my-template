import axios from 'axios';
import React from 'react';

const useActionRefClub = () => {
    const handleCreateRefClub= async (api,values) => {
        try {
            await axios.post(api, values);

        } catch (error) {

            console.log(error);

        }

    }

    return {
        handleCreateRefClub,
    }
};

export default useActionRefClub;