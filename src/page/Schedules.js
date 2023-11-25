import React, { Fragment, useEffect, useState } from 'react';
import { useSideBar } from '../context/showSideBarContext';
import { Link, NavLink, useParams } from 'react-router-dom';
import styled from 'styled-components';
import useActionListMatches from '../Hook/Matches/useActionListMatches';
import useActionCountActive from '../Hook/Matches/useActionCountActive';
import useActionPost from '../Hook/Matches/useActionPost';
import useActionListFullRanking from '../Hook/Ranking/useActionListFullRanking';
import useActionCountLeg from '../Hook/Matches/useActionCountLeg';
import useActionCheckSeason from '../Hook/Matches/useActionCheckSeason';
import LayoutAdmin from './LayoutAdmin';

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
const Schedules = () => {
    const { showfull } = useSideBar();

    const {
        listContentClub,
        loading, setclubID } = useActionListMatches("/api/match/list");

    const { countActive } = useActionCountActive("/api/match/countMatches");

    const { listContentClubActive } = useActionListFullRanking("/api/table/list");
    const { handleCreate } = useActionPost();
    const roundmatch = [];
    const { id } = useParams();
    const [getID, setID] = useState();
    const [disabled, setDisabled] = useState(false);
    const { checkSeason } = useActionCheckSeason("/api/match/checkSeason", parseInt(id))
    useEffect(() => {
        setID(id);
        document.title = "Matches";
    }, [id])

    const handleCreateMatches = (e) => {
        if (checkSeason === true) {
            setDisabled(true)
            alert("The matches have created")
        } else {
            setDisabled(false)
            const confirmed = window.confirm('Are you sure within your option ');
            if (confirmed) {
                handleCreate('/api/match/createMatches', listContentClubActive.filter((clubs) => parseInt(clubs.season) === parseInt(getID)));
                alert("Congratulation")
            }

        }
    }
    for (let i = 1; i <= 38; i++) {
        roundmatch.push(<Fragment key={i}><option value={i} >{i}</option> </Fragment>);
    }

    const handleSelectRound = (e) => {

        // console.log(e.target.value);
        setclubID(e.target.value);
    }
    return (
        <LayoutAdmin>
            <div className={`content-wrapper   ${showfull ? "ml-0" : " "} `}>
                <section className={`content-header     ${showfull ? "ml-1" : " ml-14 "} `}>
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>List Matches</h1>
                                <div className='flex gap-3'>
                                    <button type="button" className="btn btn-secondary" onClick={handleCreateMatches} value={getID} disabled={disabled}>Create Match</button>
                                    <Link to={`/admin/schedules/first/${getID}`}><button type="button" className="btn btn-primary" >The first</button>
                                    </Link>
                                    <Link to={`/admin/schedules/return/${getID}`}><button type="button" className="btn btn-primary" >The return</button>
                                    </Link>
                                    <Link to={`/admin/schedules/homepage/${getID}`}><button type="button" className="btn btn-primary" >Homepage</button>
                                    </Link>
                                </div>

                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="*">Home</a></li>
                                    <li className="breadcrumb-item active">List Matches</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={`content ${showfull ? "ml-1" : " ml-14 "} `}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className=" m-3 card-header flex justify-between">
                                        <h3 className="card-title">The function </h3>
                                    </div>
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label htmlFor="roundmatch">Round</label>
                                            <select name="roundmatch" className="form-control"  >
                                                <option value="" key="0"> Please choose is  here </option>
                                                {roundmatch}
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="roundmatch">The leg</label>
                                            <select name="leg" className="form-control">
                                                <option value="first"> First </option>
                                                <option value="return"> Return </option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="roundmatch">The club</label>
                                            <select name="roundmatch" className="form-control" onChange={handleSelectRound}>
                                                <option value="" > Please choose is  here </option>
                                                {!loading && listContentClubActive.length > 0 && listContentClubActive.map((items, index) => (
                                                    <option value={items.id} key={index}>{items.clubName.name}</option>
                                                ))}

                                            </select>
                                        </div>
                                        <div>
                                            <button type="button" className="btn btn-info ">Search</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={`content ${showfull ? "ml-1" : " ml-14 "} `}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className=" m-3 card-header flex justify-between">
                                        <h3 className="card-title"> <span>The list </span> matches of the season</h3>
                                    </div>
                                    <div className='flex justify-center'>
                                    </div>
                                    <div className="card-body">
                                        <table id="example2" className="table table-bordered table-hover text-center">
                                            <thead>
                                                <tr>
                                                    <th>Logo_Home</th>
                                                    <th>Name_Home</th>
                                                    <th>Name_Away</th>
                                                    <th>Logo_Away</th>
                                                    <th>Update</th>
                                                    <th>Active</th>
                                                    <th>Inctive</th>
                                                </tr>
                                            </thead>
                                            {/* <tbody>
                                                {!loading && listContentClub.length > 0 && listContentClub.map((items, index) => (
                                                    <tr key={items.id}>
                                                        <td style={{ width: "10%" }}><img src={items.clubHome.clubName.image} alt="" width="100%" /> </td>
                                                        <td>{items.clubHome.clubName.name}</td>
                                                        <td>{items.clubAway.clubName.name}</td>
                                                        <td style={{ width: "10%" }}><img src={items.clubAway.clubName.image} alt="" width="100%" /> </td>
                                                        <td> <Link to={`/admin/edit-match/${items.id}`}><button type="button" className="btn btn-outline-success">Update</button></Link>
                                                        </td>
                                                        <td><button type="button" className="btn btn-danger">Active</button>
                                                        </td>
                                                        <td><button type="button" className="btn btn-danger">Inactive</button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody> */}
                                            <tfoot>
                                                <tr>
                                                    <th>Logo_Home</th>
                                                    <th>Name_Home</th>
                                                    <th>Name_Away</th>
                                                    <th>Logo_Away</th>
                                                    <th>Update</th>
                                                    <th>Active</th>
                                                    <th>Inctive</th>
                                                </tr>
                                            </tfoot>
                                        </table>
                                        {/* 
                                        <div className={` flex justify-between p-6 ${totalPage === 1 ? "hidden" : ""}`}>
                                            <Pagniation api="/api/stadiums/all" totalPage={totalPage} next={next} handleNext={handleNext} handlePrevious={handlePrevious} ></Pagniation>
                                        </div> */}
                                    </div>
                                </div>
                                {loading && (<StyleCricle></StyleCricle>)}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </LayoutAdmin>
    );
};

export default Schedules;