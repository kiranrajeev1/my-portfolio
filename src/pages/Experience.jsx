import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

// Data from your resume
const experiences = [
  {
    role: "Cloud DevOps Trainee",
    company: "Cloudnets Solutions",
    date: "Jan 2025 - Aug 2025",
    tasks: [
      "Containerized applications using Docker and Kubernetes to ensure scalability and high availability.",
      "Engineered CI/CD pipelines in Jenkins using Git and Maven to automate build, testing, and release workflows.",
      "Configured and optimized AWS services (IAM, S3, VPC, EC2, CloudWatch, etc.) for secure and resilient infrastructure.",
      "Implemented Infrastructure-as-Code using Terraform to provision, orchestrate, and automate cloud resources.",
      "Administered Linux-based systems, developing shell scripts to automate tasks and enhance performance."
    ]
  }
];

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="experience" className="py-24 px-4 w-full max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-center mb-16">Experience</h2>
      </motion.div>
      
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="p-8 rounded-2xl border border-black/10 dark:border-white/10 bg-white/5 dark:bg-black/5 backdrop-blur-sm shadow-lg"
          >
            <div className="flex justify-between items-start flex-col sm:flex-row">
              <h3 className="text-2xl font-semibold">{exp.role}</h3>
              <span className="text-lg text-black/60 dark:text-white/60 sm:mt-0 mt-1">{exp.date}</span>
            </div>
            <p className="text-xl font-medium text-indigo-500 dark:text-indigo-400 mt-1 mb-6">{exp.company}</p>

            <ul className="space-y-4">
              {exp.tasks.map((task, i) => (
                <motion.li
                  key={i}
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <CheckCircle size={20} className="flex-shrink-0 text-green-500 mt-1" />
                  <span className="text-black/80 dark:text-white/80">{task}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
