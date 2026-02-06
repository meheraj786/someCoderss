import AboutSection from "@/components/home/About";
import BlogsSection from "@/components/home/Blogs";
import ContactSection from "@/components/home/Contact";
import FAQSection from "@/components/home/FAQ";
import HeroSection from "@/components/home/Hero";
import PartnersSection from "@/components/home/Partners";
import ProjectsSection from "@/components/home/Projects";
import ServicesSection from "@/components/home/Services";
import TeamSection from "@/components/home/Team";
import TestimonialsSection from "@/components/home/Testimonial";
import WhyChooseUsSection from "@/components/home/WCU";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      <main >
        <HeroSection />
        <PartnersSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <ProjectsSection />
        <TeamSection />
        <TestimonialsSection />
        <BlogsSection />
        <FAQSection />
        <ContactSection />
      </main>
    </div>
  );
}
