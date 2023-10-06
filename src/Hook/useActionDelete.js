import axios from 'axios';
import React from 'react';

const useActionDelete = (api) => {

    const GetApiDelete = async (id) => {
        try {
           await axios.delete(`${api}/${id}`, {});
           
        } catch (error) {
            console.error(error);
        }
    }


    return{
        GetApiDelete
    }
};

export default useActionDelete;