import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faXTwitter,
  faLinkedin,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed with ${email}`);
    setEmail(''); // Clear input field after submission
  };

  const currentURL = encodeURIComponent(window.location.href);

  return (
    <footer className='bg-gray-900 text-white py-10'>
      {/* 📩 Newsletter Subscription */}
      <div className='newsLetter'>
        <h3 className='text-lg font-semibold'>Subscribe to our Newsletter</h3>
        <form onSubmit={handleSubscribe} className='mt-3 flex'>
          <input
            type='email'
            placeholder='Enter your email'
            className='newsletter-input'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type='submit' className='newsletter-submit'>
            Subscribe
          </button>
        </form>
      </div>
      <div className='links'>
        {/* 🔗 Quick Links */}
        <div className='quick-contact'>
          <div className='quick-links'>
            <h3 className='text-lg font-semibold'>Quick Links</h3>
            <ol className='mt-3 space-y-2'>
              <li>
                <Link to='/' className='hover:text-blue-400'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/about' className='hover:text-blue-400'>
                  About
                </Link>
              </li>
              <li>
                <Link to='/blog' className='hover:text-blue-400'>
                  Blog
                </Link>
              </li>
              <li>
                <Link to='/contact' className='hover:text-blue-400'>
                  Contact
                </Link>
              </li>
              <li>
                <Link to='/faq' className='hover:text-blue-400'>
                  FAQ
                </Link>
              </li>
              <li>
                <Link to='/feedback' className='hover:text-blue-400'>
                  Feedback
                </Link>
              </li>
            </ol>
          </div>

          {/* 📞 Contact Information */}
          <div style={{ textAlign: 'start' }}>
            <h3 className='text-lg font-semibold'>Contact Us</h3>
            <p className='mt-3 my-2'>
              <i class='fa-solid fa-location-dot mx-2'></i> 123 Street, City,
              Country
            </p>
            <p className='my-2'>
              <i class='fa-solid fa-link mx-2'></i>yourwebsite.com
            </p>
            <p className='my-2'>
              <i class='fa-solid fa-phone mx-2'></i> +123 456 7890
            </p>
          </div>
        </div>
        {/* 📢 Social Sharing Buttons */}
        <div className='social-sharing-buttons'>
          <h3 className='text-lg font-semibold'>Share Our Blog</h3>
          <div className='social-sharing-buttons-links'>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${currentURL}`}
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-500 hover:text-blue-600 text-2xl m-2'
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
            href={`https://twitter.com/intent/tweet?url=${currentURL}&text=Check%20this%20out!`}
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-400 hover:text-blue-500 text-2xl m-2'
            >
            <FontAwesomeIcon icon={faXTwitter} />
            </a>

            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${currentURL}`}
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-700 hover:text-blue-800 text-2xl m-2'
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href={`https://api.whatsapp.com/send?text=Check%20this%20out:%20${currentURL}`}
              target='_blank'
              rel='noopener noreferrer'
              className='text-green-500 hover:text-green-600 text-2xl m-2'
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
        </div>
      </div>
      {/* 🔒 Privacy & Terms */}
      <div
        className='privacy&copyrights'
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <div className='privacy'>
          <a href='/privacy-policy' className='hover:text-gray-200'>
            Privacy Policy
          </a>{' '}
          |{' '}
          <a href='/terms' className='hover:text-gray-200'>
            Terms & Conditions
          </a>
        </div>

        {/* Ⓒ Copyright */}
        <div className='copyrights'>
          © {new Date().getFullYear()} YourWebsite. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;