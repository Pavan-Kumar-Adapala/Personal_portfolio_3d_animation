import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin, TrendingUp } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const experiences = [
    {
      title: 'Data Analyst',
      company: 'Dürr Systems AG',
      location: 'Bietigheim-Bissingen, Germany',
      period: '02/2024 - 07/2024',
      description: [
        'Thesis Topic: "Modelling concepts for forecasting the energy consumption in industrial paint shops"',
        'Developed and evaluated batch and one-step-ahead forecasting models, achieving 95% accuracy in predicting energy consumption',
        'Improved model performance by 15% using feature engineering and identification of key influencing features',
      ],
      technologies: ['Python', 'Exploratory Data Analysis (EDA)', 'Time series forecasting', 'Data pipelines', 'Machine Learning (ML)', 
        'Feature engineering', 'Data-driven decision making', 'Exclude commissioning period', 'Plausibility checks'],
      achievements: '95% forecasting accuracy, 15% model performance improvement'
    },
    {
      title: 'Software Integrator - Research Internship',
      company: 'Robert Bosch GmbH',
      location: 'Stuttgart, Germany',
      period: '05/2023 - 01/2024',
      description: [
        'Designed and optimized Jenkins pipelines to streamline CI/CD workflows for advanced driver-assistance (ADAS) parking system software',
        'Developed data-driven automation strategies by integrating Python scripts with REST APIs, reducing debugging time by 30% and accelerating root cause analysis',
        'Built a centralized Grafana dashboard for monitoring CI/CD builds across multiple projects, enabling data-driven release planning and performance insights',
        'Co-developed a modular Python GUI for productivity KPI, improving team output by 15%',
        'Developed an automated hardware management framework for assets management, saving 15.000 euros'
      ],
      technologies: ['Python(Tkinter, selenium, Pandas, Numpy, threading, logging)', 'Bash Scripting', 'Jenkins', 'Git & Bitbucket', 
        'JFrog Artifactory', 'JIRA & Confluence', 'Grafana', 'PostgreSQL', 'RESTAPIs', 'WSL', 'Linux VM','ETL Pipeline', 'GUI Application',
        'Data-driven'],
      achievements: '30% reduction in debugging time, 15% improvement in team productivity'
    },
    {
      title: 'Trainee DevOps Engineer',
      company: 'Ibexlabs Cloud Consulting Private Limited',
      location: 'Hyderabad, India',
      period: '04/2021 - 09/2021',
      description: [
        'Provisioned and managed AWS infrastructure using Terraform and CloudFormation, ensuring consistency and scalability',
        'Developed custom CloudWatch dashboards and alerting systems to monitor application performance metrics and logs, enabling proactive incident response and minimizing downtime'
      ],
      technologies: ['AWS', 'Python', 'Bash', 'Terraform', 'Ansible', 'Git & GitHub'],
      achievements: 'Managing and monitoring client cloud solutions'
    },
    {
      title: 'Trainee Cloud Engineer',
      company: 'Isuzu Motors India Private Limited',
      location: 'Sri City, India',
      period: '06/2018 - 07/2019',
      description: [
        'Contribute to cloud migration proof-of-concept project, reducing infrastructure costs by 25% using AWS Auto Scaling',
        'Implemented CI/CD pipelines using Jenkins Master-Slave architecture to automate deployments on AWS, accelerating release cycles',
        'Designed and deployed a scalable 3-tier AWS architecture to host a web application, ensuring high availability and fault tolerance'
      ],
      technologies: ['AWS Services', 'Networking', 'Secuirty', 'Python', 'Bash', 'Git & GitHub'],
      achievements: 'Reduced data retrieval time by 30%, Reduced operational costs by 25%'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="experience" ref={ref} className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My journey in DevOps and cloud engineering, building scalable infrastructure and 
            streamlining development workflows
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative mb-12"
              >
                {/* Timeline line */}
                <motion.div 
                  className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"
                  initial={{ height: 0 }}
                  animate={isInView ? { height: '100%' } : { height: 0 }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                ></motion.div>
                
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0, rotate: 0 }}
                  animate={isInView ? { scale: 1, rotate: 360 } : { scale: 0, rotate: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className="absolute left-6 top-8 w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-gray-900 z-10"
                ></motion.div>
                
                <div className="ml-20">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl p-8 shadow-2xl border border-gray-600 hover:border-blue-500/50 transition-all"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <motion.h3 
                          className="text-2xl font-bold text-white mb-2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          {exp.title}
                        </motion.h3>
                        <div className="flex items-center text-blue-400 mb-2">
                          <Briefcase size={18} className="mr-2" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-col md:items-end space-y-2">
                        <div className="flex items-center text-gray-400">
                          <Calendar size={16} className="mr-2" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center text-gray-400">
                          <MapPin size={16} className="mr-2" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Achievement Badge */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      className="flex items-center mb-4 bg-green-500/20 border border-green-500/50 rounded-lg p-2 w-fit"
                    >
                      <TrendingUp size={16} className="text-green-400 mr-2" />
                      <span className="text-green-400 text-sm font-medium">{exp.achievements}</span>
                    </motion.div>
                    
                    <ul className="space-y-2 mb-6">
                      {exp.description.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.5, delay: index * 0.1 + i * 0.1 }}
                          className="text-gray-300 flex items-start"
                        >
                          <span className="text-blue-400 mr-2 mt-2">•</span>
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30 hover:border-blue-400/50 transition-all cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;