import './App.css';
import { Route, Routes } from 'react-router-dom';

import Entry from './Componrnts/Entry.js';
import Layout from './Componrnts/Layout.js';
import Login from './Componrnts/Login.js';
import Register from './Componrnts/Register.js';
import BlogPostCreate from './Pages/BlogPostCreate.js';
import Contact from './Componrnts/Contact.js';
import Feedback from './Componrnts/Feedback.js';
import About from './Pages/About.js';
import FAQ from './Componrnts/Faq.js';
import ScrollToTopButton from "./Componrnts/ScrollToTop.jsx";
import NotFound from "./NotFound.js";

function App() {
  return (<>
    <Routes>
      <Route path={'/'} element={<Layout />}>
        <Route path={'about'} element={<About />} />
        <Route path={'create'} element={<BlogPostCreate />} />
        <Route path={'contact'} element={<Contact />} />
        <Route path={'/faq'} element={<FAQ />} />
        <Route index element={<Entry />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/Register'} element={<Register />} />
        <Route path={'/feedback'} element={<Feedback />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
      <ScrollToTopButton/>
    </>
  );
}

export default App;
