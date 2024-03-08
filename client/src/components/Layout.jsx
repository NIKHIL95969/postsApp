import { loginUser } from '@/redux/auth/authSlice';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'


const Layout = () => {

  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  useEffect(()=>{
    ()=>{
      const data = localStorage.getItem('auth');
      
      if(!data){
        if(!data) navigate("/login")
      }else{
        useDispatch(loginUser(data));
      }
    }
  })

  return (
    <>
        <Outlet />
    </>
  )
}

export default Layout
