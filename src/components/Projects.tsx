import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Play, X, Eye } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Deployment of Django Web Application on AWS',
      description: 'Deployed the web application on a scalable 3-tier architecture, implementing Auto Scaling and an Elastic Load Balancer (ELB) to ensure a secure and scalable AWS infrastructure.',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['AWS (CodePipeline, EC2, VPC, IAM, Route 53, Elastic Load Balancer, AutoScaling, RDS, S3, SES, CloudWatch)', 'Git', 'GitHub', 'Linux (Ubuntu)', 'Python & Bash scripting', 'Nginx Web Server'],
      architecture: 'https://github.com/Pavan-Kumar-Adapala/Personal_portfolio_3d_animation/src/img/aws_django.png',
      github: '#',
      demo: '#',
      category: 'AWS, 3-Tier Architecture',
      detailedDescription: [
        'Designed and deployed AWS cloud infrastructure to host a Django-based vehicle quality testing application, ensuring high availability and cost efficiency',
        'Configured EC2 Auto Scaling and Load Balancer to optimize performance',
        'Implemented custom monitoring dashboard and alert mechanisum using AWS CloudWatch and SES services, enabling proactive issue resolution',
        'Secured RDS–EC2 data flow using VPC and IAM policies to enforce least-privilege access',
        'Improved query performance by 30% and reduced operational costs by 25% through cloud migration'
      ],
      metrics: {
        uptime: '99.9%',
        operationalcostReduction: '25%',
        queryperformanceImprovement: '30%'
      }
    },
    {
      title: 'Optimization of CI/CD Processes and Monitoring Systems for Autonomous Parking Software Development (ADAS)',
      description: 'Optimized Jenkins CI/CD pipelines to accelerate the software development lifecycle (SDLC) and deliver high-quality parking software by implementing Python automation scripts and enhancing the feedback mechanism.',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python & Bash Scripting', 'RESTAPIs', 'Jenkins', 'JFrog Artifactory', 'Git & Bitbucket', 'JIRA', 'Grafana', 'PostgreSQL'],
      architecture: 'https://github.com/Pavan-Kumar-Adapala/Personal_portfolio_3d_animation/src/img/ADAS_CICD.png',
      github: '#',
      demo: '#',
      category: 'DevOps, CI/CD, ADAS',
      detailedDescription: [
        'Developed and integrated Python scripts into Nightly CTC and smoke test pipelines to parse test reports from build artifacts, enhancing the software development process and reducing debugging time by 30%',
        'Collaborated on developing a CI pipeline to automate PDX container creation for flashing the Parking ECU (FPM Core), leading to enhanced security standards',
        'Developed a centralized Grafana dashboard using advanced PostgreSQL queries to monitor the development process in real time and support data-driven decision-making across parking software projects'
      ],
      metrics: {
        Reduceddebuggingtime: '30%',
        Qualitystandard: 'ISO 9001',
      }
    },
    {
      title: 'Hybrid Infrastructure Monitoring Stack',
      description: 'Comprehensive monitoring and observability solution with custom dashboards, alerting, and performance analytics for cloud and on-premises infrastructure.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Prometheus', 'Grafana', 'VMware', 'AWS', 'OpenVPN', 'Node Exporter', 'Nginx', 'Linux (RHEL 9)', 'Shell/Bash Scripting'],
      architecture: 'https://github.com/Pavan-Kumar-Adapala/Personal_portfolio_3d_animation/src/img/prometheus_hybrid_monitoring_architecture.gif',
      github: 'https://github.com/Pavan-Kumar-Adapala/prometheus_hybrid_monitoring_proj',
      demo: 'https://github.com/Pavan-Kumar-Adapala/Personal_portfolio_3d_animation/src/img/prometheus_hybrid_monitoring_architecture.gif',
      category: 'Monitoring and observability',
      detailedDescription: [
        'Architected and deployed a hybrid monitoring system for on-prem (VMware RHEL) and AWS EC2 infrastructure across development and production environments',
        'Configured Prometheus to collect metrics securely through OpenVPN tunnels and Nginx reverse proxy for encrypted access to isolated nodes (in Prod Env)',
        'Developed Grafana dashboards to visualize system performance (CPU, memory, disk, and network) across hybrid infrastructure using Node Exporter and Prometheus',
        'Automated the monitoring pipeline end-to-end, reducing manual setup time by 30% through robust, reusable shell scripts',
        'Enhanced infrastructure observability and security by integrating VPN-based access controls and reverse proxy routing'
      ],
      metrics: {
        servers: 'AWS EC2, On-premises VM',
        setupTimeReduced: '30%',
        accessSecurity: '100% encrypted (VPN + proxy)'
      }
    },
    {
      title: 'Secure Serverless Website Hosting',
      description: 'Hosted a static portfolio on AWS S3 with CloudFront integration for fast, secure global delivery.',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['AWS S3', 'AWS CloudFront', 'AWS IAM', 'Origin Access Identity (OAI)', 'S3 Bucket Policies', 'HTML/CSS/JavaScript', 'Terraform'],
      architecture: 'https://github.com/Pavan-Kumar-Adapala/Personal_portfolio_3d_animation/src/img/AWS_serverless_static_website.png',
      github: 'https://github.com/Pavan-Kumar-Adapala/Portfolio_project_Adapala',
      demo: '#',
      category: 'AWS, Serverless',
      detailedDescription: [
        'Hosted a personal portfolio site on AWS S3 and accelerated delivery with CloudFront CDN',
        'Applied secure access controls using Origin Access Identity (OAI) and tailored S3 bucket policies, resulting in faster load times and improved security'
      ],
      metrics: {
        loadTimeImprovement: '50%',
        hostingCost: '<$1/month',
        uptime: '100%',
        latency: '<80ms (via CloudFront)',
        publicAccessRisk: '0% (OAI enforced)',
        maintenance: '0 server ops required'
      }
    },
    {
      title: 'End-to-End CI/CD for Portfolio Website',
      description: 'Implemented a fully automated CI/CD pipeline using GitHub Actions for deploying a personal portfolio. The project supports both static hosting (via GitHub Pages) and containerized deployment (via DockerHub), backed by a robust Git branching and pull request workflow.',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['GitHub Actions', 'GitHub Pages', 'Docker', 'Git Flow', 'HTML, CSS, JavaScript', 'Origin Access Identity (OAI)', 'S3 Bucket Policies', 'HTML/CSS/JavaScript', 'Terraform'],
      architecture: 'https://github.com/Pavan-Kumar-Adapala/Personal_portfolio_3d_animation/src/img/src/img/docker_image_CD.png',
      github: 'https://github.com/Pavan-Kumar-Adapala/Portfolio_project_Adapala',
      demo: '#',
      category: 'Docker, CI/CD',
      detailedDescription: [
        '🔄 CI/CD Automation: 100% automated deployments for both static and Dockerized versions',
        '🐳 Containerization: Docker image build and push to DockerHub on every merge to main',
        '🌿 Branching Strategy: Feature, release, hotfix, and dev branches managed through structured Git flow',
        '✅ Code Quality: All changes reviewed and merged via PRs with enforced approvals'
      ],
      metrics: {
        deploymentAutomation: '100%',
        containerBuilds: 'On every push to main',
        codeReviewCoverage: '100% of PRs',
        manualDeployments: '0',
        releaseReadiness: 'Every merge to main',
        imageTagging: 'Latest (versioning ready)'
      }
    },
    {
      title: 'Linux Administration & Automation with Bash Scripts',
      description: 'Developed a suite of Bash scripts to automate Linux system administration tasks such as monitoring, security auditing, user management, log rotation, and Git operations. Designed for scalability and cron-based scheduling to reduce manual overhead in server environments.',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Bash Scripting', 'Linux'],
      architecture: '#',
      github: 'https://github.com/Pavan-Kumar-Adapala/bash_scripts_for_automation',
      demo: '#',
      category: 'Linux Administration',
      detailedDescription: [
        'System Monitoring: Alerts on high CPU/memory usage, process/port checks',
        'Security Auditing: User privilege checks, vulnerability scans',
        'User Management: Bulk user creation/deletion with home directory cleanup',
        'Log & Storage Management: Log rotation, large file detection, file comparison',
      ],
      metrics: {
        scriptsCreated: '15+',
        manualTasksReduced: '70%'
      }
    },
    {
      title: 'Automated Hardware Management Framework',
      description: 'Designed and implemented an automated hardware tracking and management framework by integrating Python scripts with JIRA and Confluence APIs. Improved asset visibility, reduced manual effort, and saved costs at the department level.',
      image: 'https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'JIRA REST API', 'Confluence API', 'Seventhings'],
      architecture: 'https://github.com/Pavan-Kumar-Adapala/Personal_portfolio_3d_animation/src/img/src/img/src/img/hardware_management.png',
      github: '#',  // optional: can be private or internal-only
      demo: '#',
      category: 'Automation',
      detailedDescription: [
        'Analysed the existing hardware management workflow and optimized JIRA ticket structuring and QR code generation for better tracking',
        'Developed Python automation scripts integrating JIRA REST API and Confluence REST API to automate hardware tracking and management',
        'Implemented a scalable solution at the department level, enabling micro-level asset tracking across storage areas and test benches',
        'Extracted and centralized asset data using Python scripts in Seventhings application, improving interdepartmental visibility and efficiency',
        'Achieved €15,000 cost savings by reducing manual efforts and enhancing tracking accuracy'
      ],
      metrics: {
        costSaving: '€15,000',
        manualEffortReduction: '80%',
        assetTrackingCoverage: '100% (department-wide)'
      }
    },
    {
    title: 'Focus Time KPI – Standalone GUI Application',
    description: 'Built a Python-based GUI tool to automate and visualize department-level Focus Time KPIs by integrating web-scraped login data with Outlook schedules. Enabled seamless ETL processing, real-time feedback, and report generation.',
    image: 'https://images.pexels.com/photos/97080/pexels-photo-97080.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python (tkinter (GUI), Selenium (Web Automation), Pandas & NumPy (Data Processing), matplotlib (Data Visualization), threading (Multithreading))', 'ETL', 'Modular Programming', 'Linux'],
    architecture: 'https://github.com/Pavan-Kumar-Adapala/Personal_portfolio_3d_animation/src/img/src/img/src/img/src/img/FoucsTime_animation.gif',
    github: '#',  // private or internal repo, can be omitted
    demo: '#',
    category: 'KPI Automation / Internal Tools',
    detailedDescription: [
      'Developed a GUI using Python Tkinter to track and visualize department Focus Time KPIs',
      'Automated secure PDF downloads from a web portal using Selenium, overcoming the absence of an API for data extraction',
      'Implemented ETL pipeline: extracted login info from PDFs, merged with Outlook data, stored results on Linux server',
      'Used modular scripting for extraction, transformation, KPI logic, and chart generation',
      'Added multithreading for backend tasks to maintain GUI responsiveness'
    ],
    metrics: {
      TeamImprovement: '15%',
      KPIVisibilityImproved: '100%'
    }
  }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" ref={ref} className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A showcase of my DevOps and cloud engineering projects, featuring infrastructure automation, 
            CI/CD pipelines, and scalable cloud solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-500/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                      className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 px-2 py-1 rounded-lg text-xs border border-blue-500/30"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </motion.a>
                  
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <Play size={18} />
                    <span>Demo</span>
                  </motion.a>
                  
                  <motion.button
                    onClick={() => setSelectedProject(index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <Eye size={18} />
                    <span>Details</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-3xl font-bold text-white">
                      {projects[selectedProject].title}
                    </h3>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  {/* Architecture Diagram */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-white mb-4">Architecture Overview</h4>
                    <div className="rounded-lg overflow-hidden border border-gray-600">
                      <img
                        src={projects[selectedProject].architecture}
                        alt={`${projects[selectedProject].title} Architecture`}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  </div>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {Object.entries(projects[selectedProject].metrics).map(([key, value]) => (
                      <div key={key} className="bg-gray-700/50 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-blue-400">{value}</div>
                        <div className="text-gray-400 text-sm capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                      </div>
                    ))}
                  </div>

                  {/* Detailed Description */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-white mb-4">Implementation Details</h4>
                    <ul className="space-y-3">
                      {projects[selectedProject].detailedDescription.map((item, i) => (
                        <li key={i} className="text-gray-300 flex items-start">
                          <span className="text-blue-400 mr-3 mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-white mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {projects[selectedProject].technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 px-3 py-2 rounded-lg text-sm border border-blue-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <a
                      href={projects[selectedProject].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors"
                    >
                      <Github size={20} />
                      <span>View Code</span>
                    </a>
                    <a
                      href={projects[selectedProject].demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};



export default Projects;