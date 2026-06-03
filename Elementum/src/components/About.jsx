import React from 'react';
import './About.css';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="about container" id="studio">
      <div className="about-content">
        <h2 className="about-title">
          Tomorrow should <br/>
          be better than <span className="highlight-green">today</span>
        </h2>
        <p className="about-text">
          We are a team of strategists, designers communicators, researchers. Togeather. we belive that progress only hghappens when you refuse to play things safe.
        </p>
        <a href="#read-more" className="read-more">Read more <span className="arrow">⟶</span></a>
      </div>
      
      <div className="about-visuals">
        <motion.div 
          className="circle-img-wrapper circle-1"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop" alt="Team meeting" />
        </motion.div>
        
        <motion.div 
          className="circle-img-wrapper circle-2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop" alt="Colleagues working" />
        </motion.div>

        {/* Decorative elements */}
        <div className="shape red-triangle"></div>
        <div className="shape blue-frame"></div>
        <div className="shape red-square"></div>
        
        {/* Wavy line */}
        <svg className="wavy-line" width="800" height="200" viewBox="0 0 800 200" fill="none">
          <path d="M0 100 Q 200 200 400 100 T 800 100" stroke="#ff595e" strokeWidth="3" fill="none" strokeLinecap="round" strokeDasharray="10 10" />
        </svg>
      </div>
    </section>
  );
};

export default About;
