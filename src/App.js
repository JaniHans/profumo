import NavigationBar from './client/components/NavigationBar';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Products from './client/Products';
import Mainpage from './admin/Mainpage';
import Contacts from './contact/Contacts';
import Decorations from './client/Decorations';
import AdminPage from './admin/AdminPage';
import React , {useState} from 'react'
import './i18n'
import './translations'
import SingleProduct from './admin/SingleProduct';
import Login from './admin/Login';
import MaintainProducts from './admin/MaintainProducts';
import EditProduct from './admin/EditProduct';
import MarketSchedule from './client/MarketSchedule';
import MaintainSchedule from './admin/MaintainSchedule';
import EditSchedule from './admin/EditSchedule';
import AddEvents from './admin/AddEvents';
import AddProduct from './admin/AddProduct';




function App() {


  return (
    <div>
      <NavigationBar/>


      <Routes>
        <Route path="/" element={<Mainpage/>}/>

        <Route path="/client/marketschedule" element={<MarketSchedule/>}/>
        <Route path="/client/products" element={<Products/>}/>
        <Route path="/client/decorations" element={<Decorations/>}/>
        <Route path="/client/mainpage" element={<Mainpage/>}/>

        <Route path="/admin/adminpage" element={<AdminPage/>}/>
        <Route path="/contact/contacts" element={<Contacts/>}/>
        <Route path='/admin/product/:x' element={<SingleProduct />}></Route>
        <Route path="/admin/login" element={<Login/>}/>
        <Route path="/admin/maintainproducts" element={<MaintainProducts/>}/>
        <Route path="/admin/maintainschedule" element={<MaintainSchedule/>}/>
        <Route path="/admin/editproduct/:category/:id" element={<EditProduct/>}/>
        <Route path="/admin/editschedule/:qwerty" element={<EditSchedule/>}/>
        <Route path="/admin/addschedule/" element={<AddEvents/>}/>
        <Route path="/admin/addproduct/" element={<AddProduct/>}/>

        
      </Routes>
      
  

    </div>
  );
}

export default App;
