import React from 'react';
import './Testimonial.css';
import Avatar from './Avatar';
import { motion } from 'framer-motion';

const Testimonial = () => {
  return (
    <section className="testimonial container">
      <h2 className="testimonial-title">
        <span className="highlight-green">What</span> our customer <br/>
        says <span className="highlight-underline">About Us</span>
      </h2>

      <div className="testimonial-content-wrapper">
        <motion.div 
          className="testimonial-box"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="quote-icon-top">“</div>
          <p className="testimonial-text">
            Elementum delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasnt used, which have also proved to be easy to use and reliable
          </p>
          <div className="quote-icon-bottom">”</div>
        </motion.div>

        {/* Floating Avatars around the testimonial box */}
        <Avatar src="https://i.pravatar.cc/150?img=11" size={80} style={{ left: '10%', top: '10%' }} delay={0.1} />
        <Avatar src="https://i.pravatar.cc/150?img=13" size={120} style={{ left: '15%', top: '40%' }} delay={0.2} />
        <Avatar src="https://i.pravatar.cc/150?img=14" size={60} style={{ left: '8%', top: '35%' }} delay={0.3} />
        <Avatar src="https://i.pravatar.cc/150?img=15" size={100} style={{ left: '12%', top: '70%' }} delay={0.4} />
        
        <Avatar src="https://i.pravatar.cc/150?img=16" size={70} style={{ right: '15%', top: '15%' }} delay={0.5} />
        <Avatar src="https://i.pravatar.cc/150?img=17" size={60} style={{ right: '18%', top: '45%' }} delay={0.6} />
        <Avatar src="https://i.pravatar.cc/150?img=18" size={140} style={{ right: '10%', top: '60%' }} delay={0.7} />
      </div>
    </section>
  );
};

export default Testimonial;
