import React from 'react';
import './Avatar.css';
import { motion } from 'framer-motion';

const Avatar = ({ src, size, style, tooltip, delay = 0 }) => {
  return (
    <motion.div 
      className="avatar-wrapper" 
      style={{ ...style, width: size, height: size }}
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay, type: "spring" }}
      viewport={{ once: true }}
    >
      <div className="avatar-img-container">
        <img src={src} alt="Avatar" className="avatar-img" />
      </div>
      {tooltip && <div className="avatar-tooltip">{tooltip}</div>}
    </motion.div>
  );
};

export default Avatar;
