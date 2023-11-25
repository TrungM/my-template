import React, { useEffect } from 'react';
import LayoutAdmin from '../LayoutAdmin';
import { useSideBar } from '../../context/showSideBarContext';
import styled from 'styled-components';
import * as Yup from 'yup'
import { useFormik } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useActionPostPlayers from '../../Hook/Players/useActionPostPlayers';
import useActionListPositions from '../../Hook/Positions/useActionListPositions';
import useActionListFullFlag from '../../Hook/Flags/useActionListFullFlag';
import useActionListFullClub from '../../Hook/Clubs/useActionListFullClub';

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

const AddPlayer = () => {
    const { showfull } = useSideBar();

    const formik = useFormik({
        initialValues: {
            name: "",
            height: "",
            weight: "",
            image: "",
            number: "",
            dateOfBirth: "",
            status: 0,
            clubId: "",
            nationality: "",
            positionId: ""
        },
        validationSchema: Yup.object({
            name: Yup.string().trim().required("Required"),
            clubId: Yup.number().required("Required"),
            nationality: Yup.number().required("Required"),
            positionId: Yup.number().required("Required"),
            number: Yup.string().matches("^[0-9]+$",
            "Please enter only numbers").max(2,'Must be 2 chacracter or less'),
            image: Yup.string().required("Required"),
        }),
        onSubmit: (values, actions) => {
            actions.setSubmitting(true);
            const confirmed = window.confirm('Are you sure within your option ');
            if (confirmed) {
                handleCreate("/api/players/create", values);
                setTimeout(() => {
                    actions.resetForm({
                        name: "",
                        height: "",
                        weight: "",
                        image: "",
                        number: "",
                        dateOfBirth: "",
                        status: 0,
                        clubId: "",
                        nationality: "",
                        positionId: ""
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


    const { listContentPositions } = useActionListPositions("/api/positions/all");
    const { listContentClub } = useActionListFullClub("/api/clubs/list");
    const { listAllFlags } = useActionListFullFlag("/api/flags/list");

    const handleRadio = (e) =>{
        formik.setFieldValue('status', e.target.value);
    }

    const { handleCreate,
        hanldInputFile,
        handleDeleteImage,
        loadImage,
        noChoose,
        setnoChoose,
        setLoadImg } = useActionPostPlayers(formik);

    return (
        <LayoutAdmin>
            <div className={`content-wrapper   ${showfull ? "ml-0" : " "} `}>
                <section className={`content-header    ${showfull ? "ml-1" : " ml-20"} `}>
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Add Player Form</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="*">Home</a></li>
                                    <li className="breadcrumb-item active">Add Players</li>
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
                                        <h3 className="card-title">Add Players</h3>
                                    </div>
                                    <form onSubmit={formik.handleSubmit}>
                                        <div className="card-body">
                                            <div className="form-group">
                                                <label htmlFor="name">Name</label>
                                                <input type="text" className="form-control" id="name" placeholder="Enter name" {...formik.getFieldProps("name")} />
                                                {formik.touched.name === true && formik.errors.name ? <small className='text-red-500 font-medium text-base' >{formik.errors.name}</small> : null}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="height">Height</label>
                                                <input type="text" className="form-control" id="height" placeholder="Enter height" {...formik.getFieldProps("height")} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="height">Weight</label>
                                                <input type="text" className="form-control" id="weight" placeholder="Enter weight" {...formik.getFieldProps("weight")} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="height">Date of Birth</label>
                                                <input type="date" className="form-control" id="dateOfBirth" placeholder="Enter Date" {...formik.getFieldProps("dateOfBirth")} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="number">Number Shirt</label>
                                                <input type="text" className="form-control" id="number" placeholder="Enter number" {...formik.getFieldProps("number")} />
                                                {formik.touched.number === true && formik.errors.number ? <small className='text-red-500 font-medium text-base' >{formik.errors.number}</small> : null}
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
                                                    <input type="radio" className="custom-control-input" id="customRadio1" name="status" value={1} defaultChecked={formik.values.status ? true : false} onClick={handleRadio} />
                                                    <label htmlFor="customRadio1" className="custom-control-label">Active</label>
                                                </div>
                                                <div className="custom-control custom-radio">
                                                    <input className="custom-control-input" type="radio" id="customRadio2" name="status" value={0} defaultChecked={!formik.values.status ? true : false} onClick={handleRadio} />
                                                    <label htmlFor="customRadio2" className="custom-control-label">Inactive</label>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputFile">Choose a Position</label>
                                                <select name="positionId" className="form-control" {...formik.getFieldProps("positionId")}>
                                                    <option value=""> Your option  </option>
                                                    {listContentPositions.length > 0 && listContentPositions.map((items, index) => {
                                                        return <option value={items.id} key={index}> {items.position} </option>
                                                    }
                                                    )}
                                                </select>
                                                {formik.touched.positionId === true && formik.errors.positionId ? <small className='text-red-500 font-medium text-base' >{formik.errors.positionId}</small> : null}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputFile">Choose a Club</label>
                                                <select name="clubId" className="form-control" {...formik.getFieldProps("clubId")}>
                                                    <option value=""> Your option  </option>
                                                    {listContentClub.length > 0 && listContentClub.map((items, index) => {
                                                        return <option value={items.id} key={index}> {items.name} </option>
                                                    }
                                                    )}
                                                </select>
                                                {formik.touched.clubId === true && formik.errors.clubId ? <small className='text-red-500 font-medium text-base' >{formik.errors.clubId}</small> : null}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputFile">Choose a Nationality</label>
                                                <select name="nationality" className="form-control" {...formik.getFieldProps("nationality")}>
                                                    <option value=""> Your option  </option>
                                                    {listAllFlags.length > 0 && listAllFlags.map((items, index) => {
                                                            return <option value={items.id} key={index}> {items.name} </option>
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

export default AddPlayer;