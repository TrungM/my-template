import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment, useEffect, useState } from 'react';
import Layout from './layout/Layout';
import '../css/main.css';

const Main = () => {

    const [showClubs, setShowClubs] = useState(false);

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
                        <li>
                            <div className='logo'>
                                <img src="/image/premierleague.png" alt="" />
                            </div>
                            <div className='name'>
                                <span>Matchester United</span>
                            </div>
                        </li>
                        <li>
                            <div className='logo'>
                                <img src="/image/premierleague.png" alt="" />
                            </div>
                            <div className='name'>
                                <span>Brighton</span>
                            </div>
                        </li>
                        <li>
                            <div className='logo'>
                                <img src="/image/premierleague.png" alt="" />
                            </div>
                            <div className='name'>
                                <span>Matchester United</span>
                            </div>
                        </li>
                        <li>
                            <div className='logo'>
                                <img src="/image/premierleague.png" alt="" />
                            </div>
                            <div className='name'>
                                <span>Matchester United</span>
                            </div>
                        </li>

                        <li>
                            <div className='logo'>
                                <img src="/image/premierleague.png" alt="" />
                            </div>
                            <div className='name'>
                                <span>Matchester United</span>
                            </div>
                        </li>
                        <li>
                            <div className='logo'>
                                <img src="/image/premierleague.png" alt="" />
                            </div>
                            <div className='name'>
                                <span>Matchester United</span>
                            </div>
                        </li>

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
                                    <span>All</span>
                                </li>
                                <li className='item-loading'>
                                    <span>Loading</span>
                                </li>
                                <li className='item-finish'>
                                    <span>Finished</span>
                                </li>
                            </ul>
                            <div className='week'>
                                <div className='week-content'>
                                    <span>Matchweek 3</span>
                                </div>
                            </div>
                        </div>

                        <div className='matches'>
                            <div className='matches-items'>
                                <div className='feature'>
                                    <div className='icon'>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" /></svg>
                                    </div>
                                    <div className='time'>
                                        <span>86'</span>
                                    </div>
                                </div>
                                <div className='info'>
                                    <div className='info-homeclub'>
                                        <div className='name'>
                                            <span>MNU</span>
                                        </div>
                                        <div className='logo'>
                                            <img src="/image/premierleague.png" alt="" />
                                        </div>
                                    </div>
                                    <div className='statistic'>
                                        <div className='score'>
                                            <div className='home-score'>
                                                <span>2</span>
                                            </div>
                                            <span>:</span>
                                            <div className='home-score'>
                                                <span>3</span>
                                            </div>
                                        </div>
                                        <div className='time hidden'>
                                            <span>12:30</span>
                                        </div>
                                    </div>
                                    <div className='info-awayclub'>
                                        <div className='logo'>
                                            <img src="/image/premierleague.png" alt="" />
                                        </div>
                                        <div className='name'>
                                            <span>BRI</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='detail'>
                                    <FontAwesomeIcon icon="fa-solid fa-circle-info" />
                                </div>
                            </div>
                            <div className='matches-items'>
                                <div className='feature'>
                                    <div className='icon'>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" /></svg>                                </div>
                                    <div className='time'>
                                        <span>86'</span>
                                    </div>
                                </div>
                                <div className='info'>
                                    <div className='info-homeclub'>
                                        <div className='name'>
                                            <span>MNU</span>
                                        </div>
                                        <div className='logo'>
                                            <img src="/image/premierleague.png" alt="" />
                                        </div>
                                    </div>
                                    <div className='statistic'>
                                        <div className='score'>
                                            <div className='home-score'>
                                                <span>2</span>
                                            </div>
                                            <span>:</span>
                                            <div className='home-score'>
                                                <span>3</span>
                                            </div>
                                        </div>
                                        <div className='time hidden'>
                                            <span>12:30</span>
                                        </div>
                                    </div>
                                    <div className='info-awayclub'>
                                        <div className='logo'>
                                            <img src="/image/premierleague.png" alt="" />
                                        </div>
                                        <div className='name'>
                                            <span>BRI</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='detail'>
                                    <FontAwesomeIcon icon="fa-solid fa-circle-info" />
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <section className='home-posts'>
                    <div className='trending-new'>
                        <div className='title-trending-new'>
                            <span>Trending New</span>
                            <img src="/image/flame-icon.png" alt="" />
                        </div>

                        <div className='post-trending-new'>
                            <div className='image ml-2 mr-2'>
                                <img src="/image/background.jpg" alt="" />
                            </div>
                            <div className='title'>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</span>
                            </div>
                            <div className='created_at'>
                                <span>23/09/2034</span>
                            </div>
                        </div>
                    </div>

                    <div className='list-post'>
                        {/* <div className='item'>
                            <div className='thumbnail'>
                                <img src='https://images.unsplash.com/photo-1682687220866-c856f566f1bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' alt='' />
                            </div>
                            <div className='content'>
                                <div className='title'>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsumLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                                </div>
                                <div className='created_at'>
                                    <span>23/09/2034</span>
                                </div>
                            </div>
                        </div> */}
                        <div className='item'>
                            <div className='thumbnail'>
                                <img src='https://images.unsplash.com/photo-1682687220866-c856f566f1bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' alt='' />
                            </div>
                            <div className='content'>
                                <div className='title'>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsumLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                                </div>
                                <div className='created_at'>
                                    <span>23/09/2034</span>
                                </div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='thumbnail'>
                                <img src='https://images.unsplash.com/photo-1682687220866-c856f566f1bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' alt='' />
                            </div>
                            <div className='content'>
                                <div className='title'>
                                    <p>Loley</p>
                                </div>
                                <div className='created_at'>
                                    <span>23/09/2034</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>

    );
};

export default Main;