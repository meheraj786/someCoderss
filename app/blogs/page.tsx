"use client";
import PageBanner from '@/components/PageBanner';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of AI in Enterprise Software Development',
    excerpt: 'Exploring how artificial intelligence is transforming the way we build and deploy enterprise applications.',
    category: 'AI & ML',
    date: 'Jan 15, 2024',
    readTime: '8 min read',
    image: '/placeholder.svg',
  },
  {
    id: 2,
    title: 'Microservices vs Monolith: Choosing the Right Architecture',
    excerpt: 'A comprehensive guide to help you decide which architecture pattern best suits your project needs.',
    category: 'Architecture',
    date: 'Jan 10, 2024',
    readTime: '12 min read',
    image: '/placeholder.svg',
  },
  {
    id: 3,
    title: 'Building Scalable React Applications with Next.js 14',
    excerpt: 'Best practices and patterns for creating high-performance React apps with the latest Next.js features.',
    category: 'Web Dev',
    date: 'Jan 5, 2024',
    readTime: '10 min read',
    image: '/placeholder.svg',
  },
  {
    id: 4,
    title: 'Cloud Cost Optimization: A Practical Guide',
    excerpt: 'Learn how to reduce your cloud spending by up to 40% without sacrificing performance or reliability.',
    category: 'Cloud',
    date: 'Dec 28, 2023',
    readTime: '7 min read',
    image: '/placeholder.svg',
  },
  {
    id: 5,
    title: 'Implementing Zero Trust Security in Modern Applications',
    excerpt: 'Step-by-step guide to adopting zero trust principles in your application security strategy.',
    category: 'Security',
    date: 'Dec 20, 2023',
    readTime: '9 min read',
    image: '/placeholder.svg',
  },
  {
    id: 6,
    title: 'The Rise of Edge Computing: What Developers Need to Know',
    excerpt: 'Understanding edge computing and how it\'s changing the landscape of application deployment.',
    category: 'Infrastructure',
    date: 'Dec 15, 2023',
    readTime: '6 min read',
    image: '/placeholder.svg',
  },
];

const Blogs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <>
      <PageBanner
        subtitle="Our Blog"
        title="Insights & Perspectives"
        description="Technical deep-dives, industry trends, and expert perspectives from our team."
      />

      {/* Blog Grid */}
      <section ref={ref} className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-2xl overflow-hidden group hover-glow"
              >
                <div className="aspect-video bg-secondary relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <Link
                    href={`/blogs/${post.id}`}
                    className="inline-flex items-center gap-1 text-sm text-primary font-medium group/link"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
