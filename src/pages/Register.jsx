import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import { toast } from 'react-toastify';

const Register = () => {

    const { createUser, userProfileUpdate } = useContext(AuthContext);


    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 6){
            toast.error('Password should be 6 or more characters long')
            return;
        }
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                if (createdUser !== null) {
                    userProfileUpdate(createdUser, name, photo)
                        .then(() => {
                            form.reset()
                        })
                        .catch(err => console.log(err))
                }
                console.log(createdUser);
            })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                        </div>
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
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <span className="text-center mb-3 -mt-4">
                        Already have an account? <Link to="/login" className="text-red-600">Login</Link>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Register;