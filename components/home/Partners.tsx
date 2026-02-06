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
    <section ref={ref} className="py-16 border-y border-border/30">
      <div className="container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center text-muted-foreground text-sm mb-10"
        >
          Trusted by innovative companies worldwide
        </motion.p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-2 text-muted-foreground/60 hover:text-muted-foreground transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center font-display font-bold text-sm">
                {partner.logo}
              </div>
              <span className="font-display font-medium hidden sm:block">{partner.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
