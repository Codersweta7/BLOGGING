import logo from './logo.svg';
import './App.css';
import {Route , Routes} from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
// import tech1 from "./images/tech1.jpg";
// import nature2 from "./images/nature.webp";
// import explore from "./images/explore.jpg";
import Entry from "./Componrnts/Entry.js";
import Layout from './Componrnts/Layout.js';
import Login from './Componrnts/Login.js';
import Register from './Componrnts/Register.js'



function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Layout/>}>
      <Route index element={ <Entry/>}/>
      <Route path={'/login'} element ={<Login/>
               }/>
      <Route path={'/Register'} element ={<Register/>}/>
      </Route>
    
   </Routes>
  );
}

export default App;
