import React, { Fragment, useEffect, useState } from 'react';
import { useSideBar } from '../context/showSideBarContext';
import useActionListFullSeason from '../Hook/Season/useActionListFull';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useActionDelete from '../Hook/Ranking/useActionDelete';
import useActionDeleteMatch from '../Hook/Matches/useActionDeleteMatch';
import useActionUpdateActiveClub from '../Hook/Clubs/useActionUpdateActiveClub';
import useActionResetActiveClub from '../Hook/Clubs/useActionResetActiveClub';
import useActionCountRefClub from '../Hook/Clubs/useActionCountRefClub';
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
const Season = () => {
    const { showfull, countActive } = useSideBar();
    const { listContent,
        loading, } = useActionListFullSeason("/api/season/listSeason")
    const [ seasonID, setSeasonID ] = useState(0);

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

                <section className={`content ${showfull ? "ml-1" : " ml-20"} `}>
                    <div className="container-fluid">
                        <div >
                            {!loading && listContent.length > 0 && listContent.map((items, index) => (
                                <div className="block" key={index}>
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
                            ))}
                        </div>
                        {loading && (<StyleCricle></StyleCricle>)}
                    </div>
                </section>
            </div>



        </LayoutAdmin>
    );
};

export default Season;