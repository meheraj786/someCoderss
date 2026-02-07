"use client";
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const partners = [
  { name: 'TechCorp', logo: 'TC' },
  { name: 'InnovateTech', logo: 'IT' },
  { name: 'CloudFirst', logo: 'CF' },
  { name: 'DataDriven', logo: 'DD' },
  { name: 'FutureLabs', logo: 'FL' },
  { name: 'ScaleUp', logo: 'SU' },
];

const PartnersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-muted-foreground/80 text-sm tracking-wider uppercase mb-2">
            Powering Innovation
          </p>
          <h2 className="text-2xl md:text-3xl font-bold gradient-text">
            Trusted by Industry Leaders
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              className="group relative"
            >
              <div className="glass-card p-6 hover-glow flex flex-col items-center justify-center gap-3 h-32 cursor-pointer">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-xl bg-primary/0 group-hover:bg-primary/5 transition-all duration-300" />
                
                <div className="relative w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center font-bold text-lg text-primary group-hover:scale-110 transition-transform duration-300">
                  {partner.logo}
                </div>
                
                <span className="relative text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {partner.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
    </section>
  );
};

export default PartnersSection;