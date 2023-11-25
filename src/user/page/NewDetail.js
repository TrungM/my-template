import React from 'react';
import Layout from './layout/Layout';
import '../css/newDetail.css';
import useActionGetOneNewsUI from '../../Hook/News/useActionGetOneNewsUI';
import { useParams } from 'react-router-dom';
const NewDetail = () => {
    const { id } = useParams();

    const { content } = useActionGetOneNewsUI(id);

    return (
        <Layout>
            <div id="newDetail">
                <header className="header">
                    <div className="wrapper">
                        <h1 className="title">{content.title}</h1>
                    </div>
                </header>
                <div className='content' dangerouslySetInnerHTML={{ __html: content.content }}>                    
                </div>
            </div>
        </Layout>
    );
};

export default NewDetail;