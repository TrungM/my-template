import React from 'react';
import { useSideBar } from '../../context/showSideBarContext';
import { useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import useActionPostPositions from '../../Hook/Positions/useActionPostPositions';
import LayoutAdmin from '../LayoutAdmin';

const AddPosition = () => {
    const { showfull } = useSideBar();
    const { id } = useParams();

    const formik = useFormik({
        initialValues: {
            position: "",
        },
        validationSchema: Yup.object({
            position: Yup.string().trim().required('Required'),
        }),

        onSubmit: (values, actions) => {
            actions.setSubmitting(true);
            const confirmed = window.confirm('Are you sure within your option ');
            if (confirmed) {
                handleCreate("/api/positions/create", values);
                setTimeout(() => {
                    actions.resetForm({
                        position: "",
                    });
                    actions.setSubmitting(false);
                }, 1000);
            } else {
                actions.setSubmitting(false);
            }
        },
    });

    const { handleCreate,
    } = useActionPostPositions(formik);
    return (
        <LayoutAdmin>
            <div className={`content-wrapper   ${showfull ? "ml-0" : " "} `}>
                <section className={`content-header    ${showfull ? "ml-1" : " ml-20"} `}>
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Edit Positions Form </h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="*">Home</a></li>
                                    <li className="breadcrumb-item active">Edit Positions</li>
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
                                        <h3 className="card-title">Edits Position</h3>
                                    </div>
                                    <form onSubmit={formik.handleSubmit}>
                                        <div className="card-body">
                                            <div className="form-group">
                                                <label htmlFor="position">Position</label>
                                                <input type="text" className="form-control" name='position' id="position" placeholder="Enter new position" value={formik.values.position} onChange={formik.handleChange} />
                                                {formik.touched.position === true && formik.errors.position ? <small className='text-red-500 font-medium text-base' >{formik.errors.position}</small> : null}
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

export default AddPosition;