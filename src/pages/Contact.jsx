import React, { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const Contact = () => {
  useScrollReveal();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    message: '',
    isError: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ submitting: true, message: '', isError: false });

    const payload = new FormData();
    payload.append('access_key', '1d60386d-6dd6-487e-92ea-47b856f7799f');
    payload.append('subject', 'New Portfolio Contact Message');
    payload.append('name', formData.name);
    payload.append('email', formData.email);
    payload.append('user_subject', formData.subject);
    payload.append('message', formData.message);

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: payload,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setStatus({
            submitting: false,
            message: '✅ Message sent successfully! I will reach out shortly.',
            isError: false,
          });
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          throw new Error('Form submission failed');
        }
      })
      .catch((err) => {
        console.error(err);
        setStatus({
          submitting: false,
          message: '❌ Something went wrong. Please try again.',
          isError: true,
        });
      });
  };

  return (
    <main>
      {/* CONTACT HEADER */}
      <section style={{ paddingTop: '180px', paddingBottom: '20px' }}>
        <div className="section-header" style={{ marginBottom: '30px' }}>
          <p>Connect</p>
          <h1>Get In Touch</h1>
        </div>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', fontSize: '1.1rem', lineHeight: 1.7 }}>
          Whether you have a software project proposal, internship opportunity, hackathon collaboration, or technical inquiry, feel free to send a message.
        </p>
      </section>

      {/* CONTACT CONTENT GRID */}
      <section className="reveal active" style={{ paddingTop: '20px', marginBottom: '80px' }}>
        <div className="contact-grid">
          {/* Info Panel (Left) */}
          <div className="contact-info-panel glass-card gradient-border-card reveal">
            <h3>Contact Information</h3>
            <p className="contact-info-subtitle">
              Reach out directly through social channels or fill out the form for email responses.
            </p>

            <div className="contact-details-list">
              <div className="contact-detail-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h4>Email</h4>
                  <p>abhay123@gmail.com</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h4>Location</h4>
                  <p>Greater Noida, Uttar Pradesh, India</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <i className="fas fa-graduation-cap"></i>
                <div>
                  <h4>Institution</h4>
                  <p>GL Bajaj Institute of Technology &amp; Management</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '40px' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '15px' }}>Social Profiles</h4>
              <div className="footer-socials" style={{ justifyContent: 'flex-start' }}>
                <a href="https://github.com/Abhay71044" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://leetcode.com/u/Abhay_71044/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
                  <i className="fas fa-code"></i>
                </a>
                <a href="https://www.linkedin.com/in/abhay-singh-894044292" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://instagram.com/abhaychauhan71044" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Form Panel (Right) */}
          <div className="contact-form-panel glass-card gradient-border-card reveal">
            <form id="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Abhay Singh"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="abhay123@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Project Discussion"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="message">Message Details</label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  placeholder="Hi Abhay, I'd like to work with you on..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-primary" disabled={status.submitting}>
                {status.submitting ? (
                  'Sending Message...'
                ) : (
                  <>
                    Send Message <i className="fas fa-paper-plane"></i>
                  </>
                )}
              </button>

              {status.message && (
                <p
                  id="success-msg"
                  style={{
                    marginTop: '15px',
                    fontWeight: 600,
                    color: status.isError ? '#ef4444' : 'var(--accent-green)',
                  }}
                >
                  {status.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
