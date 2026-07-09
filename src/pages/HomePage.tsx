import { motion, useInView, animate } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useRef, useLayoutEffect, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GlassPanel from '../components/GlassPanel';
import SEO from '../components/SEO';
import ProjectShowcase from '../components/ProjectShowcase';

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));
const lerp = (start: number, end: number, t: number) => start + (end - start) * t;

const Counter = ({ value, suffix = "" }: { value: string | number, suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && typeof value === 'number') {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate(v) {
          if (ref.current) {
            ref.current.textContent = Math.floor(v) + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value, suffix]);

  if (typeof value === 'string') {
    return <span ref={ref}>{value}{suffix}</span>;
  }

  return <span ref={ref}>0{suffix}</span>;
};

const HomePage = () => {
  const heroContentRef = useRef<HTMLDivElement>(null);
  const heroBgRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: '0px'
      }
    );

    if (heroSectionRef.current) {
      observer.observe(heroSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    const scrollState = {
      current: 0,
      target: 0,
      frame: 0 as number | null,
    };

    const updateStyles = () => {
      if (window.innerWidth < 768) {
        if (heroContentRef.current) {
          heroContentRef.current.style.transform = '';
          heroContentRef.current.style.opacity = '';
        }
        scrollState.frame = null;
        return;
      }

      const next = lerp(scrollState.current, scrollState.target, 0.12);
      scrollState.current = next;

      const maxScroll = 500;
      const progress = clamp(next / maxScroll, 0, 1);

      const textTranslate = -progress * 140;
      const textOpacity = clamp(1 - progress * 1.4, 0, 1);

      if (heroContentRef.current) {
        heroContentRef.current.style.transform = `translateY(${textTranslate}px)`;
        heroContentRef.current.style.opacity = `${textOpacity}`;
      }

      if (Math.abs(scrollState.current - scrollState.target) > 0.3) {
        scrollState.frame = requestAnimationFrame(updateStyles);
      } else {
        scrollState.frame = null;
      }
    };

    const handleScroll = () => {
      if (window.innerWidth < 768) return;
      scrollState.target = window.scrollY;
      if (!scrollState.frame) {
        scrollState.frame = requestAnimationFrame(updateStyles);
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      if (scrollState.frame) {
        cancelAnimationFrame(scrollState.frame);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <SEO
        title="DenveX – Best Web Design Platform & Development Services"
        description="DenveX offers modern web design, development, and UI/UX solutions. We provide custom web solutions and high-end digital services for businesses worldwide."
        keywords="best web design platform, web development services, modern website design service, UI/UX design company, custom web solutions, DenveX"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "DenveX",
            "alternateName": "DenveX Technologies",
            "url": "https://www.denvex.in"
          },
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "DenveX",
            "url": "https://www.denvex.in",
            "logo": "https://www.denvex.in/logo.png",
            "sameAs": [
              "https://www.linkedin.com/in/naveen-kumar-p-034658300/",
              "https://github.com/NAVEENKUMAR-11-20/"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-7358349394",
              "contactType": "customer service",
              "email": "team@denvex.in"
            }
          }
        ]}
      />

      {/* Fixed Background Layer for Hero */}
      <div
        ref={heroBgRef}
        className="hero-bg fixed top-0 left-0 w-full h-screen pointer-events-none will-change-filter overflow-visible bg-[#082052]"
        style={{
          zIndex: -1,
          transition: 'filter 0.3s ease, opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), visibility 0.7s',
          opacity: isHeroVisible ? 1 : 0,
          visibility: isHeroVisible ? 'visible' : 'hidden',
        }}
      >
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#082052] via-[#0D2D73] to-[#082052] opacity-95" />
        <div className="absolute top-20 left-[10%] z-0 w-[32rem] h-[28rem] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-10 right-[8%] z-0 w-[24rem] h-[24rem] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      {/* Hero Section */}
      <section ref={heroSectionRef} className="relative pt-32 pb-12 md:pb-16 z-10">
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.1),transparent_24%),radial-gradient(circle_at_80%_20%,rgba(96,165,250,0.08),transparent_22%)] opacity-80 pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div ref={heroContentRef} className="max-w-5xl mx-auto text-center mb-6 md:mb-8" style={{ willChange: 'transform, opacity' }}>
            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight"
            >
              <span className="gradient-text block">Best Web Design Platform</span>
              <span className="text-white block">for Custom Web Solutions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              We create stunning websites, powerful applications, and unforgettable digital experiences for businesses that want to stand out in the digital landscape.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            >
              <Link
                to="/register"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-full font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
              >
                Start Your Project
              </Link>
              <Link
                to="/about/ourservice"
                className="px-8 py-4 backdrop-blur-md bg-white/10 border border-white/20 text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
              >
                Our Services <ArrowDown size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Showcase Section - Alternating Background (#F8F0E5 - Warm Ivory) */}
      <div className="bg-[#F8F0E5] relative z-20 shadow-[0_-20px_40px_rgba(0,0,0,0.2)] rounded-t-[3rem] pt-12 -mt-8">
        <ProjectShowcase />
      </div>

      {/* Why Choose DenveX Section - Same background (#F8F0E5 - Warm Ivory) */}
      <section className="pt-12 md:pt-16 pb-24 md:pb-32 relative overflow-hidden bg-[#F8F0E5] z-20 border-b border-gray-200">
        <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_center,rgba(8,32,82,0.03),transparent_50%)]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -48 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#082052]">
                Why DenveX is the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Best Web Design Platform</span>
              </h2>
              <div className="space-y-6 text-slate-700 text-lg">
                <p>
                  As a <span className="text-blue-600 font-semibold">modern website design service</span>, we go beyond basic templates. We create <span className="text-blue-600 font-semibold">custom web solutions</span> that are tailored to your unique business goals.
                </p>
                <p>
                  Our <span className="text-blue-600 font-semibold">web development services</span> leverage the latest technologies to ensure your site is fast, secure, and highly scalable. We pride ourselves on being a top-tier <span className="text-blue-600 font-semibold">UI/UX design company</span>, focusing on user-centric layouts that drive conversions.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  <li className="flex items-center gap-3">
                    <div className="h-2.5 w-2.5 rounded-full bg-blue-500" />
                    <span className="font-medium text-slate-800">SEO Optimized Structure</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2.5 w-2.5 rounded-full bg-blue-500" />
                    <span className="font-medium text-slate-800">Responsive Mobile Design</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2.5 w-2.5 rounded-full bg-blue-500" />
                    <span className="font-medium text-slate-800">High-Performance Code</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2.5 w-2.5 rounded-full bg-blue-500" />
                    <span className="font-medium text-slate-800">User-Centric UI/UX</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 48, scale: 0.96 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="absolute inset-0 bg-blue-200/50 blur-[80px] rounded-full" />
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] shadow-2xl border border-white">
                <img src="/den.avif" alt="Why DenveX" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics Section (#082052) */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-[#082052] z-20 rounded-t-[3rem] -mt-8 shadow-[0_-20px_40px_rgba(0,0,0,0.15)]">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-bl from-[#4FA9FF]/10 to-blue-500/5 blur-[120px] opacity-60" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-gradient-to-tr from-[#0D2D73]/40 to-cyan-500/10 blur-[100px] opacity-50" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-semibold tracking-widest uppercase"
            >
              OUR ACHIEVEMENTS
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
            >
              Building Trust Through Results
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="text-gray-300 leading-relaxed text-lg"
            >
              Every project we deliver reflects our commitment to innovation, quality, and customer satisfaction. These milestones represent the impact DenveX continues to create for businesses and organizations.
            </motion.p>
          </div>

          <motion.div
            className="flex flex-wrap justify-center gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {[
              {
                value: 15,
                suffix: "+",
                title: "Projects Completed",
                description: "Successfully delivered websites, software, and digital solutions."
              },
              {
                value: 13,
                suffix: "+",
                title: "Happy Clients",
                description: "Businesses and startups trusting DenveX."
              },
              {
                value: 8,
                suffix: "+",
                title: "Core Services",
                description: "Comprehensive technology solutions under one roof."
              },
              {
                value: 98,
                suffix: "%",
                title: "Client Satisfaction",
                description: "Focused on quality, transparency, and long-term partnerships."
              },
              {
                value: "24/7",
                suffix: "",
                title: "Technical Support",
                description: "Reliable support whenever our clients need assistance."
              }
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
                }}
                whileHover={{ y: -8, scale: 1.04, transition: { duration: 0.25 } }}
                className="group relative flex-[0_1_calc(50%-0.75rem)] md:flex-[0_1_calc(33.333%-1rem)] lg:flex-[1_1_0]"
              >
                <div className="h-full p-4 md:p-8 rounded-[24px] bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.12)] shadow-[0_20px_40px_rgba(8,32,82,0.4)] backdrop-blur-md group-hover:border-blue-400/50 group-hover:shadow-[0_20px_50px_rgba(79,169,255,0.15)] transition-all flex flex-col items-center text-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 rounded-[24px] transition-all pointer-events-none" />
                  
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-[800] bg-gradient-to-r from-[#4FA9FF] to-[#6ED8FF] bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300 origin-center">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </h3>
                  <h4 className="text-white text-xl md:text-2xl font-bold mb-3">{stat.title}</h4>
                  <p className="text-[#D8E2F0] text-sm md:text-base">{stat.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Alternating Background (#F8F0E5 - Warm Ivory / White) */}
      <section className="py-14 md:py-20 relative overflow-hidden bg-[#F8F0E5] z-20 rounded-t-[3rem] -mt-8 shadow-[0_-20px_40px_rgba(0,0,0,0.1)]">

        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F8F0E5] via-white to-[#F8F0E5]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full bg-[radial-gradient(ellipse_at_center,rgba(56,139,248,0.06),transparent_70%)] opacity-80 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="p-8 md:p-12 text-center relative overflow-hidden bg-[#082052] border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(8,32,82,0.15)] text-white">
            <div className="absolute inset-0 -z-10">
              <img
                src="/projects/project3.png"
                alt="Workplace"
                className="w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#082052]/95 via-[#0D2D73]/85 to-[#082052]/95" />
            </div>
            <div className="relative z-10">
              <motion.h2
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-3xl md:text-4xl font-bold mb-4 text-white"
              >
                Ready to Start Your Project?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed text-base"
              >
                Let's turn your vision into reality. Fill out our project requirements form and we'll get back to you within 24 hours.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  to="/register"
                  className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-full font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
                >
                  Get Started Now
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;