import { motion } from 'framer-motion';
import { ArrowDown, Code, Smartphone, ShoppingCart } from 'lucide-react';
import { useRef, useLayoutEffect, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GlassPanel from '../components/GlassPanel';
import { TestimonialSection } from '../components/Testimonials';
import SEO from '../components/SEO';
import ProjectShowcase from '../components/ProjectShowcase';

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));
const lerp = (start: number, end: number, t: number) => start + (end - start) * t;

const HomePage = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const heroBgRef = useRef<HTMLDivElement>(null);
  const servicesContentRef = useRef<HTMLDivElement>(null);
  const isMobileRef = useRef(false);
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      {
        // Use a small margin to ensure it stays visible until it's mostly gone
        // or trigger it exactly when it leaves the viewport
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

    // Only moves the TEXT content upward; background stays completely fixed.
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

      // Text slides up and fades — background does NOT move
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

    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#services' && servicesRef.current) {
        servicesRef.current.scrollIntoView({ behavior: 'smooth' });
      } else if (hash === '#testimonials' && testimonialsRef.current) {
        testimonialsRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

    handleHashChange();
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      if (scrollState.frame) {
        cancelAnimationFrame(scrollState.frame);
      }
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <SEO
        title="DenveX – Best Web Design Platform & Development Services"
        description="DenveX offers modern web design, development, and UI/UX solutions. We provide custom web solutions and high-end digital services for businesses worldwide."
        keywords="best web design platform, web development services, modern website design agency, UI/UX design company, custom web solutions, DenveX"
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
              "email": "teamdenvex@gmail.com"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Web Design and Development Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Web Development Services"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "UI/UX Design"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Custom Web Solutions"
                  }
                }
              ]
            }
          }
        ]}
      />

      {/* Fixed Background Layer - Does NOT move on scroll */}
      <div
        ref={heroBgRef}
        className="hero-bg fixed top-0 left-0 w-full h-screen pointer-events-none will-change-filter overflow-visible"
        style={{
          zIndex: -1,
          transition: 'filter 0.3s ease, opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), visibility 0.7s',
          opacity: isHeroVisible ? 1 : 0,
          visibility: isHeroVisible ? 'visible' : 'hidden',
        }}
      >
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 opacity-95" />
        <div className="absolute top-20 left-[10%] z-0 w-[32rem] h-[28rem] rounded-full bg-blue-500/14 blur-3xl" />
        <div className="absolute bottom-10 right-[8%] z-0 w-[24rem] h-[24rem] rounded-full bg-cyan-500/14 blur-3xl" />
      </div>

      {/* Hero Section - background is fixed; only text moves on scroll */}
      <section ref={heroSectionRef} className="relative pt-32 pb-10 md:pb-14 z-10">
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_24%),radial-gradient(circle_at_80%_20%,rgba(96,165,250,0.12),transparent_22%)] opacity-80 pointer-events-none" />
        <div className="absolute top-20 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-blue-600/30 to-cyan-500/20 blur-3xl animate-blob-float opacity-60" />
        <div className="absolute -bottom-32 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-violet-600/25 to-indigo-500/15 blur-3xl animate-blob-float-delay-2 opacity-50" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div ref={heroContentRef} className="max-w-5xl mx-auto text-center mb-6 md:mb-8" style={{ willChange: 'transform, opacity' }}>
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block mb-6"
            >
              <div className="px-5 py-2 rounded-full bg-blue-500/10 border border-blue-400/30 backdrop-blur-sm">
                <p className="text-sm font-medium bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent tracking-wide">
                  ✦ Welcome to DenveX
                </p>
              </div>
            </motion.div>

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
              <a
                href="#services"
                className="px-8 py-4 backdrop-blur-md bg-white/10 border border-white/20 text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
              >
                Our Services <ArrowDown size={18} />
              </a>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex justify-center mt-6"
            >
              <div className="text-gray-400">
                <ArrowDown size={24} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} id="services" className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-blue-600/20 to-cyan-500/10 blur-3xl opacity-40" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-gradient-to-tl from-blue-600/15 to-cyan-500/10 blur-3xl opacity-40" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div ref={servicesContentRef} className="text-center max-w-3xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-semibold tracking-widest uppercase"
            >
              What We Do
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
            >
              Our Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="text-gray-300 leading-relaxed text-lg"
            >
              We offer comprehensive digital solutions tailored to help your business thrive and stand out in the digital landscape.
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            <ServiceCard
              icon={<Code size={28} />}
              title="Web Development"
              description="Custom websites built for performance, user experience, and conversion rates that help your business grow."
              image="webdev.avif"
              link="https://webdevelopment-gamma.vercel.app/"
              delay={0}
            />
            <ServiceCard
              icon={<Smartphone size={28} />}
              title="Logo Design"
              description="Stunning visual identities and professional logos that capture your brand's essence and values."
              image="lo.avif"
              link="https://logo-indol.vercel.app/"
              delay={0.15}
            />
            <ServiceCard
              icon={<ShoppingCart size={28} />}
              title="Design & Branding"
              description="Complete design solutions from posters to pamphlets that elevate your brand presence."
              image="ad.webp"
              link="https://post-woad-kappa.vercel.app/"
              delay={0.3}
            />
          </motion.div>
        </div>
      </section>

      <ProjectShowcase />

      {/* Why Choose DenveX Section */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-slate-900/30">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -48 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                Why DenveX is the <span className="gradient-text">Best Web Design Platform</span>
              </h2>
              <div className="space-y-6 text-gray-300 text-lg">
                <p>
                  As a <span className="text-blue-300 font-semibold">modern website design agency</span>, we go beyond basic templates. We create <span className="text-blue-300 font-semibold">custom web solutions</span> that are tailored to your unique business goals.
                </p>
                <p>
                  Our <span className="text-blue-300 font-semibold">web development services</span> leverage the latest technologies to ensure your site is fast, secure, and highly scalable. We pride ourselves on being a top-tier <span className="text-blue-300 font-semibold">UI/UX design company</span>, focusing on user-centric layouts that drive conversions.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-blue-400" />
                    <span>SEO Optimized Structure</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-blue-400" />
                    <span>Responsive Mobile Design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-blue-400" />
                    <span>High-Performance Code</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-blue-400" />
                    <span>User-Centric UI/UX</span>
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
              <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full" />
              <GlassPanel variant="gradient" blur="xl" className="p-1 overflow-hidden">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl">
                  <img src="/den.avif" alt="Why DenveX" className="w-full h-full object-cover" />
                </div>
              </GlassPanel>
            </motion.div>
          </div>
        </div>
      </section>

      <section ref={testimonialsRef} id="testimonials" className="py-24 md:py-32 relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-bl from-violet-600/20 to-blue-500/10 blur-3xl opacity-40" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <TestimonialSection />

          {/* Client Logos */}
          <div className="mt-24">
            <p className="text-center text-gray-400 text-sm uppercase tracking-widest mb-12">Trusted by innovative companies</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {['TechCorp', 'Innovate', 'FutureBrand', 'Elevate', 'Acme'].map((company, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-lg font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent"
                >
                  {company}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">

        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-violet-600/20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full bg-radial-gradient opacity-40 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <GlassPanel variant="gradient" blur="xl" className="p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 -z-10">
              <img
                src="/projects/project3.png"
                alt="Workplace"
                className="w-full h-full object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/40 to-slate-950" />
            </div>
            <div className="relative z-10">
              <motion.h2
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl md:text-5xl font-bold mb-6 text-white"
              >
                Ready to Start Your Project?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed text-lg"
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
                  className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-full font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all"
                >
                  Get Started Now
                </Link>
              </motion.div>
            </div>
          </GlassPanel>
        </div>
      </section>
    </div>
  );
};

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  link: string;
  delay: number;
}

const ServiceCard = ({ icon, title, description, image, link, delay }: ServiceCardProps) => {
  return (
    <motion.a
      href={link}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group"
    >
      <GlassPanel variant="gradient" blur="md" className="p-0 h-full hover:border-blue-400/40 overflow-hidden flex flex-col">
        <div className="h-48 w-full overflow-hidden relative">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
        </div>
        <div className="p-8">
          <div className="h-14 w-14 -mt-16 relative z-10 rounded-xl bg-gradient-to-br from-blue-500/30 to-cyan-500/30 flex items-center justify-center text-blue-300 mb-6 group-hover:from-blue-500/50 group-hover:to-cyan-500/50 transition-all border border-white/10 backdrop-blur-md">
            {icon}
          </div>
          <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-200 transition-colors">{title}</h3>
          <p className="text-gray-300 leading-relaxed">{description}</p>
          <div className="mt-6 flex items-center text-blue-300 group-hover:text-blue-200 transition-colors">
            Learn more →
          </div>
        </div>
      </GlassPanel>
    </motion.a>
  );
};


export default HomePage;