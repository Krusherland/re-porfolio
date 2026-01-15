import React, { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    {
      href: "mailto:zaccardicristian@gmail.com",
      title: "Email me",
      icon: "📧",
    },
    {
      href: "https://www.linkedin.com/in/cristian-zaccardi-5035b1267/",
      title: "LinkedIn",
      icon: "💼",
      external: true,
    },
    {
      href: "https://github.com/Krusherland",
      title: "GitHub",
      icon: "💻",
      external: true,
    },
  ];

  const formFields = [
    {
      id: "name",
      type: "text",
      label: "Your Name",
      placeholder: "What should I call you?",
    },
    {
      id: "email",
      type: "email",
      label: "Email Address",
      placeholder: "your.email@example.com",
    },
    {
      id: "message",
      type: "textarea",
      label: "Your Message",
      placeholder:
        "Tell me about your project, ask a question, or just say hi! You can write in English, Spanish, Korean, or Chinese.",
      rows: 6,
    },
  ];

  return (
    <div className="container contact-container">
      {/* Header Section */}
      <header className="contact-header">
        <div className="title fade-in">
          <img src="webdesign.png" alt="Contact Icon" />
          <div>
            <h1 className="slide-in-blurred-right">Let's Connect!</h1>
            <p className="fade-in delay-1">
              I'd love to hear from you. Whether it's a project idea, a
              question, or just a friendly hello, feel free to reach out!
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="contact-content fade-in delay-2">
        {/* Contact Form */}
        <section className="contact-form-section">
          <form
            className="contact-form stagger-animation delay-3"
            onSubmit={handleSubmit}
          >
            {formFields.map((field) => (
              <div key={field.id} className="form-group">
                <label htmlFor={field.id}>{field.label}</label>
                {field.type === "textarea" ? (
                  <textarea
                    id={field.id}
                    name={field.id}
                    value={formData[field.id]}
                    onChange={handleChange}
                    required
                    rows={field.rows}
                    placeholder={field.placeholder}
                  />
                ) : (
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    value={formData[field.id]}
                    onChange={handleChange}
                    required
                    placeholder={field.placeholder}
                  />
                )}
              </div>
            ))}
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </section>

        {/* CV Download Section */}
        <section className="cv-download-section">
          <div className="cv-download-card stagger-animation delay-5">
            <h3>📄 Download My CV</h3>
            <p>Get a copy of my curriculum vitae in your preferred language:</p>
            <div className="cv-buttons">
              <a
                href="/Cristian_Zaccardi_Resume(eng).pdf"
                download="Cristian_Zaccardi_Resume(eng).pdf"
                className="btn btn-cv btn-english"
                title="Download CV in English"
              >
                🇺🇸 English CV
              </a>
              <a
                href="/Cristian_Zaccardi_Resume.pdf"
                download="Cristian_Zaccardi_Resume.pdf"
                className="btn btn-cv btn-spanish"
                title="Download CV in Spanish"
              >
                🇪🇸 CV en Español
              </a>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="contact-cta">
          <div className="cta-card">
            <h3>Let's Build Something Amazing Together!</h3>
            <p>
              I'm always excited to collaborate on new projects, discuss
              innovative ideas, or help bring your vision to life.
            </p>
            {/* Social Links */}
            <section className="contact-social">
              <div className="social-links stagger-animation delay-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="social-link"
                    title={link.title}
                    {...(link.external && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
};
