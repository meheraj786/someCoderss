"use client";
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What technologies do you specialize in?',
    answer: 'We specialize in modern tech stacks including React, Next.js, Node.js, Python, AWS, GCP, and Azure. We also work with mobile technologies like React Native and Flutter, and emerging tech like AI/ML with TensorFlow and PyTorch.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on scope and complexity. A typical web application takes 8-12 weeks, while more complex enterprise solutions may take 4-6 months. We provide detailed timelines during our initial consultation.',
  },
  {
    question: 'Do you offer ongoing maintenance and support?',
    answer: 'Yes! We offer comprehensive maintenance packages including 24/7 monitoring, bug fixes, security updates, and feature enhancements. Our support team ensures your application runs smoothly long after launch.',
  },
  {
    question: 'What is your development process?',
    answer: 'We follow an Agile methodology with 2-week sprints, regular client check-ins, and continuous delivery. This ensures transparency, flexibility, and allows us to adapt quickly to changing requirements.',
  },
  {
    question: 'How do you ensure project security?',
    answer: 'Security is built into every stage of our development process. We conduct regular security audits, implement industry best practices, use encrypted communications, and follow OWASP guidelines for all applications.',
  },
  {
    question: 'What sets someCoderss apart from other agencies?',
    answer: 'Our unique combination of technical excellence, business acumen, and client-first approach sets us apart. We don\'t just build software — we build partnerships focused on your long-term success.',
  },
];

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Header */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              FAQ
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Frequently Asked
              <br />
              <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Got questions? We&apos;ve got answers. If you can&apos;t find what you&apos;re 
              looking for, reach out to our team.
            </p>
          </motion.div>

          {/* Right - Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="glass-card rounded-xl px-6 border-none"
                  >
                    <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
