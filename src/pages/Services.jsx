import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Server, Code, Share2 } from 'lucide-react';
import { BackgroundGradient } from '@/components/ui/background-gradient';

const services = [
  {
    icon: <Cloud size={32} className="mb-4 text-indigo-400" />,
    title: 'Cloud Infrastructure',
    description: 'Scalable and secure cloud environments on AWS, Azure, or GCP.',
  },
  {
    icon: <Share2 size={32} className="mb-4 text-green-400" />,
    title: 'CI/CD Automation',
    description: 'Automated pipelines for continuous integration and delivery.',
  },
  {
    icon: <Code size={32} className="mb-4 text-orange-400" />,
    title: 'Full Stack Development',
    description: 'Responsive web apps using the MERN stack (MongoDB, Express, React, Node.js).',
  },
  {
    icon: <Server size={32} className="mb-4 text-blue-400" />,
    title: 'Containerization',
    description: 'Dockerizing applications and managing them at scale with Kubernetes.',
  },
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
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
          I provide end-to-end solutions to streamline development, operations, and web presence.
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
          <motion.div key={index} variants={itemVariants}>
            <BackgroundGradient
              containerClassName="rounded-2xl h-full"
              className="
                flex flex-col items-center text-center
                h-full rounded-2xl p-6
                bg-white/80 dark:bg-zinc-900/80
                backdrop-blur-sm"
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-black/70 dark:text-white/70">{service.description}</p>
            </BackgroundGradient>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;