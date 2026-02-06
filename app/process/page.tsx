"use client";
import PageBanner from '@/components/PageBanner';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Lightbulb, 
  Search, 
  Palette, 
  Code2, 
  TestTube, 
  Rocket, 
  BarChart, 
  Headphones 
} from 'lucide-react';
import ContactSection from '@/components/home/Contact';

const steps = [
  {
    icon: Lightbulb,
    title: 'Discovery',
    description: 'We dive deep into understanding your business, goals, and challenges through stakeholder interviews and market analysis.',
    duration: '1-2 weeks',
  },
  {
    icon: Search,
    title: 'Research & Strategy',
    description: 'Comprehensive research to define the optimal technical approach, architecture, and project roadmap.',
    duration: '1-2 weeks',
  },
  {
    icon: Palette,
    title: 'Design & Prototyping',
    description: 'Creating wireframes, UI/UX designs, and interactive prototypes for validation before development.',
    duration: '2-3 weeks',
  },
  {
    icon: Code2,
    title: 'Development',
    description: 'Agile sprints with continuous integration, code reviews, and regular client demos to ensure alignment.',
    duration: '6-12 weeks',
  },
  {
    icon: TestTube,
    title: 'Testing & QA',
    description: 'Rigorous testing including unit tests, integration tests, performance testing, and security audits.',
    duration: '2-3 weeks',
  },
  {
    icon: Rocket,
    title: 'Deployment',
    description: 'Seamless deployment to production with CI/CD pipelines, monitoring, and rollback capabilities.',
    duration: '1 week',
  },
  {
    icon: BarChart,
    title: 'Analytics & Optimization',
    description: 'Post-launch monitoring, performance analytics, and iterative improvements based on real data.',
    duration: 'Ongoing',
  },
  {
    icon: Headphones,
    title: 'Support & Maintenance',
    description: '24/7 support, regular updates, security patches, and feature enhancements to keep you ahead.',
    duration: 'Ongoing',
  },
];

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <>
      <PageBanner
        subtitle="Our Process"
        title="How We Build Success"
        description="A proven 8-step methodology that transforms your vision into a powerful, production-ready solution."
      />

      {/* Process Steps */}
      <section ref={ref} className="py-24">
        <div className="container mx-auto px-6">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent hidden lg:block" />

            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`grid lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? 'lg:direction-rtl' : ''
                  }`}
                >
                  <div className={`${index % 2 === 1 ? 'lg:order-2 lg:text-right' : ''}`}>
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="font-display text-5xl font-bold text-primary/20">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm">
                      {step.duration}
                    </span>
                  </div>

                  {/* Center node */}
                  <div className="hidden lg:flex justify-center">
                    <div className="w-4 h-4 rounded-full bg-primary glow-primary" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 mesh-gradient">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to <span className="gradient-text">Get Started?</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Let&apos;s discuss your project and create a customized roadmap for success.
            </p>
          </motion.div>
        </div>
      </section>

      <ContactSection />
    </>
  );
};

export default Process;
