import React from "react";
import { motion } from "framer-motion";

// All skills combined into a single array
const skills = [
  "AWS", "EC2", "S3", "RDS", "VPC", "Lambda", "Docker", "Kubernetes", "EKS", 
  "ECS", "Fargate", "ECR", "Terraform", "Ansible", "CloudFormation", "Jenkins", 
  "GitHub Actions", "ArgoCD", "Helm", "Prometheus", "Grafana", "CloudWatch", 
  "Trivy", "OWASP", "Linux", "Shell Scripting", "Git", "GitHub", "JavaScript", 
  "Bash", "MySQL", "MongoDB"
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.05, // A quick stagger for each skill
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-24 px-4 w-full max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-center mb-16">Technical Skills</h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-wrap justify-center gap-4" // Use flex-wrap for a compact layout
        >
          {skills.map((skill) => (
            <motion.span
              key={skill}
              variants={itemVariants}
              whileHover={{ y: -4 }} // Add a subtle lift on hover
              className="px-5 py-2 rounded-3xl text-sm font-medium bg-white/10 dark:bg-black/10 border border-black/10 dark:border-white/10 backdrop-blur-sm cursor-default"
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