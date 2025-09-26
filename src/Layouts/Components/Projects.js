import React, { useState, useEffect } from 'react';

export const Projects = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      id: 1,
      title: "El Reino",
      description: "A modern and elegant website showcasing creative design and smooth user experience with beautiful animations and responsive layout.",
      technologies: ["MERN Stack", "CSS3", "Responsive Design"],
      liveUrl: "https://el-reino.netlify.app/",
      image: "el-reino.png", 
      category: "Web Development",
      status: "Live"
    },
    {
      id: 2,
      title: "Sublimaru", 
      description: "Clothing e-commerce platform with a sleek design, user-friendly interface, and seamless shopping experience.",
      technologies: ["Modern CSS", "JavaScript", "UI/UX Design"],
      liveUrl: "https://sublimaru.netlify.app/",
      image: "sublimaru.png",
      category: "Web Application",
      status: "Live"
    }
  ];

  return (
    <section className="projects-section">
      <div className="container">
        <div className="title fade-in">
          <img src="coding.jpg" alt="Projects Icon" />
          <div>
            <h2 className="slide-in-blurred-right">Featured Projects</h2>
            <p className="fade-in delay-1">
              Explore some of my recent work and creative solutions
            </p>
          </div>
        </div>

        <div className={`projects-grid ${animate ? 'animate' : ''}`}>
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card stagger-animation delay-${index + 2}`}
            >
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={`${project.title} preview`}
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/400x250/398ac0/ffffff?text=" + project.title;
                  }}
                />
                <div className="project-overlay">
                  <div className="project-status">
                    <span className={`status-badge ${project.status.toLowerCase()}`}>
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <span className="project-category">{project.category}</span>
                </div>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    🌐 View Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
