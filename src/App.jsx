import './App.css'
import Home from '../Screens/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from '../Screens/Products';
import Categories from '../Screens/categories';
import Users from '../Screens/Users';
import Login from '../Screens/Login';
import Moderator from '../Screens/moderator';
import Profile from '../Screens/userProfile';
import SingleProduct from '../Screens/SingleProduct';
import EditProduct from '../Screens/EditProduct';
import CategoryAdd from '../Screens/CategoryAdd';
import CategoryEdit from '../Screens/CategoryEdit';
import Allcompany from '../Screens/Allcompany';
import AddCompany from '../Screens/AddCompany';
import EditCompany from '../Screens/EditCompany';



function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/companies/edit/1" element={<EditCompany />} />
    <Route path="/companies/add" element={<AddCompany />} />
    <Route path="/companies" element={<Allcompany />} />
    <Route path="/categories/add" element={<CategoryAdd />} />
    <Route path="/categories/edit/:categoryId" element={<CategoryEdit />} />
    <Route path="/editproduct/:id" element={<EditProduct />} />
    <Route path="/singleproduct/:id" element={<SingleProduct />} />
    <Route path="/profile/:username" element={<Profile />} />
    <Route path="/moderators" element={< Moderator/>} />
    <Route path="/Login" element={<Login />} />
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Products />} />
    <Route path="/categories" element={<Categories />} />
    <Route path="/users" element={<Users />} />


   
    
    </Routes>
    </BrowserRouter>
  );
}

export default App;