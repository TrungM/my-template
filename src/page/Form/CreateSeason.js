import React, { useEffect } from 'react';
import { Fragment } from 'react';
import useActionPost from '../../Hook/Season/useActionPost';
import { useSideBar } from '../../context/showSideBarContext';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import LayoutAdmin from '../LayoutAdmin';
import { Link, useNavigate } from 'react-router-dom';

const CreateSeason = () => {
    const { showfull } = useSideBar();

    const { handleCreate } = useActionPost();
    const history = useNavigate();

    const formik = useFormik({
        initialValues: {
            seasonname: "",

        },
        validationSchema: Yup.object({
            seasonname: Yup.string().trim()
                .max(200, "Must be 200 chacracter or less").required("Required"),
        }),

        onSubmit: (values, actions) => {
            actions.setSubmitting(true);
            const confirmed = window.confirm('Are you sure within your option ');
            if (confirmed) {
                handleCreate("/api/season/create", values);
                setTimeout(() => {
                    actions.resetForm({
                        seasonname: ""
                    });
                    actions.setSubmitting(false);
                }, 1000);
                history('/admin/managenment-season');
            } else {
                actions.setSubmitting(false);
            }

        },
    });

    useEffect(() => {
        document.title = "Create a new season"
    })
    return (
        <LayoutAdmin>
            <div className={`content-wrapper   ${showfull ? "ml-0" : " "} `}>
                <section className={`content-header    ${showfull ? "ml-1" : " ml-20"} `}>
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Create a new season</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="*">Home</a></li>
                                    <li className="breadcrumb-item active">Create a new season</li>
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
                                        <h3 className="card-title">Create a new season</h3>
                                    </div>
                                    <form onSubmit={formik.handleSubmit}>
                                        <div className="card-body">
                                            <div className="form-group">
                                                <label htmlFor="name"> Season Name</label>
                                                <input type="text" className="form-control" id="seasonname" placeholder="Enter name" {...formik.getFieldProps("seasonname")} />
                                                {formik.touched.seasonname === true && formik.errors.seasonname ? <small className='text-red-500 font-medium text-base' >{formik.errors.seasonname}</small> : null}
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

export default CreateSeason;