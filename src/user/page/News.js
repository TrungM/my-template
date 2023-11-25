import React, { useEffect } from 'react';
import Layout from './layout/Layout';
import '../css/news.css';
import useActionListUI from '../../Hook/News/useActionListUI';
import { Link } from 'react-router-dom';

const News = () => {
    const { loading, listContent } = useActionListUI();
    useEffect(() => {
        document.title = "News";
    });
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
                        {!loading && listContent.length > 0 && listContent.map((items, index) => (
                            <li key={index}>
                                <Link to={`/news/${items.id}`}>
                                    <div className='post-items'>
                                        <div className='image'>
                                            <img src={items.image} alt="" />
                                        </div>
                                        <div className='content'>
                                            <div className='time'>
                                                <span>{items.createdAt}</span>
                                            </div>
                                            <div className='title'>
                                                <span>{items.title}</span>
                                            </div>
                                            <div className='decription'>
                                                <p>{items.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>

                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Layout>
    );
};

export default News;