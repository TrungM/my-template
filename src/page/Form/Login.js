import React, { Fragment, useEffect, useState } from 'react';
import useLoginAdmin from '../../Hook/Login/useLoginAdmin';
import '../css/login.css'

const Login = () => {
    const { errorLogin, formik } = useLoginAdmin();
    useEffect(() => {
        document.title = "Login"
    })


    return (
        <Fragment>
            <div className='login-form'>
                <div className="login-form-wrapper">
                    <div className='items'>
                        <div className='header'>
                            <div className="image">
                                <img src="/image/primierleague_2.png" alt="" />
                            </div>
                            <div className='title'>
                                <h3>Welcome to Admin </h3>
                                <span className='text-xs'>Enter your email and password to login</span>
                            </div>
                        </div>
                        <form onSubmit={formik.handleSubmit}>
                            <div className='input-login'>
                                <div>
                                    <label>Email</label>
                                    <input type='text' placeholder='Enter your email' name="email" {...formik.getFieldProps("email")} />
                                    {formik.touched.email === true && formik.errors.email ? <small className='text-red-500 font-medium text-base' >{formik.errors.email}</small> : null}
                                </div>
                                <div>
                                    <label>Password</label>
                                    <input type='password' placeholder='Enter your password' name="password"  {...formik.getFieldProps("password")} />
                                    {formik.touched.password === true && formik.errors.password ? <small className='text-red-500 font-medium text-base' >{formik.errors.password}</small> : null}
                                </div>
                            </div>
                            <div className='button-login'>
                                <input type="submit" value="Sign in" />
                            </div>
                            <div className='error p-2'>
                                <small className='text-red-500 font-medium text-base' >{errorLogin}</small>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Login;