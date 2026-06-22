import React from 'react';

export default function Terms() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '8rem 2rem 4rem 2rem', textAlign: 'left', color: 'var(--text-primary)' }}>
      <div className="page-card" style={{ position: 'relative', padding: '3rem', borderRadius: '24px' }}>
         <h1 className="text-gradient" style={{ marginBottom: '0.5rem' }}>Terms of Service</h1>
         <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}><strong>Last Updated: June 2026</strong></p>
         
         <div style={{ lineHeight: 1.8, fontSize: '1rem', color: 'var(--text-secondary)' }}>
            <p style={{ marginBottom: '1.5rem' }}>Welcome to HerBloom.</p>
            <p style={{ marginBottom: '2.5rem' }}>These Terms of Service govern your use of the HerBloom mobile application. By downloading, installing, or using HerBloom, you agree to these Terms. If you do not agree with these Terms, please do not use the app.</p>

            <h2 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontSize: '1.3rem' }}>1. About HerBloom</h2>
            <p style={{ marginBottom: '1.5rem' }}>HerBloom is a women's health platform designed to support users through different stages of life, including Menstrual Health, Fertility & Reproductive Health, Pregnancy, Postpartum Recovery, Menopause, and General Wellness. The platform also includes educational resources, reminders, a Health Vault for storing health records, and an AI-powered health assistant.</p>

            <h2 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontSize: '1.3rem' }}>2. Important Medical Disclaimer</h2>
            <p style={{ marginBottom: '1.5rem' }}><strong>HerBloom is not a medical device and does not provide medical advice, diagnosis, or treatment.</strong></p>
            <p style={{ marginBottom: '1.5rem' }}>Information provided through The AI Assistant, Educational content, Cycle predictions, Health insights, Reminders, and Wellness recommendations is intended for informational and educational purposes only.</p>
            <p style={{ marginBottom: '2.5rem' }}>Always seek advice from a qualified healthcare professional regarding medical concerns, symptoms, diagnoses, treatments, or medications.</p>

            <h2 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontSize: '1.3rem' }}>3. Creating an Account</h2>
            <p style={{ marginBottom: '0.5rem' }}>You must be at least 13 years old to use HerBloom. By creating an account, you agree that:</p>
            <ul style={{ marginBottom: '2.5rem', paddingLeft: '1.5rem' }}>
              <li>The information you provide is accurate and current.</li>
              <li>You are responsible for maintaining the security of your account.</li>
              <li>You will keep your login credentials confidential.</li>
              <li>You are responsible for all activity that occurs under your account.</li>
            </ul>

            <h2 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontSize: '1.3rem' }}>4. Your Health Data</h2>
            <p style={{ marginBottom: '2.5rem' }}>Your health information belongs to you. By using HerBloom, you grant us permission to securely process and store your information solely for providing app functionality and services. You may delete your account and associated data at any time.</p>

            <h2 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontSize: '1.3rem' }}>5. HerBloom Free Plan</h2>
            <p style={{ marginBottom: '2.5rem' }}>The Free Plan includes access to core HerBloom features. Free users may upload and store up to 3 health documents including Ultrasound reports, Blood reports, Prescriptions, Medical records, and Diagnostic reports. Additional storage requires a HerBloom Pro subscription.</p>

            <h2 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontSize: '1.3rem' }}>6. HerBloom Pro Subscription</h2>
            <p style={{ marginBottom: '0.5rem' }}><strong>Subscription Plans:</strong> Monthly Plan: ₹149/month | Yearly Plan: ₹1199/year</p>
            <p style={{ marginBottom: '0.5rem' }}><strong>Pro Benefits:</strong> Unlimited Health Vault storage, Extended AI Assistant access, Advanced health insights, Future premium tools and features, and Priority support.</p>
            <p style={{ marginBottom: '0.5rem' }}><strong>Payment Process:</strong> Payments are currently processed manually through UPI (UPI ID: 9250615962@ybl). After making a payment, users may share their payment confirmation through WhatsApp.</p>
            <p style={{ marginBottom: '2.5rem' }}><strong>Refund Policy:</strong> Refund requests are reviewed on a case-by-case basis. For payment-related issues, please contact HerBloom Support through WhatsApp.</p>

            <h2 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontSize: '1.3rem' }}>7. Acceptable Use</h2>
            <p style={{ marginBottom: '2.5rem' }}>You agree not to: Access another user's account, Attempt to bypass security measures, Reverse engineer the application, Upload harmful or unlawful content, Use the platform for fraudulent activities, or Misuse HerBloom services. Violation of these terms may result in suspension or termination of your account.</p>

            <h2 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontSize: '1.3rem' }}>8. AI Health Assistant & Accuracy</h2>
            <p style={{ marginBottom: '1.5rem' }}>The HerBloom AI Assistant is designed to provide educational guidance related to women's health topics. The AI may occasionally provide inaccurate, incomplete, or outdated information. Always verify important health decisions with a qualified healthcare professional.</p>
            <p style={{ marginBottom: '2.5rem' }}>HerBloom's cycle predictions, fertility estimates, and insights are designed to provide educational guidance and wellness support only. Health conditions and experiences vary significantly between individuals. Predictions and insights generated by HerBloom may not always reflect actual outcomes and should not be relied upon as a substitute for professional medical advice.</p>

            <h2 style={{ color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '1rem', fontSize: '1.3rem' }}>9. Contact Us</h2>
            <p style={{ marginBottom: '1.5rem' }}>For support, billing questions, feedback, or concerns, contact HerBloom Support via WhatsApp:</p>
            <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
              <li>+91 92506 15962</li>
              <li>+91 87076 56458</li>
            </ul>
            <p style={{ marginBottom: '1.5rem' }}>Thank you for being a part of HerBloom and trusting us with your health journey.</p>
         </div>
      </div>
    </div>
  );
}
