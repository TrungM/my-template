import { deleteObject, getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import useActionGetOne from '../useActionGetOne';
import axios from 'axios';
import useUpdateImagePlayers from './useUpdateImagePlayers';

const useActionPutPlayers = (formik) => {
    const { id } = useParams();
    const [loadImage, setLoadImg] = useState(100);
    const [nameImageState, setnameImageState] = useState("");
    const { GetOne } = useActionGetOne("/api/players");
    const { handleApiUpdateImage } = useUpdateImagePlayers();
    const handleApiUpdate = async (api, id, values) => {
        try {
            await axios.put(`${api}/${id}`, values);
        } catch (error) {

            console.log(error);

        }
    }

    const [code, setCode] = useState(id);
    const [playerid, setplayerid] = useState(id);
    const [checked, setChecked] = useState(false);
    const [radio, setRadio] = useState(false);
    const [playerID, setID] = useState(0);
    const [Clubstate, setClubstate] = useState("");
    const [Positionstate, setPositionstate] = useState("");
    const [Nationalitystate, setNationalitystate] = useState("");


    const handleGeItems = useRef({});
    handleGeItems.current = async (codeClub) => {
        const s_items = await GetOne(codeClub);
        setID(s_items.id);
        setClubstate(s_items.clubId.name);
        setPositionstate(s_items.positionId.position);
        setNationalitystate(s_items.nationality.name);

        formik.setFieldValue("name", s_items.name)
        formik.setFieldValue("height", s_items.height)
        formik.setFieldValue("weight", s_items.weight)
        formik.setFieldValue("image", s_items.image)
        formik.setFieldValue("number", s_items.number)
        formik.setFieldValue("dateOfBirth", s_items.dateOfBirth)
        formik.setFieldValue("status", s_items.status)
        formik.setFieldValue("clubId", s_items.clubId.id)
        formik.setFieldValue("nationality", s_items.nationality.id)
        formik.setFieldValue("positionId", s_items.positionId.id)

        if (s_items.status === 1) {
            setRadio(true)
        } else {
            setRadio(false)
        }
    }

    useEffect(() => {
        handleGeItems.current(code);
        document.title = "Edit Players";
    }, [code])

    const handleDeleteImage = () => {

        const storage = getStorage();

        // Create a reference to the file to delete
        const imageName = formik.values.image.split('/').pop().split('?')[0];
        const imageName2 = imageName.slice(10);
        const desertRef = ref(storage, 'players/' + imageName2);
        const confirmed = window.confirm('Are you sure within your option ');
        if (confirmed) {
            // Delete the file
            deleteObject(desertRef).then(() => {
                console.log("Remove image successfully")
                formik.setFieldValue("image", null);
                setLoadImg(0);
                handleApiUpdateImage("/api/players/image", playerid)
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
        const storageRef = ref(storage, 'players/' + file.name);
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
        , radio, setRadio ,playerID , code ,Clubstate , Positionstate , Nationalitystate
    }
};

export default useActionPutPlayers;