import React, { Fragment, useEffect, useRef, useState } from 'react';
import { useSideBar } from '../../context/showSideBarContext';
import useActionListFullClub from '../../Hook/Clubs/useActionListFullClub';
import styled from 'styled-components';
import useActionUpdateActiveClub from '../../Hook/Clubs/useActionUpdateActiveClub';
import useActionResetActiveClub from '../../Hook/Clubs/useActionResetActiveClub';
import { Link, Route, useNavigate, useParams } from 'react-router-dom';
import Table from '../Table';
import useActionListActive from '../../Hook/Clubs/useActionListActive';
import useActionCountActive from '../../Hook/Clubs/useActionCountActive';
import styles from "../css/checkbox.css";
import useActionPost from '../../Hook/Ranking/useActionPost';
import useActionGetOne from '../../Hook/useActionGetOne';
import useActionListFull from '../../Hook/Season/useActionListFull';
import useActionRefClub from '../../Hook/Clubs/useActionRefClub';
import useActionPutActiveSeason from '../../Hook/Matches/useActionPutActiveSeason';
import useActionDeleteChooseClub from '../../Hook/Clubs/useActionDeleteChooseClub';
import useActionDelete from '../../Hook/Ranking/useActionDelete';
import LayoutAdmin from '../LayoutAdmin';
import { forEach } from 'lodash';

const StyleCricle = styled.div`

        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        border: 4px solid #00f;
        border-right-color: transparent;
        animation: spin 2s linear infinite;
        margin: 0 auto;
        margin-top: 1rem;
    

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

`





const ChooseClubs = () => {
    const { showfull } = useSideBar();
    const [keyword, setKeyword] = useState(null);
    const {
        listContentClub, loading
    } = useActionListFullClub("/api/clubs/list", keyword);
    const { listContentClubActive,
        new2, } = useActionListActive("/api/clubs/activeAll");
    const { handleApiResetActive } = useActionResetActiveClub()
    const { handleApiUpdateActiveClub } = useActionUpdateActiveClub()
    const { handleCreateRefClub } = useActionRefClub();
    const { handleCreate } = useActionPost();
    // const {GetOne}=useActionGetOne("api/table/list");
    const [errorMessage, seterrorMessage] = useState([]);
    const [noteMessage, setnoteMessage] = useState("");

    const [noChoose, setnoChoose] = useState(false);
    const [checked, setChecked] = useState(null);
    const [quantity, setquantity] = useState(0);
    const [reset, setReset] = useState(false);
    const { GetOne } = useActionGetOne("/api/clubs/all");
    const { listContent } = useActionListFull("/api/season/listSeason")
    const [getSeason, setSeason] = useState(0);
    const { id } = useParams();
    const navigate = useNavigate();
    const { handleApiUpdateActive } = useActionPutActiveSeason();
    const { GetApiDeleteranking } = useActionDelete("/api/table/deleteSeason");

    const { GetApiDeleteChooseClub } = useActionDeleteChooseClub("/api/clubs/deleteChooseClub");

    const [arrayClubs, setArrayClubs] = useState([]);
    const [arrayRanking, setArrayRanking] = useState([]);

    const hanldeValueClubs = async (e) => {


        if (e.target.checked === true) {
            const clubs = { "clubID": { "id": e.target.value }, 'season': { "id": id }, 'active': 0 };
            const ranking = { "position": 0, "clubName": { "id": e.target.value }, "clubid": e.target.value, 'season': id };

            handleApiUpdateActiveClub('/api/clubs/activeClub', e.target.value, 1)
            if (arrayClubs.length === 19) {
                alert("You have selected enough teams to participate ");
                setnoChoose(true);
            }
            setquantity(arrayClubs.length + 1);
            arrayClubs.push(clubs);
            arrayRanking.push(ranking);
        } else {
            handleApiUpdateActiveClub("/api/clubs/activeClub", e.target.value, 0);
            setReset(true);
            const index = arrayClubs.findIndex(item => item.clubID?.id === e.target.value);
            arrayClubs.splice(index, 1);

            const index2 = arrayRanking.findIndex(item => item.clubID?.id === e.target.value);
            arrayRanking.splice(index2, 1);

            setquantity(arrayClubs.length);
        }
    }

    const hanldeSaveClubs = () => {
        if (arrayClubs.length < 19) {
            alert("Please choose enough 20 teams ");
        } else {
            arrayClubs.map((item) => (
                handleCreateRefClub("/api/clubs/createRef", item)
            ))
            arrayRanking.map((item) => (
                handleCreate("/api/table/create", item)
            ))
            handleApiResetActive('/api/clubs/activeClub/reset');
            alert('Congratulation');
            navigate(`/admin/clubs-active/${id}`)
            handleApiUpdateActive("/api/season/seasonID", parseInt(id))
        }
    }

    const handleChangeSearch = (e) => {
        setKeyword(e.target.value);
    }

    useEffect(() => {
        document.title = "Choose Clubs"

    }, [])



    return (
        <LayoutAdmin>
            <div className={`content-wrapper   ${showfull ? "ml-0" : " "} `}>
                <section className={`content-header    ${showfull ? "ml-1" : " ml-20"} `}>
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1> Choose Clubs For New Season </h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="*">Home</a></li>
                                    <li className="breadcrumb-item active">Choose Clubs for Season </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={`content ${showfull ? "ml-1" : " ml-20"} `}>
                    <div>
                        <div className="card card-primary card-outline">
                            <div className="card-header">
                                <h3 className="card-title">
                                    <button type="button" className="btn btn-primary" onClick={hanldeSaveClubs}>Save</button>
                                </h3>
                                <div className="card-tools">
                                    <div className="input-group input-group-sm">
                                        <input type="text" className="form-control" placeholder="Search clubs" onChange={handleChangeSearch} />
                                        <div className="input-group-append" >
                                            <div className="btn btn-primary">
                                                <i className="fas fa-search"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body p-0">
                                <div className="mailbox-controls">
                                    <div className="float-right">
                                        Required number of clubs to join : <span className='border-l-indigo-800 font-bold' > {quantity} / 20</span>
                                    </div>
                                </div>
                                <div className="table-responsive mailbox-messages">
                                    <table className="table table-hover table-striped">
                                        <tbody>
                                            {!loading && listContentClub.length > 0 && listContentClub.map((items, index) => (
                                                <tr key={items.id}>
                                                    <td className='w-1'>
                                                        <label className="container">
                                                            <input type='checkbox' value={items.id} onChange={hanldeValueClubs} checked={items.active ? true : checked} disabled={noChoose} />
                                                            <span className={`checkmark ${reset && items.active === false ? 'checkreset' : ''}  `} ></span>
                                                        </label>
                                                    </td>
                                                    <td style={{ width: "10%" }}><img src={items.image} alt="" width="100%" /> </td>
                                                    <td className="name w-10"><a href="/">{items.name}</a></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                        {loading && (<StyleCricle></StyleCricle>)}

                    </div>
                </section>
            </div>

        </LayoutAdmin>
    );
};

export default ChooseClubs;