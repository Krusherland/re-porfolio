import React, { useEffect, useState } from "react";

export const PLanguages = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const technologies = [
    { name: "JavaScript", level: 80, icon: "javascript.png", color: "#F7DF1E", experience: "2+ years" },
    { name: "React", level: 75, icon: "react.png", color: "#61DAFB", experience: "1+ years" },
    { name: "MySQL", level: 70, icon: "mysql.png", color: "#4479A1", experience: "1+ years" },
    { name: "Java", level: 65, icon: "java.webp", color: "#ED8B00", experience: "1+ years" },
  ];

  return (
    <div className="languagesItem">
      <div className="table" style={{ 
        flex: '0 0 45%', 
        minWidth: '350px',
        maxWidth: '450px'
      }}>
        <caption>💻 Tech Stack & Skills</caption>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: 'var(--spacing-md)'
        }}>
          {technologies.map((tech, index) => (
            <div key={tech.name} style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 'var(--spacing-sm)',
              padding: 'var(--spacing-sm)',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: 'var(--border-radius-sm)',
              transition: 'var(--transition-medium)',
              borderLeft: `3px solid ${tech.color}`,
              minHeight: '55px'
            }}>
              <img 
                src={tech.icon} 
                alt={`${tech.name} logo`} 
                className="langIcon"
                style={{ 
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                  flexShrink: 0
                }}
              />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  marginBottom: 'var(--spacing-xs)',
                  flexWrap: 'wrap',
                  gap: 'var(--spacing-xs)'
                }}>
                  <span style={{ fontWeight: '600', fontSize: '0.95rem' }}>{tech.name}</span>
                  <span style={{ 
                    fontSize: '0.8rem', 
                    color: 'var(--text-color-muted)',
                    flexShrink: 0
                  }}>
                    {tech.experience}
                  </span>
                </div>
                <div className="skill-progress">
                  <div 
                    className="skill-progress-bar"
                    style={{ 
                      width: animate ? `${tech.level}%` : '0%',
                      background: `linear-gradient(90deg, ${tech.color}aa, ${tech.color})`,
                      animationDelay: `${index * 0.2 + 0.5}s`
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div style={{ 
        flex: '1 1 50%',
        minWidth: '300px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <p style={{ 
          fontSize: '1.1rem',
          lineHeight: '1.7',
          marginBottom: 'var(--spacing-lg)'
        }}>
          From teaching <span>English</span> to crafting digital experiences, 
          I discovered my passion for <span>creating</span> meaningful solutions 
          through code. Every project is an opportunity to <span>learn</span>,   
          <span>grow</span>, and build something <span>amazing</span>!
        </p>
        
        <div style={{ 
          padding: 'var(--spacing-md)',
          background: 'rgba(79, 195, 247, 0.1)',
          borderRadius: 'var(--border-radius-sm)',
          borderLeft: '4px solid var(--brand-color-plane)'
        }}>
          <strong style={{ color: 'var(--text-color-accent)' }}>Currently Learning:</strong>
          <p style={{ margin: 'var(--spacing-xs) 0 0 0', fontSize: '0.95rem' }}>
            PHP, Python and MERN Stack (MongoDB, Express.js, React, Node.js)
          </p>
        </div>
      </div>
    </div>
  );
};
