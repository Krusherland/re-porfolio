import React, { useState } from 'react';

export const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);
  const [activeScreenshot, setActiveScreenshot] = useState({});

  const projects = [
    {
      id: 1,
      title: "El Reino",
      tagline: "Where elegance meets functionality",
      description: "A modern and elegant website showcasing creative design and smooth user experience with beautiful animations and responsive layout.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "CSS3"],
      liveUrl: "https://el-reino.netlify.app/",
      image: "el-reino.png", 
      category: "Full-Stack Web",
      status: "Live",
      challenge: "Create a visually stunning website that loads fast and works seamlessly across all devices while maintaining a premium feel.",
      solution: "Built with the MERN stack for optimal performance. Implemented lazy loading for images, optimized animations with CSS transforms, and created a mobile-first responsive design.",
      impact: "Achieved 95+ Lighthouse score, sub-2s load time, and 40% increase in user engagement through smooth interactions.",
      timeline: "3 weeks",
      role: "Full-Stack Developer",
      screenshots: ["el-reino.png", "el-reino-2.png", "el-reino-3.png"],
      features: [
        "Smooth scroll animations",
        "Responsive grid layout",
        "Fast page transitions",
        "SEO optimized"
      ]
    },
    {
      id: 2,
      title: "Sublimaru", 
      tagline: "Fashion-forward e-commerce experience",
      description: "Clothing e-commerce platform with a sleek design, user-friendly interface, and seamless shopping experience.",
      technologies: ["JavaScript", "CSS3", "HTML5", "UI/UX Design"],
      liveUrl: "https://sublimaru.netlify.app/",
      image: "sublimaru.png",
      category: "E-Commerce",
      status: "Live",
      challenge: "Design an e-commerce platform that feels personal and engaging while making the shopping process intuitive and quick.",
      solution: "Focused on clean UI with large product images, easy navigation, and a streamlined checkout flow. Used modern CSS for smooth interactions without heavy JavaScript.",
      impact: "Created a conversion-optimized design with clear CTAs, resulting in an intuitive shopping experience that keeps users engaged.",
      timeline: "2 weeks",
      role: "Frontend Developer & UI Designer",
      screenshots: ["sublimaru.png", "sublimaru-2.png", "sublimaru-3.png"],
      features: [
        "Product showcase grid",
        "Shopping cart system",
        "Mobile-optimized checkout",
        "Clean minimalist design"
      ]
    }
  ];

  const toggleProject = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  const nextScreenshot = (projectId, screenshotsLength) => {
    setActiveScreenshot(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % screenshotsLength
    }));
  };

  const prevScreenshot = (projectId, screenshotsLength) => {
    setActiveScreenshot(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + screenshotsLength) % screenshotsLength
    }));
  };

  return (
    <section className="projects-section-hero fade-in">
      <div className="projects-container">
        <h2 className="section-title">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <div className="projects-hero-grid">
          {projects.map((project, index) => {
            const isExpanded = expandedProject === project.id;
            const currentScreenshot = activeScreenshot[project.id] || 0;

            return (
              <div 
                key={project.id} 
                className={`project-hero-card ${isExpanded ? 'expanded' : ''}`}
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {/* Main Image Section */}
                <div className="project-hero-image">
                  <img 
                    src={project.screenshots[currentScreenshot] || project.image} 
                    alt={`${project.title} preview`}
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/800x500/00d4ff/0a192f?text=${project.title}`;
                    }}
                  />
                  <div className="image-navigation">
                    <button 
                      className="nav-arrow prev" 
                      onClick={() => prevScreenshot(project.id, project.screenshots.length)}
                      aria-label="Previous screenshot"
                    >
                      ‹
                    </button>
                    <div className="screenshot-dots">
                      {project.screenshots.map((_, idx) => (
                        <span 
                          key={idx} 
                          className={`dot ${currentScreenshot === idx ? 'active' : ''}`}
                          onClick={() => setActiveScreenshot(prev => ({ ...prev, [project.id]: idx }))}
                        />
                      ))}
                    </div>
                    <button 
                      className="nav-arrow next" 
                      onClick={() => nextScreenshot(project.id, project.screenshots.length)}
                      aria-label="Next screenshot"
                    >
                      ›
                    </button>
                  </div>
                  <div className="project-hero-overlay">
                    <span className={`status-badge ${project.status.toLowerCase()}`}>
                      ● {project.status}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="project-hero-content">
                  <div className="project-hero-header">
                    <div>
                      <h3>{project.title}</h3>
                      <p className="project-tagline">{project.tagline}</p>
                    </div>
                    <span className="project-category">{project.category}</span>
                  </div>

                  <p className="project-hero-description">{project.description}</p>

                  {/* Challenge → Solution → Impact */}
                  <div className="project-story">
                    <div className="story-item">
                      <div className="story-icon challenge">💡</div>
                      <div className="story-content">
                        <h4>Challenge</h4>
                        <p>{project.challenge}</p>
                      </div>
                    </div>
                    <div className="story-item">
                      <div className="story-icon solution">⚡</div>
                      <div className="story-content">
                        <h4>Solution</h4>
                        <p>{project.solution}</p>
                      </div>
                    </div>
                    <div className="story-item">
                      <div className="story-icon impact">🎯</div>
                      <div className="story-content">
                        <h4>Impact</h4>
                        <p>{project.impact}</p>
                      </div>
                    </div>
                  </div>

                  {/* Expandable Details */}
                  {isExpanded && (
                    <div className="project-details">
                      <div className="details-grid">
                        <div className="detail-item">
                          <strong>Timeline:</strong>
                          <span>{project.timeline}</span>
                        </div>
                        <div className="detail-item">
                          <strong>Role:</strong>
                          <span>{project.role}</span>
                        </div>
                      </div>

                      <div className="project-features">
                        <h4>Key Features</h4>
                        <ul>
                          {project.features.map((feature, idx) => (
                            <li key={idx}>✓ {feature}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="project-technologies-hero">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag-hero">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="project-actions-hero">
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      🌐 View Live Site
                    </a>
                    <button 
                      className="btn btn-secondary"
                      onClick={() => toggleProject(project.id)}
                    >
                      {isExpanded ? '▲ Show Less' : '▼ More Details'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Coming Soon Card */}
        <div className="coming-soon-card">
          <div className="coming-soon-icon">🚀</div>
          <h3>More Projects Coming Soon!</h3>
          <p>Currently working on exciting new projects. Stay tuned for updates!</p>
          <div className="progress-dots">
            <span className="dot active"></span>
            <span className="dot active"></span>
            <span className="dot"></span>
          </div>
        </div>
      </div>
    </section>
  );
};
