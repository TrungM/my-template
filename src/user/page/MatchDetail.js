import React, { useEffect, useRef, useState } from 'react';
import Layout from './layout/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from 'react-router-dom';
import useActionGetOne from '../../Hook/useActionGetOne';

const MatchDetail = () => {

    const { id } = useParams();
    const { GetOne } = useActionGetOne("/api/match/list");

    const [match, setMatch] = useState(null);
    const handleGetMatch = useRef({});
    handleGetMatch.current = async (id) => {
        const items = await GetOne(id);
        setMatch(items);
    }

    useEffect(() => {
        handleGetMatch.current(id);
        document.title = "Match"
    }, [id])

    return (
        <Layout>
            <div className='matchDetail'>
                <header className="p-2 text-center">
                    <h2 className="text-4xl font-premier-sans leading-loose font-bold  text-default opacity-95">Matchweek <strong className='text-5xl text-default font-semibold'>{match?.roundmatch}</strong></h2>
                </header>
                <section className='bg-default rounded-md p-6 mt-4 '>
                    <div className='flex gap-3 justify-center flex-col bg-primary-gradient rounded-sm shadow-sm'>
                        <ul className='flex gap-3 justify-center py-3 '>
                            <li className='flex items-center'>
                                <div className='w-5 h-5'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="1em" viewBox="0 0 448 512" fill='#37003c'><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z" /></svg>                                </div>
                                <span className='text-default text-[0.6rem]'>{match?.matchDay}</span>
                            </li>
                            <li className='flex items-center'>
                                <div className='w-5 h-5'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="1em" viewBox="0 0 512 512" fill='#37003c'><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" /></svg>                                </div>
                                <span className='text-default text-[0.6rem]'>Kick Off:{match?.matchTime}</span>
                            </li>
                            <li className='flex items-center'>
                                <div className='w-5 h-5'>
                                    <svg className="svg" width="16" height="1em" viewBox="0 0 16 11" fill="#37003c" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.9846 6.419V6.88792L8.64637 10.3198V9.85089L15.9846 6.419ZM7.27558 9.09389L8.45642 9.84944V10.3098L7.27558 9.55034V9.09389ZM0 6.38323L5.05679 9.68344V10.1523L0 6.83811V6.38323ZM6.73304 9.08212V9.52922L5.33611 10.1523V9.70525L6.73304 9.08212ZM15.9846 5.2896V5.75851L8.64637 9.1904V8.72149L15.9846 5.2896ZM7.27558 7.96608L8.45642 8.72241V9.18274L7.27558 8.4233V7.96608ZM0 5.19779L5.05679 8.49724V8.96693L0 5.65189V5.19779ZM6.73304 7.89669V8.34378L5.33611 8.96691V8.51904L6.73304 7.89669ZM7.5566 0.166687L8.86323 1.02894L10.4778 0.288202L15.912 3.01601L14.2117 3.74974L16 4.61343L8.63254 7.98689L7.00484 6.88708L5.10085 7.78205L0.029439 4.45305L1.96198 3.6905L0.544977 2.84305L7.5566 0.166687ZM8.71869 1.84297L3.86501 3.82296L7.0618 5.71494L12.0467 3.61732L8.71869 1.84297ZM15.9992 3.55344V4.00054L15.621 4.16956L15.1502 3.932L15.9992 3.55344ZM0.544938 3.27306L1.26193 3.70847L0.775702 3.91177L0.54185 3.78091L0.544938 3.27306Z"></path>
                                    </svg>
                                </div>
                                <span className='text-default text-[0.6rem]'>{match?.stadiumId.name}</span>
                            </li>
                            <li className='flex items-center'>
                                <div className='w-5 h-5'>
                                    <svg fill="#37003c" width="16" height="1em" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330" ><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_459_"> <path id="XMLID_460_" d="M215,110.001c-14.691,0-28.502,5.721-38.89,16.108c-10.388,10.388-16.109,24.2-16.109,38.891 c0,14.691,5.721,28.503,16.109,38.891C186.498,214.279,200.309,220,215,220c14.691,0,28.503-5.721,38.891-16.109 c21.444-21.443,21.444-56.336,0-77.782C243.503,115.722,229.691,110.001,215,110.001z M232.679,182.678 C227.956,187.4,221.679,190,215,190c-6.678,0-12.956-2.601-17.677-7.322c-4.722-4.722-7.322-11-7.322-17.678 s2.601-12.956,7.322-17.678c4.722-4.722,11-7.321,17.677-7.321c6.678,0,12.957,2.6,17.678,7.321 C242.426,157.07,242.426,172.931,232.679,182.678z"></path> <path id="XMLID_463_" d="M306.191,95.023l19.416-19.416c5.857-5.858,5.857-15.355,0-21.213c-5.858-5.859-15.355-5.857-21.213,0 l-19.415,19.415C265.579,58.887,241.31,50,215,50H15C6.716,50,0,56.716,0,65v60c0,7.15,5.047,13.307,12.058,14.709l88.196,17.639 C100.085,159.897,100,162.45,100,165c0,63.411,51.589,115,115,115s115-51.589,115-115C330,138.691,321.113,114.422,306.191,95.023z M215,250c-46.869,0-85-38.131-85-85c0-5.597,0.552-11.212,1.641-16.69c1.613-8.118-3.654-16.009-11.771-17.633L30,112.703V80h185 c46.869,0,85,38.131,85,85S261.869,250,215,250z"></path> </g> </g></svg>
                                </div>

                                <span className='text-default text-[0.6rem]'>Ref: {match?.referees?.name}</span>
                            </li>
                        </ul>
                        <div className='flex justify-between'>
                            <div className='p-4 w-96 ml-9'>
                                <div className='flex gap-3 items-center'>
                                    <div className='w-32 h-32'>
                                        <img src={match?.clubHome.clubName.image} alt="" className='p-4' />
                                    </div>
                                    <span className='font-semibold text-default text-[1.3rem]'>{match?.clubHome.clubName.name}</span>
                                </div>
                                <div className='p-4'>
                                    <ul>
                                        <li className='flex gap-2 items-center p-2'>
                                            <div >
                                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                                    <path d="M417.3 360.1l-71.6-4.8c-5.2-.3-10.3 1.1-14.5 4.2s-7.2 7.4-8.4 12.5l-17.6 69.6C289.5 445.8 273 448 256 448s-33.5-2.2-49.2-6.4L189.2 372c-1.3-5-4.3-9.4-8.4-12.5s-9.3-4.5-14.5-4.2l-71.6 4.8c-17.6-27.2-28.5-59.2-30.4-93.6L125 228.3c4.4-2.8 7.6-7 9.2-11.9s1.4-10.2-.5-15l-26.7-66.6C128 109.2 155.3 89 186.7 76.9l55.2 46c4 3.3 9 5.1 14.1 5.1s10.2-1.8 14.1-5.1l55.2-46c31.3 12.1 58.7 32.3 79.6 57.9l-26.7 66.6c-1.9 4.8-2.1 10.1-.5 15s4.9 9.1 9.2 11.9l60.7 38.2c-1.9 34.4-12.8 66.4-30.4 93.6zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm14.1-325.7c-8.4-6.1-19.8-6.1-28.2 0L194 221c-8.4 6.1-11.9 16.9-8.7 26.8l18.3 56.3c3.2 9.9 12.4 16.6 22.8 16.6h59.2c10.4 0 19.6-6.7 22.8-16.6l18.3-56.3c3.2-9.9-.3-20.7-8.7-26.8l-47.9-34.8z" />
                                                </svg>
                                            </div>
                                            <span>64'</span>
                                            <span>Anthony Gordon</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {
                                match?.status === 1 || match?.status === 0 ?
                                    <div className='relative translate-y-9 h-36'>
                                        <div className='flex gap-2 bg-default rounded-2xl p-3'>
                                            <span className='text-[4rem] font-bold text-white mt-2'>{match?.resultClubHome ?? 0}</span>
                                            <span className='text-[4rem] font-bold text-white mt-2'>-</span>
                                            <span className='text-[4rem] font-bold text-white mt-2'>{match?.resultClubAway ?? 0}</span>
                                        </div>
                                        {
                                            match?.status === 1 ?
                                                <div className='absolute top-0 bottom-0 p-2 translate-x-9 '>
                                                    <span className='text-[0.7rem] font-bold text-white'>Finished</span>
                                                </div>
                                                :
                                                <div className='absolute top-0 bottom-0 p-2 translate-x-8 '>
                                                    <span className='text-[0.7rem] font-bold text-white'>Time : {match?.timeHappen}</span>
                                                </div>
                                        }

                                    </div>

                                    :

                                    <div className='relative translate-y-9 h-36'>
                                        <div className='flex gap-2 bg-default rounded-2xl p-3'>
                                            <span className='text-[4rem] font-bold text-white'>{match?.matchTime}</span>
                                        </div>
                                    </div>
                            }


                            <div className='p-4 w-96 mr-9'>
                                <div className='flex gap-3 justify-center items-center'>
                                    <span className='font-semibold text-default text-[1.3rem]'>{match?.clubAway.clubName.name}</span>
                                    <div className='w-32 h-32'>
                                        <img src={match?.clubAway.clubName.image} alt="" className='p-4' />
                                    </div>
                                </div>
                                <div className='p-4'>
                                    <ul>
                                        <li className='flex gap-2 items-center p-2'>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                                    <path d="M417.3 360.1l-71.6-4.8c-5.2-.3-10.3 1.1-14.5 4.2s-7.2 7.4-8.4 12.5l-17.6 69.6C289.5 445.8 273 448 256 448s-33.5-2.2-49.2-6.4L189.2 372c-1.3-5-4.3-9.4-8.4-12.5s-9.3-4.5-14.5-4.2l-71.6 4.8c-17.6-27.2-28.5-59.2-30.4-93.6L125 228.3c4.4-2.8 7.6-7 9.2-11.9s1.4-10.2-.5-15l-26.7-66.6C128 109.2 155.3 89 186.7 76.9l55.2 46c4 3.3 9 5.1 14.1 5.1s10.2-1.8 14.1-5.1l55.2-46c31.3 12.1 58.7 32.3 79.6 57.9l-26.7 66.6c-1.9 4.8-2.1 10.1-.5 15s4.9 9.1 9.2 11.9l60.7 38.2c-1.9 34.4-12.8 66.4-30.4 93.6zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm14.1-325.7c-8.4-6.1-19.8-6.1-28.2 0L194 221c-8.4 6.1-11.9 16.9-8.7 26.8l18.3 56.3c3.2 9.9 12.4 16.6 22.8 16.6h59.2c10.4 0 19.6-6.7 22.8-16.6l18.3-56.3c3.2-9.9-.3-20.7-8.7-26.8l-47.9-34.8z" />
                                                </svg>
                                            </div>
                                            <span>64'</span>
                                            <span>Anthony Gordon</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        </Layout>

    );
};

export default MatchDetail;