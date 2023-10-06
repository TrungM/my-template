import axios from 'axios';
import React from 'react';

const useActionUpdateActiveClub = () => {
    const handleApiUpdateActiveClub = async (api, id, active) => {
        try {
            await axios.put(`${api}/${id}/${active}`);
        } catch (error) {
            console.log(error);
        }
    }
    return {
        handleApiUpdateActiveClub
    }
};

export default useActionUpdateActiveClub;