"use client";
import PageBanner from '@/components/PageBanner';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Eye, Heart, Users } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'We pursue excellence in every line of code and every client interaction.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'Open communication and honest relationships are at our core.',
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'We love what we do, and it shows in the quality of our work.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Great solutions emerge from diverse minds working together.',
  },
];

const milestones = [
  { year: '2016', title: 'Founded', description: 'someCoderss started with a vision to transform digital experiences.' },
  { year: '2018', title: 'First Enterprise Client', description: 'Secured our first Fortune 500 client, proving our enterprise capabilities.' },
  { year: '2020', title: 'Global Expansion', description: 'Opened offices in Europe and Asia to serve clients worldwide.' },
  { year: '2022', title: '100th Project', description: 'Celebrated the delivery of our 100th successful project.' },
  { year: '2024', title: 'AI Division', description: 'Launched dedicated AI/ML division to meet growing demand.' },
];

const About = () => {
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const storyInView = useInView(storyRef, { once: true, margin: '-100px' });
  const valuesInView = useInView(valuesRef, { once: true, margin: '-100px' });

  return (
    <>
      <PageBanner
        subtitle="About Us"
        title="Building Tomorrow's Technology Today"
        description="We're a team of passionate technologists dedicated to transforming ideas into powerful digital solutions."
      />

      {/* Story Section */}
      <section ref={storyRef} className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  someCoderss was born from a simple belief: technology should empower businesses, 
                  not complicate them. Founded in 2016, we started as a small team of developers 
                  with big dreams and bigger ambitions.
                </p>
                <p>
                  Today, we&apos;ve grown into a full-service digital agency with 25+ specialists 
                  across web, mobile, cloud, and AI. But our core mission remains unchanged — 
                  to build exceptional software that drives real business outcomes.
                </p>
                <p>
                  From startups to Fortune 500s, we&apos;ve helped over 50 companies transform their 
                  digital presence and achieve their goals. Every project is a partnership, 
                  and every client&apos;s success is our success.
                </p>
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: 20 }}
                    animate={storyInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="relative pl-12"
                  >
                    <div className="absolute left-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                    </div>
                    <div className="text-sm text-primary font-medium mb-1">{milestone.year}</div>
                    <h3 className="font-display font-semibold text-foreground mb-1">{milestone.title}</h3>
                    <p className="text-sm text-muted-foreground">{milestone.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 mesh-gradient">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-10 rounded-2xl"
            >
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower businesses with innovative technology solutions that drive growth, 
                efficiency, and competitive advantage. We believe in building software that 
                makes a real difference in people&apos;s lives and businesses.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card p-10 rounded-2xl"
            >
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the leading technology partner for businesses seeking digital transformation. 
                We envision a world where every organization can harness the power of technology 
                to achieve their full potential.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef} className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our <span className="gradient-text">Values</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-8 rounded-2xl text-center hover-glow"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
