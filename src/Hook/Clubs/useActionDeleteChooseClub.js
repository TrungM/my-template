import axios from 'axios';
import React from 'react';

const useActionDeleteChooseClub = (api) => {

    const GetApiDeleteChooseClub = async (season,clubs) => {
        try {
           await axios.delete(`${api}/${season}/${clubs}`, {});
           
        } catch (error) {
            console.error(error);
        }
    }


    return{
        GetApiDeleteChooseClub
    }
};

export default useActionDeleteChooseClub;