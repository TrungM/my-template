import React from 'react';
import { useSideBar } from '../../context/showSideBarContext';
import { useNavigate, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import { useEffect } from 'react';
import LayoutAdmin from '../LayoutAdmin';
import * as Yup from 'yup'
import { Fragment } from 'react';
import useActionMatchHomePage from '../../Hook/Matches/useActionMatchHomePage';

const ListMatchWeek = () => {
    const { showfull } = useSideBar();
    const { id } = useParams();

    const { handleApiUpdateActive , handleApiUpdateResetActive } = useActionMatchHomePage();

    const roundmatch = [];

    const formik = useFormik({
        initialValues: {
            roundmatch: "",
        },
        validationSchema: Yup.object({
            roundmatch: Yup.number().required("Required"),
        }),

        onSubmit: (values, actions) => {

            const confirmed = window.confirm('Are you sure within your option ');
            if (confirmed) {
                handleApiUpdateActive("/api/match/activeMatch/", 1, values.roundmatch);
                handleApiUpdateResetActive("/api/match/activeMatch/reset", values.roundmatch);
                alert(' Congratulation')
            }
        },
    });

    for (let i = 1; i <= 38; i++) {
        roundmatch.push(<Fragment key={i}><option value={i} >{i}</option> </Fragment>);
    }

    useEffect(() => {
        document.title = "Display Matchweek Homepage"
    })
    return (
        <LayoutAdmin>
            <div className={`content-wrapper   ${showfull ? "ml-0" : " "} `}>
                <section className={`content-header    ${showfull ? "ml-1" : " ml-20"} `}>
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Round</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="*">Home</a></li>
                                    <li className="breadcrumb-item active">Choose Round to display</li>
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
                                        <h3 className="card-title">Choose Round to display</h3>
                                    </div>
                                    <form onSubmit={formik.handleSubmit}>
                                        <div className="card-body">
                                            <div className="form-group">
                                                <label htmlFor="roundmatch">Round : {formik.values.roundmatch}</label>
                                                <select name="roundmatch" className="form-control" {...formik.getFieldProps("roundmatch")}>
                                                    <option value="" key="0"> Please choose is  here </option>
                                                    {roundmatch}
                                                </select>
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

export default ListMatchWeek;