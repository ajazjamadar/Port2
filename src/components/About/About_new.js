import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiUsers, FiAward, FiCoffee, FiDownload } from 'react-icons/fi';
import './About.css';

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
          
          <div className="about-grid">
            <motion.div variants={itemVariants} className="about-text">
              <motion.h3 
                variants={itemVariants}
                className="about-subtitle"
              >
                Frontend Developer | UI/UX Designer | MERN Stack Developer | Business Analyst
              </motion.h3>
              
              <motion.p variants={itemVariants} className="about-description">
                I'm <strong>MD EJAZUDDIN JAMADAR</strong>, a passionate Full Stack Developer specializing in creating 
                exceptional digital experiences through modern web technologies and user-centered design.
              </motion.p>
              
              <motion.p variants={itemVariants} className="about-description">
                With expertise spanning the entire MERN stack, I craft responsive, scalable web applications 
                that seamlessly blend functionality with aesthetic appeal. My proficiency in React.js, Node.js, 
                and modern JavaScript frameworks enables me to deliver end-to-end solutions that exceed expectations.
              </motion.p>
              
              <motion.p variants={itemVariants} className="about-description">
                Beyond technical skills, I bring proven leadership experience, having advanced from Joint Secretary 
                to Vice President while spearheading impactful media campaigns. I excel at bridging technical 
                complexity with strategic vision to drive meaningful results.
              </motion.p>

              <motion.div variants={itemVariants} className="core-values">
                <h4>Core Values</h4>
                <div className="values-grid">
                  <div className="value-item">
                    <FiCode className="value-icon" />
                    <span>Clean Code</span>
                  </div>
                  <div className="value-item">
                    <FiUsers className="value-icon" />
                    <span>Collaboration</span>
                  </div>
                  <div className="value-item">
                    <FiAward className="value-icon" />
                    <span>Excellence</span>
                  </div>
                  <div className="value-item">
                    <FiCoffee className="value-icon" />
                    <span>Innovation</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="about-skills-sidebar">
              <motion.div variants={itemVariants} className="tech-stack">
                <h4>Technical Expertise</h4>
                <div className="skill-categories">
                  <div className="skill-category">
                    <h5><FiCode /> Frontend</h5>
                    <div className="skill-tags">
                      <span className="skill-tag">React.js</span>
                      <span className="skill-tag">JavaScript ES6+</span>
                      <span className="skill-tag">HTML5 & CSS3</span>
                      <span className="skill-tag">Bootstrap</span>
                      <span className="skill-tag">Responsive Design</span>
                    </div>
                  </div>
                  <div className="skill-category">
                    <h5><FiUsers /> Backend</h5>
                    <div className="skill-tags">
                      <span className="skill-tag">Node.js</span>
                      <span className="skill-tag">Express.js</span>
                      <span className="skill-tag">Python</span>
                      <span className="skill-tag">MongoDB</span>
                      <span className="skill-tag">RESTful APIs</span>
                    </div>
                  </div>
                  <div className="skill-category">
                    <h5><FiAward /> Analytics</h5>
                    <div className="skill-tags">
                      <span className="skill-tag">Power BI</span>
                      <span className="skill-tag">Tableau</span>
                      <span className="skill-tag">SQL</span>
                      <span className="skill-tag">Excel</span>
                      <span className="skill-tag">Data Visualization</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="quick-stats">
                <h4>Impact Metrics</h4>
                <div className="stat-items">
                  <motion.div 
                    className="stat-item"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="stat-number">25+</div>
                    <div className="stat-label">Projects Delivered</div>
                  </motion.div>
                  <motion.div 
                    className="stat-item"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="stat-number">8.2</div>
                    <div className="stat-label">Academic CGPA</div>
                  </motion.div>
                  <motion.div 
                    className="stat-item"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="stat-number">3+</div>
                    <div className="stat-label">Leadership Roles</div>
                  </motion.div>
                  <motion.div 
                    className="stat-item"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="stat-number">100%</div>
                    <div className="stat-label">Client Satisfaction</div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="about-sections-horizontal">
            <motion.div variants={itemVariants} className="about-education">
              <h4><FiAward /> Education & Academic Excellence</h4>
              <div className="timeline-items">
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <strong>B.E Information Science & Engineering (2022-2026)</strong>
                    <p>Shree Devi Institute Of Technology, Mangalore</p>
                    <span className="grade">CGPA: 8.2/10</span>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <strong>Pre University College - PCMB (2020-2022)</strong>
                    <p>Best Pre University College, Raichur</p>
                    <span className="grade">Percentage: 70%</span>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <strong>High School (2020)</strong>
                    <p>M.AM High School, City Hutti Gold Mines</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="about-awards">
              <h4><FiAward /> Achievements & Recognition</h4>
              <div className="achievement-items">
                <div className="achievement-item">
                  <div className="achievement-badge">🥈</div>
                  <div className="achievement-content">
                    <strong>2nd Place - Technical Competitions (2025)</strong>
                    <p>Demonstrated exceptional problem-solving and critical thinking skills</p>
                  </div>
                </div>
                <div className="achievement-item">
                  <div className="achievement-badge">🏆</div>
                  <div className="achievement-content">
                    <strong>Hackathon Participant – Hack Yugma (2025)</strong>
                    <p>Developed innovative cybersecurity solutions under pressure</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="about-certifications">
              <h4><FiCode /> Professional Certifications</h4>
              <div className="certification-grid">
                <div className="cert-item">
                  <div className="cert-icon">🌐</div>
                  <div className="cert-details">
                    <strong>HTML5 Specialist</strong>
                    <p>Semantic structure & responsive design</p>
                  </div>
                </div>
                <div className="cert-item">
                  <div className="cert-icon">🎨</div>
                  <div className="cert-details">
                    <strong>CSS3 Expert</strong>
                    <p>Modern UI design techniques</p>
                  </div>
                </div>
                <div className="cert-item">
                  <div className="cert-icon">⚡</div>
                  <div className="cert-details">
                    <strong>JavaScript Developer</strong>
                    <p>DOM manipulation & interactive components</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="about-leadership">
              <h4><FiUsers /> Leadership Journey</h4>
              <div className="leadership-timeline">
                <div className="leadership-item current">
                  <div className="leadership-period">2025-2026</div>
                  <div className="leadership-role">
                    <strong>Vice President</strong>
                    <p className="department">Information Science & Engineering</p>
                    <p className="description">Strategic leadership and team mentorship</p>
                  </div>
                </div>
                <div className="leadership-item">
                  <div className="leadership-period">2024-2025</div>
                  <div className="leadership-role">
                    <strong>Media Head</strong>
                    <p className="department">IEEE SDIT Student Chapter</p>
                    <p className="description">Brand visibility and engagement campaigns</p>
                  </div>
                </div>
                <div className="leadership-item">
                  <div className="leadership-period">2023-2024</div>
                  <div className="leadership-role">
                    <strong>Joint Secretary</strong>
                    <p className="department">Information Science & Engineering</p>
                    <p className="description">Event coordination and communication</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="about-cta">
            <div className="cta-content">
              <h4>Ready to create something amazing together?</h4>
              <p>Let's discuss how we can bring your vision to life</p>
            </div>
            <div className="cta-buttons">
              <motion.a
                href="#contact"
                className="btn-primary"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Let's Collaborate
              </motion.a>
              <motion.a
                href="/MdEjazuddinJamadar.Resume.pdf"
                download="MdEjazuddinJamadar.Resume.pdf"
                className="btn-secondary"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload /> Download Resume
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
