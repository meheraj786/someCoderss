
import ContactSection from '@/components/home/Contact';
import FAQSection from '@/components/home/FAQ';
import PageBanner from '@/components/PageBanner';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    content: 'hello@somecoderss.com',
    link: 'mailto:hello@somecoderss.com',
  },
  {
    icon: Phone,
    title: 'Call Us',
    content: '+1 (234) 567-890',
    link: 'tel:+1234567890',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    content: '123 Tech Street, San Francisco, CA 94105',
    link: '#',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    content: 'Mon - Fri: 9:00 AM - 6:00 PM PST',
    link: '#',
  },
];

const Contact = () => {
  return (
    <>
      <PageBanner
        subtitle="Contact Us"
        title="Let's Start a Conversation"
        description="Have a project in mind? We'd love to hear from you. Reach out and let's create something amazing together."
      />

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.link}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 rounded-xl text-center hover-glow block"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{info.title}</h3>
                <p className="text-sm text-muted-foreground">{info.content}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
      <FAQSection />
    </>
  );
};

export default Contact;
