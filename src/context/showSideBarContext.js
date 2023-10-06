import axios from "axios";
import { values } from "lodash";
import { func } from "prop-types";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup'
const SideBarContext = createContext();

function SideBarProvider(props) {

    const getCountActive = async () => {
        try {
            const response = await axios.get(`/api/clubs/countClubs`, {});
            if (response.data) {
                return response.data;
            } else {
                return [];
            }
        } catch (error) {
            console.error(error);
        }
    }

    const [countActive, setcountActive] = useState(0);
    const [linkActive, setLinkActive] = useState("/clubs-active");
    const [arrayClubs, setarrayClubs] = useState([]);



    const handleGetList = useRef({});
    handleGetList.current = async () => {
        const count = await getCountActive();
        setcountActive(count);
        setarrayClubs(count);
    }

    useEffect(() => {
        handleGetList.current();
    }, [])


    const [showfull, setShowFull] = useState(false);


    function handleClickShow() {

        setShowFull(!showfull);
    }


    const values = {
        showfull, setShowFull, handleClickShow, countActive, linkActive,
        setLinkActive, arrayClubs, setarrayClubs,
    };


    return <SideBarContext.Provider value={values}  {...props}></SideBarContext.Provider>
}

function useSideBar() {
    const context = useContext(SideBarContext);

    if (typeof context === "undefined")
        throw new Error("useSidBar must be used within SideBarProvider");
    return context;
}

export { SideBarProvider, useSideBar }
