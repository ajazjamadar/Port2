import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import './About.css';
import '../../styles/glassmorphism.css';

const About = ({ darkMode }) => {
  const [ref] = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '50px 0px',
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className={`about section ${darkMode ? 'dark' : ''}`} ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="about-content"
        >
          <motion.h2 variants={itemVariants} className="section-title">
            About Me
          </motion.h2>
          
          {/* Full-width About Me Section */}
          <motion.div variants={itemVariants} className="about-me-hero-section glass-hero">
            <div className="about-me-hero-content">
              <div className="about-me-hero-left">
                <div className="profile-section">
                  <div className="profile-image-hero">
                    <img 
                      src="/WhatsApp Image 2025-09-01 at 15.23.49_03a665de.jpg" 
                      alt="MD Ejazuddin Jamadar" 
                      className="profile-image"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                        }}
                        />
                        <div className="profile-placeholder" style={{display: 'none'}}>
                        <span>EJ</span>
                        </div>
                        </div>
                        <div className="hero-intro">
                        <h3 className="hero-name">MD Ejazuddin Jamadar</h3>
                        <h4 className="hero-role">Frontend Developer | UI/UX Designer | MERN Stack Developer</h4>
                        <div className="hero-location">
                        <span>📍 Mangalore, Karnataka</span>
                        <span className="availability-badge">🟢 Available for opportunities</span>
                        </div>
                        </div>
                      </div>
                      </div>
                      
                      <div className="about-me-hero-right">
                      <div className="hero-description">
                        <p className="hero-intro-text">
                        I'm MD EJAZUDDIN JAMADAR, a passionate Frontend Developer, UI/UX Designer, and MERN Stack Developer 
                        specializing in creating stunning user interfaces and building robust full-stack web applications that deliver 
                        exceptional user experiences.
                        </p>
                        
                        <p className="hero-detail-text">
                        With a Bachelor's degree in Information Science & Engineering and extensive hands-on experience in 
                        frontend development and UI/UX design, I have successfully delivered 10+ projects ranging from responsive 
                        portfolio websites to complex React applications with modern design systems. My expertise includes 
                        React.js, Node.js, MongoDB, Express.js (MERN Stack), JavaScript (ES6+), HTML5, CSS3, and creating 
                        pixel-perfect, mobile-first responsive designs with intuitive user experiences.
                        </p>
                        
                        <p className="hero-detail-text">
                        As a UI/UX Designer and Frontend Developer, I focus on user-centered design principles, creating wireframes, 
                        prototypes, and implementing design systems that enhance user engagement. My MERN stack expertise allows me 
                        to build complete web applications from database design to interactive frontend interfaces, ensuring seamless 
                        user experiences across all touchpoints.
                        </p>
                      </div>
                      
                      <div className="hero-social-links">
                        <motion.a
                        href="https://github.com/ajazjamadar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link glass-skill-tag"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        title="GitHub"
                        >
                        <FiGithub />
                        </motion.a>
                        <motion.a
                        href="https://www.linkedin.com/in/md-eajazuddin-jamadar-359810258/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link glass-skill-tag"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        title="LinkedIn"
                        >
                        <FiLinkedin />
                        </motion.a>
                        <motion.a
                        href="mailto:liveajaz121@gmail.com"
                        className="social-link glass-skill-tag"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        title="Email"
                        >
                        <FiMail />
                        </motion.a>
                        <motion.a
                        href="/MdEjazuddinJamadar.Resume.pdf"
                        download="MdEjazuddinJamadar.Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link glass-skill-tag resume-download"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        title="Download Resume"
                        >
                        <FiDownload />
                        </motion.a>
                      </div>
                      
                      <div className="hero-skills-preview">
                        <div className="skill-tag glass-skill-tag">React.js</div>
                        <div className="skill-tag glass-skill-tag">Node.js</div>
                        <div className="skill-tag glass-skill-tag">MongoDB</div>
                        <div className="skill-tag glass-skill-tag">Express.js</div>
                        <div className="skill-tag glass-skill-tag">JavaScript</div>
                        <div className="skill-tag glass-skill-tag">UI/UX Design</div>
                        <div className="skill-tag glass-skill-tag">Responsive Design</div>
                        <div className="skill-tag glass-skill-tag">HTML5 & CSS3</div>
                      </div>
                      </div>
                      </div>
                      </motion.div>
                      
                      {/* Full-width Technical Skills Section */}
          <motion.div variants={itemVariants} className="technical-skills-full-section glass-card">
            <motion.div variants={itemVariants} className="tech-stack-full">
              <h4>Technical Skills</h4>
              <div className="skill-categories-grid">
                <div className="skill-category">
                  <h5>Frontend Development</h5>
                  <ul>
                    <li>React.js</li>
                    <li>JavaScript (ES6+)</li>
                    <li>HTML5 & CSS3</li>
                    <li>Bootstrap</li>
                    <li>Responsive Design</li>
                    <li>DOM Manipulation</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h5>UI/UX Design</h5>
                  <ul>
                    <li>Figma</li>
                    <li>Adobe XD</li>
                    <li>Wireframing</li>
                    <li>Prototyping</li>
                    <li>User Research</li>
                    <li>Design Systems</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h5>MERN Stack</h5>
                  <ul>
                    <li>MongoDB</li>
                    <li>Express.js</li>
                    <li>React.js</li>
                    <li>Node.js</li>
                    <li>RESTful APIs</li>
                    <li>Full-Stack Development</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h5>Tools & Technologies</h5>
                  <ul>
                    <li>Git & GitHub</li>
                    <li>VS Code</li>
                    <li>MySQL</li>
                    <li>Project Management</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Quick Stats Section */}
          <motion.div variants={itemVariants} className="quick-stats-standalone">
            <h4>Quick Stats</h4>
            <div className="stat-items-horizontal">
              <div className="stat-item">
                <div className="stat-number">8.2</div>
                <div className="stat-label">CGPA</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">3+</div>
                <div className="stat-label">Leadership Roles</div>
              </div>
            </div>
          </motion.div>

          {/* Education Section - Skills Theme */}
          <motion.div variants={itemVariants} className="education-section">
            <h3 className="section-subtitle">Education</h3>
            <p className="section-description">
              Academic journey and educational background in Information Science & Engineering
            </p>
            
            <div className="education-grid">
              <motion.div
                variants={itemVariants}
                className="education-card glass-card"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="education-header">
                  <div className="education-icon" style={{ color: "#4f46e5" }}>
                    🎓
                  </div>
                  <div className="education-info">
                    <h4 className="education-degree">B.E Information Science & Engineering</h4>
                    <p className="education-period">2022 - 2026</p>
                    <p className="education-institution">Shree Devi Institute Of Technology, Mangalore</p>
                    <div className="education-grade">
                      <span className="grade-label">CGPA:</span>
                      <span className="grade-value">8.2 / 10</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="education-card glass-card"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="education-header">
                  <div className="education-icon" style={{ color: "#06b6d4" }}>
                    📚
                  </div>
                  <div className="education-info">
                    <h4 className="education-degree">Pre University College - PCMB</h4>
                    <p className="education-period">2020 - 2022</p>
                    <p className="education-institution">Best Pre University College, Raichur</p>
                    <div className="education-grade">
                      <span className="grade-label">Percentage:</span>
                      <span className="grade-value">70%</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="education-card glass-card"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="education-header">
                  <div className="education-icon" style={{ color: "#10b981" }}>
                    🏫
                  </div>
                  <div className="education-info">
                    <h4 className="education-degree">High School</h4>
                    <p className="education-period">2020</p>
                    <p className="education-institution">M.AM High School, City Hutti Gold Mines</p>
                    <div className="education-grade">
                      <span className="grade-label">Status:</span>
                      <span className="grade-value">Completed</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Certifications Section - Skills Theme */}
          <motion.div variants={itemVariants} className="certifications-section">
            <h3 className="section-subtitle">Certifications</h3>
            <p className="section-description">
              Professional certifications and technical achievements
            </p>
            
            <div className="certifications-grid">
              <motion.div
                variants={itemVariants}
                className="certification-card glass-card"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="certification-header">
                  <div className="certification-icon" style={{ color: "#e34f26" }}>
                    🏗️
                  </div>
                  <div className="certification-info">
                    <h4 className="certification-name">HTML5</h4>
                    <p className="certification-year">2025</p>
                    <p className="certification-description">Semantic structure and responsive design</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="certification-card glass-card"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="certification-header">
                  <div className="certification-icon" style={{ color: "#1572b6" }}>
                    🎨
                  </div>
                  <div className="certification-info">
                    <h4 className="certification-name">CSS3</h4>
                    <p className="certification-year">2025</p>
                    <p className="certification-description">Modern UI design techniques</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="certification-card glass-card"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="certification-header">
                  <div className="certification-icon" style={{ color: "#f7df1e" }}>
                    ⚡
                  </div>
                  <div className="certification-info">
                    <h4 className="certification-name">JavaScript</h4>
                    <p className="certification-year">2025</p>
                    <p className="certification-description">DOM manipulation and interactive components</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Achievements Section - Skills Theme */}
          <motion.div variants={itemVariants} className="achievements-section">
            <h3 className="section-subtitle">Awards & Achievements</h3>
            <p className="section-description">
              Recognition and achievements in technical competitions and leadership
            </p>
            
            <div className="achievements-grid">
              <motion.div
                variants={itemVariants}
                className="achievement-card glass-card"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="achievement-header">
                  <div className="achievement-icon" style={{ color: "#fbbf24" }}>
                    🏆
                  </div>
                  <div className="achievement-info">
                    <h4 className="achievement-title">2nd Place - Technical Round</h4>
                    <p className="achievement-year">2025</p>
                    <p className="achievement-description">Problem-solving skills in competitive coding</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="achievement-card glass-card"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="achievement-header">
                  <div className="achievement-icon" style={{ color: "#f59e0b" }}>
                    🥈
                  </div>
                  <div className="achievement-info">
                    <h4 className="achievement-title">2nd Place - Technical Round</h4>
                    <p className="achievement-year">2025</p>
                    <p className="achievement-description">Critical thinking and pattern recognition</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="achievement-card glass-card"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="achievement-header">
                  <div className="achievement-icon" style={{ color: "#8b5cf6" }}>
                    💻
                  </div>
                  <div className="achievement-info">
                    <h4 className="achievement-title">Hackathon Participant – Hack Yugma</h4>
                    <p className="achievement-year">2025</p>
                    <p className="achievement-description">Cybersecurity solution development</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Leadership Section - Skills Theme */}
          <motion.div variants={itemVariants} className="leadership-section">
            <h3 className="section-subtitle">Leadership Experience</h3>
            <p className="section-description">
              Strategic leadership roles and organizational achievements
            </p>
            
            <div className="leadership-grid">
              <motion.div
                variants={itemVariants}
                className="leadership-card glass-card"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="leadership-header">
                  <div className="leadership-icon" style={{ color: "#3b82f6" }}>
                    👨‍💼
                  </div>
                  <div className="leadership-info">
                    <h4 className="leadership-title">Vice President</h4>
                    <p className="leadership-period">2025 - 2026</p>
                    <p className="leadership-organization">Information Science & Engineering</p>
                    <p className="leadership-description">Leading strategic direction and mentoring junior leaders</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="leadership-card glass-card"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="leadership-header">
                  <div className="leadership-icon" style={{ color: "#ef4444" }}>
                    📢
                  </div>
                  <div className="leadership-info">
                    <h4 className="leadership-title">Media Head</h4>
                    <p className="leadership-period">2024 - 2025</p>
                    <p className="leadership-organization">IEEE SDIT Student Chapter</p>
                    <p className="leadership-description">Spearheaded media campaigns and visibility initiatives</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="leadership-card glass-card"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="leadership-header">
                  <div className="leadership-icon" style={{ color: "#10b981" }}>
                    🤝
                  </div>
                  <div className="leadership-info">
                    <h4 className="leadership-title">General Secretary</h4>
                    <p className="leadership-period">2024 - 2025</p>
                    <p className="leadership-organization">Information Science & Engineering</p>
                    <p className="leadership-description">Coordinated departmental activities and communication</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="leadership-card glass-card"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="leadership-header">
                  <div className="leadership-icon" style={{ color: "#f59e0b" }}>
                    📋
                  </div>
                  <div className="leadership-info">
                    <h4 className="leadership-title">Joint Secretary</h4>
                    <p className="leadership-period">2023 - 2024</p>
                    <p className="leadership-organization">Information Science & Engineering</p>
                    <p className="leadership-description">Assisted in departmental coordination and administrative tasks</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Let's Work Together Section - Education Theme */}
          <motion.div variants={itemVariants} className="collaboration-section">
            <h3 className="section-subtitle">Let's Work Together</h3>
            <p className="section-description">
              Ready to collaborate and build something amazing? Let's turn your ideas into reality.
            </p>
            
            <div className="collaboration-grid">
              <motion.div
                variants={itemVariants}
                className="collaboration-card glass-card"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="collaboration-header">
                  <div className="collaboration-icon" style={{ color: "#4f46e5" }}>
                    🤝
                  </div>
                  <div className="collaboration-info">
                    <h4 className="collaboration-title">Project Collaboration</h4>
                    <p className="collaboration-description">
                      Whether it's frontend development, UI/UX design, MERN stack applications, or innovative web solutions, 
                      I'm ready to bring your vision to life with modern technologies and creative design approaches.
                    </p>
                    <motion.a
                      href="#contact"
                      className="collaboration-btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Start a Project →
                    </motion.a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="collaboration-card glass-card"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="collaboration-header">
                  <div className="collaboration-icon" style={{ color: "#06b6d4" }}>
                    📄
                  </div>
                  <div className="collaboration-info">
                    <h4 className="collaboration-title">Resume & Portfolio</h4>
                    <p className="collaboration-description">
                      Download my resume to learn more about my experience, skills, 
                      and achievements in frontend development, UI/UX design, and MERN stack development.
                    </p>
                    <motion.a
                      href="/MdEjazuddinJamadar.Resume.pdf"
                      download="MdEjazuddinJamadar.Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="collaboration-btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiDownload /> Download Resume
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;