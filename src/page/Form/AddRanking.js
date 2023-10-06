import React, { Fragment, useEffect } from 'react';
import { useSideBar } from '../../context/showSideBarContext';
import useActionPost from '../../Hook/Ranking/useActionPost';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import LayoutAdmin from '../LayoutAdmin';

const AddRanking = () => {

    const { showfull } = useSideBar();

    const formik = useFormik({
        initialValues: {
            name: "",
            image: "",
        },
        validationSchema: Yup.object({
            image: Yup.string().required("Required")
        }),


        onSubmit: (values, actions) => {
            actions.setSubmitting(true);
            const confirmed = window.confirm('Are you sure within your option ');
            if (confirmed) {
                handleCreate("/api/stadiums/create", values);
                setTimeout(() => {
                    actions.resetForm({
                        name: "",
                        image: "",
                    });
                    actions.setSubmitting(false);
                    setLoadImg(0);
                    setnoChoose(false)
                }, 1000);
            } else {
                actions.setSubmitting(false);
            }
            // console.log(values);
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
        document.title = "Create ranking";
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
                                        <h3 className="card-title">Create Ranking</h3>
                                    </div>


                                    <form onSubmit={formik.handleSubmit}>

                                        <div className="card-body">
                                            <div className="form-group">
                                                <label htmlFor="name">Name</label>
                                                <input type="text" className="form-control" name='name' id="stadium_name" placeholder="Enter new stadium"   {...formik.getFieldProps("name")} />
                                                {formik.touched.name === true && formik.errors.name ? <small className='text-red-500 font-medium text-base' >{formik.errors.name}</small> : null}
                                            </div>
                                            <div className="form-group flex justify-center items-center">
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

export default AddRanking;