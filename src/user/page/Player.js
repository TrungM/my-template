import React from 'react';
import Layout from './layout/Layout';
import '../css/player.css';

const Player = () => {
    return (
        <Layout>
            <div id="players">
                <header className="header">
                    <div className="wrapper">
                        <h1 className="title">Players</h1>
                    </div>
                </header>
            </div>
        </Layout>
    );
};

export default Player;