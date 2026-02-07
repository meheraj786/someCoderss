"use client";
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Logo from './Logo';

const footerLinks = {
  company: [
    { name: 'About Us', path: '/about' },
    { name: 'Our Team', path: '/team' },
    { name: 'Careers', path: '/careers' },
    { name: 'Blog', path: '/blogs' },
    { name: 'Contact', path: '/contact' },
  ],
  services: [
    { name: 'Web Development', path: '/services' },
    { name: 'Mobile Apps', path: '/services' },
    { name: 'Cloud Solutions', path: '/services' },
    { name: 'AI & ML', path: '/services' },
  ],
  resources: [
    { name: 'Our Process', path: '/process' },
    { name: 'Case Studies', path: '/projects' },
    { name: 'FAQ', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy' },
  ],
};

const socialLinks = [
  { name: 'GitHub', icon: Github, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-card border-t border-border">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Logo />
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-sm">
              Building the future of digital experiences. We transform ideas into 
              powerful, scalable solutions that drive business growth.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Mail size={16} className="mt-0.5 text-primary" />
                <a href="mailto:hello@somecoderss.com" className="hover:text-primary transition-colors">
                  meherajhosen786@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone size={16} className="mt-0.5 text-primary" />
                <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                  +880 1989162543
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin size={16} className="mt-0.5 text-primary" />
                <span>Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} someCoderss. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
