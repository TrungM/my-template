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
import useActionListFullReferees from '../../Hook/Referees/useActionListFullReferees';

const StyleSpanResult = styled.span`

font-size: 42px;
font-weight: bold;
color:black;

`

const StyleBorderResult = styled.div`

box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
padding: 1rem 1rem;
height: 4rem;
border-radius: 10%;
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
    const [started, setStarted] = useState(false);
    const roundmatch = [];

    const {
        new2,
    } = useActionListMatches("/api/match/list");
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
            active: null,
            isHome: null,
            leg: "",
            status: "",
            timeHappen: "",
            resultClubHome: 0,
            resultClubAway: 0,
        },
        validationSchema: Yup.object({
            clubHome: Yup.object().required("Required"),
            clubAway: Yup.object().required("Required"),
            matchDay: Yup.string().required("Required"),
            matchTime: Yup.string().required("Required"),
            referees: Yup.number().required("Required"),
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
        logoAway, referees, round, leg, date, resultClubHome, resultClubAway, status,
        time, matchCode, clubIDHome, stadiumActive, stadiumIdHomeName, handleApiUpdateType } = useActionPut(formik);

    const { listContentClubActive,
        loading,
    } = useActionListActive("/api/clubs/activeAll");

    const {
        listContent,
    } = useActionListFull("/api/stadiums/list");

    const { countActive } = useActionCountActive("/api/match/countMatches");

    const { listAllReferees } = useActionListFullReferees("/api/referees/list");


    for (let i = 1; i <= 38; i++) {
        roundmatch.push(<Fragment key={i}><option value={i} >{i}</option> </Fragment>);
    }


    const handleChangeSelectRoundMatch = (e) => {
        const rID = parseInt(e.target.value);
        formik.setFieldValue("roundmatch", rID);
    }

    const handleClickStart = () => {
        handleApiUpdateType('/api/match/type/', parseInt(id), 0)
        formik.setFieldValue("status", 0)
        setStarted(true);
        alert('Your match started')
    }

    const handleClickFinish = () => {
        handleApiUpdateType('/api/match/type/', parseInt(id), 1)
        formik.setFieldValue("status", 1)
        alert('Your match finished')
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
                                <h1>Edit Match Form </h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="*">Home</a></li>
                                    <li className="breadcrumb-item active">Edit Match</li>
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
                                        <h3 className="card-title">Edit the Information of the match  </h3>
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
                                                {formik.touched.matchDay === true && formik.errors.matchDay ? <small className='text-red-500 font-medium text-base' >{formik.errors.matchDay}</small> : null}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputFile">Time</label>
                                                <input type="time" className="form-control" name='matchTime' id="time"   {...formik.getFieldProps("matchTime")} />
                                                {formik.touched.matchTime === true && formik.errors.matchTime ? <small className='text-red-500 font-medium text-base' >{formik.errors.matchTime}</small> : null}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputFile">Referees : {referees}</label>
                                                <select name="referees" className="form-control" {...formik.getFieldProps("referees")}>
                                                    <option value=""> Choose referee </option>
                                                    {listAllReferees.length > 0 && listAllReferees.map((items, index) => {
                                                        if (items.id !== formik.values.referees) {
                                                            return <option value={items.id} key={index}> {items.name} </option>
                                                        }
                                                    }
                                                    )}
                                                </select>
                                                {formik.touched.referees === true && formik.errors.referees ? <small className='text-red-500 font-medium text-base' >{formik.errors.referees}</small> : null}
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
                                                <select name="roundmatch" className="form-control" {...formik.getFieldProps("roundmatch")} onChange={handleChangeSelectRoundMatch}>
                                                    <option value="" key="0"> Please choose is  here </option>
                                                    {roundmatch}
                                                </select>
                                            </div>
                                            <div className={`form-group ${started || formik.values.status === 0 || formik.values.status === 1  ? '' : 'hidden'}`}>
                                                <label htmlFor="timeHappen">Time</label>
                                                <input type="text" className="form-control" name='timeHappen' id="timeHappen"  {...formik.getFieldProps("timeHappen")} disabled = {formik.values.status === 1 ? true : false} />
                                            </div>
                                            <div className={`form-group ${started || formik.values.status === 0 || formik.values.status === 1 ? '' : 'hidden'}`}>
                                                <label htmlFor="resultClubHome">Result Club Home</label>
                                                <input type="text" className="form-control" name='resultClubHome' id="resultClubHome"  {...formik.getFieldProps("resultClubHome")} disabled = {formik.values.status === 1 ? true : false} />
                                            </div>
                                            <div className={`form-group ${started || formik.values.status === 0 || formik.values.status === 1 ? '' : 'hidden'}`}>
                                                <label htmlFor="resultClubAway">Result Club Away</label>
                                                <input type="text" className="form-control" name='resultClubAway' id="resultClubAway"  {...formik.getFieldProps("resultClubAway")}  disabled = {formik.values.status === 1 ? true : false} />
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
                                        {
                                            status === 0 || status === 1|| started ?
                                                <div className='field_result flex justify-between gap-3'>
                                                    <StyleBorderResult>
                                                        <StyleSpanResult>{formik.values.resultClubHome ?? resultClubHome}</StyleSpanResult>
                                                    </StyleBorderResult>
                                                    <StyleBorderResult>
                                                        <StyleSpanResult>{formik.values.resultClubAway ?? resultClubAway }</StyleSpanResult>
                                                    </StyleBorderResult>
                                                </div>
                                                :
                                                <StyleSetUpTime>
                                                    <div><StyleSetUpDate>{date == null ? "Date" : date}</StyleSetUpDate></div>
                                                    <div><StyleSetUpTimer>{time == null ? "Time" : time}</StyleSetUpTimer></div>
                                                </StyleSetUpTime>
                                        }
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
                                                <h5 className='p-2'>{referees == null ? "None" : referees} </h5>
                                                <h5 className='p-2'>{round == null ? "None" : round} </h5>
                                                <h5 className='p-2 capitalize'>{leg == null ? "None" : leg} </h5>
                                            </div>
                                        </div>

                                        {
                                            status === 0 || started ?
                                                <div className={`flex justify-end p-2 ${date == null || time == null || referees == null || formik.values.status === 1  ? 'hidden' : ''}`}>
                                                    <button type="button" className="btn  btn-danger" onClick={handleClickFinish}
                                                    >Finish Match</button>
                                                </div>
                                                :
                                                <div className={`flex justify-end p-2 ${date == null || time == null || referees == null || formik.values.status === 1 ? 'hidden' : ''}`}>
                                                    <button type="button" className="btn  btn-success" onClick={handleClickStart}
                                                    >Start Match</button>
                                                </div>
                                        }
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