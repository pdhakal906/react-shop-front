import React from 'react'
import { Route, Routes } from 'react-router'
import RootLayout from './components/RootLayout'
import HomePage from './pages/auths/HomePage'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/auths/Login';
import SignUp from './pages/auths/SignUp';

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path='user/login' element={<Login />} />
          <Route path='user/signup' element={<SignUp />} />
        </Route>

      </Routes>
      <ToastContainer autoClose={1000} position='top-right'></ToastContainer>

    </>
  )
}

export default App
