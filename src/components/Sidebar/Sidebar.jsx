import React, { useState } from "react";
import "./Sidebar.scss";
import { motion } from "framer-motion";
import Togglebtn from "./toggleBtn/Togglebtn";
import Link from "./links/Link";
const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
const Sidebar = () => {
  const [open, setOpen] = useState();
  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Link />
      </motion.div>
      <Togglebtn setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
