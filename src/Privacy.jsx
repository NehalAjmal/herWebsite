import React from 'react';

export default function Privacy() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '8rem 2rem 4rem 2rem', textAlign: 'left', color: 'var(--text-primary)' }}>
      <div className="page-card" style={{ position: 'relative', padding: '3rem', borderRadius: '24px' }}>
         <h1 className="text-gradient" style={{ marginBottom: '0.5rem' }}>Privacy Policy</h1>
         <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}><strong>Last Updated: June 2026</strong></p>
         
         <div style={{ lineHeight: 1.8, fontSize: '1rem', color: 'var(--text-secondary)' }}>
            <p style={{ marginBottom: '1.5rem' }}>Welcome to HerBloom.</p>
            <p style={{ marginBottom: '1.5rem' }}>At HerBloom, we understand that your health information is personal. Whether you're tracking your menstrual cycle, navigating pregnancy, recovering postpartum, managing menopause symptoms, storing important medical records, or learning more about your health, we are committed to protecting your privacy.</p>
            <p style={{ marginBottom: '1.5rem' }}>This Privacy Policy explains what information we collect, how we use it, and how we keep it safe.</p>
            <p style={{ marginBottom: '2.5rem' }}>By using HerBloom, you agree to the practices described in this Privacy Policy.</p>

            <h2 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontSize: '1.3rem' }}>1. Information We Collect</h2>
            <p style={{ marginBottom: '1rem' }}>We collect information that helps us provide HerBloom's features and improve your experience.</p>
            <p style={{ marginBottom: '0.5rem' }}><strong>Account Information</strong><br/>When you create an account, we may collect: Name, Email address (if provided), and Date of birth.</p>
            <p style={{ marginBottom: '0.5rem' }}><strong>Health Information</strong><br/>You may choose to log health-related information, including:</p>
            <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
              <li style={{ marginBottom: '0.5rem' }}><strong>Menstrual Health:</strong> Period dates, Cycle length, Menstrual flow information, Symptoms.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Fertility & Reproductive Health:</strong> Ovulation tracking, Fertility-related information.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Pregnancy:</strong> Pregnancy progress, Pregnancy-related symptoms, Personal notes.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Postpartum Recovery:</strong> Recovery observations, Wellness tracking.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Menopause:</strong> Hot flashes, Mood changes, Sleep-related symptoms.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>General Wellness:</strong> Mood, Energy levels, Lifestyle goals, Personal health notes.</li>
            </ul>
            <p style={{ marginBottom: '1.5rem' }}>Providing this information is optional but helps us personalize your experience.</p>

            <p style={{ marginBottom: '1.5rem' }}><strong>Health Vault Documents</strong><br/>You may upload health-related documents, including: Ultrasound reports, Blood reports, Prescriptions, Diagnostic reports, Medical certificates, and Other healthcare-related records. These files are stored securely and remain associated with your account.</p>

            <p style={{ marginBottom: '2.5rem' }}><strong>AI Assistant Conversations</strong><br/>When you interact with the HerBloom AI Assistant, your questions may be processed to generate personalized responses and health-related guidance.</p>

            <h2 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontSize: '1.3rem' }}>2. How We Use Your Information</h2>
            <p style={{ marginBottom: '0.5rem' }}>We use your information to:</p>
            <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
              <li>Track and manage health information</li>
              <li>Provide cycle predictions and reminders</li>
              <li>Support pregnancy, postpartum, and menopause features</li>
              <li>Generate personalized health insights</li>
              <li>Power the AI Health Assistant</li>
              <li>Store and organize Health Vault documents</li>
              <li>Improve app performance and user experience</li>
              <li>Provide customer support</li>
            </ul>
            <p style={{ marginBottom: '2.5rem' }}>We do not sell your personal information or health data.</p>

            <h2 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontSize: '1.3rem' }}>3. Sharing Your Information</h2>
            <p style={{ marginBottom: '1.5rem' }}>HerBloom does not sell, rent, or share your personal information with advertisers, marketers, or data brokers.</p>
            <p style={{ marginBottom: '1.5rem' }}>We may work with trusted technology providers that help us operate the app, including Authentication providers, Database providers, Cloud storage providers, and AI service providers. These providers only process information necessary to provide HerBloom's features and are expected to maintain appropriate security standards.</p>
            <p style={{ marginBottom: '2.5rem' }}>We may disclose information if required by law or to protect the safety, rights, or security of our users and services.</p>

            <h2 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontSize: '1.3rem' }}>4. Health Vault</h2>
            <p style={{ marginBottom: '0.5rem' }}><strong>Free Plan:</strong> Users can store up to 3 health documents including Ultrasound reports, Prescriptions, Blood reports, and Medical records.</p>
            <p style={{ marginBottom: '0.5rem' }}><strong>HerBloom Pro:</strong> Users receive Unlimited document storage, Expanded Health Vault capacity, and Future advanced storage features.</p>
            <p style={{ marginBottom: '1.5rem' }}>Uploaded files are never sold or shared for advertising purposes.</p>

            <h2 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontSize: '1.3rem' }}>5. Data Security</h2>
            <p style={{ marginBottom: '1.5rem' }}>We use industry-standard security measures designed to protect your information, including Secure encrypted connections (HTTPS), Authentication systems, Access controls, and Secure cloud storage.</p>
            <p style={{ marginBottom: '2.5rem' }}>We encourage users to use strong passwords and keep account credentials secure.</p>

            <h2 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontSize: '1.3rem' }}>6. Contact Us</h2>
            <p style={{ marginBottom: '1.5rem' }}>If you have questions, concerns, or requests related to your privacy or data, please contact HerBloom Support via WhatsApp:</p>
            <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
              <li>+91 92506 15962</li>
              <li>+91 87076 56458</li>
            </ul>
            <p style={{ marginBottom: '1.5rem' }}>Thank you for trusting HerBloom with your health journey.</p>
         </div>
      </div>
    </div>
  );
}
