import { useState, useRef } from 'react';
import { motion, useMotionValue, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { ExternalLink, Github, Play, X, Eye } from 'lucide-react';


// ------------- TiltCard Component -------------
const TiltCard = ({ children }) => {
  const cardRef = useRef(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    rotateX.set(((y - centerY) / centerY) * 15);
    rotateY.set(((centerX - x) / centerX) * 15);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div style={{ perspective: 800 }}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="your-card-class"
      >
        {children}
      </motion.div>
    </div>
  );
};

// ------------- Projects Component -------------
const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // threshold: 0.1
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'GitOps-Driven CI/CD Pipeline with ArgoCD, Kubernetes, and AWS',
      description: 'Designed and deployed a GitOps-driven CI/CD pipeline leveraging ArgoCD and Kubernetes (kubeadm) on AWS EC2. Integrated DevSecOps practices with code quality checks, container vulnerability scanning, and secure networking, while deploying a ReactJS web application in a declarative and automated manner.',
      image: '/images/gitops_cicd_gen_ani.gif',
      technologies: ['GitHub Actions', 'ArgoCD', 'Kubernetes (kubeadm)', 'AWS EC2', 'Docker', 'Docker Compose', 'SonarQube', 'Trivy', 'Nexus Repository', 'Bash', 'AWS ALB', 'DNS, NACLs, Security Groups, IAM', 'ReactJS', 'TypeScript', 'Tailwind CSS', 'Nginx'],
      
      architecture: '/images/gitops.svg',
      github: 'https://github.com/Pavan-Kumar-Adapala/Personal_portfolio_3d_animation',
      demo: '/images/gitops.svg',
      category: 'GitOps, ArgoCD, CI/CD, Kubernetes, AWS',
      detailedDescription: [
        'Built a multi-stage Dockerfile for optimized application containerization',
        'Provisioned AWS EC2 instances and set up infrastructure services (SonarQube, Nexus Repository) using Docker Compose',
        'Configured Kubernetes cluster with kubeadm, installed required components (CNI plugin, kubelet, kubectl, kubeadm)',
        'Applied DevSecOps security:',
        '  - SonarQube → Static Application Security Testing (SAST)',
        '  - Trivy → Container vulnerability scanning',
        '  - Linting → Syntax & code quality checks',
        'Configured AWS ALB + NodePort Services for HTTPS and host-based routing',
        'Applied least privilege principle with NACLs, Security Groups, IAM roles',
        'Modified package.json to support deployment requirements',
        'Deployed ReactJS application via Kubernetes manifests (Deployment + Service)',
        'Automated deployment workflow with ArgoCD GitOps-based synchronization',
      ],
      metrics: {
        VulnerabilityScanning: '100% of containers',
        CodeQualityChecks: '100% of PRs',
        DeploymentTimeReduction: '50%',
        CostEfficiency: 'Reduced by 20% through optimized resource usage'   
      }
    },
    {
      title: 'Optimization of CI/CD Processes and Monitoring Systems for Autonomous Parking Software Development (ADAS)',
      description: 'Streamlined testing and monitoring for ADAS software to enhance delivery reliability and reduced debugging time by 30%.',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Jenkins', 'Grafana', 'JFrog Artifactory', 'Git & Bitbucket', 'JIRA', 'PostgreSQL', 'Python & Bash Scripting', 'RESTAPIs', 'Linux (Ubuntu)'],
      architecture: 'https://github.com/Pavan-Kumar-Adapala/Personal_portfolio_3d_animation_Images_files/blob/Prod/images/ADAS_CICD.png?raw=true',
      github: '#',
      demo: '#',
      category: 'DevOps, CI/CD, ADAS',
      detailedDescription: [
        'Automated nightly CTC and smoke test pipelines by integrating Python scripts to extract test reports and generate visual summaries from artifacts, reducing debugging time by 30%',
        'Co-developed a Jenkins pipeline for PDX container creation and flashing the Parking ECU (FPM Core), reducing manual effort and enhancing traceability in line with ISO 27001 automotive data integrity standards',
        'Developed a centralized Grafana dashboard using advanced PostgreSQL queries to monitor the development process in real time and support data-driven decision-making across parking software projects'
      ],
      metrics: {
        Reduceddebuggingtime: '30%',
        Qualitystandard: 'ISO 27001',
      }
    },
    {
      title: 'Hybrid Infrastructure Monitoring Stack',
      description: 'Comprehensive monitoring and observability solution with custom dashboards, alerting, and performance analytics for cloud and on-premises infrastructure.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Prometheus', 'Grafana', 'VMware', 'AWS', 'OpenVPN', 'Node Exporter', 'Nginx', 'Linux (RHEL 9)', 'Shell/Bash Scripting'],
      architecture: 'https://github.com/Pavan-Kumar-Adapala/Personal_portfolio_3d_animation_Images_files/blob/Prod/images/prometheus_hybrid_monitoring_architecture.gif?raw=true',
      github: 'https://github.com/Pavan-Kumar-Adapala/prometheus_hybrid_monitoring_proj',
      demo: 'https://github.com/Pavan-Kumar-Adapala/Personal_portfolio_3d_animation_Images_files/blob/Prod/images/prometheus_hybrid_monitoring_architecture.gif?raw=true',
      category: 'Monitoring and observability',
      detailedDescription: [
        'Designed a secure monitoring stack using Prometheus, Grafana, and Node Exporter to collect metrics from AWS EC2 and on-prem RHEL nodes via OpenVPN and Nginx reverse proxy, mirroring real-world hybrid infrastructure and improving observability across environments',
        'Automated secure metric collection across AWS EC2 and on-prem RHEL nodes by integrating OpenVPN tunneling and Nginx reverse proxy into a centralized Prometheus-Grafana stack, enabling real-time observability and enforcing restricted access through fine-grained firewall rules'
      ],
      metrics: {
        servers: 'AWS EC2, On-premises VM',
        setupTimeReduced: '30%',
        accessSecurity: 'Secured tunnel (VPN + reverse proxy)'
      }
    },
    {
      title: 'Deployment of Django Web Application on AWS',
      description: 'Deployed the web application on a scalable 3-tier architecture, implementing Auto Scaling and an Elastic Load Balancer (ELB) to ensure a secure and scalable AWS infrastructure.',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['AWS (EC2, VPC, IAM, Route 53, Elastic Load Balancer, AutoScaling, RDS, S3, SES, CloudWatch)', 'Git', 'GitHub', 'Jenkins', 'Linux (Ubuntu)', 'Python & Bash scripting', 'Nginx Web Server'],
      architecture: '/images/aws_django.png', 
      // architecture: 'https://github.com/Pavan-Kumar-Adapala/Personal_portfolio_3d_animation_Images_files/blob/Prod/images/aws_django.png?raw=true',
      github: '#',
      demo: '#',
      category: 'AWS, 3-Tier Architecture',
      detailedDescription: [
        'Designed and deployed a scalable 3-tier AWS architecture to host a Django web application (vehicle quality testing), ensuring high availability and cost efficiency',
        'Configured EC2 Auto Scaling and Load Balancer to optimize performance',
        'Implemented CI/CD pipelines using Jenkins Master-Slave architecture to automate deployments and accelerating release cycles', 
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
      title: 'End-to-End CI/CD Pipeline for React Application',
      description: 'Implemented an end-to-end CI/CD pipeline for a personal portfolio website to simulate real-world DevOps workflows, using GitHub Actions, Docker, SonarQube, Nexus, AWS EC2, ALB, and GitHub Pages, resulting in automated build, quality checks, artifact management, and seamless deployment to production.',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['GitHub Actions', 'GitHub Pages', 'Docker', 'Docker Compose', 'SonarQube', 'Nexus Repository', 'AWS EC2', 'AWS Application Load Balancer (ALB)', 'AWS IAM', 'Vite', 'React', 'TypeScript', 'Tailwind CSS'],
      architecture: 'https://github.com/Pavan-Kumar-Adapala/Personal_portfolio_3d_animation_Images_files/blob/Prod/images/CI_CD.png?raw=true',
      github: 'https://github.com/Pavan-Kumar-Adapala/Personal_portfolio_3d_animation',
      demo: '#',
      category: 'Docker, CI/CD, AWS, SonarQube, Nexus',
      detailedDescription: [
        'Built an end-to-end CI/CD pipeline using GitHub Actions and GitFlow to automate build, quality checks, artifact management, and deployment of a React application to GitHub Pages with a custom domain',
        'Containerized the application using a multi-stage Dockerfile to reduce image size, ensure consistency, and enable reproducible deployments across environments',
        'Integrated SonarQube for static code analysis (SAST) and Nexus Repository for artifact and Docker image hosting, deployed on AWS EC2 with Application Load Balancer for high availability',
        'Outcome: Gained hands-on experience in CI/CD, integrating security tools, and containerizing applications to deliver scalable, production-grade digital solutions that streamline development and deployment workflows'
      ],
      metrics: {
        DeploymentAutomation: '100% via GitHub Actions',
        imageSize: '50% smaller than previous builds',
        securityScans: '100% of builds',
        codeReviewCoverage: '100% of PRs'
      }
    },
    {
      title: 'Secure Serverless Website Hosting',
      description: 'Hosted a static portfolio on AWS S3 with CloudFront integration for fast, secure global delivery.',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['AWS S3', 'AWS CloudFront', 'AWS IAM', 'Origin Access Identity (OAI)', 'S3 Bucket Policies', 'HTML/CSS/JavaScript', 'Terraform'],
      architecture: 'https://github.com/Pavan-Kumar-Adapala/Personal_portfolio_3d_animation_Images_files/blob/Prod/images/AWS_serverless_static_website.png?raw=true',
      github: 'https://github.com/Pavan-Kumar-Adapala/Portfolio_project_Adapala',
      demo: '#',
      category: 'AWS, Serverless',
      detailedDescription: [
        'Improved content delivery speed and reliability by hosting the portfolio website on AWS S3 with CloudFront CDN using a secure serverless architecture',
        'Configured Origin Access Identity (OAI) and S3 bucket policies to enforce secure, restricted access'
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
      title: 'Linux System Monitoring and Automation with Bash Scripting',
      description: 'Developed a suite of Bash scripts to automate Linux system administration tasks such as monitoring, security auditing, user management, log rotation, and Git operations. Designed for scalability and cron-based scheduling to reduce manual overhead in server environments.',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Bash', 'Linux (Ubuntu, RedHat)', 'cron', 'logrotate', 'system monitoring tools'],
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
      title: 'Developed Hardware Management Automation Framework',
      description: 'Improved traceability and resource management in Bosch EPS2 Department using automation.',
      image: 'https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'JIRA REST API', 'Confluence API', 'Seventhings'],
      architecture: 'https://github.com/Pavan-Kumar-Adapala/Personal_portfolio_3d_animation_Images_files/blob/Prod/images/hardware_management.png?raw=true',
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
    title: 'Python-Based ETL and KPI Dashboard for Team Performance Analysis',
    description: 'Built a data-driven decision tool to track and improve Bosch EPS2 team performance.',
    image: 'https://images.pexels.com/photos/97080/pexels-photo-97080.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python (tkinter (GUI), Selenium (Web Automation), Pandas & NumPy (Data Processing), matplotlib (Data Visualization), threading (Multithreading))', 'ETL', 'Modular Programming', 'Linux'],
    architecture: 'https://github.com/Pavan-Kumar-Adapala/Personal_portfolio_3d_animation_Images_files/blob/Prod/images/FoucsTime_animation.gif?raw=true',
    github: '#',  // private or internal repo, can be omitted
    demo: 'https://github.com/Pavan-Kumar-Adapala/Personal_portfolio_3d_animation_Images_files/blob/Prod/images/FoucsTime_animation.gif?raw=true',
    category: 'KPI, ETL Pipeline, Automation',
    detailedDescription: [
      'Developed a modular Python GUI with multithreading to automate secure PDF extraction (Selenium), build an ETL pipeline integrating login and Outlook data, and compute Focus Time KPIs', 
      'Enabled data-driven team insights, improving productivity by 15%',
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
            A showcase of my DevOps, cloud engineering, and automation projects, featuring infrastructure automation, 
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
            <TiltCard key={index}>
              <motion.div
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
            </TiltCard>
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
                        className="max-w-full h-auto rounded-lg"
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
