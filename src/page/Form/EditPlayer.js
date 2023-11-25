import React from 'react';
import LayoutAdmin from '../LayoutAdmin';
import { useSideBar } from '../../context/showSideBarContext';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import useActionPutPlayers from '../../Hook/Players/useActionPutPlayers';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useActionListPositions from '../../Hook/Positions/useActionListPositions';

import useActionListFullClub from '../../Hook/Clubs/useActionListFullClub';
import useActionListFullFlag from '../../Hook/Flags/useActionListFullFlag';
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

min-height: 300px;
width: 45%;
border-radius: 50%;
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
width: 250px;
border-radius: 10px;
z-index:10;
top: 0px;
overflow: hidden;
transition: all ease-in-out 0.2s;
display: flex;
text-align: center;
justify-content: center;
align-items: center;
img{
  object-fit: contain; /* Hiển thị ảnh mà không bị méo hoặc cắt bớt */
}
`
const EditPlayer = () => {
    const { showfull } = useSideBar();

    const formik = useFormik({
        initialValues: {
            name: "",
            height: "",
            weight: "",
            image: "",
            number: "",
            dateOfBirth: "",
            status: "",
            clubId: "",
            nationality: "",
            positionId: ""
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Required"),
            clubId: Yup.number().required("Required"),
            nationality: Yup.number().required("Required"),
            positionId: Yup.number().required("Required"),
            number: Yup.string().matches("^[0-9]+$",
                "Please enter only numbers").max(2, 'Must be 2 chacracter or less'),
            image: Yup.string().required("Required"),
        }),
        onSubmit: (values, actions) => {
            actions.setSubmitting(true);
            const confirmed = window.confirm('Are you sure within your option ');
            if (confirmed) {
                handleApiUpdate("/api/players", code, values);
                alert("Congratulation");
            }
        },
    });
    const { listContentPositions } = useActionListPositions("/api/positions/all");

    const { listContentClub } = useActionListFullClub("/api/clubs/list");
    const { listAllFlags } = useActionListFullFlag("/api/flags/list");

    const { loadImage,
        nameImageState,
        handleApiUpdate,
        hanldInputFile,
        handleDeleteImage,
        code, playerID, Clubstate, Positionstate, Nationalitystate , radio , setRadio} = useActionPutPlayers(formik);

    const handleRadio = (e) => {
        setRadio(!radio);
        formik.setFieldValue('status', e.target.value);
    }

    return (
        <LayoutAdmin>
            <div className={`content-wrapper   ${showfull ? "ml-0" : " "} `}>
                <section className={`content-header    ${showfull ? "ml-1" : " ml-20"} `}>
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Edit Player Form</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="*">Home</a></li>
                                    <li className="breadcrumb-item active">Edit Player</li>
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
                                            <div className="form-group">
                                                <label htmlFor="height">Height</label>
                                                <input type="text" className="form-control" id="height" placeholder="Enter height" onChange={formik.handleChange} value={formik.values.height} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="height">Weight</label>
                                                <input type="text" className="form-control" id="weight" placeholder="Enter weight" onChange={formik.handleChange} value={formik.values.weight} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="height">Date of Birth</label>
                                                <input type="date" className="form-control" id="dateOfBirth" placeholder="Enter Date" onChange={formik.handleChange} value={formik.values.dateOfBirth} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="number">Number Shirt</label>
                                                <input type="text" className="form-control" id="number" placeholder="Enter number" onChange={formik.handleChange} value={formik.values.number} />
                                                {formik.touched.number === true && formik.errors.number ? <small className='text-red-500 font-medium text-base' >{formik.errors.number}</small> : null}
                                            </div>
                                            <div className="form-group flex justify-center items-center">
                                                <StyleImageContain>
                                                    {loadImage > 0 || formik.values.image !== null ? <span className={loadImage === 100 ? `hidden` : ""} >{Math.ceil(loadImage)}%</span> : <span>0%</span>}
                                                    {playerID === code && loadImage > 0 ?
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
                                                <label htmlFor="file">Image</label>
                                                <div className="input-group">
                                                    <div className="custom-file">
                                                        <input type="file" className="custom-file-input" id="stadium_image" name="image" onChange={hanldInputFile} disabled={formik.values.image === null ? false : true} />
                                                        <label className="custom-file-label" htmlFor="file">Choose file</label>
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
                                                    <input type="radio" className="custom-control-input" id="customRadio1" name="status" value={1} checked={radio} onChange={handleRadio} />
                                                    <label htmlFor="customRadio1" className="custom-control-label">Active</label>
                                                </div>
                                                <div className="custom-control custom-radio">
                                                    <input className="custom-control-input" type="radio" id="customRadio2" name="status" value={0} checked={!radio} onChange={handleRadio} />
                                                    <label htmlFor="customRadio2" className="custom-control-label">Inactive</label>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputFile">Position : {Positionstate} </label>
                                                <select name="positionId" className="form-control" {...formik.getFieldProps("positionId")}>
                                                    <option value=""> Choose new position  </option>
                                                    {listContentPositions.length > 0 && listContentPositions.map((items, index) => {
                                                        if (items.id !== formik.values.positionId) {
                                                            return <option value={items.id} key={index}> {items.position} </option>
                                                        }
                                                    }
                                                    )}
                                                </select>
                                                {formik.touched.positionId === true && formik.errors.positionId ? <small className='text-red-500 font-medium text-base' >{formik.errors.positionId}</small> : null}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputFile">Club : {Clubstate} </label>
                                                <select name="clubId" className="form-control" {...formik.getFieldProps("clubId")}>
                                                    <option value=""> Choose new club </option>
                                                    {listContentClub.length > 0 && listContentClub.map((items, index) => {
                                                        if (items.id !== formik.values.clubId) {
                                                            return <option value={items.id} key={index}> {items.name} </option>
                                                        }
                                                    }
                                                    )}
                                                </select>
                                                {formik.touched.clubId === true && formik.errors.clubId ? <small className='text-red-500 font-medium text-base' >{formik.errors.clubId}</small> : null}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputFile">Nationality : {Nationalitystate} </label>
                                                <select name="nationality" className="form-control" {...formik.getFieldProps("nationality")}>
                                                    <option value=""> Choose new flag  </option>
                                                    {listAllFlags.length > 0 && listAllFlags.map((items, index) => {
                                                        if (items.id !== formik.values.nationality) {
                                                            return <option value={items.id} key={index}> {items.name} </option>
                                                        }
                                                    }
                                                    )}
                                                </select>
                                                {formik.touched.nationality === true && formik.errors.nationality ? <small className='text-red-500 font-medium text-base' >{formik.errors.nationality}</small> : null}
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

export default EditPlayer;