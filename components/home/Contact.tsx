"use client";
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '../ui/checkbox';


const contactReasons = [
  { id: 'web', label: 'Web Development' },
  { id: 'mobile', label: 'Mobile App' },
  { id: 'cloud', label: 'Cloud Solutions' },
  { id: 'ai', label: 'AI/ML Project' },
  { id: 'consulting', label: 'Consulting' },
  { id: 'other', label: 'Other' },
];

const budgetRanges = [
  { id: 'small', label: '$5k - $15k' },
  { id: 'medium', label: '$15k - $50k' },
  { id: 'large', label: '$50k - $100k' },
  { id: 'enterprise', label: '$100k+' },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedReasons, setSelectedReasons] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleReasonToggle = (reasonId: string) => {
    setSelectedReasons(prev =>
      prev.includes(reasonId)
        ? prev.filter(id => id !== reasonId)
        : [...prev, reasonId]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Reset after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section ref={ref} className="py-24 relative mesh-gradient" id="contact">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Start a Project
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Let&apos;s Build Something
            <br />
            <span className="gradient-text">Amazing Together</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ready to transform your ideas into reality? Fill out the form below and we&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="glass-card p-8 md:p-12 rounded-3xl space-y-8">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                  Message Sent!
                </h3>
                <p className="text-muted-foreground">
                  Thank you for reaching out. We&apos;ll get back to you shortly.
                </p>
              </motion.div>
            ) : (
              <>
                {/* Name & Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      required
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                      required
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                </div>

                {/* Contact Reasons */}
                <div className="space-y-3">
                  <label className="text-sm font-medium text-foreground">
                    What are you looking for? *
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {contactReasons.map((reason) => (
                      <label
                        key={reason.id}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg border cursor-pointer transition-all ${
                          selectedReasons.includes(reason.id)
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-border/50 text-muted-foreground hover:border-primary/50'
                        }`}
                      >
                        <Checkbox
                          checked={selectedReasons.includes(reason.id)}
                          onCheckedChange={() => handleReasonToggle(reason.id)}
                          className="hidden"
                        />
                        <span className="text-sm">{reason.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Budget Range */}
                <div className="space-y-3">
                  <label className="text-sm font-medium text-foreground">
                    Budget Range
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {budgetRanges.map((budget) => (
                      <button
                        key={budget.id}
                        type="button"
                        onClick={() => setSelectedBudget(budget.id)}
                        className={`px-4 py-2 rounded-lg border text-sm transition-all ${
                          selectedBudget === budget.id
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-border/50 text-muted-foreground hover:border-primary/50'
                        }`}
                      >
                        {budget.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Project Details *
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project, goals, and timeline..."
                    required
                    rows={5}
                    className="bg-background/50 border-border/50 focus:border-primary resize-none"
                  />
                </div>

                {/* Submit */}
                <Button type="submit" size="lg" className="w-full group">
                  Send Message
                  <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
