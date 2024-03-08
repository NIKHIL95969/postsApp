import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { logoutUser } from '@/redux/auth/authSlice'

const NavBar = () => {

    const auth = useSelector((state) => state.auth.user)
    const dispatch = useDispatch()

    const accessToken = useSelector((state)=> state.auth.accessToken)

    const handleLogout = async() => {

        // const data = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/users/logout`,{
        //     headers: {
        //         "Authorization": `Bearer ${accessToken}`
        //     }
        // });

        // if(!data){
        //     console.log("Failed to login");
        // }

        dispatch(logoutUser()); 
        localStorage.setItem('auth', null)
    }


  return (
    <>
        <div className="max-w-8xl mx-auto border border-neutral-900">
        <div className="py-4 lg:px-8 mx-4 lg:mx-8">
            <header className="flex flex-col sm:flex-row justify-between">
            <div className="flex flex-row justify-center">
                <ul className="list-none flex flex-row gap-4">
                    <Link to={"/"}><li>🏠Home</li></Link>
                </ul>
            </div>
            <div className='flex flex-row justify-center gap-x-2'>
                <input className=" w-80 sm:min-w-96 rounded-sm" type="search" name="search" id="search" placeholder="🔍Search something" />
                { !auth ? ( <Link to="/login">
                    <Button >Login</Button>
                </Link>) :
                ( 
                    <Button variant="destructive" onClick={handleLogout}>Logout</Button>
                ) 
                }
            </div>
            </header>
        </div>
        </div>
    </>
  )
}

export default NavBar
