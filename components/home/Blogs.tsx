'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const blogs = [
  {
    title: 'The Future of AI in Software Development',
    excerpt: 'Explore how artificial intelligence is revolutionizing the way we build and deploy software applications.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    author: 'Alex Johnson',
    date: 'Jan 15, 2024',
    readTime: '5 min read',
    category: 'AI & Technology',
  },
  {
    title: 'Building Scalable Microservices Architecture',
    excerpt: 'Learn the best practices for designing and implementing microservices that can handle millions of requests.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
    author: 'Sarah Chen',
    date: 'Jan 10, 2024',
    readTime: '8 min read',
    category: 'Architecture',
  },
  {
    title: 'UI/UX Trends to Watch in 2024',
    excerpt: 'Discover the latest design trends that are shaping user experiences across digital platforms.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    author: 'Mike Roberts',
    date: 'Jan 5, 2024',
    readTime: '6 min read',
    category: 'Design',
  },
];

const BlogsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Blog
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Latest Insights & Articles
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and insights from our team of experts.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-500"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  width={600}
                  height={400}
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium backdrop-blur-sm">
                    {blog.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <User size={12} />
                    {blog.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {blog.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {blog.readTime}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {blog.excerpt}
                </p>
                <Link
                  href="/blogs"
                  className="inline-flex items-center text-primary text-sm font-medium hover:gap-2 transition-all"
                >
                  Read More
                  <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button asChild size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
            <Link href="/blogs">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogsSection;
