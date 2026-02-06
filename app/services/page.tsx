"use client";
import PageBanner from '@/components/PageBanner';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Globe, 
  Smartphone, 
  Cloud, 
  Brain, 
  Shield, 
  Layers,
  Code,
  Database,
  Zap,
  Settings
} from 'lucide-react';
import ContactSection from '@/components/home/Contact';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Full-stack web applications built with modern technologies for optimal performance and user experience.',
    features: ['React & Next.js', 'Node.js & Python', 'Progressive Web Apps', 'E-commerce Solutions'],
    tools: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'MongoDB'],
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver seamless experiences across all devices.',
    features: ['iOS & Android Apps', 'Cross-platform Solutions', 'App Store Optimization', 'Push Notifications'],
    tools: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure designed for high availability, security, and cost optimization.',
    features: ['Cloud Migration', 'Serverless Architecture', 'Container Orchestration', 'Auto-scaling'],
    tools: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes', 'Terraform'],
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions that leverage AI to automate processes and unlock business insights.',
    features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Recommendation Systems'],
    tools: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'Langchain', 'Scikit-learn'],
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets from evolving threats.',
    features: ['Security Audits', 'Penetration Testing', 'Compliance (GDPR, SOC2)', 'Incident Response'],
    tools: ['OWASP', 'Burp Suite', 'Nessus', 'Snyk', 'Vault'],
  },
  {
    icon: Layers,
    title: 'Enterprise Software',
    description: 'Custom business solutions tailored to streamline operations and drive growth.',
    features: ['ERP Systems', 'CRM Solutions', 'Workflow Automation', 'Business Intelligence'],
    tools: ['Salesforce', 'SAP', 'Power BI', 'Tableau', 'Custom APIs'],
  },
];

const techStack = [
  { icon: Code, name: 'Frontend', techs: ['React', 'Next.js', 'Vue', 'Angular', 'TypeScript'] },
  { icon: Database, name: 'Backend', techs: ['Node.js', 'Python', 'Go', 'Java', 'GraphQL'] },
  { icon: Cloud, name: 'Cloud', techs: ['AWS', 'GCP', 'Azure', 'Vercel', 'Cloudflare'] },
  { icon: Settings, name: 'DevOps', techs: ['Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'GitHub Actions'] },
];

const Services = () => {
  const servicesRef = useRef(null);
  const techRef = useRef(null);
  const servicesInView = useInView(servicesRef, { once: true, margin: '-100px' });
  const techInView = useInView(techRef, { once: true, margin: '-100px' });

  return (
    <>
      <PageBanner
        subtitle="Our Services"
        title="Solutions That Drive Innovation"
        description="From concept to deployment, we provide comprehensive technology solutions tailored to your business needs."
      />

      {/* Services Grid */}
      <section ref={servicesRef} className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-8 rounded-2xl"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">What we deliver:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="text-sm text-muted-foreground flex items-center gap-2">
                          <Zap className="w-3 h-3 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section ref={techRef} className="py-24 mesh-gradient">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={techInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our <span className="gradient-text">Tech Stack</span>
            </h2>
            <p className="text-muted-foreground">
              We use industry-leading technologies to build robust, scalable solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                animate={techInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl text-center"
              >
                <category.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-display font-semibold text-foreground mb-4">{category.name}</h3>
                <div className="space-y-2">
                  {category.techs.map((tech) => (
                    <div key={tech} className="text-sm text-muted-foreground">
                      {tech}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
};

export default Services;
