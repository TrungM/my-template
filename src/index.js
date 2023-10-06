import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import "./admin/css/adminlte.min.css";
import "./admin/plugins/fontawesome-free/css/all.min.css";
import "./admin/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css";
import "./admin/plugins/icheck-bootstrap/icheck-bootstrap.min.css";
import "./admin/plugins/jqvmap/jqvmap.min.css";
import "./admin/plugins/overlayScrollbars/css/OverlayScrollbars.min.css";
import "./admin/plugins/daterangepicker/daterangepicker.css";
import "./admin/plugins/summernote/summernote-bs4.min.css";
import "./index.scss";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare, faCoffee, faXmark, faTrash, faArrowAltCircleRight, faArrowRight, faBars, faChevronDown, faCircleInfo, faStar } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SideBarProvider } from './context/showSideBarContext';
library.add(faCheckSquare, faCoffee, faXmark, faTrash, faTrashAlt, faArrowAltCircleRight, faArrowRight, faBars, faChevronDown, faCircleInfo, faStar);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <App isLogin={localStorage.getItem('accessToken')}/>
  </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
