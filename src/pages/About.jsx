import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-24 px-4 w-full max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-center mb-8">
          About Me
        </h2>
        <p className="text-lg text-center text-gray-700 dark:text-gray-300 leading-relaxed">
          I'm Kiran, a passionate DevOps engineer with a strong focus on cloud technologies like AWS, Docker, and Kubernetes. I enjoy automating complex workflows and building resilient systems that are both efficient and reliable. I'm always eager to learn and apply new technologies to solve challenging problems.
        </p>
      </motion.div>
    </section>
  );
};

export default About;