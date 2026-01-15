import React, { useState } from "react";

export const About = () => {
  const [activeYear, setActiveYear] = useState(null);

  const whatIDo = [
    {
      icon: "💻",
      title: "Full-Stack Development",
      description: "Building web applications with React, Node.js, and databases. I dive deep into code marathons until everything clicks!",
      tech: ["React", "Node.js", "MongoDB", "MySQL"]
    },
    {
      icon: "📚",
      title: "English Teaching",
      description: "5+ years helping students discover languages. I bring the same passion to code that I bring to the classroom.",
      tech: ["Classroom Management", "Curriculum Design", "Student Engagement"]
    },
    {
      icon: "🎯",
      title: "Problem Solving",
      description: "Whether debugging code or explaining grammar, I love breaking down complex problems into simple solutions.",
      tech: ["Critical Thinking", "Communication", "Patience"]
    }
  ];

  const timeline = [
    {
      year: "2017-2022",
      title: "Teaching Degree Journey",
      subtitle: "ISFD N°174",
      description: "Completed my Teaching Degree in English. Learned how to connect with people and break down complex ideas.",
      icon: "🎓",
      color: "#00d4ff"
    },
    {
      year: "2019-Present",
      title: "English Teacher",
      subtitle: "General San Martín",
      description: "Teaching English across primary and secondary levels. Every day I practice patience, communication, and adaptability.",
      icon: "📖",
      color: "#64ffda"
    },
    {
      year: "2023-Present",
      title: "Systems Analysis",
      subtitle: "ISFD N°114 - 2nd Year",
      description: "Diving into software development and database management. Building my first academic project: a Student Management App!",
      icon: "💻",
      color: "#0099ff"
    },
    {
      year: "2024",
      title: "Web Development Programs",
      subtitle: "UTN.BA & Buenos Aires Aprende",
      description: "Completed Front-end and Back-end development courses. Started my coding marathon phase!",
      icon: "🚀",
      color: "#ffd700"
    }
  ];

  const interests = [
    { icon: "🎵", title: "Music Lover", description: "Always coding with music on - it's my fuel!" },
    { icon: "☕", title: "Coffee Enthusiast", description: "Marathon coding sessions need endless coffee" },
    { icon: "🗣️", title: "People Person", description: "I genuinely love talking and connecting with others" },
    { icon: "📚", title: "Continuous Learner", description: "Always exploring new tech and teaching methods" },
    { icon: "🎮", title: "Tech Explorer", description: "Curious about everything from code to gadgets" },
    { icon: "🌎", title: "Language Nerd", description: "Spanish, English, Portuguese, Mandarin, Korean!" }
  ];

  return (
    <div className="about-page fade-in">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <div className="about-hero-text">
            <h1 className="about-title">
              From Classroom<br />to <span className="gradient-text">Code</span>
            </h1>
            <p className="about-intro">
              Hey! I'm Cristian, an English teacher turned full-stack developer. 
              I discovered that teaching and coding share something beautiful: 
              both are about solving problems and making complex things simple.
            </p>
            <p className="about-intro">
              When I'm not in the classroom or deep in a coding marathon, 
              you'll find me jamming to music 🎵, chatting with people, 
              or perfecting my nth cup of coffee ☕.
            </p>
          </div>
          <div className="about-hero-image">
            <img 
              src="/profile.png" 
              alt="Cristian Zaccardi" 
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/300/00d4ff/0a192f?text=Cristian";
              }}
            />
            <div className="image-badge">
              <span>🎵 Always learning</span>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className="what-i-do-section">
        <h2 className="section-title">What I Do</h2>
        <p className="section-subtitle">Combining teaching, tech, and problem-solving</p>
        <div className="services-grid">
          {whatIDo.map((service, index) => (
            <div key={index} className="service-card" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-tech">
                {service.tech.map((tech, idx) => (
                  <span key={idx} className="tech-pill">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline-section">
        <h2 className="section-title">My Journey</h2>
        <p className="section-subtitle">From teaching degrees to tech degrees</p>
        <div className="timeline">
          {timeline.map((item, index) => (
            <div 
              key={index} 
              className={`timeline-item ${activeYear === index ? 'active' : ''}`}
              onMouseEnter={() => setActiveYear(index)}
              onMouseLeave={() => setActiveYear(null)}
            >
              <div className="timeline-marker" style={{background: item.color}}>
                <span className="timeline-icon">{item.icon}</span>
              </div>
              <div className="timeline-content">
                <div className="timeline-year">{item.year}</div>
                <h3 className="timeline-title">{item.title}</h3>
                <div className="timeline-subtitle">{item.subtitle}</div>
                <p className="timeline-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Beyond Code */}
      <section className="beyond-code-section">
        <h2 className="section-title">Beyond Code</h2>
        <p className="section-subtitle">What makes me, well... me!</p>
        <div className="interests-grid">
          {interests.map((interest, index) => (
            <div key={index} className="interest-card">
              <div className="interest-icon">{interest.icon}</div>
              <h3>{interest.title}</h3>
              <p>{interest.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Download CV */}
      <section className="cv-section">
        <div className="cv-card">
          <h3>Want the formal version?</h3>
          <p>Download my CV for a more traditional overview of my experience</p>
          <div className="cv-buttons">
            <a href="/CV_Cristian_Zaccardi_EN.pdf" download className="btn btn-primary">
              📄 English CV
            </a>
            <a href="/CV_Cristian_Zaccardi_ES.pdf" download className="btn btn-secondary">
              📄 Spanish CV
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
