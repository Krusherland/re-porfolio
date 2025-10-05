import React from "react";

export const Resume = () => {
  const contactInfo = [
    { icon: "📍", text: "General San Martín, Buenos Aires" },
    { icon: "📧", text: "zaccardicristian@gmail.com" },
    { icon: "📱", text: "11-2391-1088" },
  ];

  const experiences = [
    {
      title: "English Teacher",
      period: "2019 – Present",
      location: "General San Martín, Buenos Aires",
      responsibilities: [
        "Deliver comprehensive English language instruction across primary and secondary education levels in schools with diverse academic orientations and methodologies",
        "Adapt teaching strategies to accommodate varied learning styles and educational approaches across multiple institutional contexts",
        "Foster student engagement and language acquisition through constructivist and hybrid pedagogical frameworks",
        "Develop curriculum materials and assessments aligned with institutional objectives and student needs",
      ],
    },
  ];

  const education = [
    {
      title: "Technical Degree in Systems Analysis",
      institution: "ISFD N°114",
      period: "2023 – Present (2nd Year)",
      detail: "Focus: Software Development & Database Management",
      project:
        "Academic Project: Student Management Application for Academic Unit",
    },
    {
      title: "Front-end & Back-end Development Program",
      institution:
        "Agencia de Habilidades para el Futuro (Buenos Aires Aprende)",
      period: "2024 – 2025",
    },
    {
      title: "Web Programming - Front-end Developer",
      institution: "Universidad Tecnológica Nacional (UTN.BA)",
      period: "2024",
    },
    {
      title: "Teaching Degree in English",
      institution: "ISFD N°174",
      period: "2017 – 2022",
    },
  ];

  const skills = [
    {
      category: "Programming & Frameworks",
      items: "React, Node.js, Java, C#, Python, PHP.",
    },
    {
      category: "Database Management",
      items: "MySQL, MongoDB",
    },
    {
      category: "Languages",
      items:
        "Spanish (Native), English (Fluent), Portuguese (Intermediate), Mandarin (Basic), Korean (Basic)",
    },
    {
      category: "Teaching Methodologies",
      items: "Constructivist, Hybrid, Pedagogical, Andragogical approaches",
    },
  ];

  const competencies = [
    "Full-stack Development",
    "Database Design",
    "Cross-cultural Communication",
    "Problem-solving",
    "Project Management",
    "Educational Technology",
    "Bilingual Instruction",
    "Curriculum Development",
  ];

  return (
    <div className="resume-container">
      <div className="resume-header">
        <h1 className="resume-name">CRISTIAN ZACCARDI</h1>
        <div className="resume-subtitle">
          English Teacher & Systems Analyst in Training
        </div>
        <div className="resume-contact-info">
          {contactInfo.map((contact, index) => (
            <div key={index} className="contact-item">
              <span className="contact-icon">{contact.icon}</span>
              <span>{contact.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="resume-content">
        <section className="resume-section">
          <h2 className="section-title">Professional Profile</h2>
          <div className="profile-section">
            <p className="profile-text">
              Dedicated English teacher with 5+ years of classroom experience,
              currently completing a Technical Degree in Systems Analysis with
              specialization in software development and database management.
              Committed to leveraging technical expertise to solve complex
              problems and optimize processes through modern technological
              solutions.
            </p>
            <div className="profile-image-container">
              <img
                src="/profile.png"
                alt="Cristian Zaccardi"
                className="profile-image"
              />
            </div>
          </div>
        </section>

        <section className="resume-section">
          <h2 className="section-title">Professional Experience</h2>
          {experiences.map((job, index) => (
            <div key={index} className="job">
              <div className="job-header">
                <div className="job-title">{job.title}</div>
                <div className="job-period">{job.period}</div>
              </div>
              <div className="job-location">{job.location}</div>
              <ul className="job-responsibilities">
                {job.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="resume-section">
          <h2 className="section-title">
            Education & Professional Development
          </h2>
          {education.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="education-title">{edu.title}</div>
              <div className="education-institution">
                {edu.institution} | {edu.period}
              </div>
              {edu.detail && (
                <div className="education-detail">
                  {edu.detail}
                  {edu.project && (
                    <>
                      <br />
                      {edu.project}
                    </>
                  )}
                </div>
              )}
            </div>
          ))}
        </section>

        <section className="resume-section">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-category">
                <h4>{skill.category}</h4>
                <p>{skill.items}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="resume-section">
          <h2 className="section-title">Key Competencies</h2>
          <div className="competencies">
            {competencies.map((comp, index) => (
              <span key={index} className="competency-tag">
                {comp}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
