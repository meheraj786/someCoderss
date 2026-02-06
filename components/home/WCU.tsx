"use client";
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Rocket, 
  Users, 
  Clock, 
  Award,
  Headphones,
  Target
} from 'lucide-react';

const reasons = [
  {
    icon: Rocket,
    title: 'Fast Delivery',
    description: 'Agile sprints ensure rapid development without compromising quality.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Senior developers with 8+ years average experience in the industry.',
  },
  {
    icon: Clock,
    title: 'On-Time, On-Budget',
    description: '98% of our projects delivered on schedule and within budget.',
  },
  {
    icon: Award,
    title: 'Quality Assured',
    description: 'Rigorous testing and code reviews guarantee bug-free deployments.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock technical support and maintenance services.',
  },
  {
    icon: Target,
    title: 'Goal-Oriented',
    description: 'We focus on your business objectives, not just technical requirements.',
  },
];

const WhyChooseUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Central element */}
              <div className="absolute inset-1/4 glass-card rounded-3xl flex items-center justify-center glow-primary">
                <div className="text-center">
                  <div className="font-display text-5xl font-bold text-primary mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
              
              {/* Orbiting elements */}
              {reasons.slice(0, 4).map((reason, index) => (
                <motion.div
                  key={reason.title}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                  style={{ 
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '100%',
                    height: '100%',
                    transformOrigin: '0% 0%',
                    transform: `rotate(${index * 90}deg)`,
                  }}
                >
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                    className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 glass-card rounded-xl flex items-center justify-center"
                  >
                    <reason.icon className="w-5 h-5 text-primary" />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Why Choose Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Your Success Is
              <br />
              <span className="gradient-text">Our Mission</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              We combine technical excellence with business acumen to deliver solutions that truly make a difference.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <reason.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{reason.title}</h4>
                    <p className="text-sm text-muted-foreground">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
