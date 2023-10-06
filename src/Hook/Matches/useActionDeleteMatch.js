import axios from 'axios';
import React from 'react';

const useActionDeleteMatch = (api) => {

    const GetApiDeleteallmatch = async () => {
        try {
           await axios.delete(`${api}`, {});
           
        } catch (error) {
            console.error(error);
        }
    }


    return{
        GetApiDeleteallmatch
    }
};

export default useActionDeleteMatch;