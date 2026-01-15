import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  const stats = [
    { number: "5+", label: "Years Teaching", icon: "📚" },
    { number: "Full-Stack", label: "Developer", icon: "💻" },
    { number: "2+", label: "Live Projects", icon: "🚀" },
    { number: "∞", label: "Coffee Cups", icon: "☕" }
  ];

  const techStack = [
    { name: "React", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "MongoDB", category: "Database" },
    { name: "MySQL", category: "Database" },
    { name: "Java", category: "Backend" },
    { name: "Python", category: "Backend" },
    { name: "C#", category: "Backend" },
    { name: "PHP", category: "Backend" }
  ];

  const featuredProjects = [
    {
      id: 1,
      title: "El Reino",
      description: "Modern website with beautiful animations",
      technologies: ["MERN Stack", "CSS3"],
      liveUrl: "https://el-reino.netlify.app/",
      image: "el-reino.png"
    },
    {
      id: 2,
      title: "Sublimaru",
      description: "Clothing e-commerce platform",
      technologies: ["JavaScript", "UI/UX"],
      liveUrl: "https://sublimaru.netlify.app/",
      image: "sublimaru.png"
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section fade-in">
        <div className="hero-content">
          <div className="hero-badge">👋 Hey there! I'm Cristian</div>
          <h1 className="hero-title">
            Building Digital Solutions<br />
            Through <span className="gradient-text">Code</span> & <span className="gradient-text">Education</span>
          </h1>
          <div className="hero-cta">
            <Link to="/projects" className="btn btn-primary">
              🚀 View My Work
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              📄 Get in Touch
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="code-animation">
            <div className="code-line">const developer = &#123;</div>
            <div className="code-line indent">name: "Cristian",</div>
            <div className="code-line indent">loves: ["coding", "teaching", "music"],</div>
            <div className="code-line indent">approach: "marathon-mode" 🏃‍♂️</div>
            <div className="code-line">&#125;;</div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section stagger-animation delay-2">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="tech-section">
        <div className="section-header">
          <h2 className="section-title">Tech Stack</h2>
          <p className="section-subtitle">Tools I use to bring ideas to life</p>
        </div>
        <div className="tech-grid">
          {techStack.map((tech, index) => (
            <div key={index} className="tech-item">
              <span className="tech-name">{tech.name}</span>
              <span className="tech-category">{tech.category}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="featured-section">
        <div className="section-header">
          <h2 className="section-title">Featured Work</h2>
          <p className="section-subtitle">Projects I've brought to life</p>
        </div>
        <div className="featured-grid">
          {featuredProjects.map((project, index) => (
            <div key={project.id} className="featured-card" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="featured-image">
                <img 
                  src={project.image} 
                  alt={project.title}
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/400x250/00d4ff/0a192f?text=" + project.title;
                  }}
                />
              </div>
              <div className="featured-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="featured-tech">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="featured-link">
                  View Live →
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="section-cta">
          <Link to="/projects" className="btn btn-outline">
            See All Projects →
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Let's Create Something Together</h2>
          <p>
            Whether you need a website, want to collaborate, or just chat about code and music 🎸, 
            I'm always up for a conversation!
          </p>
          <Link to="/contact" className="btn btn-primary btn-large">
            💬 Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};
