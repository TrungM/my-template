import React from 'react';
import LayoutAdmin from '../LayoutAdmin';
import { useSideBar } from '../../context/showSideBarContext';
import styled from 'styled-components';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useActionPostReferee from '../../Hook/Referees/useActionPostReferee';
import useActionListFullFlag from '../../Hook/Flags/useActionListFullFlag';

const AddReferee = () => {
    const { showfull } = useSideBar();
    const formik = useFormik({
        initialValues: {
            name: "",
            nationality: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().trim().required('Required'),
            nationality: Yup.string().required('Required'),
        }),

        onSubmit: (values, actions) => {
            actions.setSubmitting(true);
            const confirmed = window.confirm('Are you sure within your option ');
            if (confirmed) {
                handleCreate("/api/referees/create", values);
                setTimeout(() => {
                    actions.resetForm({
                        name: "",
                        nationality: "",
                    });
                    actions.setSubmitting(false);
                }, 1000);
            } else {
                actions.setSubmitting(false);
            }
        },
    });
    const { handleCreate } = useActionPostReferee(formik);

    const { listAllFlags } = useActionListFullFlag("/api/flags/list");

    return (
        <LayoutAdmin>
            <div className={`content-wrapper   ${showfull ? "ml-0" : " "} `}>
                <section className={`content-header    ${showfull ? "ml-1" : " ml-20"} `}>
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Add Flags Form</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="*">Home</a></li>
                                    <li className="breadcrumb-item active">Add Flags</li>
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
                                        <h3 className="card-title">Add Flags</h3>
                                    </div>
                                    <form onSubmit={formik.handleSubmit}>
                                        <div className="card-body">
                                            <div className="form-group">
                                                <label htmlFor="name">Name</label>
                                                <input type="text" className="form-control" id="name" placeholder="Enter name" {...formik.getFieldProps("name")} />
                                                {formik.touched.name === true && formik.errors.name ? <small className='text-red-500 font-medium text-base' >{formik.errors.name}</small> : null}
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

export default AddReferee;