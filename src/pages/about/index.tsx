import React from 'react';
import type { JSX } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './about.module.css';

const About = (): JSX.Element => {
  const { siteConfig } = useDocusaurusContext();
  
  return (
    <Layout 
      title="About" 
      description="Learn more about Tom Lam, a passionate software developer sharing knowledge about web development and technology."
    >
      <main className={styles.about}>
        <div className="container">
          <div className="row">
            <div className="col col--8 col--offset-2">
              <header className={styles.hero}>
                <h1>Hello, I'm Tom Lam 👋</h1>
                <p className={styles.subtitle}>
                  Software Developer | Tech Enthusiast | Problem Solver
                </p>
              </header>

              <section className={styles.section}>
                <h2>About Me</h2>
                <p>
                  I'm a passionate software developer with a strong background in building scalable web applications and solving complex technical challenges. 
                  With several years of experience in the industry, I've had the opportunity to work with diverse technologies and contribute to various projects.
                </p>
                <p>
                  My journey in technology started when I wrote my first line of code, and I've been hooked ever since. 
                  I believe in continuous learning and sharing knowledge with the community, which led me to start this blog.
                </p>
              </section>

              <section className={styles.section}>
                <h2>Technical Expertise</h2>
                <div className={styles.skillsGrid}>
                  <div className={styles.skillCategory}>
                    <h3>Frontend</h3>
                    <ul>
                      <li>React.js & Next.js</li>
                      <li>TypeScript & JavaScript (ES6+)</li>
                      <li>HTML5, CSS3, SASS</li>
                      <li>Redux & Context API</li>
                    </ul>
                  </div>
                  <div className={styles.skillCategory}>
                    <h3>Backend</h3>
                    <ul>
                      <li>Node.js & Express</li>
                      <li>RESTful & GraphQL APIs</li>
                      <li>Python & Django</li>
                      <li>Authentication & Security</li>
                      <li>SQL Server, Azure SQL</li>  
                    </ul>
                  </div>
                  <div className={styles.skillCategory}>
                    <h3>DevOps & Tools</h3>
                    <ul>
                      <li>Docker</li>
                      <li>Azure</li>
                      <li>CI/CD Pipelines</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className={styles.section}>
                <h2>Experience</h2>
                <div className={styles.timeline}>
                  <div className={styles.timelineItem}>
                    <div className={styles.timelineContent}>
                      <h3>Analyst Programmer</h3>
                      <i className={styles.meta}>Artmax Management Ltd • 2023 Jan - Present</i>
                      <p>Leading frontend development initiatives and mentoring junior developers.</p>
                    </div>
                  </div>
                  <div className={styles.timelineItem}>
                    <div className={styles.timelineContent}>
                      <h3>Programmer</h3>
                      <i className={styles.meta}>Artmax Management Ltd • 2021 JUL - 2023 JAN</i>
                      <p>Developed and maintained web applications using modern JavaScript frameworks.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className={styles.section}>
                <h2>Education</h2>
                <div className={styles.education}>
                  <h3>Bachelor of Engineering (Computer Science)</h3>
                  <i className={styles.meta}>University of Hong Kong • 2017 - 2021</i>
                </div>
              </section>

              <section className={styles.section}>
                <h2>Get In Touch</h2>
                <p>
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                <div className={styles.ctaButtons}>
                  <Link
                    className="button button--outline button--lg"
                    to="/blog">
                    Read My Blog
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default About;
