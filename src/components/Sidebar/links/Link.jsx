import { transform } from "framer-motion";
import React from "react";
import { motion } from "framer-motion";
const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariant = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const item = ["Homepage", "Services", "Portfolio", "Contact", "About"];

const Link = () => {
  return (
    <motion.div className="links" variants={variants}>
      {item.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariant}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Link;
