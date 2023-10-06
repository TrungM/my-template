import axios from 'axios';
import React from 'react';

const useActionResetActiveClub = () => {
    const handleApiResetActive = async (api) => {
        try {
            await axios.put(`${api}`);
        } catch (error) {

            console.log(error);

        }

    }

    return {
        handleApiResetActive
    }
};

export default useActionResetActiveClub;