"use client";
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    'Agile Development Methodology',
    'Dedicated Project Managers',
    'Transparent Communication',
    '24/7 Support & Maintenance',
  ];

  return (
    <section ref={ref} className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              About Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Turning Ideas Into
              <br />
              <span className="gradient-text">Digital Reality</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              At someCoderss, we&apos;re more than developers — we&apos;re your technology partners. 
              With expertise spanning web, mobile, cloud, and AI, we craft solutions that 
              don&apos;t just meet expectations but exceed them.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-sm text-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card p-8 rounded-2xl">
              <div className="aspect-square rounded-xl bg-gradient-to-br from-primary/20 to-secondary overflow-hidden relative">
                {/* Abstract code visual */}
                <div className="absolute inset-0 p-6 font-mono text-xs text-primary/40 leading-relaxed overflow-hidden">
                  <pre className="animate-mesh-float">
{`const buildFuture = async () => {
  const vision = await imagine();
  const design = transform(vision);
  const code = develop(design);
  const product = deploy(code);
  
  return {
    quality: 'exceptional',
    performance: 'blazing',
    scalability: 'infinite'
  };
};

// Your success story starts here
buildFuture().then(success => {
  celebrate(success);
});`}
                  </pre>
                </div>
                
                {/* Floating elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute top-10 right-10 w-16 h-16 rounded-2xl bg-primary/30 backdrop-blur-sm"
                />
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute bottom-20 left-10 w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-sm"
                />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/50 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/70 z-30 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
