import { Form, Formik, useFormik } from 'formik';
import React from 'react'
import { NavLink } from 'react-router-dom'
import * as yup from 'yup';
import { useDispatch, useSelector } from "react-redux"
import { signUpUserAction } from '../redux/actions/authAction';

const Registration = () => {

    const dispatch = useDispatch()

    let schema = yup.object().shape({
        name: yup.string().required("Please Enter Name"),
        email: yup.string().required("Please Enter Email"),
        pwd: yup.string().required("Please enter Password")
    })

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            pwd: ''
        },
        validationSchema: schema,
        onSubmit: values => {
            dispatch(signUpUserAction(values))
            resetForm()
        },
        enableReinitialize: true,
    });

    const { handleSubmit, handleBlur, errors, touched, handleChange, resetForm, values } = formik;

    return (
        <>
            <div className="hero-wrap hero-bread" style={{ backgroundImage: 'url(assets/images/bg_6.jpg)' }}>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9  text-center">
                            <p className="breadcrumbs"><span className="mr-2">
                                <a href="index.html">Mini</a></span> <span>Shop</span>
                            </p>
                            <h1 className="mb-0 bread">Registration</h1>
                        </div>
                    </div>
                </div>
            </div>
            <Formik values={formik}>
                <Form onSubmit={handleSubmit} className="bg-white p-5 contact-form">
                    <div className="form-group">
                        <input
                            value={values.name}
                            type="text"
                            name='name'
                            className="form-control"
                            placeholder="Your Name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.name && touched.name ? <p className="error">{errors.name}</p> : ''}
                    </div>
                    <div className="form-group">
                        <input
                            value={values.email}
                            type="email"
                            name='email'
                            className="form-control"
                            placeholder="Your Email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.email && touched.email ? <p classemail="error">{errors.email}</p> : ''}
                    </div>
                    <div className="form-group">
                        <input
                            value={values.pwd}
                            type="password"
                            name='pwd'
                            className="form-control"
                            placeholder="Your Password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.pwd && touched.pwd ? <p classpwd="error">{errors.pwd}</p> : ''}
                    </div>
                    <div className="form-group text-center">
                        <input type="submit" defaultValue="Send Message" className="btn btn-primary py-3 px-5" />
                    </div>
                    <div className='text-center mb-5 font-weight-bold p-0 nav-item'>
                        <NavLink to="/login">
                            Already have an Account ?
                        </NavLink>
                    </div>
                </Form>
            </Formik>
        </>
    )
}

export default Registration