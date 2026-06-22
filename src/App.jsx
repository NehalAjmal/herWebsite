import React, { useState, useEffect } from 'react';
import './index.css';
import appIcon from './assets/icon.png';
import { FaApple, FaAndroid, FaCheckCircle, FaStar, FaWhatsapp, FaRobot, FaBaby, FaHeart } from 'react-icons/fa';
import { FiCalendar, FiLock, FiActivity, FiBookOpen, FiTarget, FiStar as FiStarOutline } from 'react-icons/fi';

import Privacy from './Privacy';
import Terms from './Terms';
import Contact from './Contact';

function App() {
  const [hash, setHash] = useState(window.location.hash);

  // Simple scroll reveal effect
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.reveal');
      elements.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 50) {
          el.classList.add('active');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hash routing effect
  useEffect(() => {
    const onHashChange = () => {
      setHash(window.location.hash);
      window.scrollTo(0, 0); // Scroll to top when navigating
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const renderHome = () => (
    <>
      <main className="hero">
        <div className="badge" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', justifyContent: 'center' }}>
          <FiStarOutline /> Your Premium Wellness Companion
        </div>

        <div className="hero-icon-wrapper">
          <div className="hero-icon-inner">
            <img src={appIcon} alt="HerBloom" className="hero-icon" />
          </div>
        </div>

        <h1>
          Every Stage. <br />
          <span className="text-gradient">Every Milestone. Every Her.</span>
        </h1>
        <p>
          Join thousands of women who trust HerBloom to track their cycle, find personalized insights, and secure their health data.
        </p>

        <div className="cta-group">
          <a href="https://github.com/NehalAjmal/herWebsite/releases/download/v1.0.0/herbloom.apk" download style={{ textDecoration: 'none' }}>
            <button className="btn-secondary" style={{ background: 'var(--text-primary)', color: 'white' }}>
              <FaAndroid size={24} />
              Get it on Android
            </button>
          </a>
        </div>

        {/* Abstract UI Mockup */}
        <div className="showcase-container">
          <div className="glass-card card-1">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ width: 40, height: 40, borderRadius: 12, background: '#EDE9FE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', color: 'var(--primary-purple)' }}><FiCalendar /></div>
              <div>
                <h4 style={{ margin: 0, fontSize: '1rem' }}>Next Period</h4>
                <p style={{ margin: 0, fontSize: '0.8rem', color: '#6B7280' }}>In 4 Days</p>
              </div>
            </div>
            <div style={{ height: 8, borderRadius: 4, background: '#E5E7EB', overflow: 'hidden' }}>
              <div style={{ width: '70%', height: '100%', background: 'var(--primary-purple)' }}></div>
            </div>
          </div>

          <div className="glass-card card-2">
            <h4 style={{ marginBottom: '1rem' }}>Daily Insight</h4>
            <p style={{ fontSize: '0.9rem', color: '#6B7280', lineHeight: 1.5 }}>
              Your energy levels might dip today due to hormonal shifts. Try some light stretching or yoga.
            </p>
            <div style={{ marginTop: '1rem', padding: '0.8rem', borderRadius: '12px', background: '#FDF2F8', color: 'var(--accent-pink)', fontSize: '0.9rem', fontWeight: 600 }}>
              Read more in Learn Hub
            </div>
          </div>

          <div className="glass-card card-3">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
              <div>
                <h4 style={{ fontSize: '1.05rem', margin: 0, marginBottom: '0.2rem' }}>Secure Vault</h4>
                <p style={{ fontSize: '0.75rem', color: '#6B7280', margin: 0 }}>Encrypted & Private</p>
              </div>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#E0E7FF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', color: 'var(--primary-purple)' }}><FiLock /></div>
            </div>

            {/* Abstract Documents UI */}
            <div style={{ display: 'flex', gap: '0.6rem' }}>
              <div style={{ flex: 1, background: 'rgba(255,255,255,0.9)', borderRadius: '10px', padding: '0.6rem', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
                <div style={{ height: '6px', width: '60%', background: '#18191E', borderRadius: '3px', marginBottom: '0.4rem', opacity: 0.8 }}></div>
                <div style={{ height: '4px', width: '40%', background: '#6B7280', borderRadius: '2px', opacity: 0.6 }}></div>
                <div style={{ marginTop: '0.6rem', background: '#DBEAFE', width: 'fit-content', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.55rem', color: '#1D4ED8', fontWeight: 600 }}>Blood Report</div>
              </div>
              <div style={{ flex: 1, background: 'rgba(255,255,255,0.9)', borderRadius: '10px', padding: '0.6rem', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
                <div style={{ height: '6px', width: '50%', background: '#18191E', borderRadius: '3px', marginBottom: '0.4rem', opacity: 0.8 }}></div>
                <div style={{ height: '4px', width: '30%', background: '#6B7280', borderRadius: '2px', opacity: 0.6 }}></div>
                <div style={{ marginTop: '0.6rem', background: '#FCE7F3', width: 'fit-content', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.55rem', color: '#BE185D', fontWeight: 600 }}>Ultrasound</div>
              </div>
            </div>
          </div>

          <div className="glass-card card-4">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#D1FAE5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#059669', fontSize: '1.2rem' }}>
                <FaWhatsapp />
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: '0.9rem' }}>Chat with Founders</h4>
                <p style={{ margin: 0, fontSize: '0.75rem', color: '#6B7280' }}>Live WhatsApp Support</p>
              </div>
            </div>
          </div>

          <div className="glass-card card-5">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <div style={{ fontSize: '1.2rem', color: 'var(--primary-purple)' }}><FaBaby /></div>
                <h4 style={{ margin: 0, fontSize: '0.9rem' }}>Pregnancy Goal</h4>
              </div>
              <FaCheckCircle color="var(--primary-purple)" />
            </div>
          </div>
        </div>
      </main>

      <section className="features-section">
        <h2 className="section-title" style={{ marginBottom: '1rem' }}>Everything you need. <span className="text-gradient">In one place.</span></h2>
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '4rem', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 4rem auto' }}>Custom fit for every unique stage of your journey.</p>

        <div className="bento-grid">
          {/* Large Primary Box */}
          <div className="bento-item bento-large bento-item-purple">
            <div className="bento-icon" style={{ color: 'var(--primary-purple)' }}><FiActivity /></div>
            <div className="bento-content">
              <h3>Intelligent Tracker</h3>
              <p>Log your periods, track symptoms like cramps or bloating, and record your daily moods. HerBloom instantly predicts your fertile window and next period with precision. Log your flow levels from spotting to heavy, add personal notes, and let our intelligent system help you deeply understand your body's natural rhythm over time.</p>
            </div>
            {/* Abstract Tracker Logs */}
            <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.8rem', paddingTop: '2rem' }}>
              {/* Log Card 1 */}
              <div style={{ width: '100%', background: 'rgba(255,255,255,0.7)', borderRadius: '16px', padding: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', background: '#FCE7F3', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-pink)' }}>
                  <FiCalendar size={18} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ height: '12px', width: '60%', background: '#18191E', borderRadius: '4px', marginBottom: '0.4rem', opacity: 0.8 }}></div>
                  <div style={{ height: '8px', width: '30%', background: '#6B7280', borderRadius: '4px', opacity: 0.6 }}></div>
                </div>
                <div style={{ background: '#EDE9FE', padding: '0.4rem 0.8rem', borderRadius: '100px' }}>
                  <div style={{ height: '8px', width: '30px', background: 'var(--primary-purple)', borderRadius: '4px' }}></div>
                </div>
              </div>

              {/* Log Card 2 */}
              <div style={{ width: '100%', background: 'rgba(255,255,255,0.7)', borderRadius: '16px', padding: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', background: '#FCE7F3', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-pink)' }}>
                  <FiCalendar size={18} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ height: '12px', width: '50%', background: '#18191E', borderRadius: '4px', marginBottom: '0.4rem', opacity: 0.8 }}></div>
                  <div style={{ height: '8px', width: '25%', background: '#6B7280', borderRadius: '4px', opacity: 0.6 }}></div>
                </div>
                <div style={{ background: '#EDE9FE', padding: '0.4rem 0.8rem', borderRadius: '100px' }}>
                  <div style={{ height: '8px', width: '40px', background: 'var(--primary-purple)', borderRadius: '4px' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Regular Box */}
          <div className="bento-item bento-item-blue">
            <div className="bento-icon" style={{ color: '#2563EB' }}><FaRobot /></div>
            <div className="bento-content">
              <h3>Ask AI</h3>
              <p>Your personalized health assistant. Get instant, science-backed guidance anytime.</p>
            </div>
          </div>

          {/* Tall Box */}
          <div className="bento-item bento-tall bento-item-amber">
            <div className="bento-icon" style={{ color: '#D97706' }}><FiBookOpen /></div>
            <div className="bento-content">
              <h3>Learn Hub</h3>
              <p>Explore expert-reviewed articles covering PCOS, Menopause, Pregnancy, and everyday well-being.</p>
            </div>
            {/* Abstract Article List */}
            <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.8rem', paddingTop: '2rem' }}>
              <div style={{ width: '100%', height: '60px', background: 'rgba(255,255,255,0.7)', borderRadius: '12px', padding: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <div style={{ width: '30px', height: '30px', background: '#FDE68A', borderRadius: '6px' }}></div>
                <div style={{ height: '8px', width: '60%', background: '#D1D5DB', borderRadius: '4px' }}></div>
              </div>
              <div style={{ width: '100%', height: '60px', background: 'rgba(255,255,255,0.7)', borderRadius: '12px', padding: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <div style={{ width: '30px', height: '30px', background: '#FBCFE8', borderRadius: '6px' }}></div>
                <div style={{ height: '8px', width: '40%', background: '#D1D5DB', borderRadius: '4px' }}></div>
              </div>
              <div style={{ width: '100%', height: '60px', background: 'rgba(255,255,255,0.7)', borderRadius: '12px', padding: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <div style={{ width: '30px', height: '30px', background: '#D1FAE5', borderRadius: '6px' }}></div>
                <div style={{ height: '8px', width: '70%', background: '#D1D5DB', borderRadius: '4px' }}></div>
              </div>
            </div>
          </div>

          {/* Regular Box */}
          <div className="bento-item bento-item-pink">
            <div className="bento-icon" style={{ color: '#DB2777' }}><FiTarget /></div>
            <div className="bento-content">
              <h3>Custom Goals</h3>
              <p>Switch between Tracking, Conceiving, Pregnancy, and Menopause modes instantly.</p>
            </div>
          </div>

          {/* Wide Box */}
          <div className="bento-item bento-wide bento-item-dark">
            <div className="bento-icon" style={{ color: '#FBBF24' }}><FaStar /></div>
            <div className="bento-content">
              <h3 style={{ marginBottom: '1.5rem' }}>Unlock Premium</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', color: '#E5E7EB', fontSize: '0.95rem', lineHeight: 1.5 }}>
                  <FaCheckCircle color="#FBBF24" size={18} style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                  <span><strong>Unlimited vault storage</strong> for your medical records</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', color: '#E5E7EB', fontSize: '0.95rem', lineHeight: 1.5 }}>
                  <FaCheckCircle color="#FBBF24" size={18} style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                  <span><strong>20 dedicated Ask AI</strong> messages per day</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', color: '#E5E7EB', fontSize: '0.95rem', lineHeight: 1.5 }}>
                  <FaCheckCircle color="#FBBF24" size={18} style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                  <span><strong>Advanced cycle insights</strong> and personalized tracking</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', color: '#E5E7EB', fontSize: '0.95rem', lineHeight: 1.5 }}>
                  <FaCheckCircle color="#FBBF24" size={18} style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                  <span><strong>Priority support</strong> directly from our experts</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Regular Box */}
          <div className="bento-item bento-item-green">
            <div className="bento-icon" style={{ color: '#059669' }}><FaWhatsapp /></div>
            <div className="bento-content">
              <h3>Founders Chat</h3>
              <p>Need help? Chat directly with the founders via WhatsApp for instant support.</p>
            </div>
          </div>

          {/* Regular Box */}
          <div className="bento-item bento-item-gray">
            <div className="bento-icon" style={{ color: '#4B5563' }}><FiLock /></div>
            <div className="bento-content">
              <h3>Secure Vault</h3>
              <p>Store your lab reports and prescriptions securely with end-to-end encryption.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bottom-cta">
        <h2>Ready to prioritize your health?</h2>
        <p>Join HerBloom today and start your journey to better wellness, tracking, and understanding.</p>
        <button className="btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1.2rem', margin: '0 auto' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Download HerBloom Free
        </button>
      </section>
    </>
  );

  let content;
  if (hash === '#privacy') content = <Privacy />;
  else if (hash === '#terms') content = <Terms />;
  else if (hash === '#contact') content = <Contact />;
  else content = renderHome();

  return (
    <div className="app-container">
      {/* Background aesthetic blobs */}
      <div className="blob-container">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      <nav className="navbar">
        <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="logo-container">
            <div className="nav-icon-wrapper">
              <img src={appIcon} alt="HerBloom Icon" className="nav-icon" />
            </div>
            <div className="logo">HerBloom</div>
          </div>
        </a>
        <a href="#contact" style={{ textDecoration: 'none' }}>
          <button className="btn-secondary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>
            Contact Us
          </button>
        </a>
      </nav>

      {content}

      <footer className="modern-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" style={{ textDecoration: 'none' }}><h2 className="text-gradient" style={{ fontSize: '1.8rem', margin: 0 }}>HerBloom</h2></a>
            <p className="footer-tagline">Your intelligent, secure, and personalized companion for every stage of your health journey.</p>
          </div>
          
          <div className="footer-grid">
            <div className="footer-col">
              <h4>Company</h4>
              <a href="#">Home</a>
              <a href="#contact">Contact Us</a>
            </div>
            <div className="footer-col">
              <h4>Legal</h4>
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom-modern">
          <p>&copy; {new Date().getFullYear()} HerBloom. All rights reserved.</p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', margin: 0 }}>Made with <FaHeart color="#EF4444" size={14} /> for women everywhere.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
