import React, { useEffect, useState } from "react";

export const Languages = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const languages = [
    { name: "Spanish", level: 100, flag: "spanish.png", description: "Native" },
    { name: "English", level: 95, flag: "english.png", description: "Fluent" },
    { name: "Korean", level: 60, flag: "korean.png", description: "Intermediate" },
    { name: "Chinese", level: 55, flag: "china.png", description: "Intermediate" }
  ];

  return (
    <div className="languagesItem">
      <div style={{ flex: 1 }}>
        <p>
          Hi! I'm <span>Cristian</span>, a passionate developer who loves 
          connecting with people through <span>multiple languages</span>. 
          Communication is at the heart of everything I do, whether it's 
          coding or conversing with people from different cultures.
        </p>
      </div>
      
      <div className="table">
        <caption>🌍 Languages I Speak</caption>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
          {languages.map((lang, index) => (
            <div key={lang.name} style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 'var(--spacing-sm)',
              padding: 'var(--spacing-sm)',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: 'var(--border-radius-sm)',
              transition: 'var(--transition-medium)'
            }}>
              <img 
                src={lang.flag} 
                alt={`${lang.name} flag`} 
                className="langIcon" 
              />
              <div style={{ flex: 1 }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  marginBottom: 'var(--spacing-xs)'
                }}>
                  <span style={{ fontWeight: '600' }}>{lang.name}</span>
                  <span style={{ 
                    fontSize: '0.9rem', 
                    color: 'var(--text-color-muted)' 
                  }}>
                    {lang.description}
                  </span>
                </div>
                <div className="skill-progress">
                  <div 
                    className="skill-progress-bar"
                    style={{ 
                      width: animate ? `${lang.level}%` : '0%',
                      animationDelay: `${index * 0.2}s`
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
