import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';

const UserRoutes = () => {

  const { userInfo } = useSelector((store) => store.userInfo);
  return userInfo === null ? <Outlet /> : <Navigate to='/' replace />
}

export default UserRoutes
