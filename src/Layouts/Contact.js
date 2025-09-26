import React, { useState } from 'react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container">
      <div className='title fade-in'>
        <img src="webdesign.png" alt="Contact Icon" />
        <div>
          <h1 className="slide-in-blurred-right">Let's Connect!</h1>
          <p className="fade-in delay-1">
            Ready to start a conversation? I'd love to hear from you!
          </p>
        </div>
      </div>

      <div className="fade-in delay-2">
        <p style={{ textAlign: 'center', fontSize: '1.2rem', marginBottom: 'var(--spacing-xl)' }}>
          Whether you want to discuss a project, share ideas, or just say hello in any of the 
          <span> languages</span> I speak, don't hesitate to reach out!
        </p>

        <form className="contact-form stagger-animation delay-3" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="What should I call you?"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Tell me about your project, ask a question, or just say hi! You can write in English, Spanish, Korean, or Chinese."
            />
          </div>

          <button type="submit" className="btn" style={{ width: '100%' }}>
            Send Message 
          </button>
        </form>

        <div className="social-links stagger-animation delay-4">
          <a 
            href="mailto:zaccardicristian@gmail.com" 
            className="social-link"
            title="Email me"
          >
            📧
          </a>
          <a 
            href="https://www.linkedin.com/in/cristian-zaccardi-5035b1267/" 
            className="social-link"
            title="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            💼
          </a>
          <a 
            href="https://github.com/yourusername" 
            className="social-link"
            title="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            💻
          </a>
        </div>

        <div style={{
          textAlign: 'center',
          marginTop: 'var(--spacing-xl)',
          padding: 'var(--spacing-lg)',
          background: 'var(--card-gradient)',
          borderRadius: 'var(--border-radius-md)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <h3 style={{ 
            color: 'var(--text-color-accent)', 
            marginBottom: 'var(--spacing-md)' 
          }}>
             Let's Build Something Amazing Together!
          </h3>
          <p style={{ color: 'var(--text-color-secondary)' }}>
            I'm always excited to collaborate on new projects, 
            discuss innovative ideas, or help bring your vision to life.
          </p>
        </div>
      </div>
    </div>
  );
};
