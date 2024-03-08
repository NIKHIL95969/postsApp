import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from '@radix-ui/react-label';

import { loginUser } from '../redux/auth/authSlice'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { setRawCookie } from 'react-cookies';

export default function Login() {

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [user, setUser] = useState({});

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth.user);

    const handleSubmit = async (event) => {
        event.preventDefault(); 

        const data = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/users/login`,{email, password});

        if(!data){
            console.log("Failed to login");
        }

        dispatch(loginUser(data || null)); 
        localStorage.setItem('auth', data)
        setRawCookie('accessToken', data.accessToken, { path: '/' });
        
        setEmail('');
        setPassword('');
        navigate("/");
    };

    useEffect(() => {
        console.log(auth)
        if(auth) navigate("/")
    }, []);

    

  return (
    
    <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        <html className="h-full">
            <body className="bg-transparent flex h-full items-center py-16">
                <main className="w-full max-w-md mx-auto p-6">
                <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-4 sm:p-7">
                    <div className="text-center">
                        <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Sign in</h1>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            Don't have an account yet? {' '}
                        <Link to="/register" className="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="../examples/html/signup.html">
                            Registeration is here
                        </Link>
                        </p>
                    </div>

                    <div className="mt-5">
                        <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">Or</div>

                        
                        <form>
                            <div className="grid gap-y-4">

                                <Label htmlFor="email" className='text-left'>Email</Label>
                                <Input className="border-gray-900" type="email" id="email" placeholder="Email" value={email}
                                onChange={(e) => setEmail(e.target.value)} />


                                <Label htmlFor="password" className='text-left'>Passowrd</Label>
                                <Input className="border-gray-900" type="password" id="password" placeholder="Password" value={password}
                                onChange={(e) => setPassword(e.target.value)} />

                                <Button varient="primary" onClick={handleSubmit}>Login</Button>
                            </div>
                        </form>
                        
                    </div>
                    </div>
                </div>
                </main>
            </body>
        </html>
    </div>
  )
}


