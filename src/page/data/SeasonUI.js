import React, { useEffect, useState } from 'react';
import LayoutAdmin from '../LayoutAdmin';
import { useSideBar } from '../../context/showSideBarContext';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import useActionListFullSeason from '../../Hook/Season/useActionListFull';
import useActionPutSeasonUI from '../../Hook/Season/useActionPutSeasonUI';
import useActionResetSeasonUI from '../../Hook/Season/useActionResetSeasonUI';
import { Link, useNavigate } from 'react-router-dom';
import useActionSeasonUICount from '../../Hook/Season/useActionSeasonUICount';
import useActionListSeasonUI from '../../Hook/Season/useActionListSeasonUI';
import styled from 'styled-components';
import useActionUpdateActiveUI from '../../Hook/Ranking/useActionUpdateActiveUI';
import useActionUpdateActiveUIMatch from '../../Hook/Matches/useActionUpdateActiveUIMatch';
const StyleCricle = styled.div`

        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        border: 4px solid #00f;
        border-right-color: transparent;
        animation: spin 2s linear infinite;
        margin: 0 auto;
        margin-top: 1rem;
    

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

`
const SeasonUI = () => {
    const { showfull } = useSideBar();
    const [layoutSeason, setLayoutSeason] = useState(false);
    const { listContent } = useActionListFullSeason("/api/season/listSeason")
    const { handleApiSeasonIDActive } = useActionPutSeasonUI();
    const { handleApiResetSeasonIDActive } = useActionResetSeasonUI();
    const { handleApiUpdateActiveUIRanking } = useActionUpdateActiveUI();
    const { handleApiUpdateActiveUIMatch } = useActionUpdateActiveUIMatch();

    const { value } = useActionSeasonUICount();
    const { listActiveUI,
        loading, } = useActionListSeasonUI("/api/season/seasonUI")
    const formik = useFormik({
        initialValues: {
            seasonID: "",
        },
        validationSchema: Yup.object({
            seasonID: Yup.string().required("Required"),
        }),

        onSubmit: (values, actions) => {
            actions.setSubmitting(true);
            const confirmed = window.confirm('Are you sure within your option ');
            if (confirmed) {
                handleApiSeasonIDActive('/api/season/seasonUI/', values.seasonID)
                handleApiResetSeasonIDActive('/api/season/seasonUI/reset', values.seasonID)
                handleApiUpdateActiveUIRanking('/api/table/active/', values.seasonID)
                handleApiUpdateActiveUIMatch('/api/match/active/', values.seasonID)
                setLayoutSeason(true);
                window.location.reload();
            } else {
                actions.setSubmitting(false);
            }

        },
    });

    useEffect(() => {
        document.title = "Season"
    })
    return (
        <LayoutAdmin>
            <div className={`content-wrapper   ${showfull ? "ml-0" : " "} `}>
                <section className={`content-header    ${showfull ? "ml-1" : " ml-20"} `}>
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Premier League </h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="*">Home</a></li>
                                    <li className="breadcrumb-item active">Season</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={`content ${showfull ? "ml-1" : " ml-20"}  ${layoutSeason || value ? 'hidden' : ''}`}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="card card-primary">
                                    <div className="card-header">
                                        <h3 className="card-title">Season</h3>
                                    </div>
                                    <form onSubmit={formik.handleSubmit}>
                                        <div className="card-body">
                                            <div className="form-group">
                                                <label htmlFor="exampleInputFile">Choose a Season</label>
                                                <select name="seasonID" className="form-control" {...formik.getFieldProps("seasonID")}>
                                                    <option value=""> Your option </option>
                                                    {listContent.length > 0 && listContent.map((items, index) => {
                                                        if (items.active === 1) {
                                                            return <option value={items.id} key={index}> {items.seasonname} </option>
                                                        }
                                                    }
                                                    )}
                                                </select>
                                                {formik.touched.seasonID === true && formik.errors.seasonID ? <small className='text-red-500 font-medium text-base' >{formik.errors.seasonID}</small> : null}
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
                <section className={`content ${showfull ? "ml-1" : " ml-20"}  ${layoutSeason || value ? '' : 'hidden'} `}>
                    <div className="container-fluid">
                        <div >
                            {!loading && listActiveUI.length > 0 && listActiveUI.map((items, index) => {
                                return <div className="block" key={index}>
                                    <div className="small-box bg-info">
                                        <div className="inner">
                                            <div className='flex items-center justify-between'>
                                                <h3>{items.seasonname} </h3>
                                            </div>
                                        </div>
                                        <div className="inner">
                                            <h5>Champion</h5>
                                        </div>
                                        <Link to={`/admin/${items.active === 1 ? 'clubs-active' : 'choose-clubs'}/${items.id}`} className="small-box-footer">More Detail info <i className="fas fa-arrow-circle-right"></i></Link>
                                    </div>
                                </div>
                            })}
                        </div>
                        {loading && (<StyleCricle></StyleCricle>)}
                    </div>
                </section>
            </div>



        </LayoutAdmin>
    );
};

export default SeasonUI;