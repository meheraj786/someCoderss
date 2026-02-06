'use client';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import PageBanner from '@/components/PageBanner';
import { Button } from '@/components/ui/button';

import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: 'FinTech Dashboard',
    category: 'Web Application',
    description: 'A comprehensive financial analytics platform with real-time data visualization and AI-powered insights. Features include portfolio tracking, risk assessment, and predictive analytics.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'D3.js', 'TensorFlow'],
    client: 'Global Finance Corp',
    year: '2024',
  },
  {
    title: 'E-Commerce Platform',
    category: 'Full Stack',
    description: 'Scalable multi-vendor marketplace with advanced inventory management, payment integration, and real-time order tracking for seamless shopping experience.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
    technologies: ['Next.js', 'Stripe', 'MongoDB', 'Redis', 'AWS'],
    client: 'RetailMax Inc',
    year: '2024',
  },
  {
    title: 'Healthcare App',
    category: 'Mobile Application',
    description: 'Patient management system with telemedicine features, secure health record storage, and appointment scheduling with HIPAA compliance.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop',
    technologies: ['React Native', 'Firebase', 'HIPAA Compliant', 'WebRTC'],
    client: 'MedCare Solutions',
    year: '2023',
  },
  {
    title: 'AI Content Generator',
    category: 'SaaS Platform',
    description: 'Machine learning powered content creation tool with multi-language support, SEO optimization, and brand voice customization.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
    technologies: ['Python', 'OpenAI', 'FastAPI', 'Vue.js', 'Docker'],
    client: 'ContentFlow AI',
    year: '2024',
  },
  {
    title: 'Smart Logistics Platform',
    category: 'Enterprise Solution',
    description: 'End-to-end supply chain management system with real-time tracking, route optimization, and automated warehouse management.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop',
    technologies: ['Angular', 'Java', 'Kubernetes', 'IoT', 'Machine Learning'],
    client: 'LogiTech Global',
    year: '2023',
  },
  {
    title: 'EdTech Learning Platform',
    category: 'Web Application',
    description: 'Interactive online learning platform with live classes, progress tracking, gamification, and AI-powered personalized learning paths.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=500&fit=crop',
    technologies: ['React', 'GraphQL', 'PostgreSQL', 'WebSocket', 'AWS'],
    client: 'EduLearn Pro',
    year: '2024',
  },
  {
    title: 'Real Estate Marketplace',
    category: 'Full Stack',
    description: 'Property listing and management platform with virtual tours, mortgage calculator, and AI-powered property recommendations.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop',
    technologies: ['Next.js', 'Three.js', 'Node.js', 'Elasticsearch', 'Redis'],
    client: 'PropTech Ventures',
    year: '2023',
  },
  {
    title: 'Social Media Analytics',
    category: 'SaaS Platform',
    description: 'Comprehensive social media monitoring and analytics tool with sentiment analysis, competitor tracking, and automated reporting.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop',
    technologies: ['Python', 'React', 'Apache Kafka', 'NLP', 'BigQuery'],
    client: 'SocialPulse Inc',
    year: '2024',
  },
];

const categories = ['All', 'Web Application', 'Mobile Application', 'Full Stack', 'SaaS Platform', 'Enterprise Solution'];

const Projects = () => {
  return (
    <>
      <PageBanner
        title="Our Projects"
        subtitle="Portfolio"
        description="Discover our portfolio of innovative digital solutions that have transformed businesses across industries."
      />

      {/* Filter Categories */}
      <section className="py-8 border-b border-border/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  index === 0
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-primary/20 hover:text-primary'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative glass-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    width={800}
                    height={500}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium backdrop-blur-sm">
                      {project.category}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-secondary/80 text-secondary-foreground text-xs font-medium backdrop-blur-sm">
                      {project.year}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="p-2 rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:text-primary transition-colors">
                      <Github size={18} />
                    </button>
                    <button className="p-2 rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:text-primary transition-colors">
                      <ExternalLink size={18} />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">
                    Client: {project.client}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded-md bg-secondary text-secondary-foreground text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 rounded-md bg-secondary text-secondary-foreground text-xs">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-12 text-center border border-primary/20"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Have a Project in Mind?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Let&apos;s collaborate to bring your vision to life. Our team is ready to create innovative solutions tailored to your needs.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Projects;
