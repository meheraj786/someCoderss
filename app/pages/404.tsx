"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import NetworkMesh from "@/components/NetworkMesh";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Custom404 = () => {
  const location = usePathname();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location);
  }, [location]);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <NetworkMesh nodeCount={30} opacity={0.3} />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center relative z-10 px-6"
      >
        <div className="font-display text-8xl md:text-9xl font-bold gradient-text mb-6">
          404
        </div>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Page Not Found
        </h1>
        <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Button asChild size="lg">
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default Custom404;
