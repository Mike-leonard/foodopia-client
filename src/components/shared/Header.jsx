import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                {/* TODO: need to show active route */}
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <Link to="/" className="btn btn-ghost normal-case text-xl">Foodopia</Link>
            </div>
            <div className="navbar-end gap-5">
                {
                    user && <button className="btn btn-ghost btn-circle" title={user.displayName}>
                        <svg width="42" height="42" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /> <path d="M4.271 18.3457C4.271 18.3457 6.50002 15.5 12 15.5C17.5 15.5 19.7291 18.3457 19.7291 18.3457" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /> <path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /> </svg>
                    </button>
                }

                {
                    user ?
                        <button onClick={handleLogOut} className="btn btn-info text-white">Logout</button> :
                        <button className="btn btn-info text-white">
                            <Link to="/login">
                                Login
                            </Link>
                        </button>
                }
            </div>
        </div>
    );
};

export default Header;