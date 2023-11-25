import React, { Fragment, useEffect, useState } from 'react';
import { useSideBar } from '../../context/showSideBarContext';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios';
import { values } from 'lodash';
import { getStorage, ref, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage";
import { collection } from 'firebase/firestore';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useActionPost from '../../Hook/Stadiums/useActionPost';
import useActionListFull from '../../Hook/Stadiums/useActionListFull';
import LayoutAdmin from '../LayoutAdmin';

const StyleBackgroundIcon = styled.div`
background-color:#ffffff;
height: 60px;
width: 60px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 30px;
z-index: 50;
position: absolute;
visibility:hidden;
cursor: pointer;
&:hover{
    background-color: #48cae4;

    .icon-trash-image{
        animation: move 0.3s ease-in-out infinite ;    
        animation-iteration-count: 1;

    }
    /* .element {
  animation: move 2s ease-in-out infinite;
  animation-delay: 1s;
  animation-direction: alternate;
  animation-fill-mode: both;
  animation-iteration-count: 3;
} */

    @keyframes move {
  from {
    transform: scale(0);

  }
  to {
    transform: scale(1);

  }
}
}

`
const StyleImageContain = styled.div`

min-height: 200px;
width: 100%;
border-radius: 10px;
background-color:#f8edeb ;

box-shadow: #dad7cd 0.1px 0.1px;
position: relative;
display: flex;
text-align: center;
justify-content: center;
align-items: center;
background-clip: border-box;
object-fit: cover;
span{
    font-size: 30px;
    font-weight: 600;
    text-align: center;
    z-index: 50;
    background: linear-gradient(86.88deg, #20e3b2, #2cccff);

    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;

}

.icon-trash-image{
font-size: 30px;   
}

&:hover{
    opacity: 0.9;

    ${StyleBackgroundIcon}{
        visibility: visible;
    }

}

`
const StyleImageLoad = styled.div`
position: absolute;
height: auto;
width: auto;
border-radius: 10px;
z-index:10;
top: 0px;
overflow: hidden;
transition: all ease-in-out 0.2s;
img{
  object-fit: contain; /* Hiển thị ảnh mà không bị méo hoặc cắt bớt */
}
`
const AddStadiums = () => {

    const { showfull } = useSideBar();
    const {
        new2
    } = useActionListFull("/api/stadiums/list");
    const formik = useFormik({
        initialValues: {
            name: "",
            capacity: "",
            address: "",
            pitchSize: "",
            description: "",
            image: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().max(200, "Must be 200 chacracter or less").required("Required").notOneOf(new2, "Name is existed"),
            address: Yup.string().required("Required"),
            image: Yup.string().required("Required"),
        }),


        onSubmit: (values, actions) => {
            actions.setSubmitting(true);
            const confirmed = window.confirm('Are you sure within your option ');
            if (confirmed) {
                handleCreate("/api/stadiums/create", values);
                setTimeout(() => {
                    actions.resetForm({
                        name: "",
                        capacity: "",
                        address: "",
                        pitchSize: "",
                        description: "",
                        image: "",
                    });
                    actions.setSubmitting(false);
                    setLoadImg(0);
                    setnoChoose(false)
                }, 1000);
            } else {
                actions.setSubmitting(false);
            }
        },
    });

    const { handleCreate,
        hanldInputFile,
        handleDeleteImage,
        loadImage,
        noChoose,
        setnoChoose,
        setLoadImg
    } = useActionPost(formik);



    useEffect(() => {
        document.title = "Add New Stadiums";
    }, [])
    // console.log(formik);

    return (
        <LayoutAdmin>
            <div className={`content-wrapper   ${showfull ? "ml-0" : " "} `}>
                <section className={`content-header    ${showfull ? "ml-1" : " ml-20"} `}>
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Add Stadiums Form</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="*">Home</a></li>
                                    <li className="breadcrumb-item active">Add Stadiums</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={`content ${showfull ? "ml-1" : " ml-20"} `}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="card card-primary">
                                    <div className="card-header">
                                        <h3 className="card-title">Add New Stadiums</h3>
                                    </div>


                                    <form onSubmit={formik.handleSubmit}>

                                        <div className="card-body">
                                            <div className="form-group">
                                                <label htmlFor="name">Name</label>
                                                <input type="text" className="form-control" name='name' id="stadium_name" placeholder="Enter new stadium"   {...formik.getFieldProps("name")} />
                                                {formik.touched.name === true && formik.errors.name ? <small className='text-red-500 font-medium text-base' >{formik.errors.name}</small> : null}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="description">Description</label>
                                                <textarea className="form-control" rows="3" name='description' id="stadium_description" placeholder="Enter new description"   {...formik.getFieldProps("description")}></textarea>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="capacity">Capacity</label>
                                                <input type="text" className="form-control" name='capacity' id="stadium_capacity" placeholder="Enter new capacity"   {...formik.getFieldProps("capacity")} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="address">Address</label>
                                                <input type="text" className="form-control" name='address' id="stadium_address" placeholder="Enter new address"   {...formik.getFieldProps("address")} />
                                                {formik.touched.address === true && formik.errors.address ? <small className='text-red-500 font-medium text-base' >{formik.errors.address}</small> : null}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="pitchSize">Pitch Size</label>
                                                <input type="text" className="form-control" name='pitchSize' id="stadium_pitchSize" placeholder="Enter new pitch size"   {...formik.getFieldProps("pitchSize")} />
                                            </div>
                                            <div className="form-group flex justify-center items-center">
                                                <StyleImageContain>
                                                    {loadImage > 0 ? <span className={loadImage === 100 ? `hidden` : ""} >{Math.ceil(loadImage)}%</span> : <span>0%</span>}
                                                    <StyleImageLoad style={{ height: `${Math.ceil(loadImage)}%` }}>
                                                        <img src={formik.values.image} alt="" />
                                                    </StyleImageLoad>
                                                    {formik.values.image !== "" &&
                                                        <StyleBackgroundIcon onClick={handleDeleteImage}>
                                                            <FontAwesomeIcon icon="fa-regular fa-trash-can" className='icon-trash-image' />
                                                        </StyleBackgroundIcon>
                                                    }
                                                </StyleImageContain>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="file">Image </label>
                                                <div className="input-group">
                                                    <div className="custom-file">
                                                        <input type="file" className="custom-file-input" id="stadium_image" name="image" onChange={hanldInputFile} disabled={noChoose} />
                                                        <label className="custom-file-label" htmlFor="file">Choose file</label>
                                                    </div>
                                                    <div className="input-group-append">
                                                        <span className="input-group-text">Upload</span>
                                                    </div>
                                                </div>
                                                {formik.touched.image === true && formik.errors.image ? <small className='text-red-500 font-medium text-base' >{formik.errors.image}</small> : null}
                                            </div>
                                        </div>
                                        <div className="card-footer flex gap-3">
                                            <button type="submit" className="btn btn-primary" disabled={formik.isSubmitting}
                                            >Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </LayoutAdmin>
    );
};


export default AddStadiums;