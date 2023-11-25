import React, { Fragment, useEffect } from 'react';
import { useSideBar } from '../../context/showSideBarContext';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import styled from 'styled-components';
import useActionPut from '../../Hook/Clubs/useActionPut';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useActionListFull from '../../Hook/Stadiums/useActionListFull';
import LayoutAdmin from '../LayoutAdmin';
import useActionPutActiveStadium from '../../Hook/Clubs/useActionPutActiveStadium';
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
display: flex;
text-align: center;
justify-content: center;
align-items: center;
transition: all ease-in-out 0.2s;
img{
  object-fit: contain; /* Hiển thị ảnh mà không bị méo hoặc cắt bớt */
}
`
const EditClubs = () => {

    const { showfull } = useSideBar();

    const { handleApiUpdateActive } = useActionPutActiveStadium();

    const formik = useFormik({
        initialValues: {
            codeClub: "",
            name: "",
            image: "",
            stadiumid: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().max(200, "Must be 200 chacracter or less").required("Required"),
            image: Yup.string().required("Required"),
            stadiumid: Yup.string().required("Required")
        }),

        onSubmit: (values, actions) => {
            const confirmed = window.confirm('Are you sure within your option ');
            if (confirmed) {
                handleApiUpdate("/api/clubs", code, values);
                handleApiUpdateActive("/api/stadiums/active",values.stadiumid);
                handleApiUpdateActive("/api/stadiums/activereset", IdStadiumstate)
                alert("Congratulation")
            }
        },
    });
    const { loadImage,
        nameImageState,
        NameClubstate,
        IdClubstate,
        handleApiUpdate,
        hanldInputFile,
        handleDeleteImage,
        code,
        id, NameStadiumstate , IdStadiumstate } = useActionPut(formik);
    const {
        listContent,
    } = useActionListFull("/api/stadiums/list");

    useEffect(() => {
        document.title = "Edit Clubs"
    })
    return (
        <LayoutAdmin>
            <div className={`content-wrapper   ${showfull ? "ml-0" : " "} `}>
                <section className={`content-header    ${showfull ? "ml-1" : " ml-20"} `}>
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Edits Clubs Form </h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="*">Home</a></li>
                                    <li className="breadcrumb-item active">Edits Stadiums</li>
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
                                        <h3 className="card-title">Edits the Information of the {NameClubstate} </h3>
                                    </div>
                                    <form onSubmit={formik.handleSubmit}>
                                        <div className="card-body">
                                            <div className="form-group">
                                                <label htmlFor="name">Code</label>
                                                <input type="text" className="form-control" name='codeClub' id="clubs_code" placeholder="Enter new code" value={formik.values.codeClub} onChange={formik.handleChange} readOnly />
                                                {formik.touched.codeClub === true && formik.errors.codeClub ? <small className='text-red-500 font-medium text-base' >{formik.errors.codeClub}</small> : null}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="name">Name</label>
                                                <input type="text" className="form-control" name='name' id="clubs_name" placeholder="Enter new name" value={formik.values.name} onChange={formik.handleChange} />
                                                {formik.touched.name === true && formik.errors.name ? <small className='text-red-500 font-medium text-base' >{formik.errors.name}</small> : null}
                                            </div>
                                            <div className="form-group flex justify-center items-center">

                                                <StyleImageContain>
                                                    {loadImage > 0 || formik.values.image !== null ? <span className={loadImage === 100 ? `hidden` : ""} >{Math.ceil(loadImage)}%</span> : <span>0%</span>}
                                                    {IdClubstate === id && loadImage > 0 ?
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
                                                <label htmlFor="exampleInputFile">Stadium : {NameStadiumstate} </label>
                                                <select name="stadiumid" className="form-control" {...formik.getFieldProps("stadiumid")}>
                                                    <option>Choose new stadium</option>
                                                    {listContent.length > 0 && listContent.map((items, index) => {
                                                        if (items.active !== 1 && items.id !== formik.values.stadiumid) {
                                                            return <option value={items.id} key={index}> {items.name} </option>
                                                        }
                                                    }
                                                    )}
                                                </select>
                                                {formik.touched.stadiumid === true && formik.errors.stadiumid ? <small className='text-red-500 font-medium text-base' >{formik.errors.stadiumid}</small> : null}
                                            </div>
                                        </div>
                                        <div className="card-footer flex gap-3">
                                            <button type="submit" className="btn btn-primary"
                                            >Save</button>
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

export default EditClubs;