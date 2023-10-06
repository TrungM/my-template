import React, { Fragment } from 'react';
import Navigation from './Navigation';
import SideBar from './SideBar';
import Footer from './Footer';

const LayoutAdmin = ({ children }) => {
    return (
        <Fragment>
            <Navigation></Navigation>
            <SideBar></SideBar>
            {children}
            <Footer></Footer>
        </Fragment>
    );
};

export default LayoutAdmin;