import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import GlassPanel from './GlassPanel';

const projects = [
  {
    id: 1,
    title: "Web Development",
    description: "High-performance websites built with cutting-edge technologies to drive business growth and user engagement.",
    category: "Core Service",
    image: "dev.webp",
  },
  {
    id: 2,
    title: "Web Application",
    description: "Robust and scalable web applications designed to solve complex business challenges with ease.",
    category: "Software",
    image: "webdev.avif",
  },
  {
    id: 3,
    title: "E-com Webs",
    description: "Complete e-commerce solutions with seamless payment integration and optimized conversion funnels.",
    category: "E-Commerce",
    image: "e-com.avif",
  },
  {
    id: 4,
    title: "Web Redesign",
    description: "Modernizing legacy websites with fresh UI/UX designs and improved performance metrics.",
    category: "Optimization",
    image: "redesign.avif",
  },
  {
    id: 5,
    title: "Rule-Based Chatbot",
    description: "Intelligent automated assistants designed to enhance customer support and streamline user interactions.",
    category: "AI & Automation",
    image: "aibot.avif",
  },
  {
    id: 6,
    title: "Maintenance & Support",
    description: "Dedicated technical support and regular maintenance to keep your digital assets secure and running smoothly.",
    category: "Support",
    image: "maintain2.png",
  },
  {
    id: 7,
    title: "Deployment with Domain",
    description: "Hassle-free deployment services including cloud setup, domain mapping, and SSL configuration.",
    category: "Deployment",
    image: "domain.avif",
  }
];

const ProjectShowcase = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextProject = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    const timer = setInterval(nextProject, 6000);
    return () => clearInterval(timer);
  }, []);

  const getCardStyles = (i: number) => {
    let offset = i - index;
    if (offset > projects.length / 2) offset -= projects.length;
    if (offset < -projects.length / 2) offset += projects.length;

    const absOffset = Math.abs(offset);
    const isVisible = isMobile ? i === index : absOffset <= 1;

    if (!isVisible) return { opacity: 0, pointerEvents: 'none' as const, zIndex: 0 };

    if (isMobile) {
      return {
        x: 0,
        scale: 1,
        opacity: 1,
        zIndex: 10,
        rotateY: 0,
      };
    }

    return {
      x: offset * 280,
      scale: 1 - absOffset * 0.15,
      opacity: 1 - absOffset * 0.5,
      zIndex: 10 - absOffset,
      rotateY: offset * 20,
    };
  };

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-blue-500/10 blur-[120px] opacity-30" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-5xl font-bold mb-6 text-white"
          >
            Our Services in <span className="gradient-text">Action</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-300 text-sm md:text-lg leading-relaxed"
          >
            Our services focus on transforming complex business requirements into elegant, scalable, and high-performance digital experiences.
          </motion.p>
        </div>

        <div className="relative max-w-xl md:max-w-3xl mx-auto flex flex-col items-center">
          {/* Main Showcase Area */}
          <div className="relative w-full aspect-[4/5] md:aspect-[16/10] perspective-1000 overflow-visible py-10">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={false}
                animate={getCardStyles(i)}
                transition={{
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100,
                  damping: 20
                }}
                className="absolute inset-0 flex items-center justify-center px-4"
              >
                <GlassPanel variant="gradient" blur="xl" className="p-1 w-full h-full shadow-[0_20px_50px_-15px_rgba(59,130,246,0.3)] overflow-hidden">
                  <div className="relative w-full h-full group overflow-hidden rounded-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90" />

                    <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
                      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="max-w-2xl">
                          <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
                            {project.category}
                          </span>
                          <h3 className="text-xl md:text-4xl font-bold text-white mb-4">
                            {project.title}
                          </h3>
                          <p className="text-gray-300 text-sm md:text-lg line-clamp-2">
                            {project.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </GlassPanel>
              </motion.div>
            ))}

            {/* Navigation Buttons (Desktop: Bottom, Mobile: Sides) */}
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 md:hidden">
              <button
                onClick={prevProject}
                className="h-12 w-12 rounded-full bg-slate-900/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white"
              >
                <ChevronLeft size={24} />
              </button>
            </div>
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 md:hidden">
              <button
                onClick={nextProject}
                className="h-12 w-12 rounded-full bg-slate-900/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Indicators and Desktop Navigation */}
          <div className="flex items-center gap-8 mt-12">
            <button
              onClick={prevProject}
              className="hidden md:flex h-12 w-12 rounded-full bg-slate-900/50 backdrop-blur-md border border-white/10 items-center justify-center text-white hover:bg-blue-500/20 hover:border-blue-400/30 transition-all"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex items-center gap-3">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className={`h-2 transition-all duration-300 rounded-full ${i === index ? 'w-10 bg-blue-400' : 'w-2 bg-gray-600 hover:bg-gray-500'}`}
                />
              ))}
            </div>

            <button
              onClick={nextProject}
              className="hidden md:flex h-12 w-12 rounded-full bg-slate-900/50 backdrop-blur-md border border-white/10 items-center justify-center text-white hover:bg-blue-500/20 hover:border-blue-400/30 transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
