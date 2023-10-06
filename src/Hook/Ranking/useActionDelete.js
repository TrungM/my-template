import axios from 'axios';
import React from 'react';

const useActionDelete = (api) => {

    const GetApiDeleteranking = async (season, club) => {
        try {
            await axios.delete(`${api}/${season}/${club}`, {});

        } catch (error) {
            console.error(error);
        }
    }


    return {
        GetApiDeleteranking
    }
};

export default useActionDelete;