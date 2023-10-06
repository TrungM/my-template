import React, { Fragment, useEffect, useState } from 'react';
import { useSideBar } from '../context/showSideBarContext';
import useActionListFullRanking from '../Hook/Ranking/useActionListFullRanking';
import { Link, useParams } from 'react-router-dom';
import Navigation from './Navigation';
import SideBar from './SideBar';
import Footer from './Footer';
import LayoutAdmin from './LayoutAdmin';

const Table = () => {
    const { showfull } = useSideBar();
    const { listContentClub, loading } = useActionListFullRanking("/api/table/list");
    const { id } = useParams();
    const [getID, setID] = useState();

    useEffect(() => {
        setID(id);
        document.title = "Tables";
    }, [id])
    return (
        <LayoutAdmin>
            <div className={`content-wrapper   ${showfull ? "ml-0" : " "} `}>
                <section className={`content-header     ${showfull ? "ml-1" : " ml-14 "} `}>
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Tables</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="*">Home</a></li>
                                    <li className="breadcrumb-item active">Tables</li>
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
                                    <div className="card-header">
                                        <h3 className="card-title">The table </h3>
                                    </div>
                                    <div className="card-body">
                                        <table id="example2" className="table table-bordered table-hover text-center">
                                            <thead>
                                                <tr>
                                                    <th>Position</th>
                                                    <th>Logo</th>
                                                    <th>Name</th>
                                                    <th>Played</th>
                                                    <th>Won</th>
                                                    <th>Draw</th>
                                                    <th>Lose</th>
                                                    <th>GF</th>
                                                    <th>GA</th>
                                                    <th>GD</th>
                                                    <th>Points</th>
                                                    <th>Next</th>
                                                    <th>Action</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {!loading && listContentClub.length > 0 && listContentClub.map((items, index) => {

                                                    if (parseInt(items.season) === parseInt(getID)) {
                                                        return <tr key={items.id}>
                                                            {/* <td style={{ width: "10%" }}><img src={items.image} alt="" width="100%" /> </td> */}
                                                            {/* <td>{items.position}</td> */}
                                                            <td>{items.position === 0 ? null : items.position}</td>
                                                            <td style={{ width: "10%" }}><img src={items.clubName.image} alt="" width="100%" /> </td>
                                                            <td>{items.clubName.name}</td>
                                                            <td>{items.player == null ? "0" : items.player}</td>
                                                            <td>{items.won}</td>
                                                            <td>{items.draw}</td>
                                                            <td>{items.lose}</td>
                                                            <td>{items.gf}</td>
                                                            <td>{items.gd}</td>
                                                            <td>{items.ga}</td>
                                                            <td>{items.points}</td>
                                                            <td>{items.nextmatch}</td>
                                                            <td> <Link to={`/edit-clubs/${items.codeClub}`}><button type="button" className="btn btn-outline-success">Update</button></Link>
                                                            </td>
                                                        </tr>
                                                    }

                                                })}
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th>Position</th>
                                                    <th>Logo</th>
                                                    <th>Name</th>
                                                    <th>Played</th>
                                                    <th>Won</th>
                                                    <th>Draw</th>
                                                    <th>Lose</th>
                                                    <th>GF</th>
                                                    <th>GA</th>
                                                    <th>GD</th>
                                                    <th>Points</th>
                                                    <th>Next matches</th>
                                                    <th>Action</th>
                                                </tr>
                                            </tfoot>
                                        </table>
                                        {/* 
                                        <div className={` flex justify-between p-6 ${totalPage === 1 ? "hidden" : ""}`}>
                                            <Pagniation api="/api/stadiums/all" totalPage={totalPage} next={next} handleNext={handleNext} handlePrevious={handlePrevious} ></Pagniation>
                                        </div> */}



                                    </div>


                                </div>
                                {/* {loading && (<StyleCricle></StyleCricle>)} */}


                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </LayoutAdmin>
    );
};

export default Table;