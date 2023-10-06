import React, { Fragment, useEffect, useState } from 'react';
import { useSideBar } from '../context/showSideBarContext';
import styled from 'styled-components';
import useActionListActive from '../Hook/Clubs/useActionListActive';
import { Link, useParams } from 'react-router-dom';
import useActionListRefClub from '../Hook/Clubs/useActionListRefClub';
import LayoutAdmin from './LayoutAdmin';



const StyleBorder = styled.div`
 
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
background-color: #C9C19F;
border-radius: 2%;
`
const StyleImg = styled.img`
 width: 250px;
border-radius: 50px;
padding: 1rem 1rem;
`
const ClubsActive = () => {
    const { showfull } = useSideBar();
    const { id } = useParams();
    const [getID, setID] = useState();
    // const { listContentClubActive,
    //     loading,
    // } = useActionListActive("/api/clubs/activeAll");

    const { listContent,
        loading, } = useActionListRefClub("/api/clubs/listRefClubs");

    useEffect(() => {
        setID(id);
        document.title = "Clubs for Season";
    }, [id])

    return (
        <LayoutAdmin>
            <div className={`content-wrapper   ${showfull ? "ml-0" : " "} `}>
                <section className={`content-header     ${showfull ? "ml-1" : " ml-14 "} `}>
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>List Clubs For New Season</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="*">Home</a></li>
                                    <li className="breadcrumb-item active">List Clubs For New Season</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={`content ${showfull ? "ml-1" : " ml-14 "} `}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="card card-primary">
                                    <div className="card-header">
                                        <div className='flex gap-3'>
                                            <Link to={`/admin/table/${getID}`}><button type="button" className="btn btn-secondary">Table</button>
                                            </Link>
                                            <Link to={`/admin/schedules/${getID}`}><button type="button" className="btn btn-danger">Matches</button></Link>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="row gap-6 ">
                                            {!loading && listContent.length > 0 && listContent.map((items, index) => {

                                                if ( parseInt(items.season.id) === parseInt(getID)) {
                                                    return <StyleBorder className="col-sm-2" key={index}>
                                                        {/* <a href="/#" > */}
                                                        <StyleImg src={items.clubID.image} alt="white sample" />
                                                        {/* </a> */}
                                                    </StyleBorder>
                                                }

                                            })}
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

export default ClubsActive;