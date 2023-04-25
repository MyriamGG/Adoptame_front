import Home from "./pages/Home/Home";
import Landing from "./pages/Landing/Landing";
import { Route, Routes, useLocation, Navigate, Link } from "react-router-dom";
import React from "react";
import Adopta from "./components/Adopta/Adopta";
import Detail from "./components/Detail/Detail";
import Dona from './components/Dona/Dona'
import About from "./pages/About/About";
import Profile from "./common/Account/Profile";
import CreatePet from "./components/CreatePet/CreatePet";
import Dashboard from "./pages/Dashboard/Dashboard"

import Register from "./components/Register/Register"

import ProtectLogin from "./components/Auth0/ProtectLogin";

function AllRoutes() {

  //const location = useLocation();
  return (
    <div>      
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/adopta" element={<Adopta />} />
        <Route exact path="/api/pets/:id" element={<Detail />} />
        <Route exact/* ={true} */ path="/home" 
               element={
                 <ProtectLogin>  
                   <Home />
                  </ProtectLogin>  
                } />
            <Route exact path="/createUsuario" element={<Register />} />
            <Route exact path="/dashboard" element={<Dashboard />}/>
        <Route exact path="/dona" element={<Dona />} />
        <Route exact path="/about" element={<About />} />
        <Route exact/* ={true} */ path="/createPet" 
          element={
          <ProtectLogin> 
              <CreatePet />    
          </ProtectLogin>  
        } />
     
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;



