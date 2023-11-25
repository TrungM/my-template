import React, { Fragment, useEffect, useState } from 'react';
import { useSideBar } from '../context/showSideBarContext';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import useActionCountActive from '../Hook/Matches/useActionCountActive';
import useActionPost from '../Hook/Matches/useActionPost';
import useActionListFullRanking from '../Hook/Ranking/useActionListFullRanking';
import useActionListLeg from '../Hook/Matches/useActionListLeg';
import useActionCountLeg from '../Hook/Matches/useActionCountLeg';
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
const ReturnLeg = () => {
    const { showfull } = useSideBar();


    const { countActive } = useActionCountActive("/api/match/countMatches");
    const { id } = useParams();
    const [getID, setID] = useState();

    const { listContentClubActive } = useActionListFullRanking("/api/table/list");
    const { handleCreate } = useActionPost();
    const { listContent, loading } = useActionListLeg("/api/match/listLeg", 'return', parseInt(id))
    const { countLeg,
        setcountLeg } = useActionCountLeg("/api/match/countLeg", 'return', parseInt(id))

    useEffect(() => {
        setID(id);
        document.title = "The first leg ";
    }, [id, listContent])

    return (
        <LayoutAdmin>
            <div className={`content-wrapper   ${showfull ? "ml-0" : " "} `}>
                <section className={`content-header     ${showfull ? "ml-1" : " ml-14 "} `}>
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>List Matches</h1>
                                <div className='flex gap-5'>
                                    <Link to={`/admin/schedules/${getID}`}><button type="button" className="btn btn-primary" >Match</button>
                                    </Link>
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
                                    <div className="card-header flex justify-between">
                                        <h3 className="card-title"> <span>The return leg list </span> matches of the season</h3>
                                        <h3 className="card-title translate-x-56"> <span>{countLeg == 0 ? 0 : countLeg}</span>/380 matches</h3>
                                    </div>
                                    <div className='flex justify-center'>
                                    </div>
                                    <div className="card-body">
                                        <table id="example2" className="table table-bordered table-hover text-center">
                                            <thead>
                                                <tr>
                                                    <th>Round</th>
                                                    <th>Logo_Home</th>
                                                    <th>Name_Home</th>
                                                    <th>Name_Away</th>
                                                    <th>Logo_Away</th>
                                                    <th>Update</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {!loading && listContent.length > 0 && listContent.map((items, index) => (
                                                    <tr key={items.id}>
                                                        <td>{items.roundmatch}</td>
                                                        <td style={{ width: "10%" }}><img src={items.clubHome.clubName.image} alt="" width="100%" /> </td>
                                                        <td>{items.clubHome.clubName.name}</td>
                                                        <td>{items.clubAway.clubName.name}</td>
                                                        <td style={{ width: "10%" }}><img src={items.clubAway.clubName.image} alt="" width="100%" /> </td>
                                                        <td> <Link to={`/admin/edit-match/${items.id}`}><button type="button" className="btn btn-outline-success">Update</button></Link>
                                                        </td>
                                                    </tr>

                                                ))}
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th>Round</th>
                                                    <th>Logo_Home</th>
                                                    <th>Name_Home</th>
                                                    <th>Name_Away</th>
                                                    <th>Logo_Away</th>
                                                    <th>Update</th>
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

    )
};

export default ReturnLeg;