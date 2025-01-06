import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: 'black',
      color: 'gray',
      padding: '8rem 0 2rem 0',
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        marginBottom: '-20px',
      }}>
        
        <div className="footer-section" style={{
          flex: '1',
          margin: '2rem', 
        }}>
          <h3 style={{
            color: '#18FFFF',
            fontSize: '1.5rem', 
            marginBottom: '1rem'
          }}>
            Stay Connected!
          </h3>
          <p style={{
            marginBottom: '2rem', 
          }}>
            Join us and never miss an opportunity!
          </p>
          <div className="social-icons">
            <a href="https://linkedin.com" style={{
              color: '#00FFFF',
              marginRight: '2rem', 
            }}>
              <i className="fab fa-linkedin fa-2x"></i> 
            </a>
            <a href="https://github.com" style={{
              color: '#00FFFF',
              marginRight: '2rem', 
            }}>
              <i className="fab fa-github fa-2x"></i> 
            </a>
          </div>
        </div>
        
        <div className="footer-section" style={{
          flex: '1',
          margin: '2rem', 
        }}>
          <h3 style={{
            color: '#18FFFF',
            fontSize: '1.5rem', 
            marginBottom: '1rem'
          }}>
            Quick Links
          </h3>
          <ul style={{
            listStyleType: 'none',
            padding: 0,
          }}>
            <li style={{
              marginBottom: '0.5rem', 
            }}>
              <a href="/resources" style={{
                color: '#FFFFFF',
                fontSize: '1.2rem',
              }}>
                Resources
              </a>
            </li>
            <li style={{
              marginBottom: '0.5rem', 
            }}>
              <a href="/placementInsights" style={{
                color: '#FFFFFF',
                fontSize: '1.2rem', 
              }}>
                Experiences
              </a>
            </li>
            <li>
              <a href="/oppturnities" style={{
                color: '#FFFFFF',
                fontSize: '1.2rem', 
              }}>
                Discussion Forum
              </a>
            </li>
          </ul>
        </div>
        
        <div className="footer-section" style={{
          flex: '1',
          margin: '2rem', 
        }}>
          <h3 style={{
            color: '#18FFFF',
            fontSize: '1.5rem',
            marginBottom: '1rem' 
          }}>
            Contact Us
          </h3>
          <p style={{
            fontSize: '1.2rem', 
          }}>
            Email: info@placementor.com
          </p>
          <p style={{
            fontSize: '1.2rem', 
          }}>
            Phone: +123 456 xxxx
          </p>
        </div>
      </div>
      
      <div style={{
        textAlign: 'center',
        marginTop: '4rem', 
        borderTop: '1px solid gray',
        paddingTop: '2rem', 
      }}>
        <p style={{
          fontSize: '1.2rem', 
        }}>
          © 2024 PlaceMentor. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;