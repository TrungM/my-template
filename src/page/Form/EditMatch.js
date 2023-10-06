import React, { Fragment, useEffect, useState } from 'react';
import { useSideBar } from '../../context/showSideBarContext';
import { useFormik } from 'formik';
import useActionListFullRanking from '../../Hook/Ranking/useActionListFullRanking';
import * as Yup from 'yup';
import useActionListFull from '../../Hook/Stadiums/useActionListFull';
import useActionListActive from '../../Hook/Clubs/useActionListActive';
import useActionPut from '../../Hook/Matches/useActionPut';
import styled from 'styled-components';
import useActionListMatches from '../../Hook/Matches/useActionListMatches';
import { useParams } from 'react-router-dom';
import useActionCountLeg from '../../Hook/Matches/useActionCountLeg';
import useActionCountActive from '../../Hook/Matches/useActionCountActive';
import LayoutAdmin from '../LayoutAdmin';

const StyleSpanResult = styled.span`

font-size: 40px;
font-weight: bold;
color:black;

`

const StyleBorderResult = styled.div`

border: 1px solid #e76f51;
box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
padding: 1rem 1rem;
height: 4rem;
border-radius: 20%;
display: flex;
align-items: center;

`
const StyleImageResult = styled.div`
padding: 1rem 1rem;
background-color: #fff;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: space-between;
box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;


width: 50%;
position: relative;

    img{
        width: 100%; 
    height: auto
    }

`

const StyleTextInfo = styled.h4`
font-weight:500;



`

const StyleSetUpTime = styled.div`

padding: 1rem 1rem ;

`

