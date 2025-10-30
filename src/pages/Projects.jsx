import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

// Data extracted from your provided text
const projectData = [
  {
    title: "DevSecOps Chat App (Chatty)",
    description: "A real-time chat application showcasing a complete DevSecOps workflow, from containerization to deployment, security scanning, and monitoring for a three-tier application.",
    tech: ["K8s", "AWS EKS", "Jenkins", "Docker", "OWASP", "Trivy", "SonarQube", "Helm", "Prometheus", "Grafana", "ArgoCD"],
    githubUrl: "https://github.com/AneekaSA/DevSecOps-chat-app.git",
  },
  {
    title: "Movie Recommendation App (MERN)",
    description: "A full-stack MERN application to provide personalized movie recommendations, with a focus on a secure, automated, and observable DevSecOps deployment pipeline.",
    tech: ["MERN", "AWS EKS", "GitHub Actions", "Docker", "OWASP", "Trivy", "SonarQube", "Helm", "ArgoCD", "Prometheus"],
    githubUrl: "https://github.com/AneekaSA/MERN-MovieApp-3-Tier.git",
  },
  {
    title: "Wanderlust Travel Application",
    description: "A MERN travel blog website designed to demonstrate full DevSecOps workflows, including CI/CD, security scanning, Kubernetes deployment, and caching with Redis.",
    tech: ["MERN", "Docker", "Jenkins", "OWASP", "Trivy", "ArgoCD", "Redis", "AWS EKS", "Helm", "Prometheus", "Grafana"],
    githubUrl: "https://github.com/AneekaSA/Wanderlust-Mega-Project.git",
  },
  {
    title: "AWS Cloud Native DevOps Project",
    description: "A project showcasing AWS-native DevOps for a Node.js application, focusing on IaC, automated CI/CD with AWS services, and scalable EKS deployments.",
    tech: ["K8s", "Docker", "Terraform", "Ansible", "CodeBuild", "CodePipeline", "CodeDeploy", "CloudWatch"],
    githubUrl: "https://github.com/AneekaSA/NodeOps.git",
  }
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section id="projects" className="py-24 px-4 w-full max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-center mb-16">My Projects</h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex flex-col h-full rounded-2xl p-6 bg-white/10 dark:bg-black/10 border border-black/10 dark:border-white/10 backdrop-blur-md shadow-lg"
          >
            <div className="flex-grow">
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-sm text-black/70 dark:text-white/70 mb-5">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-6 mt-auto pt-4 border-t border-black/5 dark:border-white/5">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors font-medium"
              >
                <Github size={20} />
                View Code
              </a>
              {/* Add a live link if you have one */}
              {/* <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors">
                <ExternalLink size={20} />
                Live Demo
              </a> */}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;