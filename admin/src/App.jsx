import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import AddProduct from './pages/AddProduct';
import Dashboard from './pages/Dashboard';
import ManageReviews from './pages/ManageReviews';
import User from './pages/User';
import BlogManagement from './pages/BlogManagement';
import Reports from './pages/Reports';
import Seo from './pages/Seo';
import Orders from './pages/Orders'; 
import Setting from './pages/Setting'; 
import Media from './pages/Media';
import Login from './components/Login';
import ManageProduct from './pages/ManageProducts';
import ListProduct from './pages/listProducts';





 export const backendUrl = import.meta.env.VITE_BACKEND_URL


const App = () => {
  const [ token,setToken] = useState('');
  return (
    <div className="bg-gray-50 min-h-screen">
        <ToastContainer />
      { token === ""
      ? <Login setToken={setToken} />
    : 
    <>
    {/* Navbar */}
    <Navbar setToken={setToken} />
    <hr />

    {/* Main Content */}
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Page Content */}
      <div className="w-full ml-[max(5vw, 25px)] mr-8 my-8 text-gray-600">
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/add-product" element={<AddProduct token={token} />} />
          <Route path="/manage-product" element={<ManageProduct />} />
          <Route path="/reviews" element={<ManageReviews />} />
          <Route path="/users" element={<User />} />
          <Route path="/orders" element={<Orders/>} />
          <Route path="/blogs" element={<BlogManagement/>} />
          <Route path="/reports" element={<Reports/>} />
          <Route path="/seo-settings/:id" element={<Seo/>} />
          <Route path="/media" element={<Media/>} />
          <Route path="/settings" element={<Setting/>} />
          <Route path="/list-product" element={<ListProduct/>} />
          
          
        </Routes>
      </div>
    </div>
    </>
    }
     
    </div>
  );
};

export default App;
