import axios from 'axios';
import { deleteObject, getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import React, { useState } from 'react';

const useActionPost = () => {

    const [loadImage, setLoadImg] = useState(0);
    const [noChoose, setnoChoose] = useState(false);

    const handleCreate= async (api,values) => {
        try {
            await axios.post(api, values);

        } catch (error) {

            console.log(error);

        }

    }



    return {
        handleCreate,
        loadImage,
        noChoose,
        setLoadImg,
        setnoChoose
    }
       
};

export default useActionPost;

