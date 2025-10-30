import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="py-24 px-4 w-full max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }} // Animates every time
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-center mb-8">
          About Me
        </h2>
        {/* Updated text from your resume's "Objective" */}
        <p className="text-lg text-center text-gray-700 dark:text-gray-300 leading-relaxed">
          Cloud and DevOps enthusiast with a Bachelor's degree in Computer Applications, skilled in AWS, Linux, and DevOps practices.
          I possess hands-on experience in containerization, CI/CD pipelines, and cloud infrastructure automation through practical projects.
          Seeking to design, implement, and optimize cloud solutions while contributing to innovative initiatives.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
