import React from 'react'
import { Route, Routes } from 'react-router'
import RootLayout from './components/RootLayout'
import HomePage from './pages/HomePage'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/auths/Login';
import SignUp from './pages/auths/SignUp';
import UserRoutes from './components/UserRoutes';
import AdminRoutes from './components/AdminRoutes';
import AddProduct from './pages/AdminPage/AddProduct';

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route element={<UserRoutes />}>
            <Route path='user/login' element={<Login />} />
            <Route path='user/signup' element={<SignUp />} />
          </Route>

          <Route element={<AdminRoutes />}>
            <Route path='product/add' element={<AddProduct />} />

          </Route>



        </Route>

      </Routes>
      <ToastContainer autoClose={1000} position='top-right'></ToastContainer>

    </>
  )
}

export default App
