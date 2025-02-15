import logo from "./assets/logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
// import tech1 from "./images/tech1.jpg";
// import nature2 from "./images/nature.webp";
// import explore from "./images/explore.jpg";
import Entry from "./Components/Entry.js";
import Layout from "./Components/Layout.js";
import Login from "./Components/Login.js";
import Register from "./Components/Register.js";
import BlogPostCreate from "./Pages/BlogPostCreate.js";
import Contact from "./Components/Contact.js";
import Feedback from "./Components/Feedback.js"
import About from "./Pages/About.js";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        <Route path={"about"} element={<About />} />
        <Route path={"create"} element={<BlogPostCreate />} />
        <Route path={"contact"} element={<Contact />} />
        <Route index element={<Entry />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/Register"} element={<Register />} />
        <Route path={"/feedback"} element={<Feedback />} />
      </Route>
    </Routes>
  );
}

export default App;
