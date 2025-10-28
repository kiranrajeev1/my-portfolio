import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Server, Terminal, Share2, Code } from 'lucide-react'; // 1. Import Code icon

const services = [
  {
    icon: <Cloud size={32} className="mb-4 text-indigo-500" />,
    title: 'Cloud Infrastructure Setup',
    description: 'Design and deployment of scalable and secure cloud environments on AWS, Azure, or GCP.',
  },
  {
    icon: <Share2 size={32} className="mb-4 text-green-500" />,
    title: 'CI/CD Pipeline Automation',
    description: 'Building fully automated pipelines for continuous integration and delivery to accelerate development cycles.',
  },
  // 2. Added new Web Development Service
  {
    icon: <Code size={32} className="mb-4 text-orange-500" />,
    title: 'Full Stack Web Development',
    description: 'Creating responsive and dynamic web applications using the MERN stack (MongoDB, Express, React, Node.js).',
  },
  {
    icon: <Server size={32} className="mb-4 text-blue-500" />,
    title: 'Containerization & Orchestration',
    description: 'Dockerizing applications and managing them at scale using Kubernetes (EKS, GKE, AKS).',
  },
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section id="services" className="py-24 px-4 w-full max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false, amount: 0.2 }}>
        <h2 className="text-4xl font-bold text-center mb-4">What I Offer</h2>
        <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          I provide end-to-end solutions to help businesses streamline their development, operations, and web presence.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="p-6 rounded-xl border border-black/10 dark:border-white/10 bg-white/5 dark:bg-black/5 backdrop-blur-sm shadow-md text-center"
          >
            {service.icon}
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-sm text-black/60 dark:text-white/60">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;