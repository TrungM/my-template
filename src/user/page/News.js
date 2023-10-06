import React from 'react';
import Layout from './layout/Layout';
import '../css/news.css';

const News = () => {
    return (
        <Layout>
            <div id="news">
                <header className="header">
                    <div className="wrapper">
                        <h1 className="title">News</h1>
                    </div>
                </header>
                <div className='body'>
                    <ul className='list-post'>
                        <li>
                            <div className='post-items'>
                                <div className='image'>
                                    <img src="/image/Fulham-Chelsea-preview.webp" alt="" />
                                </div>
                                <div className='content'>
                                    <div className='title'>
                                        <span>Fulham v Chelsea: All you need to know</span>
                                    </div>
                                    <div className='decription'>
                                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='post-items'>
                                <div className='image'>
                                    <img src="/image/Fulham-Chelsea-preview.webp" alt="" />
                                </div>
                                <div className='content'>
                                    <div className='title'>
                                        <span>Fulham v Chelsea: All you need to know</span>
                                    </div>
                                    <div className='decription'>
                                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='post-items'>
                                <div className='image'>
                                    <img src="/image/Fulham-Chelsea-preview.webp" alt="" />
                                </div>
                                <div className='content'>
                                    <div className='title'>
                                        <span>Fulham v Chelsea: All you need to know</span>
                                    </div>
                                    <div className='decription'>
                                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='post-items'>
                                <div className='image'>
                                    <img src="/image/Fulham-Chelsea-preview.webp" alt="" />
                                </div>
                                <div className='content'>
                                    <div className='title'>
                                        <span>Fulham v Chelsea: All you need to know</span>
                                    </div>
                                    <div className='decription'>
                                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='post-items'>
                                <div className='image'>
                                    <img src="/image/Fulham-Chelsea-preview.webp" alt="" />
                                </div>
                                <div className='content'>
                                    <div className='title'>
                                        <span>Fulham v Chelsea: All you need to know</span>
                                    </div>
                                    <div className='decription'>
                                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>

                </div>
            </div>
        </Layout>
    );
};

export default News;