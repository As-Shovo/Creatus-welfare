import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Register = () => {

    const {emailPasswordCreateUser, user} = useAuth();
    

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    console.log(user);

    const registerForm = (e) => {
        
        emailPasswordCreateUser(email, password, name);


        // console.log(user);
        e.preventDefault();
    }



    return (
        <div className='w-50 mx-auto'>
            <form onSubmit={registerForm}>
                <h3 className='text-center fw-bold mt-5'>Please Sign Up</h3>
                <div className="mb-3 my-5">
                    <label htmlFor="exampleInputEmail1" className="form-label"><i className="fas fa-user custom-text-warning me-2"></i>Full Name</label>
                    <input onChange={(e)=> setName(e.target.value)} type="text" className="form-control" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label"><i className="fas fa-envelope-square custom-text-warning me-2"></i>Email</label>
                    <input onChange={(e)=> setEmail(e.target.value)} type="email" className="form-control" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label"><i className="fas fa-key custom-text-warning me-2"></i>Password</label>
                    <input onChange={(e)=> setPassword(e.target.value)} type="password" className="form-control" />
                </div>
                <Button type="submit" className="custom-button text-white me-3">Sign Up</Button>

                <p className=' mt-4 text-center '>Already have an Account ? <Link to='/login'> Please Login</Link> </p>

            </form>
        </div>
    );
};

export default Register;