"use client";
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Github } from 'lucide-react';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Alex Johnson',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    bio: 'Visionary leader with 15+ years in tech innovation.',
    social: { linkedin: '#', twitter: '#', github: '#' },
  },
  {
    name: 'Sarah Chen',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
    bio: 'Full-stack architect passionate about scalable systems.',
    social: { linkedin: '#', twitter: '#', github: '#' },
  },
  {
    name: 'Marcus Williams',
    role: 'Lead Designer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    bio: 'Creating intuitive experiences that users love.',
    social: { linkedin: '#', twitter: '#', github: '#' },
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Engineering',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    bio: 'Building robust solutions with cutting-edge tech.',
    social: { linkedin: '#', twitter: '#', github: '#' },
  },
];

const TeamSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Our Team
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Meet the <span className="text-primary">Experts</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate team of innovators, designers, and engineers dedicated to 
            transforming your ideas into reality.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card rounded-2xl p-6 text-center hover:border-primary/50 transition-all duration-300">
                {/* Avatar */}
                <div className="relative w-28 h-28 mx-auto mb-4">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/50 to-primary/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Image
                    width={200}
                    height={200}
                    src={member.image}
                    alt={member.name}
                    className="relative w-full h-full rounded-full object-cover border-2 border-border group-hover:border-primary transition-colors duration-300"
                  />
                </div>

                {/* Info */}
                <h3 className="font-display font-semibold text-foreground text-lg">
                  {member.name}
                </h3>
                <p className="text-primary text-sm font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm mb-4">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-3">
                  <a
                    href={member.social.linkedin}
                    className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin size={14} />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={`${member.name}'s Twitter`}
                  >
                    <Twitter size={14} />
                  </a>
                  <a
                    href={member.social.github}
                    className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={`${member.name}'s GitHub`}
                  >
                    <Github size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
