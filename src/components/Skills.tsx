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

  const technicalSkills = [
    { name: 'AWS / Azure / GCP', level: 85, icon: Cloud, color: 'from-blue-500 to-cyan-500' },
    { name: 'Kubernetes / Docker', level: 90, icon: Server, color: 'from-purple-500 to-pink-500' },
    { name: 'CI/CD Pipelines', level: 88, icon: GitBranch, color: 'from-green-500 to-teal-500' },
    { name: 'Infrastructure as Code', level: 82, icon: Terminal, color: 'from-orange-500 to-red-500' },
    { name: 'Monitoring & Logging', level: 80, icon: Database, color: 'from-indigo-500 to-blue-500' },
    { name: 'Security & Compliance', level: 75, icon: Shield, color: 'from-red-500 to-pink-500' },
  ];

  const personalSkills = [
    { name: 'Problem Solving', level: 92, icon: Lightbulb },
    { name: 'Team Collaboration', level: 88, icon: Users },
    { name: 'Communication', level: 85, icon: MessageSquare },
  ];

  const languages = [
    { name: 'English', level: 100, flag: '🇺🇸' },
    { name: 'Spanish', level: 75, flag: '🇪🇸' },
    { name: 'French', level: 60, flag: '🇫🇷' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

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
            
            {technicalSkills.map((skill, index) => (
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
                    <span className="ml-auto text-gray-400">{language.level === 100 ? 'Native' : `${language.level}%`}</span>
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