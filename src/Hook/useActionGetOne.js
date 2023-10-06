import axios from 'axios';
import React from 'react';

const useActionGetOne = (api) => {
    const GetOne = async (id) => {
        try {
            const response = await axios.get(`${api}/${id}`);
            if (response.data) {
                return response.data;
            } else {
                return [];
            }
        } catch (error) {
            console.error(error);
        }
    }


    return{
        GetOne
    }
};

export default useActionGetOne;