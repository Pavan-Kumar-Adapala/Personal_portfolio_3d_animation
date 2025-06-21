import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Cloud, 
  Server, 
  Database, 
  GitBranch, 
  Terminal, 
  Shield,
  Users,
  MessageSquare,
  Lightbulb,
  Globe
} from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });


  const technicalSkillGroups = [
    {
      category: "Programming & Scripting",
      icon: Terminal,
      skills: [
        { name: "Python", level: 90, icon: Terminal, color: "from-yellow-400 to-yellow-600" },
        { name: "Bash Scripting", level: 80, icon: Terminal, color: "from-red-500 to-red-700" },
      ],
    },
    {
      category: "Cloud Platforms",
      icon: Cloud,
      skills: [
        { name: "AWS - IaaS, PaaS, SaaS", level: 90, icon: Cloud, color: "from-blue-500 to-cyan-500" },
        { name: "Azure", level: 40, icon: Cloud, color: "from-indigo-500 to-blue-400" },
      ],
    },
    {
      category: "CI/CD Tools",
      icon: GitBranch,
      skills: [
        { name: "Jenkins", level: 90, icon: GitBranch, color: "from-green-500 to-emerald-500" },
        { name: "GitHub Actions", level: 70, icon: GitBranch, color: "from-pink-500 to-purple-500" },
        { name: "GitLab CI", level: 40, icon: GitBranch, color: "from-orange-500 to-yellow-500" },
        { name: "ArgoCD", level: 40, icon: GitBranch, color: "from-red-500 to-pink-500" },
      ],
    },
    {
      category: "Configuration Management an IaC",
      icon: Terminal,
      skills: [
        { name: "Ansible", level: 70, icon: Terminal, color: "from-green-500 to-lime-500" },
        { name: "Terraform", level: 70, icon: Terminal, color: "from-green-400 to-green-600" },
        { name: "CloudFormation", level: 70, icon: Terminal, color: "from-green-400 to-green-600" },
      ],
    },
    {
      category: "Containerization & Orchestration",
      icon: Server,
      skills: [
        { name: "Docker", level: 85, icon: Server, color: "from-blue-400 to-blue-600" },
        { name: "Kubernetes", level: 70, icon: Server, color: "from-purple-500 to-indigo-500" },
      ],
    },
    {
      category: "Databases",
      icon: Database,
      skills: [
        { name: "MySQL", level: 80, icon: Database, color: "from-blue-300 to-blue-500" },
        { name: "PostgreSQL", level: 70, icon: Database, color: "from-purple-300 to-purple-500" },
      ],
    },
    {
      category: "Monitoring & Logging",
      icon: Shield,
      skills: [
        { name: "CloudWatch", level: 90, icon: Shield, color: "from-blue-600 to-blue-800" },
        { name: "Prometheus", level: 70, icon: Shield, color: "from-yellow-500 to-yellow-700" },
        { name: "Grafana", level: 70, icon: Shield, color: "from-purple-600 to-purple-800" },
      ],
    },
    {
      category: "OS & Virtualization",
      icon: Server,
      skills: [
        { name: "Linux (Ubuntu, REHL9)", level: 90, icon: Server, color: "from-gray-600 to-gray-800" },
        { name: "Windows Server", level: 60, icon: Server, color: "from-blue-300 to-blue-500" },
        { name: "VMware", level: 70, icon: Server, color: "from-green-400 to-green-600" }
      ],
    },
    {
      category: "Web Servers & Proxies",
      icon: Server,
      skills: [
        { name: "Nginx", level: 85, icon: Server, color: "from-green-500 to-green-700" },
        { name: "Apache", level: 70, icon: Server, color: "from-red-500 to-red-700" }
      ],
    },
    {
      category: "Network & Security ",
      icon: Shield,
      skills: [
        { name: "IAM (Identity and Access Management)", level: 90, icon: Shield, color: "from-blue-500 to-blue-700" },
        { name: "VPCs and Subnets", level: 95, icon: Shield, color: "from-blue-400 to-blue-600" },
        { name: "Network Protocols (TCP/IP, DNS, HTTP, HTTPS)", level: 80, icon: Shield, color: "from-blue-500 to-blue-700" },
        { name: "Firewall Configuration (NACLs, Secuiry Groups)", level: 85, icon: Shield, color: "from-red-500 to-red-700" },
        { name: "VPN Setup", level: 90, icon: Shield, color: "from-purple-500 to-purple-700" },
        { name: "Load Balancing", level: 80, icon: Shield, color: "from-green-500 to-green-700" },
      ],
    },
    {
      category: "Collaboration Tools",
      icon: Users,
      skills: [
        { name: "Jira", level: 80, icon: Users, color: "from-blue-400 to-blue-600" },   
        { name: "Confluence", level: 70, icon: Users, color: "from-purple-400 to-purple-600" },
        { name: "Git", level: 95, icon: Users, color: "from-green-400 to-green-600" },
        { name: "GitHub & Bitbucket ", level: 95, icon: Users, color: "from-blue-300 to-blue-500" },
      ],
    },
    {
      category: "Automation",
      icon: Terminal,
      skills: [
        { name: "Webscraping and Webutomation", level: 85, icon: Terminal, color: "from-yellow-500 to-yellow-700" },
        { name: "ETL pipeline", level: 90, icon: Terminal, color: "from-blue-400 to-blue-600" }
      ],
    },
    {
      category: "Software development",
      icon: Terminal,
      skills: [
        { name: "Agile Methodologies", level: 85, icon: Terminal, color: "from-yellow-400 to-yellow-600" },
        { name: "Scrum Framework", level: 80, icon: Terminal, color: "from-orange-400 to-orange-600" }
      ],
    },
    {
      category: "Data science & ML Frameworks",
      icon: Terminal,   
      skills: [
        { name: "Pandas", level: 85, icon: Terminal, color: "from-blue-500 to-blue-700" },
        { name: "NumPy", level: 80, icon: Terminal, color: "from-green-500 to-green-700" },
        { name: "Scikit-learn", level: 75, icon: Terminal, color: "from-purple-500 to-purple-700" }
      ],
    },
    {
      category: "Data Visualization",
      icon: Terminal,
      skills: [
        { name: "Matplotlib", level: 80, icon: Terminal, color: "from-red-500 to-red-700" },
        { name: "Seaborn", level: 75, icon: Terminal, color: "from-pink-500 to-pink-700" },
        { name: "Plotly, Qlik Sense", level: 70, icon: Terminal, color: "from-yellow-500 to-yellow-700" }
      ],
    },
    {
      category: "Web Development",
      icon: Terminal,
      skills: [
        { name: "HTML & CSS", level: 90, icon: Terminal, color: "from-blue-300 to-blue-500" },
        { name: "Django, FASTAPI", level: 55, icon: Terminal, color: "from-purple-500 to-purple-700" },
        { name: "JavaScript", level: 40, icon: Terminal, color: "from-yellow-400 to-yellow-600" },
        { name: "React.js", level: 40, icon: Terminal, color: "from-green-400 to-green-600" },
      ],
    }
  ];

  // Personal skills
  const personalSkills = [
    { name: 'Problem Solving', level: 92, icon: Lightbulb },
    { name: 'Quick Learner', level: 92, icon: Lightbulb },
    { name: 'Team Collaboration', level: 88, icon: Users },
    { name: 'Communication', level: 85, icon: MessageSquare },
  ];

  // Language proficiency
  const languages = [
    { name: 'Telugu', levelCode: 'C2', levelLabel: 'Native', level: 100, flag: 'te' },
    { name: 'English', levelCode: 'C1', levelLabel: 'Proficient', level: 90, flag: 'us' },
    { name: 'German', levelCode: 'B1', levelLabel: 'Conversational', level: 60, flag: 'de' },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Individual item animation variants
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" ref={ref} className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical capabilities, soft skills, and language proficiency
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Technical Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Terminal className="mr-2 text-blue-400" />
              Technical Skills
            </h3>
            
          {technicalSkillGroups.map((group) => (
            <motion.div
              key={group.category}
              variants={itemVariants}
              className="space-y-4 mb-8"
            >
              {/* Category Title */}
              <div className="flex items-center mb-4">
                <group.icon className="text-blue-400 mr-2" />
                <h4 className="text-xl font-semibold text-white">{group.category}</h4>
              </div>

              {/* Skills Under Category */}
              {group.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 hover:bg-gray-700/50 transition-all border border-gray-700 hover:border-blue-500/50"
                >
                  <div className="flex items-center mb-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${skill.color} mr-3`}>
                      <skill.icon size={20} className="text-white" />
                    </div>
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="ml-auto text-gray-400">{skill.level}%</span>
                  </div>

                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ))}
          </motion.div>


          {/* Right Side - Soft Skills & Languages */}
          <div className="space-y-8">
            {/* Personal Skills */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Users className="mr-2 text-purple-400" />
                Soft Skills
              </h3>
              
              {personalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 hover:bg-gray-700/50 transition-all border border-gray-700 hover:border-purple-500/50"
                >
                  <div className="flex items-center mb-3">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 mr-3">
                      <skill.icon size={20} className="text-white" />
                    </div>
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="ml-auto text-gray-400">{skill.level}%</span>
                  </div>
                  
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Languages */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Globe className="mr-2 text-green-400" />
                Languages
              </h3>
              
              {languages.map((language, index) => (
                <motion.div
                  key={language.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 hover:bg-gray-700/50 transition-all border border-gray-700 hover:border-green-500/50"
                >
                  <div className="flex items-center mb-3">
                    <div className="text-2xl mr-3">{language.flag}</div>
                    <span className="text-white font-medium">{language.name}</span>
                    <span className="ml-auto text-gray-400">{language.levelLabel} ({language.levelCode})</span>
                    <span className="ml-auto text-gray-400">{language.level}%</span>
                    {/* <span className="ml-auto text-gray-400">{language.level === 100 ? 'Native' : `${language.level}%`}</span> */}
                  </div>
                  
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="h-2 rounded-full bg-gradient-to-r from-green-500 to-teal-500"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${language.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.3 }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;