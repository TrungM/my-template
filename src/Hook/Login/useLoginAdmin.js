import React, { useEffect, useRef, useState } from 'react';
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup'
import axios from 'axios';
const useLoginAdmin = () => {

    const [login, setLogin] = useState(localStorage.getItem('accessToken'));
    const [errorLogin, setErrorLogin] = useState("");
    const [errorEmail, setErrorEmail] = useState("");

    const [getfullname, setfullname] = useState("");
    const [getEmail, setEmail] = useState("");
    const [getPassword, setPassword] = useState("");

    const handleLoginAdmin = async (email, password) => {
        try {
            const response = await axios.post(`/api/admin/login?email=${email}&password=${password}`);
            if (response.data) {
                return response.data;
            } else {
                return [];
            }
        } catch (error) {

            console.log(error);

        }

    }

    const handleGetInfo = useRef({});
    handleGetInfo.current = async (email, password) => {
        const c_item = await handleLoginAdmin(email, password);
        setEmail(c_item.email)
        setPassword(c_item.password)
        setfullname(c_item.fullname);

    }
    const history = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Required"),
            password: Yup.string().required("Required"),
        }),


        onSubmit: (values, actions) => {
            if (values.email === getEmail && values.password === getPassword) {
                localStorage.setItem('accessToken', true);
                history('/admin/dashboard');
                window.location.reload();
            } else {
                setErrorLogin("Login Fail . Please check email or password")
            }
        }

    });

    const handleClickLogout = () => {
        localStorage.removeItem('accessToken');
        history("/admin/login");
    }
    useEffect(() => {
        handleGetInfo.current(formik.values.email, formik.values.password);
    }, [formik.values.email, formik.values.password, getfullname, login])

    return {
        errorLogin,
        login,
        errorEmail,
        formik,
        handleClickLogout,
        getfullname
    }
};

export default useLoginAdmin;