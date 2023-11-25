import React from 'react';
import Layout from './layout/Layout';
import '../css/fixture.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useActionListUI from '../../Hook/Matches/useActionListUI';
import moment from 'moment';
import { Link } from 'react-router-dom';
const Fixture = () => {

    const { loading, listContent, uniqueTime } = useActionListUI();
    return (
        <Layout>
            <div id="fixtures">
                <header className="header">
                    <div className="wrapper">
                        <h1 className="title">Fixtures</h1>
                    </div>
                </header>

                <div className='fixtures-full-list'>
                    {!loading && uniqueTime.length > 0 && uniqueTime.map((time, indexTime) => (
                        <div className='body' key={indexTime}>
                            <div className='fixtures-date-container' >
                                <span>{moment(time).format('dddd D MMMM YYYY')}</span>
                                <div className='fixtures-date-image'>
                                    <img src="/image/primierleague_2.png" alt="" />
                                </div>
                            </div>
                            <div className="fixtures-matches-list">
                                <ul className="matchList" >
                                    {!loading && listContent.length > 0 && listContent.map((items, index) => {
                                        if (items.matchDay === time) {
                                            return <li className="match-fixture" key={index + 1}>
                                                <div className={` absolute left-3 py-3 flex-shrink-0 ${items.status === 0 ? '' : 'hidden'}`}>
                                                    <span className='text-red-500 text-[1rem] font-semibold'>{items.timeHappen}</span>
                                                </div>
                                                <div className='match-detail'>
                                                    <div className='home'>
                                                        <span>{items.clubHome?.clubName.name}</span>
                                                        <div className='home-img'>
                                                            <img src={items.clubHome?.clubName.image} alt="" />
                                                        </div>
                                                    </div>
                                                    {
                                                        items.status === 0 ?
                                                            <div className='number'>
                                                                <span>{items.resultClubHome ?? 0} : {items.resultClubAway ?? 0}</span>
                                                            </div>
                                                            :
                                                            <div className='timer'>
                                                                <span>{items.matchTime}</span>
                                                            </div>
                                                    }
                                                    <div className='away'>
                                                        <div className='away-img'>
                                                            <img src={items.clubAway?.clubName.image} alt="" />
                                                        </div>
                                                        <span>{items.clubAway?.clubName.name}</span>
                                                    </div>
                                                </div>
                                                <div className='match-stadium'>
                                                    <svg className="svg" width="16" height="70" viewBox="0 0 16 11" fill="#37003c" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M15.9846 6.419V6.88792L8.64637 10.3198V9.85089L15.9846 6.419ZM7.27558 9.09389L8.45642 9.84944V10.3098L7.27558 9.55034V9.09389ZM0 6.38323L5.05679 9.68344V10.1523L0 6.83811V6.38323ZM6.73304 9.08212V9.52922L5.33611 10.1523V9.70525L6.73304 9.08212ZM15.9846 5.2896V5.75851L8.64637 9.1904V8.72149L15.9846 5.2896ZM7.27558 7.96608L8.45642 8.72241V9.18274L7.27558 8.4233V7.96608ZM0 5.19779L5.05679 8.49724V8.96693L0 5.65189V5.19779ZM6.73304 7.89669V8.34378L5.33611 8.96691V8.51904L6.73304 7.89669ZM7.5566 0.166687L8.86323 1.02894L10.4778 0.288202L15.912 3.01601L14.2117 3.74974L16 4.61343L8.63254 7.98689L7.00484 6.88708L5.10085 7.78205L0.029439 4.45305L1.96198 3.6905L0.544977 2.84305L7.5566 0.166687ZM8.71869 1.84297L3.86501 3.82296L7.0618 5.71494L12.0467 3.61732L8.71869 1.84297ZM15.9992 3.55344V4.00054L15.621 4.16956L15.1502 3.932L15.9992 3.55344ZM0.544938 3.27306L1.26193 3.70847L0.775702 3.91177L0.54185 3.78091L0.544938 3.27306Z"></path>
                                                    </svg>
                                                    <span>{items.stadiumId?.name}</span>
                                                </div>
                                                <div className='match-action'>
                                                    <div className='button-view'>
                                                        <Link to={`/match/${items.id}`}><button className="hover:text-purple-900">Match Detail</button></Link>
                                                    </div>
                                                    <div className='icon'>
                                                        <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                                                    </div>
                                                </div>
                                            </li>
                                        }
                                    })}
                                </ul>
                            </div>
                        </div>
                    ))}
                    <div className={`end-season  flex items-center justify-center ${listContent.length < 0 ? 'block' : 'hidden'} `}>
                        <p className='text-base text-red-500 '>The season is over. Please return later . Thanks</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Fixture;