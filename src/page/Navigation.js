import React, { Fragment } from 'react';
import { useSideBar } from '../context/showSideBarContext';
import { Link } from 'react-router-dom';
import useLoginAdmin from '../Hook/Login/useLoginAdmin';

const Navigation = (props) => {
    const { showfull ,handleClickShow} = useSideBar();
    const { errorLogin, handleChangeEmail, formik ,handleClickLogout} = useLoginAdmin();

    return (
        <Fragment>
            <nav className={`navbar navbar-expand navbar-white navbar-light transition-all  ${showfull ? "ml-0  border-b-2 z-1034" : "ml-64 -translate-x-4  border-b-2 z-1034"}   ${props.hidden === true ? 'hidden' : ''}  `} >
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <div className="nav-link" href="h" role="button" onClick={handleClickShow}><i className={`fas fa-bars transform hover:-translate-y-1 hover:scale-110 ${showfull ? "text-cyan-700" : ""}`} ></i></div>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <Link to = {'/admin/dashboard'} className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <span className="nav-link hover:cursor-pointer" onClick={handleClickLogout}>Logout</span>
                    </li>
                </ul>
            </nav>
        </Fragment>
    )


};

export default Navigation;