
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Navbar.css'




const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const logOut = () => {
        signOut(auth);
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light navbar-color">
            <div className="container">
                <Link className="navbar-brand" to="/">Home</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="#">Blog</Link>
                        </li>
                        <li className="nav-item">
                            {
                                user ? <Link className="nav-link" to="#">My Items</Link> : ''
                            }
                        </li>
                        <li className="nav-item">
                            {user ?
                                <Link className="nav-link" to='/all-product'>Manage Items</Link> : ''
                            }
                        </li>
                        <li className="nav-item">
                            {user ?
                                <Link className="nav-link" to='/manage-inventory'> Add Items</Link> :
                                ''
                            }
                        </li>
                    </ul>
                    <span className="navbar-text">


                        {user ?
                            <Link onClick={logOut} className="nav-link" to="/login">Log Out</Link>
                            : <Link className="nav-link" to="/login">Login</Link>
                        }

                    </span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;