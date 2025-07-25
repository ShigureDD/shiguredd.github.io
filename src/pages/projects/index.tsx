import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './projects.module.css';

// Add JSX namespace for TypeScript
import type { JSX } from 'react';

// Project categories for filtering
const categories = [
  'All',
  'Web Development',
  'Open Source',
  'Mobile',
  'Machine Learning',
  'DevOps'
];

// Project data
const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product management, user authentication, and payment processing.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
    category: 'Web Development',
    year: 2023,
    image: '/img/projects/ecommerce.jpg',
    demo: 'https://example.com',
    github: 'https://github.com/username/ecommerce',
    featured: true
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team collaboration features.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
    category: 'Web Development',
    year: 2023,
    image: '/img/projects/taskapp.jpg',
    demo: 'https://example.com/taskapp',
    github: 'https://github.com/username/taskapp',
    featured: true
  },
  {
    id: 3,
    title: 'AI Image Generator',
    description: 'An AI-powered image generation tool using stable diffusion with custom model fine-tuning.',
    technologies: ['Python', 'PyTorch', 'FastAPI', 'React'],
    category: 'Machine Learning',
    year: 2023,
    image: '/img/projects/ai-generator.jpg',
    github: 'https://github.com/username/ai-image-generator',
    featured: false
  },
  {
    id: 4,
    title: 'DevOps Pipeline',
    description: 'CI/CD pipeline with GitHub Actions, Docker, and Kubernetes for automated testing and deployment.',
    technologies: ['Docker', 'Kubernetes', 'GitHub Actions', 'AWS'],
    category: 'DevOps',
    year: 2022,
    image: '/img/projects/devops.jpg',
    github: 'https://github.com/username/devops-pipeline',
    featured: false
  },
  {
    id: 5,
    title: 'Mobile Fitness App',
    description: 'A cross-platform mobile application for tracking workouts and nutrition with social features.',
    technologies: ['React Native', 'Firebase', 'Redux'],
    category: 'Mobile',
    year: 2022,
    image: '/img/projects/fitness-app.jpg',
    demo: 'https://example.com/fitness',
    github: 'https://github.com/username/fitness-app',
    featured: true
  },
  {
    id: 6,
    title: 'Open Source Library',
    description: 'A popular open-source library for simplifying complex state management in React applications.',
    technologies: ['TypeScript', 'React', 'Jest', 'Webpack'],
    category: 'Open Source',
    year: 2022,
    github: 'https://github.com/username/state-library',
    demo: 'https://npmjs.com/package/state-library',
    featured: true
  }
];

const Projects = (): JSX.Element => {
  const { siteConfig } = useDocusaurusContext();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter projects based on category and search query
  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort projects by featured first, then by year (newest first)
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (a.featured === b.featured) {
      return b.year - a.year;
    }
    return a.featured ? -1 : 1;
  });

  return (
    <Layout 
      title="Projects" 
      description="Explore my portfolio of software development projects, including web applications, mobile apps, and open-source contributions."
    >
      <main className={styles.projects}>
        <div className="container">
          <header className={styles.hero}>
            <h1>My Projects</h1>
            <p className={styles.subtitle}>
              A collection of my work, from personal projects to open-source contributions. Each project represents a unique challenge and learning opportunity.
            </p>
          </header>

          {/* Category Filter */}
          <div className={styles.filterSection}>
            <div className={styles.searchBox}>
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
              <span className={styles.searchIcon}>🔍</span>
            </div>
            
            <div className={styles.categoryFilter}>
              {categories.map((category) => (
                <button
                  key={category}
                  className={`${styles.categoryButton} ${
                    activeCategory === category ? styles.active : ''
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Projects Grid */}
          <div className={styles.projectsGrid}>
            {sortedProjects.map((project) => (
              <div 
                key={project.id} 
                className={`${styles.projectCard} ${
                  project.featured ? styles.featured : ''
                }`}
              >
                {project.image && (
                  <div className={styles.projectImage}>
                    <img 
                      src={project.image} 
                      alt={`${project.title} screenshot`} 
                      loading="lazy"
                    />
                  </div>
                )}
                <div className={styles.projectContent}>
                  <div className={styles.projectHeader}>
                    <h2>{project.title}</h2>
                    <span className={styles.projectYear}>{project.year}</span>
                  </div>
                  <p className={styles.projectDescription}>{project.description}</p>
                  
                  <div className={styles.projectFooter}>
                    <div className={styles.technologies}>
                      {project.technologies.map((tech, i) => (
                        <span key={i} className={styles.techTag}>
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className={styles.projectLinks}>
                      {project.demo && (
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={styles.demoLink}
                        >
                          Live Demo
                        </a>
                      )}
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.githubLink}
                      >
                        <span className={styles.githubIcon}>📦</span> View Code
                      </a>
                    </div>
                  </div>
                </div>
                <div className={styles.links}>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.demoLink}>
                      Live Demo
                    </a>
                  )}
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
                    <span className={styles.githubIcon}>📦</span> View Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Projects;
