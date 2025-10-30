import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import GlassButton from '@/components/GlassButton';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="py-24 px-4 w-full">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="max-w-2xl mx-auto text-center"
      >
        <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-4">
          Get in Touch
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg text-black/70 dark:text-white/70 mb-12"
        >
          Have a question or want to work together? Leave a message.
        </motion.p>

        <form
          action="https://formspree.io/f/your_form_id" // Replace with your Formspree ID
          method="POST"
          className="space-y-6"
        >
          <motion.input
            variants={itemVariants}
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg bg-white/10 dark:bg-black/10 border border-black/10 dark:border-white/10 backdrop-blur-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
          <motion.input
            variants={itemVariants}
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg bg-white/10 dark:bg-black/10 border border-black/10 dark:border-white/10 backdrop-blur-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
          <motion.textarea
            variants={itemVariants}
            name="message"
            placeholder="Your Message"
            required
            rows="5"
            className="w-full p-3 rounded-lg bg-white/10 dark:bg-black/10 border border-black/10 dark:border-white/10 backdrop-blur-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none resize-none"
          />
          <motion.div variants={itemVariants}>
            <GlassButton type="submit" className="w-full sm:w-auto">
              Send Message
              <Send size={18} />
            </GlassButton>
          </motion.div>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;