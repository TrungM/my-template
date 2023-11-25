import React from 'react';
import '../../css/header.css'
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import SignIn from '../Sigin';
import ReactDOM from "react-dom";

const ListLink = [
    {
        id: 1,
        to: "/",
        title: "Home",
    },
    {
        id: 2,
        to: "/fixtures",
        title: "Fixtures",
    },
    {
        id: 3,
        to: "/tables",
        title: "Tables",
    },
    {
        id: 4,
        to: "/results",
        title: "Results",
    },
    {
        id: 5,
        to: "/players",
        title: "Players",
    },
    {
        id: 6,
        to: "/news",
        title: "News",
    },

]


const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const [showPopup, setShowPopup]= useState(true);

    const handleShowBars = () => {
        setIsActive(!isActive);
    }
    return (
        <div id='header'>
            <div className='logo cursor-pointer'>
                <Link to='/' >
                    <img src="/image/premierleague.png" alt="" />
                    <span>Preimer League</span>
                </Link>
            </div>
            <ul className='navigation'>
                {ListLink.map((items) => (
                    <li key={items.id}>
                        <NavLink to={items.to} className='link' >{items.title}</NavLink>
                    </li>
                ))}
            </ul>


            <div className='action-header flex flex-1 justify-center gap-4'>
                {/* <div className='search ml-3'>
                    <Link><button className='button'>Search</button></Link>
                </div> */}
                {/* <div className='login'>
                    <Link to = "/login"><button className='button'>Sign In</button></Link>
                </div>
                <div className='register'>
                    <Link to = "/register"><button className='button'>Sign Up</button></Link>
                </div> */}
            </div>

            <i className={`fas fa-bars ${isActive === true ? 'text-blue-500' : ''} `} id="icon-menu-bars" onClick={handleShowBars}></i>

            <div className={`nav-responsive absolute w-full top-36 -translate-y-11 left-0 bg-[#37003c]  ${isActive === true ? 'visible' : 'invisible'} `}>
                <ul className='p-2'>
                    {ListLink.map((items) => (
                        <li key={items.id} className='p-3'>
                            <NavLink to={items.to} className='link' >{items.title}</NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
export default Header;