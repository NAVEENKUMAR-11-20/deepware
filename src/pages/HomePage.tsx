import { motion } from 'framer-motion';
import { ArrowDown, Code, Smartphone, ShoppingCart } from 'lucide-react';
import { useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import GlassPanel from '../components/GlassPanel';
import InteractiveDottedHalo from '../components/InteractiveDottedHalo';

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));
const lerp = (start: number, end: number, t: number) => start + (end - start) * t;

const HomePage = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const heroBgRef = useRef<HTMLDivElement>(null);
  const servicesContentRef = useRef<HTMLDivElement>(null);
  const isMobileRef = useRef(false);

  useLayoutEffect(() => {
    const isMobile = typeof window !== 'undefined' && (window.innerWidth < 768 || 'ontouchstart' in window);
    isMobileRef.current = isMobile;
    const maxScroll = isMobile ? 320 : 440;
    const scrollState = {
      current: 0,
      target: 0,
      frame: 0 as number | null,
    };

    const updateStyles = () => {
      const next = lerp(scrollState.current, scrollState.target, 0.18);
      scrollState.current = next;
      const progress = clamp(next / maxScroll, 0, 1);
      const heroTranslate = -progress * (isMobileRef.current ? 70 : 110);
      const heroOpacity = clamp(1 - progress * 1.15, 0, 1);
      const heroScale = clamp(1 - progress * (isMobileRef.current ? 0.02 : 0.03), isMobileRef.current ? 0.98 : 0.97, 1);
      const blurAmount = clamp(progress * (isMobileRef.current ? 8 : 20), 0, isMobileRef.current ? 8 : 20);
      const brightness = clamp(1 - progress * 0.14, 0.82, 1);
      const heroTextBlur = isMobileRef.current ? 0 : clamp(progress * 1.6, 0, 1.6);
      const servicesProgress = clamp((next - (isMobileRef.current ? 80 : 100)) / (maxScroll - (isMobileRef.current ? 80 : 100)), 0, 1);
      const servicesTranslate = lerp(isMobileRef.current ? 30 : 45, 0, servicesProgress);
      const servicesOpacity = clamp(servicesProgress, 0, 1);

      if (heroContentRef.current) {
        heroContentRef.current.style.setProperty('--hero-translate', `${heroTranslate}px`);
        heroContentRef.current.style.setProperty('--hero-opacity', `${heroOpacity}`);
        heroContentRef.current.style.setProperty('--hero-scale', `${heroScale}`);
        heroContentRef.current.style.setProperty('--hero-text-blur', `${heroTextBlur}px`);
      }

      if (heroBgRef.current) {
        heroBgRef.current.style.setProperty('--hero-blur', `${blurAmount}px`);
        heroBgRef.current.style.setProperty('--hero-brightness', `${brightness}`);
      }

      if (servicesContentRef.current) {
        servicesContentRef.current.style.setProperty('--services-translate', `${servicesTranslate}px`);
        servicesContentRef.current.style.setProperty('--services-opacity', `${servicesOpacity}`);
      }

      if (Math.abs(scrollState.current - scrollState.target) > 0.5) {
        scrollState.frame = requestAnimationFrame(updateStyles);
      } else {
        scrollState.frame = null;
      }
    };

    const handleScroll = () => {
      scrollState.target = clamp(window.scrollY, 0, maxScroll);
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
    <div className="relative min-h-screen overflow-hidden">
      <div ref={heroBgRef} className="hero-background-fixed relative pointer-events-none">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 opacity-95" />
        <div className="absolute inset-0 z-0 bg-grid-pattern opacity-22" />
        <div className="absolute top-20 left-[10%] z-0 w-[32rem] h-[28rem] rounded-full bg-blue-500/14 blur-3xl" />
        <div className="absolute bottom-10 right-[8%] z-0 w-[24rem] h-[24rem] rounded-full bg-cyan-500/14 blur-3xl" />
        <InteractiveDottedHalo />
      </div>

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 lg:pt-48 pb-24 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_24%),radial-gradient(circle_at_80%_20%,rgba(96,165,250,0.12),transparent_22%)] opacity-80 pointer-events-none" />
        <div className="absolute top-20 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-blue-600/30 to-cyan-500/20 blur-3xl animate-blob-float opacity-60" />
        <div className="absolute -bottom-32 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-violet-600/25 to-indigo-500/15 blur-3xl animate-blob-float-delay-2 opacity-50" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div ref={heroContentRef} className="max-w-4xl mx-auto text-center mb-16 md:mb-24 hero-scroll-content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6"
            >
              <div className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/30 backdrop-blur-sm">
                <p className="text-sm font-medium bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  Welcome to DenveX Studio
                </p>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            >
              <span className="gradient-text">Transforming Ideas</span>
              <br />
              <span className="text-white">Into Digital Reality</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              We create stunning websites, powerful applications, and unforgettable digital experiences for businesses that want to stand out in the digital landscape.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            >
              <Link
                to="/register"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-full font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all"
              >
                Start Your Project
              </Link>
              <a
                href="#services"
                className="px-8 py-4 backdrop-blur-md bg-white/10 border border-white/20 text-white rounded-full font-semibold hover:bg-white/20 transition-all flex items-center justify-center gap-2"
              >
                Our Services <ArrowDown size={18} />
              </a>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex justify-center mt-12"
            >
              <div className="text-gray-400">
                <ArrowDown size={24} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} id="services" className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-emerald-600/20 to-teal-500/10 blur-3xl opacity-40" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-gradient-to-tl from-blue-600/15 to-violet-500/10 blur-3xl opacity-40" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div ref={servicesContentRef} className="text-center max-w-3xl mx-auto mb-20 services-reveal">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
            >
              Our Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-300 leading-relaxed text-lg"
            >
              We offer comprehensive digital solutions tailored to help your business thrive and stand out in the digital landscape.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={<Code size={28} />}
              title="Web Development"
              description="Custom websites built for performance, user experience, and conversion rates that help your business grow."
              link="https://webdevelopment-gamma.vercel.app/"
              delay={0}
            />
            <ServiceCard
              icon={<Smartphone size={28} />}
              title="Logo Design"
              description="Stunning visual identities and professional logos that capture your brand's essence and values."
              link="https://logo-indol.vercel.app/"
              delay={0.1}
            />
            <ServiceCard
              icon={<ShoppingCart size={28} />}
              title="Design & Branding"
              description="Complete design solutions from posters to pamphlets that elevate your brand presence."
              link="https://post-woad-kappa.vercel.app/"
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} id="testimonials" className="py-24 md:py-32 relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-bl from-violet-600/20 to-blue-500/10 blur-3xl opacity-40" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
            >
              What Our Clients Say
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-300 leading-relaxed text-lg"
            >
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialCard
              quote="DenveX completely transformed our online presence. Their team delivered a website that not only looks stunning but also performs exceptionally well."
              author="Hariharan"
              company="TechStart Inc."
              delay={0}
            />
            <TestimonialCard
              quote="The web app they built for us has received incredible feedback from our users. The attention to detail and user experience is unmatched."
              author="Omkar Varma"
              company="FinanceApp"
              delay={0.1}
            />
            <TestimonialCard
              quote="Working with DenveX was a game-changer for our business. They understood our vision and executed it flawlessly."
              author="Tamilselvan"
              company="StyleShop"
              delay={0.2}
            />
          </div>

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
          <GlassPanel variant="gradient" blur="xl" className="p-12 md:p-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
            >
              Ready to Start Your Project?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed text-lg"
            >
              Let's turn your vision into reality. Fill out our project requirements form and we'll get back to you within 24 hours.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                to="/register"
                className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-full font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all"
              >
                Get Started Now
              </Link>
            </motion.div>
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
  link: string;
  delay: number;
}

const ServiceCard = ({ icon, title, description, link, delay }: ServiceCardProps) => {
  return (
    <motion.a
      href={link}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group"
    >
      <GlassPanel variant="gradient" blur="md" className="p-8 h-full hover:border-blue-400/40">
        <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-blue-500/30 to-cyan-500/30 flex items-center justify-center text-blue-300 mb-6 group-hover:from-blue-500/50 group-hover:to-cyan-500/50 transition-all">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-200 transition-colors">{title}</h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
        <div className="mt-6 flex items-center text-blue-300 group-hover:text-blue-200 transition-colors">
          Learn more →
        </div>
      </GlassPanel>
    </motion.a>
  );
};

interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
  delay: number;
}

const TestimonialCard = ({ quote, author, company, delay }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <GlassPanel variant="dark" blur="md" className="p-8 h-full">
        <div className="flex gap-1 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} className="text-yellow-400 text-lg">
              ★
            </span>
          ))}
        </div>
        <p className="text-gray-300 mb-6 italic leading-relaxed">"{quote}"</p>
        <div>
          <h4 className="font-semibold text-white">{author}</h4>
          <p className="text-gray-400 text-sm">{company}</p>
        </div>
      </GlassPanel>
    </motion.div>
  );
};

export default HomePage;