import React, { Fragment, useState } from 'react';
import { useSideBar } from '../context/showSideBarContext';
import { Link, NavLink, Outlet } from 'react-router-dom';
const dataSideBar = [
    {
        id: 7,
        title: "Season",
        q_itemsItems: 1,
        link_values: "/",
        parent: 0,

    },

    {
        id: 1,
        title: "Clubs",
        q_itemsItems: 1,
        link_values: "/",
        parent: 0,

    },

    {
        id: 2,
        title: "Add New Clubs",
        q_itemsItems: 1,
        link_values: "/add-new-clubs",
        parent: 1
    },

    {
        id: 3,
        title: "List Clubs",
        q_itemsItems: 1,
        link_values: "/list-clubs",
        parent: 1

    },

    {
        id: 4,
        title: "Stadiums",
        q_itemsItems: 1,
        link_values: "/",
        parent: 0,

    },
    {
        id: 5,
        title: "Add New Stadiums ",
        q_itemsItems: 1,
        link_values: "/add-new-stadiums",
        parent: 4,

    },
    {
        id: 6,
        title: "List Stadiums ",
        q_itemsItems: 1,
        link_values: "/list-stadiums",
        parent: 4,

    },


    {
        id: 8,
        title: "Create new a season ",
        q_itemsItems: 1,
        link_values: "/create-season",
        parent: 7,

    },
    {
        id: 9,
        title: "Managenment Season ",
        q_itemsItems: 1,
        link_values: "/managenment-season",
        parent: 7,

    },
    {
        id: 10,
        title: "News",
        q_itemsItems: 1,
        link_values: "/",
        parent: 0,
    },

    {
        id: 12,
        title: "Add News",
        q_itemsItems: 1,
        link_values: "/add-news",
        parent: 10,
    },

    {
        id: 11,
        title: "Player",
        q_itemsItems: 1,
        link_values: "/",
        parent: 0,
    },

    {
        id: 13,
        title: "Season",
        q_itemsItems: 1,
        link_values: "/ui/season",
        parent: 15,
    },

    {
        id: 14,
        title: "List News",
        q_itemsItems: 1,
        link_values: "/list-news",
        parent: 10,
    },
    {
        id: 15,
        title: "Layout",
        q_itemsItems: 1,
        link_values: "/layout",
        parent: 0,
    },

    {
        id: 16,
        title: "Add Player",
        q_itemsItems: 1,
        link_values: "/add-new-players",
        parent: 11,
    },
    {
        id: 17,
        title: "List Player",
        q_itemsItems: 1,
        link_values: "/list-players",
        parent: 11,
    },
    {
        id: 18,
        title: "List Position",
        q_itemsItems: 1,
        link_values: "/list-positions",
        parent: 11,
    },
    {
        id: 19,
        title: "List Flag",
        q_itemsItems: 1,
        link_values: "/list-flags",
        parent: 11,
    },
    {
        id: 20,
        title: "Referees",
        q_itemsItems: 1,
        link_values: "/",
        parent: 0,
    },
    {
        id: 21,
        title: "List Referees",
        q_itemsItems: 1,
        link_values: "/list-referees",
        parent: 20,
    },
]
const SideBar = (props) => {
    const { showfull } = useSideBar();
    return (
        <Fragment>
            <aside className={`main-sidebar sidebar-dark-primary elevation-4 transition-transform ease-in-out duration-300  ${showfull ? '-translate-x-96 ' : ''} ${props.hidden === true ? 'hidden' : ''} `} style={{
                width: "20%",
                height: '100vh',
                overflowY: 'auto'
            }} >
                <Link to="/dashboard" className="brand-link"><img src="https://plus.unsplash.com/premium_photo-1675700427405-f4cf90589055?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" />
                    <span className="brand-text font-weight-light">Team 2</span></Link>
                <div className="sidebar" style={{
                    height: 'auto',
                }}>
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src="https://images.unsplash.com/photo-1688053793446-197dbc86e237?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="img-circle elevation-2" alt="UserImage" />
                        </div>
                        <div className="info">
                            <a href="*" className="d-block">admin</a>
                        </div>
                    </div>
                </div>
                <nav className="mt-2" style={{
                    padding: "0.5rem 0.5rem "
                }}>
                    {dataSideBar.length > 0 && dataSideBar.map((items, index) => items.parent === 0 &&
                        <SideBarItems key={items.id}
                            id={items.id}
                            title={items.title}
                            numberItemsChild={items.q_itemsItems}
                            linkItemsChild={items.link_values}
                        ></SideBarItems>
                    )}
                </nav>
            </aside>

        </Fragment>
    );
};


const SideBarItems = (props) => {
    const [showItemsSibeBar, setItemsSibar] = useState(false);
    const handleShowSidebar = () => {
        setItemsSibar(!showItemsSibeBar);
    }

    var resultsItmes = [];


    dataSideBar.map((items, index) => items.parent !== 0 && items.parent === props.id && resultsItmes.push(items))

    // console.log(resultsItmes);

    return (
        <Fragment>
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <li className={`nav-item cursor-pointer  ${showItemsSibeBar ? 'menu-is-opening menu-open ' : ' '}`} >
                    <div className="nav-link active cursor-pointer" onClick={handleShowSidebar}>
                        <i className="nav-icon fas fa-tachometer-alt"></i>
                        <p>
                            {props.title}
                            <i className="right fas fa-angle-left"></i>
                        </p>
                    </div>
                    <ul className={`nav nav-treeview   ${showItemsSibeBar ? '' : "hidden"} `} >

                        {resultsItmes.length > 0 && resultsItmes.map((items, index) => (
                            <ChildItemsSideBar key={items.id} childName={items.title} childLink={items.link_values} ></ChildItemsSideBar>
                        ))}




                    </ul>
                </li>
            </ul>
        </Fragment>
    )
};


const ChildItemsSideBar = (props) => {
    return (
        // transition-transform ease-in-out duration-300 transform hover:-translate-y-1 hover:scale-110
        <Fragment>
            <li className="nav-item">
                {/*  active */}
                <Link to={`/admin${props.childLink}`} className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>{props.childName}</p>
                </Link>
            </li>

        </Fragment>
    )
}

export default SideBar;