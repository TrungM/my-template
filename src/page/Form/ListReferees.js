import React from 'react';
import LayoutAdmin from '../LayoutAdmin';
import { useSideBar } from '../../context/showSideBarContext';
import { Link, useParams } from 'react-router-dom';
import Pagniation from '../Pagniation';
import styled from 'styled-components';
import useActionListFlags from '../../Hook/Flags/useActionListFlags';
import useActionListReferees from '../../Hook/Referees/useActionListReferees';

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
const ListReferees = () => {
    const { showfull } = useSideBar();
    const { handleDeleteReferees,
        listContentReferees,
        loading,
        handleNext,
        handlePrevious, next, totalPage } = useActionListReferees("/api/referees/all");

    return (
        <LayoutAdmin>
            <div className={`content-wrapper   ${showfull ? "ml-0" : " "} `}>
                <section className={`content-header     ${showfull ? "ml-1" : " ml-14 "} `}>
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>List Referees</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="*">Home</a></li>
                                    <li className="breadcrumb-item active">List Referees</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={`content ${showfull ? "ml-1" : " ml-14 "} `}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <Link to="/admin/add-new-referee">
                                            <button className='btn  btn-outline-primary'>Add New Referee</button>
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <table id="example2" className="table table-bordered table-hover text-center">
                                            <thead>
                                                <tr>
                                                    <th>Nationality</th>
                                                    <th>Name</th>
                                                    <th>Delete</th>
                                                    <th>Update</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {!loading && listContentReferees.length > 0 && listContentReferees.map((items, index) => (
                                                    <tr key={items.id}>
                                                        <td style={{ width: "10%" }}><img src={items.nationality.image} alt="" width="100%" /> </td>
                                                        <td>{items.name}</td>
                                                        <td> <button type="button" className="btn  btn-outline-danger" onClick={() => handleDeleteReferees(items.id)}>Delete</button>
                                                        </td>
                                                        <td> <Link to={`/admin/edit-referees/${items.id}`}><button type="button" className="btn btn-outline-success">Update</button></Link>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th>Nationality</th>
                                                    <th>Name</th>
                                                    <th>Delete</th>
                                                    <th>Update</th>
                                                </tr>
                                            </tfoot>
                                        </table>
                                        <div className={`flex justify-between p-6 ${totalPage === 1 ? "hidden" : ""}`}>
                                            <Pagniation api="/api/referees/all" totalPage={totalPage} next={next} handleNext={handleNext} handlePrevious={handlePrevious} ></Pagniation>
                                        </div>
                                    </div>
                                </div>
                                {loading && (<StyleCricle></StyleCricle>)}
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </LayoutAdmin>
    );
};

export default ListReferees;