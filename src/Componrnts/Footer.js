import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed with ${email}`);
    setEmail(""); // Clear input field after submission
  };

  const currentURL = encodeURIComponent(window.location.href);

  return (
    <footer className="bg-gray-900 text-white py-10 Footer">
      <h1>MY BLOG..</h1>
      <h4>Welcome to My Blog!</h4>
      <h4>A space where ideas, insights,</h4>
      <h4> and inspiration come together.</h4>
      <h4>Dive into engaging content,</h4>
      <h4>explore unique perspectives,</h4>
      <h4> and join the journey of learning and discovery.</h4>
      {/* 📩 Newsletter Subscription */}
      <div className="newsLetter">
        <h3 className="text-lg font-semibold heading">Subscribe to our Newsletter</h3>
        <form onSubmit={handleSubscribe} className="mt-3 flex">
          <input
            type="email"
            placeholder="Enter your email"
            className="newsletter-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="newsletter-submit">
            Subscribe
          </button>
        </form>
      </div>
      <div className="links">
        {/* 🔗 Quick Links */}
        <div className="quick-contact">
          <div className="quick-links">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a href="/" className="hover:text-blue-400">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-blue-400">
                  About
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-blue-400">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* 📞 Contact Information */}
          <div className="contact" style={{ textAlign: "left"}}>
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="mt-3">
              <i class="fa-solid fa-location-dot"></i> 123 Street, City, Country
            </p>
            <p>
              <i class="fa-solid fa-link"></i>yourwebsite.com
            </p>
            <p>
              <i class="fa-solid fa-phone"></i> +123 456 7890
            </p>
          </div>
        </div>
        {/* 📢 Social Sharing Buttons */}
        <div className="social-sharing-buttons">
          <h3 className="text-lg font-semibold">Share Our Blog</h3>
          <div className="social-sharing-buttons-links">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${currentURL}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 text-2xl"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${currentURL}&text=Check%20this%20out!`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500 text-2xl"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>

            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${currentURL}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-800 text-2xl"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href={`https://api.whatsapp.com/send?text=Check%20this%20out:%20${currentURL}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-600 text-2xl"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
        </div>
      </div>
      {/* 🔒 Privacy & Terms */}
      <div
        className="privacy&copyrights"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <div className="privacy">
          <a href="/privacy-policy" className="hover:text-gray-200">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="/terms" className="hover:text-gray-200">
            Terms & Conditions
          </a>
        </div>

        {/* Ⓒ Copyright */}
        <div className="copyrights">
          © {new Date().getFullYear()} YourWebsite. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;