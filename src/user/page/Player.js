import React, { useEffect } from 'react';
import Layout from './layout/Layout';
import '../css/player.css';
import useActionListUI from '../../Hook/Players/useActionListUI';

const Player = () => {
    const { loading, listContent } = useActionListUI();
    useEffect(() => {
        document.title = "News";
    });
    return (
        <Layout>
            <div id="players">
                <header className="header">
                    <div className="wrapper">
                        <h1 className="title">Players</h1>
                    </div>
                </header>

                <div className="body">
                    <div className="body-wrapper">
                        <div className="table-player">
                            <table>
                                <thead>
                                    <tr>
                                        <th className="league-player__pos-header w-80" scope="col">
                                            <div className="league-player__thFull">
                                                <span>Player</span>
                                            </div>
                                        </th>
                                        <th className="league-player__pos-header" scope="col">
                                            <div className="league-player__thFull">
                                                <span>Position</span>
                                            </div>
                                        </th>
                                        <th className="league-player__pos-header" scope="col">
                                            <div className="league-player__thFull">
                                                <span>Nationality</span>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                {!loading && listContent.length > 0 && listContent.map((items, index) => (
                                    <tr key={index}>
                                        <td className='player__img w-80'>
                                            <a href='/' >
                                                <img className="img player__name-image" src={items.image}alt="" />
                                                <span>{items.name}</span>
                                            </a>
                                        </td>
                                        <td className="player__position">{items.positionId.position}</td>
                                        <td className="player__nationality">
                                            <span className="player__nationality_span">
                                                <span className="player__flag">
                                                    <img className="player__flag-icon" src={items.nationality.image} alt="" />
                                                </span>
                                                <span className="player__country">{items.nationality.name}</span>
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </Layout>
    );
};

export default Player;