import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useSearch } from '../context/SearchContext';
import { useTheme } from '../context/ThemeContext';
import sunIcon from '../utils/sun.png';
import moonIcon from '../utils/moon.png';
import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import axios from '../configs/axios-config';

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { searchQuery, setSearchQuery } = useSearch();
  const { darkMode, toggleDarkMode } = useTheme();

  const { isAuthenticated } = useContext(AuthContext);

  // log out
  const handleLogout = async () => {
    try {
      await axios.get("/user/logout")
        .then(() => {
          window.location.reload();
        })
    } catch (error) {

    }
  }

  return (
    <nav
      className={`flex justify-between md:justify-around items-center w-screen h-20 fixed top-0 ${darkMode ? 'bg-[#1a202c]' : 'bg-[#ffffff]'
        }`}
    >
      <Link to='/' class='font-bold text-2xl md:text-4xl logo pl-5'>
        MY BLOG..
      </Link>

      {/* Search Bar */}
      <div className='hidden md:flex h-12 items-center'>
        <input
          type='text'
          placeholder='Search posts...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update search query
          className='search-input m-2'
        />
        {isAuthenticated ?
          <div>
            <button className='btn m-2 p-2 border-2 border-transparent hover:border-[#007bff] rounded-lg shadow-xl hover:shadow-black text-danger' onClick={handleLogout}>
              Logout
            </button>
          </div> :
          <div>
            <Link
              to='/login'
              className='m-2 p-2 border-2 border-transparent hover:border-[#007bff] rounded-lg shadow-xl hover:shadow-black'
            >
              Login
            </Link>
            {/* link ke sath to rhta h .*/}
            <Link
              to='/register'
              className='m-2 p-2 border-2 border-transparent hover:border-[#007bff] rounded-lg shadow-xl hover:shadow-black'
            >
              Register
            </Link>
          </div>
        }

        <button
          onClick={toggleDarkMode}
          className={`m-2 p-2 w-20 border-2 border-transparent roundex-4xl ${darkMode ? 'bg-[#1a202c]' : 'bg-[#ffffff]'
            }`}
        >
          {darkMode ? (
            <img src={moonIcon} style={{ width: 35, height: 35 }} />
          ) : (
            <img src={sunIcon} style={{ width: 35, height: 35 }} />
          )}
        </button>
      </div>

      <div className=' md:hidden fixed top-0 right-5 flex items-center'>
        <input
          type='text'
          placeholder='Search posts...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update search query
          className='search-input md:hidden m-2 h-10'
        />
        <button
          className='flex md:hidden items-center justify-center w-10'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X width={35} /> : <Menu width={35} />}
        </button>
      </div>

      {isOpen && (
        <>
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className='h-screen w-[60%] blog-light fixed left-0 top-0 z-10'
          >
            <ul className='w-full flex flex-col items-center justify-start p-10'>
              <li className='w-full flex justify-center text-normal p-2 border-b '>
                <Link to='/login'>Login</Link>
              </li>
              {/* link ke sath to rhta h .*/}
              <li className='w-full flex justify-center text-normal p-2 border-b  '>
                <Link to='/register'>Register</Link>
              </li>
              <li className='w-full flex justify-center text-normal p-2 border-b border-light'>
                <button
                  onClick={toggleDarkMode}
                  className={`m-2 p-2 w-20 border-2 border-transparent roundex-4xl `}
                >
                  {darkMode ? 'Darkmode' : 'Lightmode'}
                </button>
              </li>
            </ul>
          </motion.div>
        </>
      )}
    </nav>
  );
}