import { deleteObject, getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import useActionGetOne from '../useActionGetOne';
import axios from 'axios';
import useUpdateImageNews from './useUpdateImageNews';

const useActionPutNews = (formik) => {
    const { id } = useParams();
    const [loadImage, setLoadImg] = useState(100);
    const [nameImageState, setnameImageState] = useState("");
    const { GetOne } = useActionGetOne("/api/news");
    const { handleApiUpdateImage } = useUpdateImageNews();
    const handleApiUpdate = async (api, id, values) => {
        try {
            await axios.put(`${api}/${id}`, values);
        } catch (error) {

            console.log(error);

        }
    }

    const [code, setCode] = useState(id);
    const [newid, setnewid] = useState(id);
    const [checked, setChecked] = useState(false);
    const [radio, setRadio] = useState(false);


    const handleGeItemsStadium = useRef({});
    handleGeItemsStadium.current = async (codeClub) => {
        const s_items = await GetOne(codeClub);
        formik.setFieldValue("title", s_items.title)
        formik.setFieldValue("description", s_items.description)
        formik.setFieldValue("content", s_items.content)
        formik.setFieldValue("image", s_items.image)
        formik.setFieldValue("status", s_items.status)
        formik.setFieldValue("isHome", s_items.isHome)
        formik.setFieldValue("createdAt", s_items.createdAt)
        if (s_items.isHome === 1) {
            setChecked(true)
        } else {
            setChecked(false)
        }
        if (s_items.status === 1) {
            setRadio(true)
        } else {
            setRadio(false)
        }

    }

    // console.log(NameStadiumstate)

    useEffect(() => {
        handleGeItemsStadium.current(code);
        document.title = "Edit News";
    }, [code])

    const handleDeleteImage = () => {

        const storage = getStorage();

        // Create a reference to the file to delete
        const imageName = formik.values.image.split('/').pop().split('?')[0];
        const imageName2 = imageName.slice(7);
        // console.log(imageName2);
        const desertRef = ref(storage, 'news/' + imageName2);
        const confirmed = window.confirm('Are you sure within your option ');
        if (confirmed) {
            // Delete the file
            deleteObject(desertRef).then(() => {
                console.log("Remove image successfully")
                formik.setFieldValue("image", null);
                setLoadImg(0);
                handleApiUpdateImage("/api/news/image", newid)
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
        const storageRef = ref(storage, 'news/' + file.name);
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

    return {
        loadImage,
        nameImageState,
        handleApiUpdate,
        hanldInputFile,
        handleDeleteImage,
        checked,
        setChecked
        , radio, setRadio
    }
};

export default useActionPutNews;