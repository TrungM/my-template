import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

const useActionPutActiveStadium = () => {
    const handleApiUpdateActive = async (api, id) => {
        try {
            await axios.put(`${api}/${id}`);
        } catch (error) {

            console.log(error);

        }

    }

    return {
        handleApiUpdateActive
    }
};

export default useActionPutActiveStadium;