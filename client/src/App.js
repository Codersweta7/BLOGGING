import './App.css';
import { Route, Routes } from 'react-router-dom';

import Entry from './Components/Entry.js';
import Layout from './Components/Layout.js';
import Login from './Components/Login.js';
import Register from './Components/Register.js';
import BlogPostCreate from './Pages/BlogPostCreate.js';
import Contact from './Components/Contact.js';
import Feedback from './Components/Feedback.js';
import About from './Pages/About.js';
import FAQ from './Components/Faq.js';
import ScrollToTopButton from "./Components/ScrollToTop.jsx";
import { PreLoginRoute } from './utils/components/prelogin.routes.js';
import { SecuredRoute } from './utils/components/secured.routes.js';

function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Layout />}>
          <Route path={'/about'} element={<About />} />
          <Route path={'/create'} element={<SecuredRoute element={<BlogPostCreate />} />} />
          <Route path={'/contact'} element={<Contact />} />
          <Route path={'/faq'} element={<FAQ />} />
          <Route index element={<Entry />} />
          <Route path={'/login'} element={<PreLoginRoute element={<Login />} />} />
          <Route path={'/Register'} element={<PreLoginRoute element={<Register />} />} />
          <Route path={'/feedback'} element={<Feedback />} />
        </Route>
      </Routes>
      <ScrollToTopButton />
    </>
  );
}

export default App;
