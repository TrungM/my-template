import React, { useEffect } from 'react';
import { useSideBar } from '../../context/showSideBarContext';
import LayoutAdmin from '../LayoutAdmin';
import { useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import useActionPut from '../../Hook/Ranking/useActionPut';
import useActionListMatchFollowClub from '../../Hook/Matches/useActionListMatchFollowClub';

const EditTable = () => {

    const { showfull } = useSideBar();
    const { id } = useParams();
    const { season } = useParams();
    const formik = useFormik({
        initialValues: {
            position: "",
            clubName: "",
            active: "",
            clubid: "",
            season: "",
            played: "",
            won: "",
            draw: "",
            lose: "",
            gf: "",
            gd: "",
            ga: "",
            points: "",
            nextmatch: "",
        },

        onSubmit: (values, actions) => {
            actions.setSubmitting(true);
            const confirmed = window.confirm('Are you sure within your option ');
            if (confirmed) {
                handleApiUpdate("/api/table", id, values);
                alert("Congratulation");
            }
        },
    });

    const { handleApiUpdate, nameClubs, nextMatch } = useActionPut(formik);

    const { listClubNext } = useActionListMatchFollowClub("/api/match/matches", parseInt(id), parseInt(season));

    const handleChangeNextMatch = (e) => {
        const value = parseInt(e.target.value);
        const id = listClubNext.filter((item) => item.id === value);
        formik.setFieldValue('nextmatch', id[0]);
    }

    useEffect(() => {
    })

    return (
        <LayoutAdmin>
            <div className={`content-wrapper   ${showfull ? "ml-0" : " "} `}>
                <section className={`content-header    ${showfull ? "ml-1" : " ml-20"} `}>
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Edit Club </h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="*">Home</a></li>
                                    <li className="breadcrumb-item active">Edit Club</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={`content ${showfull ? "ml-1" : " ml-20"} `}>
                    <div className="container-fluid flex">
                        <div className="row flex-1 w-64">
                            <div className="col-md-8">
                                <div className="card card-primary">
                                    <div className="card-header">
                                        <h3 className="card-title">Edit Club</h3>
                                    </div>
                                    <form onSubmit={formik.handleSubmit}>
                                        <div className="card-body">
                                            <div className="form-group">
                                                <label htmlFor="name">Club</label>
                                                <input type="text" className="form-control" name="clubName" disabled value={formik.values.clubName.name} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="name">Played</label>
                                                <input type="number" className="form-control" name="played" placeholder="Enter played" onChange={formik.handleChange} value={formik.values.played} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="name">Won</label>
                                                <input type="number" className="form-control" name="won" placeholder="Enter won" min={0} onChange={formik.handleChange} value={formik.values.won} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="name">Draw</label>
                                                <input type="number" className="form-control" name="draw" placeholder="Enter draw" min={0} onChange={formik.handleChange} value={formik.values.draw} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="name">Lose</label>
                                                <input type="number" className="form-control" name="lose" placeholder="Enter lose" min={0} onChange={formik.handleChange} value={formik.values.lose} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="name">GF</label>
                                                <input type="number" className="form-control" name="gf" placeholder="Enter gf" min={0} onChange={formik.handleChange} value={formik.values.gf} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="name">GA</label>
                                                <input type="number" className="form-control" name="ga" placeholder="Enter ga" min={0} onChange={formik.handleChange} value={formik.values.ga} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="name">GD</label>
                                                <input type="number" className="form-control" name="gd" placeholder="Enter gd" value={formik.values.gd} disabled />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="name">Points</label>
                                                <input type="number" className="form-control" name="points" placeholder="Enter points" value={formik.values.points} disabled />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="nextmatch">Next Match : {nextMatch} </label>
                                                <select name="nextmatch" className="form-control" onChange={handleChangeNextMatch} >
                                                    <option value="" key="0"> Please choose is  here </option>
                                                    {listClubNext.length > 0 && listClubNext.map((items, index) => {
                                                        return <option value={items.id} key={index}> {items.name} </option>
                                                    }
                                                    )}
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

export default EditTable;