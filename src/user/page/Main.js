import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment, useEffect, useState } from 'react';
import Layout from './layout/Layout';
import '../css/main.css';
import useActionListClubsUI from '../../Hook/Clubs/useActionListClubsUI';
import useActionListNewsUI from '../../Hook/News/useActionListNewsUI';
import { Link } from 'react-router-dom';
import useActionMatchHomePage from '../../Hook/Matches/useActionMatchHomePage';

const Main = () => {

    const [showClubs, setShowClubs] = useState(false);

    const { loading, listContent } = useActionListClubsUI();
    const { loadingNews, listContentNews } = useActionListNewsUI();

    const { loadingMatch,
        listMatchWeek, getMatchWeek } = useActionMatchHomePage();

    const handleClickShowTabClub = () => {
        setShowClubs(!showClubs);
    }

    useEffect(() => {
        document.title = 'Home'
    })
    return (
        <Layout>
            <div id='home'>
                <section className={`home-clubs`}>
                    <div className={`title-1`} onClick={handleClickShowTabClub}>
                        <span>Clubs Site</span>
                        <FontAwesomeIcon icon="fa-solid fa-chevron-down" className={`cursor-pointer p-1 ${showClubs ? 'transition-transform rotate-180 duration-300' : 'duration-300'}`} />
                    </div>
                    <ul className={`list-clubs ${showClubs ? 'hidden duration-100 ' : ''} `}>
                        {!loading && listContent.length > 0 && listContent.map((items, index) => (
                            <li key={index}>
                                <div className='logo'>
                                    <img src={items.clubID?.image} alt="" />
                                </div>
                                <div className='name'>
                                    <span>{items.clubID?.name} </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>
                <section className='home-main'>
                    <div className='banner'>
                        <div className='banner-image'>
                            <img src="/image/background.jpg" alt="" />
                        </div>
                    </div>

                    <div className='main'>
                        <div className='event-action'>
                            <ul className='items-action'>
                                <li className='item-all'>
                                    <span>The matches follow week</span>
                                </li>
                                {/* <li className='item-loading'>
                                    <span>Loading</span>
                                </li>
                                <li className='item-finish'>
                                    <span>Finished</span>
                                </li> */}
                            </ul>
                            <div className='week'>
                                <div className='week-content'>
                                    <span>Matchweek {getMatchWeek}</span>
                                </div>
                            </div>
                        </div>

                        <div className='matches mb-3'>
                            {!loadingMatch && listMatchWeek.length > 0 && listMatchWeek.map((items, index) => (
                                <div className='matches-items' key={index}>
                                    <div className='feature'>
                                        <div className={` absolute left-1 time  ${items.status === 0 ? '' : 'hidden'}`}>
                                            <span>{items.timeHappen}</span>
                                        </div>
                                    </div>
                                    <div className='info'>
                                        <div className='info-homeclub'>
                                            <div className='name'>
                                                <span>{items?.clubHome.clubName.codeClub}</span>
                                            </div>
                                            <div className='logo'>
                                                <img src={items?.clubHome.clubName.image} alt="" />
                                            </div>
                                        </div>
                                        <div className='statistic'>
                                            {
                                                items.status === 0 ||  items.status === 1 ?
                                                    <div className='score'>
                                                        <div className='home-score'>
                                                            <span>{items.resultClubHome ?? 0}</span>
                                                        </div>
                                                        <span>:</span>
                                                        <div className='home-score'>
                                                            <span>{items.resultClubAway ?? 0}</span>
                                                        </div>
                                                    </div>
                                                    :
                                                    <div className='time'>
                                                        <span>{items?.matchTime}</span>
                                                    </div>
                                            }
                                        </div>
                                        <div className='info-awayclub'>
                                            <div className='logo'>
                                                <img src={items?.clubAway.clubName.image} alt="" />
                                            </div>
                                            <div className='name'>
                                                <span>{items?.clubAway.clubName.codeClub}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='detail'>
                                        <Link to={`/match/${items.id}`} className='hover:text-white'>
                                            <FontAwesomeIcon icon="fa-solid fa-circle-info" />
                                        </Link>
                                    </div>
                                </div>
                            ))}


                        </div>
                    </div>

                </section>

                <section className='home-posts'>
                    <div className='trending-new'>
                        <div className='title-trending-new'>
                            <span>Trending New</span>
                            <img src="/image/flame-icon.png" alt="" />
                        </div>
                    </div>

                    <div className='list-post'>
                        {!loadingNews && listContentNews.length > 0 && listContentNews.map((items, index) => (
                            <div className='item' key={index}>
                                <Link to={`/news/${items.id}`}>
                                    <div className='thumbnail'>
                                        <img src={items.image} alt="" />
                                    </div>
                                    <div className='content'>
                                        <div className='title'>
                                            <p>{items.title}</p>
                                        </div>
                                        <div className='created_at'>
                                            <span>{items.createdAt}</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </Layout>

    );
};

export default Main;