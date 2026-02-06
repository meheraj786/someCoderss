"use client";
import PageBanner from '@/components/PageBanner';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Github, Mail } from 'lucide-react';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Alex Johnson',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    bio: 'Visionary leader with 15+ years in tech innovation. Alex founded someCoderss with a mission to make cutting-edge technology accessible to businesses of all sizes.',
    social: { linkedin: '#', twitter: '#', github: '#', email: 'alex@somecoderss.com' },
  },
  {
    name: 'Sarah Chen',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
    bio: 'Full-stack architect passionate about scalable systems. Sarah leads our technical strategy and ensures we stay ahead of the technology curve.',
    social: { linkedin: '#', twitter: '#', github: '#', email: 'sarah@somecoderss.com' },
  },
  {
    name: 'Marcus Williams',
    role: 'Lead Designer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    bio: 'Creating intuitive experiences that users love. Marcus brings over a decade of UX expertise to every project we undertake.',
    social: { linkedin: '#', twitter: '#', github: '#', email: 'marcus@somecoderss.com' },
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Engineering',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    bio: 'Building robust solutions with cutting-edge tech. Emily manages our engineering teams and drives technical excellence across all projects.',
    social: { linkedin: '#', twitter: '#', github: '#', email: 'emily@somecoderss.com' },
  },
  {
    name: 'David Kim',
    role: 'Senior Developer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
    bio: 'Specializing in cloud architecture and DevOps. David ensures our solutions are scalable, secure, and performant.',
    social: { linkedin: '#', twitter: '#', github: '#', email: 'david@somecoderss.com' },
  },
  {
    name: 'Lisa Thompson',
    role: 'Project Manager',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face',
    bio: 'Orchestrating success one project at a time. Lisa keeps our teams aligned and our clients informed throughout the development process.',
    social: { linkedin: '#', twitter: '#', github: '#', email: 'lisa@somecoderss.com' },
  },
  {
    name: 'James Park',
    role: 'AI/ML Engineer',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face',
    bio: 'Pushing boundaries in artificial intelligence. James develops intelligent solutions that give our clients a competitive edge.',
    social: { linkedin: '#', twitter: '#', github: '#', email: 'james@somecoderss.com' },
  },
  {
    name: 'Anna Martinez',
    role: 'UX Researcher',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face',
    bio: 'Understanding users to create better products. Anna conducts research that informs our design decisions and improves user satisfaction.',
    social: { linkedin: '#', twitter: '#', github: '#', email: 'anna@somecoderss.com' },
  },
];

const Team = () => {
  return (
    <>
      <PageBanner
        title="Our Team"
        subtitle="Meet the talented individuals who make the magic happen"
      />

      {/* Team Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              The <span className="text-primary">Minds</span> Behind someCoderss
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our diverse team of experts brings together decades of experience in technology,
              design, and business strategy to deliver exceptional results.
            </p>
          </motion.div>

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
                <div className="glass-card rounded-2xl p-6 text-center hover:border-primary/50 transition-all duration-300 h-full">
                  {/* Avatar */}
                  <div className="relative w-32 h-32 mx-auto mb-5">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/50 to-primary/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Image
                      width={400}
                      height={400}
                      src={member.image}
                      alt={member.name}
                      className="relative w-full h-full rounded-full object-cover border-2 border-border group-hover:border-primary transition-colors duration-300"
                    />
                  </div>

                  {/* Info */}
                  <h3 className="font-display font-semibold text-foreground text-xl mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center gap-3">
                    <a
                      href={member.social.linkedin}
                      className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin size={16} />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label={`${member.name}'s Twitter`}
                    >
                      <Twitter size={16} />
                    </a>
                    <a
                      href={member.social.github}
                      className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label={`${member.name}'s GitHub`}
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent" />
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-12 text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Want to <span className="text-primary">Join</span> Our Team?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              We&apos;re always looking for talented individuals who share our passion for innovation
              and excellence. Check out our open positions and become part of the someCoderss family.
            </p>
            <a
              href="/careers"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              View Open Positions
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Team;
