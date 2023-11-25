import React, { Fragment } from 'react';
import { useSideBar } from '../context/showSideBarContext';
import styled from 'styled-components';


const StyledFooter =styled.footer`
background-color: #fff;
    border-top: 1px solid #dee2e6;
    color: #869099;
    padding: 1rem;

`
const Footer = (props) => {
    const {showfull}=useSideBar();

    return (
        <Fragment>
            <StyledFooter className={`${showfull? "ml-0" : "ml-60"}  ${props.hidden ===true ? 'hidden' : ''}  `} >
                <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">My Team </a>.</strong>
                All rights reserved.
                <div className="float-right d-none d-sm-inline-block">
                    <b>Version</b> 3.2.0
                </div>
            </StyledFooter>
        </Fragment>
    );
};

export default Footer;