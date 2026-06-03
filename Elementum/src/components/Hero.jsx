import React from 'react';
import './Hero.css';
import Avatar from './Avatar';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero container">
      <div className="hero-content">
        <h1 className="hero-title">
          The thinkers and <br />
          doers were <span className="highlight-pink">changing</span> <br />
          the <span className="highlight-green">status</span> Quo with
        </h1>
        <p className="hero-subtitle">
          We are a team of strategists, designers communicators, researchers. Togeather.<br/>
          we belive that progress only hghappens when you refuse to play things safe.
        </p>
      </div>

      <div className="hero-visuals">
        {/* Avatars */}
        <Avatar src="https://i.pravatar.cc/150?img=1" size={120} style={{ left: '20%', top: '0%' }} delay={0.1} />
        <Avatar src="https://i.pravatar.cc/150?img=12" size={80} style={{ left: '10%', top: '40%' }} delay={0.2} />
        <Avatar src="https://i.pravatar.cc/150?img=33" size={140} style={{ left: '35%', top: '20%' }} delay={0.3} tooltip="SANIA" />
        <Avatar src="https://i.pravatar.cc/150?img=47" size={100} style={{ left: '50%', top: '10%' }} delay={0.4} />
        <Avatar src="https://i.pravatar.cc/150?img=59" size={110} style={{ right: '25%', top: '30%' }} delay={0.5} />
        <Avatar src="https://i.pravatar.cc/150?img=60" size={90} style={{ right: '10%', top: '50%' }} delay={0.6} />
        
        {/* Decorative elements */}
        <motion.div className="shape squiggle-left" 
          initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}
        >
          <svg width="60" height="120" viewBox="0 0 60 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 20 C 60 -10, 60 50, 5 80 C -20 100, 30 130, 40 100" stroke="#f9cbe0" strokeWidth="4" strokeLinecap="round" fill="none"/>
            <path d="M15 40 C 70 10, 70 70, 15 100 C -10 120, 40 150, 50 120" stroke="#111111" strokeWidth="4" strokeLinecap="round" fill="none"/>
          </svg>
        </motion.div>
        
        <motion.div className="shape box-right"
          initial={{ opacity: 0, rotate: -45 }} animate={{ opacity: 1, rotate: 15 }} transition={{ duration: 1 }}
        >
           <div className="purple-half-circle"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
