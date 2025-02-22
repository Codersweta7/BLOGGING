import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsHovered(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div style={{ position: 'fixed', bottom: '40px', right: '20px', zIndex: '1000' }}>
      {isVisible && (
        <button
          onClick={scrollToTop}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            display: 'inline-block',  
            width: '50px',            
            height: '50px',           
            padding: '10px',
            fontSize: '18px',
            background: 'linear-gradient(135deg, #00274D, #004080, #0056b3)', 
            color: '#ffffff',
            border: 'none',
            borderRadius: '50%',
            cursor: 'pointer',
            boxShadow: isHovered
              ? '0 0 15px rgba(0, 85, 179, 1)'
              : '0 0 10px rgba(0, 85, 179, 0.7)',
            transform: isHovered ? 'scale(1.2)' : 'scale(1)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
