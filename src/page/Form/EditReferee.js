import React from 'react';
import { useSideBar } from '../../context/showSideBarContext';
import { useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import useActionPutReferee from '../../Hook/Referees/useActionPutReferee';
import LayoutAdmin from '../LayoutAdmin';
import useActionListFullFlag from '../../Hook/Flags/useActionListFullFlag';

const EditReferee = () => {
    const { showfull } = useSideBar();
    const { id } = useParams();

    const formik = useFormik({
        initialValues: {
            name: "",
            nationality: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Required'),
            nationality: Yup.string().required('Required'),
        }),

        onSubmit: (values, actions) => {
            const confirmed = window.confirm('Are you sure within your option ');
            if (confirmed) {
                handleApiUpdate("/api/referees", id, values);
                alert("Congratulation")
            }
        },
    });

    const {
        handleApiUpdate, Nationalitystate
    } = useActionPutReferee(formik);
    const { listAllFlags } = useActionListFullFlag("/api/flags/list");

    return (
        <LayoutAdmin>
            <div className={`content-wrapper   ${showfull ? "ml-0" : " "} `}>
                <section className={`content-header    ${showfull ? "ml-1" : " ml-20"} `}>
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Edit Referees Form </h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="*">Home</a></li>
                                    <li className="breadcrumb-item active">Edit Referees</li>
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
                                        <h3 className="card-title">Edits Referees</h3>
                                    </div>
                                    <form onSubmit={formik.handleSubmit}>
                                        <div className="card-body">
                                            <div className="form-group">
                                                <label htmlFor="name">Name</label>
                                                <input type="text" className="form-control" name='name' id="name" placeholder="Enter new name" value={formik.values.name} onChange={formik.handleChange} />
                                                {formik.touched.name === true && formik.errors.name ? <small className='text-red-500 font-medium text-base' >{formik.errors.name}</small> : null}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputFile">Nationality : {Nationalitystate} </label>
                                                <select name="nationality" className="form-control" {...formik.getFieldProps("nationality")}>
                                                    <option value=""> Your option  </option>
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

export default EditReferee;