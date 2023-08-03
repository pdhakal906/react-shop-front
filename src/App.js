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
import ProductList from './pages/AdminPage/ProductList';
import EditProduct from './pages/AdminPage/EditProduct';
import ProductDetail from './pages/ProductDetail';
import CartPage from './pages/CartPage';
import AuthRoutes from './components/AuthRoutes';
import Shipping from './pages/auths/Shipping';
import OrderPage from './pages/auths/OrderPage';
import UserProfile from './pages/UserPage/UserProfile';
import OrderDetail from './pages/UserPage/OrderDetail';
import AdminProfile from './pages/AdminPage/AdminProfile';

const App = () => {

  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path='product/detail/:id' element={<ProductDetail />} />

          <Route element={<AuthRoutes />}>
            <Route path='user/login' element={<Login />} />
            <Route path='user/signup' element={<SignUp />} />
          </Route>
          <Route element={<UserRoutes />}>
            <Route path='user/profile' element={<UserProfile />} />
            <Route path='user/cart' element={<CartPage />} />
            <Route path='user/shipping' element={<Shipping />} />
            <Route path='user/checkout' element={<OrderPage />} />
            <Route path='user/order/:id' element={<OrderDetail />} />
          </Route>

          <Route element={<AdminRoutes />}>
            <Route path='product/add' element={<AddProduct />} />
            <Route path='products/all' element={<ProductList />} />
            <Route path='product/:id' element={<EditProduct />} />
            <Route path='user/allDetail' element={<AdminProfile />} />
          </Route>



        </Route>

      </Routes>
      <ToastContainer autoClose={1000} position='top-right'></ToastContainer>

    </>
  )
}

export default App
