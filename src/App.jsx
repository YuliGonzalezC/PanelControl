import "./App.css";
import Sidebar from "./Sidebar";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import User from "./components/User";
import Product from "./components/Product";
import { useEffect, useState } from "react";



function App() {
const [toggle, setToggle]= useState(false);
function Toggle(){
  setToggle(!toggle);

}

useEffect(()=>{
const handleSize = ()=>{
  if(window.innerWidth>768){
    setToggle(false);
  }
  }
  window.addEventListener("resize",handleSize);
  return()=>{
    window.removeEventListener("resize",handleSize);
  }

}, [])


  return (
    <BrowserRouter>
    <div className="d-flex">
      <div className= {toggle ?"d-none":"w-auto position-fixed"} >
        <Sidebar />
      </div>
      <div className= {toggle ?"d-none":"invisible"}>
      <Sidebar />
      </div>


      <div className="col overflow-auto">
      <Navbar Toggle= {Toggle}/>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/users" element={<User/>}></Route>
        <Route path="/products" element={<Product/>}></Route>
        </Routes>
        </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
