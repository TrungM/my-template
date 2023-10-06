import React, { Fragment } from 'react';
import Home from './Home';
import { SideBarProvider, useSideBar } from '../context/showSideBarContext';
import LayoutAdmin from './LayoutAdmin';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    const { showfull } = useSideBar();

    return (
        <LayoutAdmin>
            <div className={`content-wrapper   ${showfull ? "ml-0" : " "} `}>
                <section className={`content-header    ${showfull ? "ml-1" : " ml-20"} `}>
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Dashboard</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="*">Home</a></li>
                                    <li className="breadcrumb-item active">Dashboard</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </LayoutAdmin>
    );
};

export default Dashboard;