import axios from 'axios';
import React from 'react';

const useActionPostReferee = () => {
    const handleCreate= async (api,values) => {
        try {
            await axios.post(api, values);

        } catch (error) {

            console.log(error);
        }

    }

    return {
        handleCreate,
    }
};

export default useActionPostReferee;