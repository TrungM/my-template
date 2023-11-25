import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import useActionGetOne from '../useActionGetOne';
import axios from 'axios';
import { deleteObject, getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import useUpdateImageFlags from './useUpdateImageFlags';

const useActionPutFlags = (formik) => {
    const { id } = useParams();
    const [loadImage, setLoadImg] = useState(100);
    const [nameImageState, setnameImageState] = useState("");
    const { GetOne } = useActionGetOne("/api/flags");
    const [IdFlagstate, setIdFlagstate] = useState(0);
    const { handleApiUpdateImage } = useUpdateImageFlags();

    const handleApiUpdate = async (api, id, values) => {
        try {
            await axios.put(`${api}/${id}`, values);
        } catch (error) {

            console.log(error);

        }
    }

    const [code, setCode] = useState(id);

    const handleGeItemsPosition = useRef({});
    handleGeItemsPosition.current = async (code) => {
        const s_items = await GetOne(code);
        setIdFlagstate(s_items.id);
        formik.setFieldValue("name", s_items.name)
        formik.setFieldValue("image", s_items.image)
    }


    const handleDeleteImage = () => {

        const storage = getStorage();

        // Create a reference to the file to delete
        const imageName = formik.values.image.split('/').pop().split('?')[0];
        const imageName2 = imageName.slice(8);
        const desertRef = ref(storage, 'flags/' + imageName2);
        const confirmed = window.confirm('Are you sure within your option ');
        if (confirmed) {
            // Delete the file
            deleteObject(desertRef).then(() => {
                console.log("Remove image successfully")
                formik.setFieldValue("image",null);
                setLoadImg(0);
                handleApiUpdateImage("/api/flags/image", code)
                alert("Congratulation")
            }).catch((error) => {
                console.log("Cannot remove ")
                console.log(error);
            });
        }
    }

    const hanldInputFile = (e) => {

        const result = e.target.files[0];
        formik.setFieldValue("image", result);
        if (!result) return;
        handleUploadImage(result)

    }


    const handleUploadImage = (file) => {

        const storage = getStorage();

        // Upload file and metadata to the object 'images/mountains.jpg'
        const storageRef = ref(storage, 'flags/' + file.name);
        setnameImageState(file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);

        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on('state_changed',
            (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setLoadImg(progress);
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                    default:
                        console.log("Nothing at all")
                }
            },
            (error) => {
                console.log(error);
            },
            () => {
                // Upload completed successfully, now we can get the download URL
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    formik.setFieldValue("image", downloadURL);
                });
            }
        );

    }





    useEffect(() => {
        handleGeItemsPosition.current(code);
        document.title = "Edit Flags";
    }, [code])

    return {
        loadImage,
        nameImageState,
        handleApiUpdate,
        hanldInputFile,
        handleDeleteImage,
        IdFlagstate
    }
};

export default useActionPutFlags;