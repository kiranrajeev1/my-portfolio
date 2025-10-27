import React from 'react';
import { motion } from 'framer-motion';

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="2.5"
    stroke="currentColor"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuButton = ({ isOpen, onClick }) => (
  <button onClick={onClick} className="p-2 focus:outline-none">
    <svg width="24" height="24" viewBox="0 0 24 24">
      {/* Top line */}
      <Path
        variants={{
          closed: { d: "M 3 6 L 21 6" },
          open: { d: "M 5 19 L 19 5" },
        }}
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.3 }}
      />

      {/* Middle line */}
      <Path
        variants={{
          closed: { opacity: 1, d: "M 3 12 L 21 12" },
          open: { opacity: 0, d: "M 3 12 L 21 12" },
        }}
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.2 }}
      />

      {/* Bottom line */}
      <Path
        variants={{
          closed: { d: "M 3 18 L 21 18" },
          open: { d: "M 5 5 L 19 19" },
        }}
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.3 }}
      />
    </svg>
  </button>
);
