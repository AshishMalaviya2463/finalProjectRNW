import React, { useEffect } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import Alert from "./Alert"
import { logOutUserAction } from "../redux/actions/authAction"
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {

    const auth = useSelector(state => state.auth)

    const dispatch = useDispatch()

    const navigate = useNavigate()

    useEffect(() => {
        if (auth.navigateTo !== '') {
            navigate(auth.navigateTo)
        }
    }, [auth])

    return (
        <>
            <div className="py-1 bg-black">
                <div className="container">
                    <div className="row no-gutters d-flex align-items-start align-items-center px-md-0">
                        <div className="col-lg-12 d-block">
                            <div className="row d-flex">
                                <div className="col-md pr-4 d-flex topper align-items-center">
                                    <div className="icon mr-2 d-flex justify-content-center align-items-center"><span className="icon-phone2" /></div>
                                    <span className="text">+ 1235 2355 98</span>
                                </div>
                                <div className="col-md pr-4 d-flex topper align-items-center">
                                    <div className="icon mr-2 d-flex justify-content-center align-items-center"><span className="icon-paper-plane" /></div>
                                    <span className="text">youremail@email.com</span>
                                </div>
                                <div className="col-md-5 pr-4 d-flex topper align-items-center text-lg-right">
                                    <span className="text">3-5 Business days delivery &amp; Free Returns</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                <div className="container">
                    <Alert />
                    <NavLink className="navbar-brand" to="/">Minishop</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="oi oi-menu" /> Menu
                    </button>
                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item"><NavLink to="/" className="nav-link">Home</NavLink></li>

                            <li className="nav-item"><NavLink to="/about" className="nav-link">About</NavLink></li>
                            <li className="nav-item"><NavLink to="/products" className="nav-link">Products</NavLink></li>
                            <li className="nav-item"><NavLink to="/blog" className="nav-link">Blog</NavLink></li>
                            <li className="nav-item"><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
                            <li className="nav-item cta cta-colored">
                                {
                                    !auth.isLogin ?
                                        <NavLink to="/login" className="nav-link" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Login">
                                            <LoginIcon />
                                        </NavLink>
                                        :
                                        <NavLink to="/login" className="nav-link" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Logout"
                                            onClick={() => dispatch(logOutUserAction())}
                                        >
                                            <LogoutIcon />
                                        </NavLink>
                                }

                            </li>

                            <li className="nav-item cta cta-colored">
                                <NavLink to="/cart" className="nav-link">
                                    <ShoppingCartIcon />[0]
                                </NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default Header