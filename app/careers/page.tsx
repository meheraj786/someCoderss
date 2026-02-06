"use client";
import PageBanner from '@/components/PageBanner';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Briefcase, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const jobs = [
  {
    id: 1,
    title: 'Senior Full-Stack Developer',
    department: 'Engineering',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: 'Join our core engineering team to build next-generation web applications using React, Node.js, and cloud technologies.',
  },
  {
    id: 2,
    title: 'AI/ML Engineer',
    department: 'AI Division',
    location: 'Remote',
    type: 'Full-time',
    description: 'Work on cutting-edge AI projects, developing machine learning models and integrating them into production systems.',
  },
  {
    id: 3,
    title: 'DevOps Engineer',
    department: 'Infrastructure',
    location: 'New York, NY',
    type: 'Full-time',
    description: 'Design and maintain our cloud infrastructure, CI/CD pipelines, and ensure system reliability at scale.',
  },
  {
    id: 4,
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Full-time',
    description: 'Create beautiful, intuitive user experiences for our clients\' applications through research-driven design.',
  },
  {
    id: 5,
    title: 'Product Manager',
    department: 'Product',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: 'Lead product strategy and roadmap for key client projects, working closely with engineering and design teams.',
  },
  {
    id: 6,
    title: 'Technical Writer',
    department: 'Marketing',
    location: 'Remote',
    type: 'Part-time',
    description: 'Create technical documentation, blog posts, and educational content for our engineering blog.',
  },
];

const perks = [
  'Competitive salary + equity',
  'Remote-first culture',
  'Unlimited PTO',
  'Health, dental & vision',
  'Learning & development budget',
  'Home office stipend',
];

const Careers = () => {
  const jobsRef = useRef(null);
  const jobsInView = useInView(jobsRef, { once: true, margin: '-100px' });

  return (
    <>
      <PageBanner
        subtitle="Careers"
        title="Join Our Team"
        description="Be part of a team that's shaping the future of technology. We're always looking for talented individuals who share our passion."
      />

      {/* Perks Section */}
      <section className="py-16 border-b border-border/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-8">
              Why Work With Us?
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {perks.map((perk, index) => (
                <motion.span
                  key={perk}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="px-4 py-2 rounded-full glass-card text-sm text-foreground"
                >
                  {perk}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Job Listings */}
      <section ref={jobsRef} className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={jobsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Open <span className="gradient-text">Positions</span>
            </h2>
            <p className="text-muted-foreground">
              Find your next opportunity and grow with us.
            </p>
          </motion.div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                animate={jobsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 rounded-xl group hover:border-primary/50 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {job.title}
                      </h3>
                      <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs">
                        {job.department}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{job.description}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  
                  <Button variant="outline" size="sm" className="group/btn shrink-0">
                    Apply Now
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;
