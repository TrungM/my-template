import React from 'react';
import LayoutAdmin from '../LayoutAdmin';
import { useSideBar } from '../../context/showSideBarContext';
import useActionPutFlags from '../../Hook/Flags/useActionPutFlags';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
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

min-height: 100px;
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
  padding: 1rem 1rem;
}
`
const EditFlag = () => {
    const { showfull } = useSideBar();
    const {id} = useParams();
    const formik = useFormik({
        initialValues: {
            name: "",
            image: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Required'),
            image: Yup.string().required('Required'),
        }),

        onSubmit: (values, actions) => {
            actions.setSubmitting(true);
            const confirmed = window.confirm('Are you sure within your option ');
            if (confirmed) {
                handleApiUpdate("/api/flags", id, values);
            }
        },
    });

    const { loadImage,
        handleApiUpdate,
        hanldInputFile,
        handleDeleteImage,
        noChoose,IdFlagstate } = useActionPutFlags(formik);

    return (
        <LayoutAdmin>
            <div className={`content-wrapper   ${showfull ? "ml-0" : " "} `}>
                <section className={`content-header    ${showfull ? "ml-1" : " ml-20"} `}>
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Edit Flags Form</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="*">Home</a></li>
                                    <li className="breadcrumb-item active">Edit Flags</li>
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
                                        <h3 className="card-title">Edit Flags</h3>
                                    </div>
                                    <form onSubmit={formik.handleSubmit}>
                                        <div className="card-body">
                                            <div className="form-group">
                                                <label htmlFor="name">Name</label>
                                                <input type="text" className="form-control" id="name" placeholder="Enter name" onChange={formik.handleChange} value={formik.values.name} />
                                                {formik.touched.name === true && formik.errors.name ? <small className='text-red-500 font-medium text-base' >{formik.errors.name}</small> : null}
                                            </div>
                                            <div className="form-group flex justify-center items-center">
                                                <StyleImageContain>
                                                    {loadImage > 0 || formik.values.image !== null ? <span className={loadImage === 100 ? `hidden` : ""} >{Math.ceil(loadImage)}%</span> : <span>0%</span>}
                                                    {IdFlagstate === id && loadImage > 0 ?
                                                        <StyleImageLoad style={{ height: `${Math.ceil(loadImage)}%` }}>
                                                            <img src={formik.values.image} alt="" />
                                                        </StyleImageLoad>
                                                        :
                                                        <StyleImageLoad style={{ height: "100%" }}>
                                                            <img src={formik.values.image} alt='' />
                                                        </StyleImageLoad>
                                                    }
                                                    {formik.values.image === null ?
                                                        <StyleBackgroundIcon onClick={handleDeleteImage} className='invisible'>
                                                            <FontAwesomeIcon icon="fa-regular fa-trash-can" className='icon-trash-image' />
                                                        </StyleBackgroundIcon>
                                                        :
                                                        <StyleBackgroundIcon onClick={handleDeleteImage} >
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

export default EditFlag;