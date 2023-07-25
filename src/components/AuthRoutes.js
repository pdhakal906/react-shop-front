import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';

const AuthRoutes = () => {
  const { userInfo } = useSelector((store) => store.userInfo);
  // return userInfo === null ? <Login /> : <Outlet />

  // return userInfo === null ? <Outlet /> : <Navigate to='/' replace />
  return userInfo === null ? <Outlet /> : <Navigate to='/' replace />

}

export default AuthRoutes
