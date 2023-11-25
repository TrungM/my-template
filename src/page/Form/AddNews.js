import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import LayoutAdmin from '../LayoutAdmin';
import { useSideBar } from '../../context/showSideBarContext';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import RichText from './RichText';
import useActionPostNews from '../../Hook/News/useActionPostNews';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
const AddNews = () => {
    const { showfull } = useSideBar();
    const editorRef = useRef(null);
    const currentDate = new Date();
    const formattedDate = currentDate.toDateString();
    const formik = useFormik({
        initialValues: {
            title: "",
            description: "",
            content: "",
            image: "",
            createdAt: formattedDate,
            status: 0,
            isHome: 0 ,
        },
        validationSchema: Yup.object({
            title: Yup.string().trim().required('Required'),
            image: Yup.string().required('Required'),

        }),


        onSubmit: (values, actions) => {
            actions.setSubmitting(true);
            const confirmed = window.confirm('Are you sure within your option ');
            if (confirmed) {
                // console.log(values);
                handleCreate("/api/news/create", values);
                setTimeout(() => {
                    actions.resetForm({
                        title: "",
                        description: "",
                        content: "",
                        image: "",
                        status: 0,
                        createdAt: "",
                        isHome: 0,
                    });
                    editorRef.current.setContent('');
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
        setLoadImg } = useActionPostNews(formik);

    const handleEditorChange = (e) => {
        formik.setFieldValue('content', e.target.getContent());
    }

    const handleRadio = (e) =>{
        formik.setFieldValue('status', e.target.value);
    }
    const handleCheckBox = (e) => {
        formik.setFieldValue('isHome', e.target.value.toString())
    }
    return (
        <LayoutAdmin>
            <div className={`content-wrapper   ${showfull ? "ml-0" : " "} `}>
                <section className={`content-header    ${showfull ? "ml-1" : " ml-20"} `}>
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Add News Form</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="*">Home</a></li>
                                    <li className="breadcrumb-item active">Add News</li>
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
                                        <h3 className="card-title">Add News</h3>
                                    </div>
                                    <form onSubmit={formik.handleSubmit}>
                                        <div className="card-body">
                                            <div className="form-group">
                                                <label htmlFor="title">Title</label>
                                                <input type="text"  className="form-control" id="title" placeholder="Enter title" {...formik.getFieldProps("title")} />
                                                {formik.touched.title === true && formik.errors.title ? <small className='text-red-500 font-medium text-base' >{formik.errors.title}</small> : null}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="description">Description</label>
                                                <textarea className="form-control" rows="3" placeholder="Enter decription" name='description' {...formik.getFieldProps("description")} ></textarea>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="content">Content</label>
                                                <RichText name='content' change={handleEditorChange} editorRef={editorRef}></RichText>
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
                                                <label htmlFor="exampleInputFile">File input</label>
                                                <div className="input-group">
                                                    <div className="custom-file">
                                                        <input type="file" className="custom-file-input" id="exampleInputFile" name='image' onChange={hanldInputFile} disabled={noChoose} />
                                                        <label className="custom-file-label" htmlFor="exampleInputFile">Choose file</label>
                                                    </div>
                                                    <div className="input-group-append">
                                                        <span className="input-group-text">Upload</span>
                                                    </div>
                                                </div>
                                                {formik.touched.image === true && formik.errors.image ? <small className='text-red-500 font-medium text-base' >{formik.errors.image}</small> : null}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="action">Action</label>
                                                <div className="custom-control custom-radio">
                                                    <input type="radio" className="custom-control-input" id="customRadio1" name="status" value={1}  defaultChecked = {formik.values.status ? true : false}  onClick={handleRadio}  />
                                                    <label htmlFor="customRadio1" className="custom-control-label">Active</label>
                                                </div>
                                                <div className="custom-control custom-radio">
                                                    <input className="custom-control-input" type="radio" id="customRadio2" name="status" value={0}   defaultChecked = {!formik.values.status ? true : false} onClick={handleRadio}  />
                                                    <label htmlFor="customRadio2" className="custom-control-label">Inactive</label>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="display">Display</label>
                                                <div className="custom-control custom-checkbox">
                                                    <input className="custom-control-input" type="checkbox" id="customCheckbox1" name='isHome' value={1}  onClick={handleCheckBox}/>
                                                    <label htmlFor="customCheckbox1" className="custom-control-label">Homepage</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <button type="submit" className="btn btn-primary">Submit</button>
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

export default AddNews;