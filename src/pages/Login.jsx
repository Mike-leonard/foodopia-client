import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {

    const { signIn, signInWithGoogle, signInWithGitHub } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log('login page location', location)
    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                form.reset()
                navigate(from, { replace: true })
            })
            .catch(error => {
                // console.log(error);
                toast.error(error.message)
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user;
                navigate(from, { replace: true })
            })
            .catch(error => toast.error(error.message))
    }

    const handleGithubSignIn = () => {
        signInWithGitHub()
            .then((result) => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    {/* TODO: Error message need to show */}
                    <span className="text-center mb-3 -mt-4">New to Foodopia? <Link to="/register" className="text-red-600">Register</Link></span>
                </div>
                <div className="flex gap-4">
                    <button onClick={handleGoogleSignIn} className="btn btn-info text-primary">Google Login</button>
                    <button onClick={handleGithubSignIn} className="btn btn-info text-primary">Github Login</button>
                </div>
            </div>
        </div>
    );
};

export default Login;