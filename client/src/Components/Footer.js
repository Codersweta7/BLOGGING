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
  const currentURL = encodeURIComponent(window.location.href);

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed with ${email}`);
    setEmail('');
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-white py-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Newsletter Section */}
          <div className="space-y-4 animate-fade-in flex flex-col items-start">
            <h3 className="text-xl font-semibold tracking-tight">Stay Updated</h3>
            <p className="text-gray-400 text-sm text-left">Subscribe to our newsletter for the latest updates and exclusive offers.</p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-purple-500 transition-all px-4 py-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button 
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 animate-fade-in [animation-delay:100ms] flex flex-col items-start">
            <h3 className="text-xl font-semibold tracking-tight">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Blog', 'Contact', 'FAQ', 'Feedback'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center"
                  >
                    <span className="hover:translate-x-1 transition-transform duration-200 inline-block">
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4 animate-fade-in [animation-delay:200ms] flex flex-col items-start">
            <h3 className="text-xl font-semibold tracking-tight">Contact Us</h3>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm flex items-start">
                <span className="min-w-[20px]">📍</span>
                <span className="ml-2">123 Street, City, Country</span>
              </li>
              <li className="text-gray-400 text-sm flex items-start">
                <span className="min-w-[20px]">🌐</span>
                <span className="ml-2">yourwebsite.com</span>
              </li>
              <li className="text-gray-400 text-sm flex items-start">
                <span className="min-w-[20px]">📞</span>
                <span className="ml-2">+123 456 7890</span>
              </li>
            </ul>
          </div>

          {/* Social Sharing */}
          <div className="space-y-4 animate-fade-in [animation-delay:300ms] flex flex-col items-start">
            <h3 className="text-xl font-semibold tracking-tight">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${currentURL}`}
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform duration-200"
              >
                <FontAwesomeIcon icon={faFacebook} className="text-2xl text-gray-400 hover:text-blue-500" />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${currentURL}&text=Check%20this%20out!`}
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform duration-200"
              >
                <FontAwesomeIcon icon={faXTwitter} className="text-2xl text-gray-400 hover:text-blue-400" />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${currentURL}`}
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform duration-200"
              >
                <FontAwesomeIcon icon={faLinkedin} className="text-2xl text-gray-400 hover:text-blue-600" />
              </a>
              <a
                href={`https://api.whatsapp.com/send?text=Check%20this%20out:%20${currentURL}`}
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform duration-200"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="text-2xl text-gray-400 hover:text-green-500" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="text-center space-y-4">
            <div className="flex justify-center space-x-4 text-sm text-gray-400">
              <Link to="/privacy-policy" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <span className="text-gray-600">|</span>
              <Link to="/terms" className="hover:text-white transition-colors duration-200">
                Terms & Conditions
              </Link>
            </div>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} YourWebsite. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-purple-500/10 rounded-full blur-[100px] transform -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-blue-500/10 rounded-full blur-[100px] transform translate-y-1/2" />
      </div>
    </footer>
  );
};

export default Footer;