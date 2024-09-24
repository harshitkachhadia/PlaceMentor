import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'black', color: 'gray', padding: '2rem 0 3rem 0'}}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap',marginBottom:'-20px' }}>
        
        {/* Section 1: Interesting Line & Social Links */}
        <div className="footer-section" style={{ flex: '1', margin: '1rem' }}>
          <h3 style={{ color: '#18FFFF' }}>Stay Connected!</h3>
          <p style={{ marginBottom: '1rem' }}>Join us and never miss an opportunity!</p>
          <div className="social-icons">
            <a href="https://linkedin.com" style={{ color: '#00FFFF', marginRight: '1rem'}}>
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="https://github.com" style={{ color: '#00FFFF', marginRight: '1rem' }}>
              <i className="fab fa-github fa-2x"></i>
            </a>
          </div>
        </div>
        
        {/* Section 2: Pages Links */}
        <div className="footer-section" style={{ flex: '1', margin: '1rem' }}>
          <h3 style={{ color: '#18FFFF' }}>Quick Links</h3>
          <ul style={{ listStyleType: 'none', padding: 0  }}>
            <li style={{marginBottom:'0.1rem' }} ><a href="/resources" style={{ color: '#FFFFFF'}}>Resources</a></li>
            <li style={{marginBottom:'0.1rem' }}><a href="/experience" style={{ color: '#FFFFFF'}}>Experience</a></li>
            <li><a href="/forum" style={{ color: '#FFFFFF'}}>Discussion Forum</a></li>
          </ul>
        </div>
        
        {/* Section 3: Contact Us */}
        <div className="footer-section" style={{ flex: '1', margin: '1rem' }}>
          <h3 style={{ color: '#18FFFF' }}>Contact Us</h3>
          <p>Email: info@placementor.com</p>
          <p>Phone: +123 456 xxxx</p>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div style={{ textAlign: 'center', marginTop: '2rem', borderTop: '1px solid gray', paddingTop: '1rem' }}>
        <p>© 2024 PlaceMentor. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
