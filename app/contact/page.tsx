
import ContactSection from '@/components/home/Contact';
import PageBanner from '@/components/PageBanner';

const Contact = () => {
  return (
    <>
      <PageBanner
        subtitle="Contact Us"
        title="Let's Start a Conversation"
        description="Have a project in mind? We'd love to hear from you. Reach out and let's create something amazing together."
      />
      <ContactSection />
      
    </>
  );
};

export default Contact;
