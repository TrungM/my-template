import React from 'react';
import Layout from './layout/Layout';
import '../css/result.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Result = () => {
    return (
        <Layout>
            <div id="results">
                <header className="header">
                    <div className="wrapper">
                        <h1 className="title">Results</h1>
                    </div>
                </header>

                <div className='results-full-list'>
                    <div className='body'>
                        <div className='results-date-container'>
                            <span>Tuesday 3 October 2023</span>
                            <div className='results-date-image'>
                                <img src="/image/primierleague_2.png" alt="" />
                            </div>
                        </div>
                        <div className="results-matches-list">
                            <ul className="matchList" >
                                <li className="match-fixture">
                                    <div className='match-detail'>
                                        <div className='home'>
                                            <span>Matchester United</span>
                                            <div className='home-img'>
                                                <img src="/image/premierleague.png" alt="" />
                                            </div>
                                        </div>
                                        <div class="statistic">
                                            <div class="score">
                                                <div class="home-score">
                                                    <span>2</span>
                                                </div>
                                                <span>:</span>
                                                <div class="home-score">
                                                    <span>3</span></div>
                                            </div>
                                        </div>
                                        <div className='away'>
                                            <div className='away-img'>
                                                <img src="/image/premierleague.png" alt="" />
                                            </div>
                                            <span>Chelsea</span>
                                        </div>
                                    </div>

                                    <div className='match-stadium'>
                                        <svg className="svg" width="16" height="70" viewBox="0 0 16 11" fill="#37003c" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9846 6.419V6.88792L8.64637 10.3198V9.85089L15.9846 6.419ZM7.27558 9.09389L8.45642 9.84944V10.3098L7.27558 9.55034V9.09389ZM0 6.38323L5.05679 9.68344V10.1523L0 6.83811V6.38323ZM6.73304 9.08212V9.52922L5.33611 10.1523V9.70525L6.73304 9.08212ZM15.9846 5.2896V5.75851L8.64637 9.1904V8.72149L15.9846 5.2896ZM7.27558 7.96608L8.45642 8.72241V9.18274L7.27558 8.4233V7.96608ZM0 5.19779L5.05679 8.49724V8.96693L0 5.65189V5.19779ZM6.73304 7.89669V8.34378L5.33611 8.96691V8.51904L6.73304 7.89669ZM7.5566 0.166687L8.86323 1.02894L10.4778 0.288202L15.912 3.01601L14.2117 3.74974L16 4.61343L8.63254 7.98689L7.00484 6.88708L5.10085 7.78205L0.029439 4.45305L1.96198 3.6905L0.544977 2.84305L7.5566 0.166687ZM8.71869 1.84297L3.86501 3.82296L7.0618 5.71494L12.0467 3.61732L8.71869 1.84297ZM15.9992 3.55344V4.00054L15.621 4.16956L15.1502 3.932L15.9992 3.55344ZM0.544938 3.27306L1.26193 3.70847L0.775702 3.91177L0.54185 3.78091L0.544938 3.27306Z"></path>
                                        </svg>
                                        <span>Craven Cottage, London</span>
                                    </div>
                                    <div className='match-action'>
                                        <div className='icon'>
                                            <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                                        </div>
                                    </div>
                                </li>
                                <li className="match-fixture">
                                    <div className='match-detail'>
                                        <div className='home'>
                                            <span>Matchester United</span>
                                            <div className='home-img'>
                                                <img src="/image/premierleague.png" alt="" />
                                            </div>
                                        </div>
                                        <div class="statistic">
                                            <div class="score">
                                                <div class="home-score">
                                                    <span>2</span>
                                                </div>
                                                <span>:</span>
                                                <div class="home-score">
                                                    <span>3</span></div>
                                            </div>
                                        </div>
                                        <div className='away'>
                                            <div className='away-img'>
                                                <img src="/image/premierleague.png" alt="" />
                                            </div>
                                            <span>Chelsea</span>
                                        </div>
                                    </div>

                                    <div className='match-stadium'>
                                        <svg className="svg" width="16" height="70" viewBox="0 0 16 11" fill="#37003c" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9846 6.419V6.88792L8.64637 10.3198V9.85089L15.9846 6.419ZM7.27558 9.09389L8.45642 9.84944V10.3098L7.27558 9.55034V9.09389ZM0 6.38323L5.05679 9.68344V10.1523L0 6.83811V6.38323ZM6.73304 9.08212V9.52922L5.33611 10.1523V9.70525L6.73304 9.08212ZM15.9846 5.2896V5.75851L8.64637 9.1904V8.72149L15.9846 5.2896ZM7.27558 7.96608L8.45642 8.72241V9.18274L7.27558 8.4233V7.96608ZM0 5.19779L5.05679 8.49724V8.96693L0 5.65189V5.19779ZM6.73304 7.89669V8.34378L5.33611 8.96691V8.51904L6.73304 7.89669ZM7.5566 0.166687L8.86323 1.02894L10.4778 0.288202L15.912 3.01601L14.2117 3.74974L16 4.61343L8.63254 7.98689L7.00484 6.88708L5.10085 7.78205L0.029439 4.45305L1.96198 3.6905L0.544977 2.84305L7.5566 0.166687ZM8.71869 1.84297L3.86501 3.82296L7.0618 5.71494L12.0467 3.61732L8.71869 1.84297ZM15.9992 3.55344V4.00054L15.621 4.16956L15.1502 3.932L15.9992 3.55344ZM0.544938 3.27306L1.26193 3.70847L0.775702 3.91177L0.54185 3.78091L0.544938 3.27306Z"></path>
                                        </svg>
                                        <span>Craven Cottage, London</span>
                                    </div>
                                    <div className='match-action'>
                                        <div className='icon'>
                                            <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                                        </div>
                                    </div>
                                </li>
                                <li className="match-fixture">
                                    <div className='match-detail'>
                                        <div className='home'>
                                            <span>Matchester United</span>
                                            <div className='home-img'>
                                                <img src="/image/premierleague.png" alt="" />
                                            </div>
                                        </div>
                                        <div class="statistic">
                                            <div class="score">
                                                <div class="home-score">
                                                    <span>2</span>
                                                </div>
                                                <span>:</span>
                                                <div class="home-score">
                                                    <span>3</span></div>
                                            </div>
                                        </div>
                                        <div className='away'>
                                            <div className='away-img'>
                                                <img src="/image/premierleague.png" alt="" />
                                            </div>
                                            <span>Chelsea</span>
                                        </div>
                                    </div>

                                    <div className='match-stadium'>
                                        <svg className="svg" width="16" height="70" viewBox="0 0 16 11" fill="#37003c" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9846 6.419V6.88792L8.64637 10.3198V9.85089L15.9846 6.419ZM7.27558 9.09389L8.45642 9.84944V10.3098L7.27558 9.55034V9.09389ZM0 6.38323L5.05679 9.68344V10.1523L0 6.83811V6.38323ZM6.73304 9.08212V9.52922L5.33611 10.1523V9.70525L6.73304 9.08212ZM15.9846 5.2896V5.75851L8.64637 9.1904V8.72149L15.9846 5.2896ZM7.27558 7.96608L8.45642 8.72241V9.18274L7.27558 8.4233V7.96608ZM0 5.19779L5.05679 8.49724V8.96693L0 5.65189V5.19779ZM6.73304 7.89669V8.34378L5.33611 8.96691V8.51904L6.73304 7.89669ZM7.5566 0.166687L8.86323 1.02894L10.4778 0.288202L15.912 3.01601L14.2117 3.74974L16 4.61343L8.63254 7.98689L7.00484 6.88708L5.10085 7.78205L0.029439 4.45305L1.96198 3.6905L0.544977 2.84305L7.5566 0.166687ZM8.71869 1.84297L3.86501 3.82296L7.0618 5.71494L12.0467 3.61732L8.71869 1.84297ZM15.9992 3.55344V4.00054L15.621 4.16956L15.1502 3.932L15.9992 3.55344ZM0.544938 3.27306L1.26193 3.70847L0.775702 3.91177L0.54185 3.78091L0.544938 3.27306Z"></path>
                                        </svg>
                                        <span>Craven Cottage, London</span>
                                    </div>
                                    <div className='match-action'>
                                        <div className='icon'>
                                            <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                                        </div>
                                    </div>
                                </li>
                                <li className="match-fixture">
                                    <div className='match-detail'>
                                        <div className='home'>
                                            <span>Matchester United</span>
                                            <div className='home-img'>
                                                <img src="/image/premierleague.png" alt="" />
                                            </div>
                                        </div>
                                        <div class="statistic">
                                            <div class="score">
                                                <div class="home-score">
                                                    <span>2</span>
                                                </div>
                                                <span>:</span>
                                                <div class="home-score">
                                                    <span>3</span></div>
                                            </div>
                                        </div>
                                        <div className='away'>
                                            <div className='away-img'>
                                                <img src="/image/premierleague.png" alt="" />
                                            </div>
                                            <span>Chelsea</span>
                                        </div>
                                    </div>

                                    <div className='match-stadium'>
                                        <svg className="svg" width="16" height="70" viewBox="0 0 16 11" fill="#37003c" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9846 6.419V6.88792L8.64637 10.3198V9.85089L15.9846 6.419ZM7.27558 9.09389L8.45642 9.84944V10.3098L7.27558 9.55034V9.09389ZM0 6.38323L5.05679 9.68344V10.1523L0 6.83811V6.38323ZM6.73304 9.08212V9.52922L5.33611 10.1523V9.70525L6.73304 9.08212ZM15.9846 5.2896V5.75851L8.64637 9.1904V8.72149L15.9846 5.2896ZM7.27558 7.96608L8.45642 8.72241V9.18274L7.27558 8.4233V7.96608ZM0 5.19779L5.05679 8.49724V8.96693L0 5.65189V5.19779ZM6.73304 7.89669V8.34378L5.33611 8.96691V8.51904L6.73304 7.89669ZM7.5566 0.166687L8.86323 1.02894L10.4778 0.288202L15.912 3.01601L14.2117 3.74974L16 4.61343L8.63254 7.98689L7.00484 6.88708L5.10085 7.78205L0.029439 4.45305L1.96198 3.6905L0.544977 2.84305L7.5566 0.166687ZM8.71869 1.84297L3.86501 3.82296L7.0618 5.71494L12.0467 3.61732L8.71869 1.84297ZM15.9992 3.55344V4.00054L15.621 4.16956L15.1502 3.932L15.9992 3.55344ZM0.544938 3.27306L1.26193 3.70847L0.775702 3.91177L0.54185 3.78091L0.544938 3.27306Z"></path>
                                        </svg>
                                        <span>Craven Cottage, London</span>
                                    </div>
                                    <div className='match-action'>
                                        <div className='icon'>
                                            <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='body'>
                        <div className='results-date-container'>
                            <span>Tuesday 3 October 2023</span>
                            <div className='results-date-image'>
                                <img src="/image/primierleague_2.png" alt="" />
                            </div>
                        </div>
                        <div className="results-matches-list">
                            <ul className="matchList" >
                                <li className="match-fixture">
                                    <div className='match-detail'>
                                        <div className='home'>
                                            <span>Matchester United</span>
                                            <div className='home-img'>
                                                <img src="/image/premierleague.png" alt="" />
                                            </div>
                                        </div>
                                        <div class="statistic">
                                            <div class="score">
                                                <div class="home-score">
                                                    <span>2</span>
                                                </div>
                                                <span>:</span>
                                                <div class="home-score">
                                                    <span>3</span></div>
                                            </div>
                                        </div>
                                        <div className='away'>
                                            <div className='away-img'>
                                                <img src="/image/premierleague.png" alt="" />
                                            </div>
                                            <span>Chelsea</span>
                                        </div>
                                    </div>

                                    <div className='match-stadium'>
                                        <svg className="svg" width="16" height="70" viewBox="0 0 16 11" fill="#37003c" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9846 6.419V6.88792L8.64637 10.3198V9.85089L15.9846 6.419ZM7.27558 9.09389L8.45642 9.84944V10.3098L7.27558 9.55034V9.09389ZM0 6.38323L5.05679 9.68344V10.1523L0 6.83811V6.38323ZM6.73304 9.08212V9.52922L5.33611 10.1523V9.70525L6.73304 9.08212ZM15.9846 5.2896V5.75851L8.64637 9.1904V8.72149L15.9846 5.2896ZM7.27558 7.96608L8.45642 8.72241V9.18274L7.27558 8.4233V7.96608ZM0 5.19779L5.05679 8.49724V8.96693L0 5.65189V5.19779ZM6.73304 7.89669V8.34378L5.33611 8.96691V8.51904L6.73304 7.89669ZM7.5566 0.166687L8.86323 1.02894L10.4778 0.288202L15.912 3.01601L14.2117 3.74974L16 4.61343L8.63254 7.98689L7.00484 6.88708L5.10085 7.78205L0.029439 4.45305L1.96198 3.6905L0.544977 2.84305L7.5566 0.166687ZM8.71869 1.84297L3.86501 3.82296L7.0618 5.71494L12.0467 3.61732L8.71869 1.84297ZM15.9992 3.55344V4.00054L15.621 4.16956L15.1502 3.932L15.9992 3.55344ZM0.544938 3.27306L1.26193 3.70847L0.775702 3.91177L0.54185 3.78091L0.544938 3.27306Z"></path>
                                        </svg>
                                        <span>Craven Cottage, London</span>
                                    </div>
                                    <div className='match-action'>
                                        <div className='icon'>
                                            <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                                        </div>
                                    </div>
                                </li>
                                <li className="match-fixture">
                                    <div className='match-detail'>
                                        <div className='home'>
                                            <span>Matchester United</span>
                                            <div className='home-img'>
                                                <img src="/image/premierleague.png" alt="" />
                                            </div>
                                        </div>
                                        <div class="statistic">
                                            <div class="score">
                                                <div class="home-score">
                                                    <span>2</span>
                                                </div>
                                                <span>:</span>
                                                <div class="home-score">
                                                    <span>3</span></div>
                                            </div>
                                        </div>
                                        <div className='away'>
                                            <div className='away-img'>
                                                <img src="/image/premierleague.png" alt="" />
                                            </div>
                                            <span>Chelsea</span>
                                        </div>
                                    </div>

                                    <div className='match-stadium'>
                                        <svg className="svg" width="16" height="70" viewBox="0 0 16 11" fill="#37003c" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9846 6.419V6.88792L8.64637 10.3198V9.85089L15.9846 6.419ZM7.27558 9.09389L8.45642 9.84944V10.3098L7.27558 9.55034V9.09389ZM0 6.38323L5.05679 9.68344V10.1523L0 6.83811V6.38323ZM6.73304 9.08212V9.52922L5.33611 10.1523V9.70525L6.73304 9.08212ZM15.9846 5.2896V5.75851L8.64637 9.1904V8.72149L15.9846 5.2896ZM7.27558 7.96608L8.45642 8.72241V9.18274L7.27558 8.4233V7.96608ZM0 5.19779L5.05679 8.49724V8.96693L0 5.65189V5.19779ZM6.73304 7.89669V8.34378L5.33611 8.96691V8.51904L6.73304 7.89669ZM7.5566 0.166687L8.86323 1.02894L10.4778 0.288202L15.912 3.01601L14.2117 3.74974L16 4.61343L8.63254 7.98689L7.00484 6.88708L5.10085 7.78205L0.029439 4.45305L1.96198 3.6905L0.544977 2.84305L7.5566 0.166687ZM8.71869 1.84297L3.86501 3.82296L7.0618 5.71494L12.0467 3.61732L8.71869 1.84297ZM15.9992 3.55344V4.00054L15.621 4.16956L15.1502 3.932L15.9992 3.55344ZM0.544938 3.27306L1.26193 3.70847L0.775702 3.91177L0.54185 3.78091L0.544938 3.27306Z"></path>
                                        </svg>
                                        <span>Craven Cottage, London</span>
                                    </div>
                                    <div className='match-action'>
                                        <div className='icon'>
                                            <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                                        </div>
                                    </div>
                                </li>
                                <li className="match-fixture">
                                    <div className='match-detail'>
                                        <div className='home'>
                                            <span>Matchester United</span>
                                            <div className='home-img'>
                                                <img src="/image/premierleague.png" alt="" />
                                            </div>
                                        </div>
                                        <div class="statistic">
                                            <div class="score">
                                                <div class="home-score">
                                                    <span>2</span>
                                                </div>
                                                <span>:</span>
                                                <div class="home-score">
                                                    <span>3</span></div>
                                            </div>
                                        </div>
                                        <div className='away'>
                                            <div className='away-img'>
                                                <img src="/image/premierleague.png" alt="" />
                                            </div>
                                            <span>Chelsea</span>
                                        </div>
                                    </div>

                                    <div className='match-stadium'>
                                        <svg className="svg" width="16" height="70" viewBox="0 0 16 11" fill="#37003c" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9846 6.419V6.88792L8.64637 10.3198V9.85089L15.9846 6.419ZM7.27558 9.09389L8.45642 9.84944V10.3098L7.27558 9.55034V9.09389ZM0 6.38323L5.05679 9.68344V10.1523L0 6.83811V6.38323ZM6.73304 9.08212V9.52922L5.33611 10.1523V9.70525L6.73304 9.08212ZM15.9846 5.2896V5.75851L8.64637 9.1904V8.72149L15.9846 5.2896ZM7.27558 7.96608L8.45642 8.72241V9.18274L7.27558 8.4233V7.96608ZM0 5.19779L5.05679 8.49724V8.96693L0 5.65189V5.19779ZM6.73304 7.89669V8.34378L5.33611 8.96691V8.51904L6.73304 7.89669ZM7.5566 0.166687L8.86323 1.02894L10.4778 0.288202L15.912 3.01601L14.2117 3.74974L16 4.61343L8.63254 7.98689L7.00484 6.88708L5.10085 7.78205L0.029439 4.45305L1.96198 3.6905L0.544977 2.84305L7.5566 0.166687ZM8.71869 1.84297L3.86501 3.82296L7.0618 5.71494L12.0467 3.61732L8.71869 1.84297ZM15.9992 3.55344V4.00054L15.621 4.16956L15.1502 3.932L15.9992 3.55344ZM0.544938 3.27306L1.26193 3.70847L0.775702 3.91177L0.54185 3.78091L0.544938 3.27306Z"></path>
                                        </svg>
                                        <span>Craven Cottage, London</span>
                                    </div>
                                    <div className='match-action'>
                                        <div className='icon'>
                                            <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                                        </div>
                                    </div>
                                </li>
                                <li className="match-fixture">
                                    <div className='match-detail'>
                                        <div className='home'>
                                            <span>Matchester City</span>
                                            <div className='home-img'>
                                                <img src="/image/premierleague.png" alt="" />
                                            </div>
                                        </div>
                                        <div class="statistic">
                                            <div class="score">
                                                <div class="home-score">
                                                    <span>2</span>
                                                </div>
                                                <span>:</span>
                                                <div class="home-score">
                                                    <span>3</span></div>
                                            </div>
                                        </div>
                                        <div className='away'>
                                            <div className='away-img'>
                                                <img src="/image/premierleague.png" alt="" />
                                            </div>
                                            <span>Matchester United</span>
                                        </div>
                                    </div>

                                    <div className='match-stadium'>
                                        <svg className="svg" width="16" height="70" viewBox="0 0 16 11" fill="#37003c" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9846 6.419V6.88792L8.64637 10.3198V9.85089L15.9846 6.419ZM7.27558 9.09389L8.45642 9.84944V10.3098L7.27558 9.55034V9.09389ZM0 6.38323L5.05679 9.68344V10.1523L0 6.83811V6.38323ZM6.73304 9.08212V9.52922L5.33611 10.1523V9.70525L6.73304 9.08212ZM15.9846 5.2896V5.75851L8.64637 9.1904V8.72149L15.9846 5.2896ZM7.27558 7.96608L8.45642 8.72241V9.18274L7.27558 8.4233V7.96608ZM0 5.19779L5.05679 8.49724V8.96693L0 5.65189V5.19779ZM6.73304 7.89669V8.34378L5.33611 8.96691V8.51904L6.73304 7.89669ZM7.5566 0.166687L8.86323 1.02894L10.4778 0.288202L15.912 3.01601L14.2117 3.74974L16 4.61343L8.63254 7.98689L7.00484 6.88708L5.10085 7.78205L0.029439 4.45305L1.96198 3.6905L0.544977 2.84305L7.5566 0.166687ZM8.71869 1.84297L3.86501 3.82296L7.0618 5.71494L12.0467 3.61732L8.71869 1.84297ZM15.9992 3.55344V4.00054L15.621 4.16956L15.1502 3.932L15.9992 3.55344ZM0.544938 3.27306L1.26193 3.70847L0.775702 3.91177L0.54185 3.78091L0.544938 3.27306Z"></path>
                                        </svg>
                                        <span>Craven Cottage, London</span>
                                    </div>
                                    <div className='match-action'>
                                        <div className='icon'>
                                            <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>



        </Layout>
    );
};

export default Result;