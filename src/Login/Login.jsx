import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa6';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [adminName, setAdminName] = useState('');
    const [password, setPassword] = useState('');
    const [eye, setEye] = useState(false);
    const navigate = useNavigate();

    const handleEye = () => {
        setEye(!eye)
    }

    const handleLogin = () => {
        if (adminName === 'cpi60' && password === 'cpi60') {
            toast.success('Login Successfully!');
            navigate('/home');
        } else {
            toast.error('Admin name or password incorrect!');
        }
    };

    return (
        <div className="lg:my-36 md:my-24 my-16 flex items-center justify-center">
            <fieldset className="relative fieldset p-6 border-base-300 rounded-box w-80 border bg-white shadow-lg">
                <legend className="fieldset-legend text-2xl">Login</legend>

                <label className="label">Admin Name</label>
                <input
                    type='text'
                    required
                    className="input  w-full focus:outline-none"
                    onChange={(e) => setAdminName(e.target.value)}
                    placeholder="Admin Name"
                />

                <label className="label">Password</label>
                <input
                    required
                    type={eye ? 'text' : 'password'}
                    className="input w-full focus:outline-none"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    
                />
                <button className='absolute top-33 right-10' onClick={handleEye}>{
                   eye ?<FaEyeSlash /> : <FaEye /> 
                }</button>
                <br />
                <button
                    onClick={handleLogin}
                    className="btn btn-primary w-full rounded-lg text-white"
                >
                    Login
                </button>
            </fieldset>
        </div>
    );
};

export default Login;
