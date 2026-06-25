import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '8rem 2rem 4rem 2rem', textAlign: 'center' }}>
      <div className="page-card" style={{ padding: '4rem 2rem', position: 'relative', background: 'linear-gradient(135deg, rgba(243, 232, 255, 0.85), rgba(252, 231, 243, 0.85))' }}>
        <h1 className="text-gradient" style={{ marginBottom: '1rem' }}>Contact Us</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '4rem', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 4rem auto' }}>We're here to help! Whether you have a question, need support, or want to give feedback, reach out to us directly on WhatsApp.</p>
      
      <div className="contact-cards-container">
        <a href="https://wa.me/919250615962" target="_blank" rel="noreferrer" style={{ flex: 1, textDecoration: 'none', transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
          <div style={{ background: 'rgba(255, 255, 255, 0.6)', border: '1px solid rgba(255, 255, 255, 0.8)', height: '100%', position: 'relative', padding: '3rem 2rem', borderRadius: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: 80, height: 80, borderRadius: '20px', background: 'linear-gradient(135deg, #F3E8FF, #FCE7F3)', color: 'var(--primary-purple)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', marginBottom: '1.5rem', boxShadow: '0 10px 20px rgba(168, 82, 201, 0.1)' }}>
              <FaWhatsapp />
            </div>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.3rem', fontSize: '1.4rem' }}>Nehal Ajmal</h3>
            <div style={{ color: 'var(--primary-purple)', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.8rem', background: '#EDE9FE', padding: '0.2rem 0.6rem', borderRadius: '6px' }}>Co-founder</div>
            <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '1.1rem' }}>+91 92506 15962</p>
            <div style={{ marginTop: '1.5rem', background: 'linear-gradient(135deg, var(--primary-purple), var(--accent-pink))', color: 'white', padding: '0.6rem 1.5rem', borderRadius: '100px', fontSize: '0.9rem', fontWeight: 600 }}>Chat Now</div>
          </div>
        </a>

        <a href="https://wa.me/918707656458" target="_blank" rel="noreferrer" style={{ flex: 1, textDecoration: 'none', transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
          <div style={{ background: 'rgba(255, 255, 255, 0.6)', border: '1px solid rgba(255, 255, 255, 0.8)', height: '100%', position: 'relative', padding: '3rem 2rem', borderRadius: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: 80, height: 80, borderRadius: '20px', background: 'linear-gradient(135deg, #F3E8FF, #FCE7F3)', color: 'var(--primary-purple)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', marginBottom: '1.5rem', boxShadow: '0 10px 20px rgba(168, 82, 201, 0.1)' }}>
              <FaWhatsapp />
            </div>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.3rem', fontSize: '1.4rem' }}>Samia Khan</h3>
            <div style={{ color: 'var(--primary-purple)', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.8rem', background: '#EDE9FE', padding: '0.2rem 0.6rem', borderRadius: '6px' }}>Co-founder</div>
            <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '1.1rem' }}>+91 87076 56458</p>
            <div style={{ marginTop: '1.5rem', background: 'linear-gradient(135deg, var(--primary-purple), var(--accent-pink))', color: 'white', padding: '0.6rem 1.5rem', borderRadius: '100px', fontSize: '0.9rem', fontWeight: 600 }}>Chat Now</div>
          </div>
        </a>
      </div>

      <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>Our team typically responds quickly during business hours.</p>
      </div>
    </div>
  );
}
