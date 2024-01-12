import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Signin from "./Pages/Signin";
import Home from "./Pages/Home";
import Category from "./Pages/Category";
import Products from "./Pages/Products";
import AddProduct from "./Pages/AddProduct";
import AddCategory from "./Pages/AddCategory";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/category" element={<Category />} />
        <Route path="/products" element={<Products />} />
        <Route path="/add-products" element={<AddProduct />} />
        <Route path="/add-cateogory" element={<AddCategory />} />
        {/*<Route path="/sign-up" element={<Signup />} />*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
