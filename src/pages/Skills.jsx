import React from 'react';
import { motion } from 'framer-motion';

// Added MERN stack and other web dev skills
const skills = [
  'React', 'Node.js', 'Express', 'MongoDB', 'JavaScript', 'HTML5', 'CSS3',
  'AWS', 'Docker', 'Kubernetes', 'Terraform', 'Ansible', 'Git',
  'Jenkins', 'CI/CD', 'Python', 'Bash', 'Prometheus', 'Grafana',
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="skills" className="py-24 px-4 w-full max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-center mb-12">Technologies I Use</h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              variants={itemVariants}
              className="px-4 py-2 rounded-full text-sm font-medium bg-white/10 dark:bg-black/10 border border-black/10 dark:border-white/10 backdrop-blur-sm"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;