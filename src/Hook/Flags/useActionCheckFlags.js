import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

const useActionCheckFlags = () => {
    const getCheckFlagsExist = async (api , id) => {
        try {
            const response = await axios.get(`${api}/${id}`, {});
            if (response.data) {
                return response.data;
            } else {
                return false ; 
            }
        } catch (error) {
            console.error(error);
        }
    }
    return {
        getCheckFlagsExist,
    }

};

export default useActionCheckFlags;