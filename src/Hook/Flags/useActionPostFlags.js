import axios from 'axios';
import React, { useState } from 'react';
import { deleteObject, getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';

const useActionPostFlags = (formik) => {

    const [loadImage, setLoadImg] = useState(0);
    const [noChoose, setnoChoose] = useState(false);
    const [nameImageState, setnameImageState] = useState("");

    const handleCreate= async (api,values) => {
        try {
            await axios.post(api, values);

        } catch (error) {

            console.log(error);
        }

    }

    const hanldInputFile = (e) => {

        const result = e.target.files[0];
        console.log(result);
        if (!result) return;
        handleUploadImage(result)

    }
    const handleDeleteImage = () => {

        const storage = getStorage();

        // Create a reference to the file to delete
        const desertRef = ref(storage, 'flags/' + nameImageState);
        const confirmed = window.confirm('Are you sure within your option ');
        if (confirmed) {
            // Delete the file
            deleteObject(desertRef).then(() => {
                console.log("Remove image successfully")
                formik.setFieldValue("image", "");
                setnoChoose(false);
                setLoadImg(0);
                alert("Congratulation")
            }).catch((error) => {
                console.log("Cannot remove ")
                console.log(error);
            });
        }


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
                    setnoChoose(true);
                });
            }
        );

    }

    return {
        handleCreate,
        hanldInputFile,
        handleDeleteImage,
        loadImage,
        noChoose,
        nameImageState,
        setLoadImg,
        setnoChoose
    }
};

export default useActionPostFlags;