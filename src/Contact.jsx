import React from 'react';
import { FaWhatsapp, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  const nehalWaMsg = encodeURIComponent("Hi Nehal! I'm reaching out from the HerBloom website.");
  const samiaWaMsg = encodeURIComponent("Hi Samia! I'm reaching out from the HerBloom website.");

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '8rem 2rem 4rem 2rem', textAlign: 'center' }}>
      <div className="page-card" style={{ padding: '4rem 2rem', position: 'relative', background: 'linear-gradient(135deg, rgba(243, 232, 255, 0.85), rgba(252, 231, 243, 0.85))' }}>
        <h1 className="text-gradient" style={{ marginBottom: '1rem' }}>Contact Us</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '4rem', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 4rem auto' }}>
          We're here to help! Whether you have a question, need support, or want to give feedback, reach out to us directly on WhatsApp or connect on LinkedIn.
        </p>
        
        <div className="contact-cards-container">
          {/* Nehal Card */}
          <div style={{ background: 'rgba(255, 255, 255, 0.6)', border: '1px solid rgba(255, 255, 255, 0.8)', height: '100%', position: 'relative', padding: '3rem 2rem', borderRadius: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: 80, height: 80, borderRadius: '20px', background: 'linear-gradient(135deg, #F3E8FF, #FCE7F3)', color: 'var(--primary-purple)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', marginBottom: '1.5rem', boxShadow: '0 10px 20px rgba(168, 82, 201, 0.1)' }}>
              <FaWhatsapp />
            </div>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.3rem', fontSize: '1.4rem' }}>Nehal Ajmal</h3>
            <div style={{ color: 'var(--primary-purple)', fontSize: '0.8rem', fontWeight: 600, marginBottom: '1.5rem', background: '#EDE9FE', padding: '0.2rem 0.6rem', borderRadius: '6px' }}>Co-founder</div>
            
            <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
              <a 
                href={`https://wa.me/919250615962?text=${nehalWaMsg}`} 
                target="_blank" 
                rel="noreferrer" 
                style={{ textDecoration: 'none' }}
              >
                <div style={{ background: 'linear-gradient(135deg, var(--primary-purple), var(--accent-pink))', color: 'white', padding: '0.6rem 1.5rem', borderRadius: '100px', fontSize: '0.9rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FaWhatsapp size={16} /> Chat Now
                </div>
              </a>

              <a 
                href="https://www.linkedin.com/in/nehalajmal" 
                target="_blank" 
                rel="noreferrer" 
                style={{ textDecoration: 'none' }}
              >
                <div style={{ background: '#0A66C2', color: 'white', padding: '0.6rem 1.5rem', borderRadius: '100px', fontSize: '0.9rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FaLinkedin size={16} /> LinkedIn
                </div>
              </a>
            </div>
          </div>

          {/* Samia Card */}
          <div style={{ background: 'rgba(255, 255, 255, 0.6)', border: '1px solid rgba(255, 255, 255, 0.8)', height: '100%', position: 'relative', padding: '3rem 2rem', borderRadius: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: 80, height: 80, borderRadius: '20px', background: 'linear-gradient(135deg, #F3E8FF, #FCE7F3)', color: 'var(--primary-purple)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', marginBottom: '1.5rem', boxShadow: '0 10px 20px rgba(168, 82, 201, 0.1)' }}>
              <FaWhatsapp />
            </div>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.3rem', fontSize: '1.4rem' }}>Samia Khan</h3>
            <div style={{ color: 'var(--primary-purple)', fontSize: '0.8rem', fontWeight: 600, marginBottom: '1.5rem', background: '#EDE9FE', padding: '0.2rem 0.6rem', borderRadius: '6px' }}>Co-founder</div>
            
            <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
              <a 
                href={`https://wa.me/918707656458?text=${samiaWaMsg}`} 
                target="_blank" 
                rel="noreferrer" 
                style={{ textDecoration: 'none' }}
              >
                <div style={{ background: 'linear-gradient(135deg, var(--primary-purple), var(--accent-pink))', color: 'white', padding: '0.6rem 1.5rem', borderRadius: '100px', fontSize: '0.9rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FaWhatsapp size={16} /> Chat Now
                </div>
              </a>

              <a 
                href="https://www.linkedin.com/in/samia-khan-8754bb325" 
                target="_blank" 
                rel="noreferrer" 
                style={{ textDecoration: 'none' }}
              >
                <div style={{ background: '#0A66C2', color: 'white', padding: '0.6rem 1.5rem', borderRadius: '100px', fontSize: '0.9rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FaLinkedin size={16} /> LinkedIn
                </div>
              </a>
            </div>
          </div>
        </div>

        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginTop: '3rem' }}>Our team typically responds quickly during business hours.</p>
      </div>
    </div>
  );
}
