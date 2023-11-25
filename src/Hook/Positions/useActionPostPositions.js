import axios from 'axios';
import React, { useState } from 'react';

const useActionPostPositions = () => {

    const handleCreate = async (api, values) => {
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

export default useActionPostPositions;