'use client';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: 'FinTech Dashboard',
    category: 'Web Application',
    description: 'A comprehensive financial analytics platform with real-time data visualization and AI-powered insights.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'D3.js'],
  },
  {
    title: 'E-Commerce Platform',
    category: 'Full Stack',
    description: 'Scalable multi-vendor marketplace with advanced inventory management and payment integration.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    technologies: ['Next.js', 'Stripe', 'MongoDB', 'Redis'],
  },
  {
    title: 'Healthcare App',
    category: 'Mobile Application',
    description: 'Patient management system with telemedicine features and secure health record storage.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
    technologies: ['React Native', 'Firebase', 'HIPAA Compliant'],
  },
  {
    title: 'AI Content Generator',
    category: 'SaaS Platform',
    description: 'Machine learning powered content creation tool with multi-language support and SEO optimization.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    technologies: ['Python', 'OpenAI', 'FastAPI', 'Vue.js'],
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Work
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of successful projects that showcase our expertise in delivering innovative digital solutions.
          </p>
        </motion.div>

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
              <div className="relative h-56 overflow-hidden">
                <Image
                  width={600}
                  height={400}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium backdrop-blur-sm">
                    {project.category}
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
                <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded-md bg-secondary text-secondary-foreground text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button asChild size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
            <Link href="/projects">
              View All Projects
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