const StyleSetUpTimer = styled.div`

padding: 0.25rem 0.25rem;
font-weight: 600;
text-align: center;


`
const StyleSetUpDate = styled.div`

padding: 0.25rem 0.25rem;
font-size: 0.8rem;
font-weight: 600;
text-align: center;


`
const EditMatch = () => {



    const { showfull } = useSideBar();
    const roundmatch = [];

    const {
        new2,
    } = useActionListMatches("/api/match/list");
    const { matchID } = useParams();
    const formik = useFormik({
        initialValues: {
            clubHome: "",
            clubAway: "",
            matchDay: "",
            matchTime: "",
            referees: "",
            season: "",
            stadiumId: null,
            roundmatch: "",
            active : null,
            leg: "",

        },
        validationSchema: Yup.object({

            clubHome: Yup.object().required("Required"),
            clubAway: Yup.object().required("Required"),
        }),


        onSubmit: (values, actions) => {

            const confirmed = window.confirm('Are you sure within your option ');
            if (confirmed) {

                handleApiUpdate("/api/match", code, values);

                alert("Congratulation")
            }
        },
    });


    const { loadImage,
        nameImageState,
        NameClubstate,
        IdClubstate,
        handleApiUpdate,
        code,
        id,
        NameStadiumstate, nameAway, nameHome, logoHome,
        logoAway, referee, round, leg, date,
        time, matchCode, clubIDHome, stadiumActive, stadiumIdHomeName } = useActionPut(formik);

    const { listContentClubActive,
        loading,
    } = useActionListActive("/api/clubs/activeAll");

    const {
        listContent,
    } = useActionListFull("/api/stadiums/list");
   
    const { countActive } = useActionCountActive("/api/match/countMatches");


    if (formik.values.leg === "first") {

        for (let i = 1; i <= 19; i++) {
            roundmatch.push(<Fragment key={i}><option value={i} >{i}</option> </Fragment>);
        }

    } else {
        for (let i = 20 ; i <= 38; i++) {
            roundmatch.push(<Fragment key={i}><option value={i} >{i}</option> </Fragment>);

        }
    }
    const handleChangeSelectReferees = (e) => {
        const rID = parseInt(e.target.value);
        formik.setFieldValue("referees", rID);
    }

    const handleChangeSelectRoundMatch = (e) => {
        const rID = parseInt(e.target.value);
        formik.setFieldValue("roundmatch", rID);
    }

    useEffect(() => {
        document.title = "Edit Matches";
    });





    return (
        <LayoutAdmin>
            <div className={`content-wrapper   ${showfull ? "ml-0" : " "} `}>
                <section className={`content-header    ${showfull ? "ml-1" : " ml-20"} `}>
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Edits Match Form </h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="*">Home</a></li>
                                    <li className="breadcrumb-item active">Edits Match</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={`content ${showfull ? "ml-1" : " ml-20"} `}>
                    <div className="container-fluid flex justify-between ">
                        <div style={{ flexBasis: "70%" }}>
                            <div className="mr-3" >
                                <div className="card card-primary">
                                    <div className="card-header">
                                        <h3 className="card-title">Edits the Information of the match  </h3>
                                    </div>
                                    <form onSubmit={formik.handleSubmit}>
                                        <div className="card-body">
                                            <div className="form-group">
                                                <label htmlFor="exampleInputFile"> Home Clubs</label>
                                                <input type="text" className="form-control" value={nameHome} disabled={true} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputFile"> Away Clubs</label>
                                                <input type="text" className="form-control" value={nameAway} disabled={true} />

                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="stadiums">Stadium</label>
                                                <input type="text" className="form-control" value={stadiumIdHomeName} disabled={true} />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="name">Date</label>
                                                <input type="date" className="form-control" name='matchDay' id="Date"  {...formik.getFieldProps("matchDay")} />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="exampleInputFile">Time</label>
                                                <input type="time" className="form-control" name='matchTime' id="time"   {...formik.getFieldProps("matchTime")} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputFile">Referees</label>
                                                <input type="text" className="form-control" name='referees' id="referees" onChange={handleChangeSelectReferees} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="Leg">Leg</label>
                                                <select name="leg" className="form-control"  {...formik.getFieldProps("leg")}>
                                                    <option value="first"> First </option>
                                                    <option value="return"> Return </option>

                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="roundmatch">Round</label>
                                                <select name="roundmatch" className="form-control" {...formik.getFieldProps("roundmatch")}  onChange={handleChangeSelectRoundMatch}>
                                                    <option value="" key="0"> Please choose is  here </option>
                                                    {roundmatch}
                                                </select>
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
                        <div style={{ flexBasis: "60%", }}>
                            <div className="mr-3">
                                <div className="card card-success">
                                    <div className="card-header flex justify-between">
                                        <h3 className="card-title"> The detail of match</h3>
                                    </div>
                                    <div className="card-body flex items-center gap-3">
                                        <StyleImageResult>
                                            <img src={logoHome} alt='' />
                                        </StyleImageResult>
                                        {/* <div className='field_result flex justify-between gap-3'>
                                            <StyleBorderResult>
                                                <StyleSpanResult>2</StyleSpanResult>
                                            </StyleBorderResult>
                                            <StyleBorderResult>
                                                <StyleSpanResult>3</StyleSpanResult>
                                            </StyleBorderResult>
                                        </div>
                                         */}
                                        <StyleSetUpTime>
                                            <div><StyleSetUpDate>{date == null ? "Date" : date}</StyleSetUpDate></div>
                                            <div><StyleSetUpTimer>{time == null ? "Time" : time}</StyleSetUpTimer></div>
                                        </StyleSetUpTime>

                                        <StyleImageResult>
                                            <img src={logoAway} alt='' />
                                        </StyleImageResult>
                                    </div>
                                    <div>
                                        <div className="text-center text-lg">
                                            <StyleTextInfo>
                                                The detail of the info
                                            </StyleTextInfo>
                                        </div>

                                        <div className='p-3 flex justify-between items-center'>
                                            <div >
                                                <h5 className='p-2 text-red-600'>Home</h5>
                                                <h5 className='p-2 text-blue-600'>Away</h5>
                                                <h5 className='p-2'>Stadium</h5>
                                                <h5 className='p-2'>Referee</h5>
                                                <h5 className='p-2'>Round</h5>
                                                <h5 className='p-2'>The leg</h5>
                                            </div>
                                            <div >
                                                <h5 className='p-2 text-red-600'>{nameHome}</h5>
                                                <h5 className='p-2 text-blue-600'>{nameAway} </h5>
                                                <h5 className='p-2'>{stadiumIdHomeName} </h5>
                                                <h5 className='p-2'>{referee == null ? "None" : referee} </h5>
                                                <h5 className='p-2'>{round == null ? "None" : round} </h5>
                                                <h5 className='p-2 capitalize'>{leg == null ? "None" : leg} </h5>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </LayoutAdmin>
    );






};

export default EditMatch;