import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import GlassPanel from './GlassPanel';

const projects = [
  {
    id: 1,
    title: "Web Development",
    description: "High-performance websites built with cutting-edge technologies to drive business growth and user engagement.",
    category: "Core Service",
    image: "/projects/project1.png",
  },
  {
    id: 2,
    title: "Web Application",
    description: "Robust and scalable web applications designed to solve complex business challenges with ease.",
    category: "Software",
    image: "/projects/project5.png",
  },
  {
    id: 3,
    title: "E-com Webs",
    description: "Complete e-commerce solutions with seamless payment integration and optimized conversion funnels.",
    category: "E-Commerce",
    image: "/projects/project4.png",
  },
  {
    id: 4,
    title: "Web Redesign",
    description: "Modernizing legacy websites with fresh UI/UX designs and improved performance metrics.",
    category: "Optimization",
    image: "/projects/project3.png",
  },
  {
    id: 5,
    title: "Rule-Based Chatbot",
    description: "Intelligent automated assistants designed to enhance customer support and streamline user interactions.",
    category: "AI & Automation",
    image: "/projects/project5.png",
  },
  {
    id: 6,
    title: "Maintenance & Support",
    description: "Dedicated technical support and regular maintenance to keep your digital assets secure and running smoothly.",
    category: "Support",
    image: "/projects/project2.png",
  },
  {
    id: 7,
    title: "Deployment with Domain",
    description: "Hassle-free deployment services including cloud setup, domain mapping, and SSL configuration.",
    category: "Deployment",
    image: "/projects/project1.png",
  }
];

const ProjectShowcase = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

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

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 25 : -25,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 25 : -25,
      transition: {
        duration: 0.6
      }
    })
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
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            Our Services in <span className="gradient-text">Action</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-300 text-lg leading-relaxed"
          >
            Our services focus on transforming complex business requirements into elegant, scalable, and high-performance digital experiences.
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto flex flex-col items-center">
          {/* Main Showcase Area */}
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] perspective-1000 overflow-visible py-10">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 flex items-center justify-center px-4"
              >
                <GlassPanel variant="gradient" blur="xl" className="p-1 w-full h-full shadow-[0_20px_50px_-15px_rgba(59,130,246,0.3)] overflow-hidden">
                  <div className="relative w-full h-full group overflow-hidden rounded-2xl">
                    <img
                      src={projects[index].image}
                      alt={projects[index].title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90" />

                    <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
                      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="max-w-2xl">
                          <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
                            {projects[index].category}
                          </span>
                          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            {projects[index].title}
                          </h3>
                          <p className="text-gray-300 text-lg line-clamp-2">
                            {projects[index].description}
                          </p>
                        </div>
                        <button className="flex-shrink-0 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-medium hover:bg-white/20 transition-all flex items-center gap-2">
                          View Project <ExternalLink size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </GlassPanel>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-20">
              <button
                onClick={prevProject}
                className="h-12 w-12 rounded-full bg-slate-900/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-blue-500/20 hover:border-blue-400/30 transition-all"
              >
                <ChevronLeft size={24} />
              </button>
            </div>
            <div className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-20">
              <button
                onClick={nextProject}
                className="h-12 w-12 rounded-full bg-slate-900/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-blue-500/20 hover:border-blue-400/30 transition-all"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Indicators */}
          <div className="flex items-center gap-3 mt-12">
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
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
