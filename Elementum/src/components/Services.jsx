import React from 'react';
import './Services.css';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      desc: "Office of multiple interest content",
      title: "Colaborative & partnership"
    },
    {
      desc: "The hanger US Air force digital experimental",
      title: "We talk about our weight"
    },
    {
      desc: "Delta faucet content, social, digital",
      title: "Piloting digital confidence",
      sticker: true
    }
  ];

  return (
    <section className="services container" id="services">
      <div className="services-header">
        <h2 className="services-title">
          What we <span className="highlight-green">can</span> <br/>
          offer you!
        </h2>
        <svg className="services-wavy-line" width="400" height="150" viewBox="0 0 400 150" fill="none">
           <path d="M0 130 C 100 130, 150 20, 250 20 S 350 100, 400 80" stroke="#ff595e" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      </div>

      <div className="services-list">
        {services.map((service, index) => (
          <motion.div 
            className="service-item" 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="service-desc">{service.desc}</div>
            <div className="service-title-wrapper">
              <h3 className="service-title">
                {service.title}
                {service.sticker && (
                  <div className="sticker">
                    <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=100&auto=format&fit=crop" alt="Sticker" />
                  </div>
                )}
              </h3>
              <div className="service-arrow">⟶</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
