import { useEffect } from "react";
import { motion } from "framer-motion";
import { Code, Smartphone, ShoppingCart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import SEO from "../components/SEO";
import GlassPanel from "../components/GlassPanel";
import { TestimonialSection } from "../components/Testimonials";

const orgSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "DenveX",
    alternateName: "DenveX Technologies",
    url: "https://www.denvex.in",
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DenveX",
    url: "https://www.denvex.in",
    logo: "https://www.denvex.in/logo.png",
  },
];

const About = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.replace(/\/$/, ""); // strip trailing slash if present
    if (path === '/about/ourservice' || path === '/about/service') {
      const element = document.getElementById('ourservice');
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 150);
        return () => clearTimeout(timer);
      }
    } else if (path === '/about/customerservice') {
      const element = document.getElementById('customerservice');
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#082052]">
      <SEO
        title="About DenveX – Modern Website Design Service"
        description="Learn more about DenveX, a modern technology company committed to transforming ideas into innovative digital solutions."
        keywords="modern website design service, UI/UX design company, web development experts, DenveX about"
        schema={orgSchema}
      />

      {/* 1. Hero Section (#082052) */}
      <section className="relative pt-36 pb-20 lg:pt-48 lg:pb-32 px-6 flex items-center justify-center min-h-[50vh] bg-[#082052] z-10">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#082052] via-[#0D2D73] to-[#082052]" />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="absolute top-[-10%] right-[-10%] w-[50rem] h-[50rem] rounded-full bg-blue-600/10 blur-[120px]"
          />
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="container mx-auto text-center z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#FFFFFF] mb-6 tracking-tight">
              Building Innovative <br className="hidden md:block" />
              <span className="text-[#4FA9FF]">Digital Solutions.</span>
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-[#D8E2F0] text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed"
          >
            DenveX is a forward-thinking technology company helping startups, businesses, and organizations achieve their goals through modern, scalable software solutions.
          </motion.p>
        </div>
      </section>

      {/* 2. Who We Are Section (#F8F0E5) */}
      <section className="relative py-24 lg:py-32 px-6 bg-[#F8F0E5] z-20 rounded-t-[3rem] -mt-8 shadow-[0_-20px_40px_rgba(0,0,0,0.15)]">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side -> Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-600 text-sm font-bold tracking-widest uppercase shadow-sm">
                Discover DenveX
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-[800] text-[#082052] mb-8 leading-tight tracking-tight">
                Who We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Are</span>
              </h2>
              
              <div className="space-y-6 relative">
                <div className="absolute left-0 top-2 bottom-2 w-1.5 bg-gradient-to-b from-blue-500 to-cyan-400 rounded-full" />
                <div className="pl-8 space-y-6">
                  <p className="text-[#334155] text-xl leading-relaxed font-medium">
                    <span className="text-blue-600 font-bold">DenveX</span> is a modern technology company committed to transforming ideas into innovative digital solutions.
                  </p>
                  <p className="text-[#475569] text-lg leading-relaxed">
                    We specialize in building scalable software, intelligent AI systems, responsive websites, and user-focused applications for startups, businesses, and enterprises. Our team combines creativity, technology, and strategic thinking to deliver reliable, secure, and high-performance solutions. 
                  </p>
                  <div className="bg-white/60 backdrop-blur-md border border-white p-6 rounded-2xl shadow-[0_10px_30px_rgba(8,32,82,0.05)] relative overflow-hidden group hover:shadow-[0_10px_30px_rgba(8,32,82,0.1)] transition-all">
                    <div className="absolute top-0 left-0 w-1 h-full bg-blue-500" />
                    <p className="text-[#082052] font-semibold italic text-lg leading-relaxed relative z-10">
                      "We work closely with our clients to understand their vision and turn it into reality through quality engineering, innovative design, and continuous support."
                    </p>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-tl from-blue-100 to-transparent rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right side -> Abstract Digital Graphic */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square md:aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(8,32,82,0.15)] border-8 border-white/60 group"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#082052]/55 via-[#0D2D73]/35 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-70" />
              <img src="/clientwwr.jpeg" alt="Technology Abstract" className="absolute inset-0 w-full h-full object-cover z-0 opacity-75 transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-[#082052]/30 z-[-1]" />
              
              {/* Glassmorphism Accents */}
              <div className="absolute top-8 right-8 w-32 h-32 rounded-full bg-[#4FA9FF]/30 blur-3xl z-10 group-hover:bg-cyan-400/40 transition-colors duration-500" />
              <div className="absolute bottom-8 left-8 w-40 h-40 rounded-full bg-cyan-400/30 blur-3xl z-10 group-hover:bg-[#4FA9FF]/40 transition-colors duration-500" />
              
              <div className="absolute top-8 left-8 z-20">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-2xl shadow-lg flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div>
                    <p className="text-white text-sm font-bold">Trusted Service</p>
                    <p className="text-blue-200 text-xs">Since 2025</p>
                  </div>
                </div>
              </div>

              <GlassPanel variant="gradient" blur="md" className="absolute bottom-6 right-6 left-6 z-20 p-6 bg-white/10 border border-white/20 text-white rounded-3xl shadow-2xl backdrop-blur-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-[#FFFFFF] text-lg font-medium italic">"Driving growth through quality engineering and innovative design."</p>
                <div className="flex items-center gap-2 mt-4">
                  <div className="h-1 w-8 bg-blue-400 rounded-full" />
                  <span className="text-sm font-semibold tracking-wider text-blue-200 uppercase">Our Promise</span>
                </div>
              </GlassPanel>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Our Services Section - Cut from Services.tsx */}
      <section id="ourservice" className="relative bg-[#082052] overflow-x-hidden pt-24 pb-16 rounded-[3rem] z-20 -mt-8 shadow-[0_-20px_40px_rgba(0,0,0,0.15)]">
        {/* Background decorations */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-blue-600/15 to-cyan-500/10 blur-3xl opacity-40" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-gradient-to-tl from-[#0D2D73]/30 to-cyan-500/5 blur-3xl opacity-40" />
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
              What We Do
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
            >
              Our Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
            viewport={{ once: true }}
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
              delay={0}
            />
            <ServiceCard
              icon={<Smartphone size={28} />}
              title="Logo Design"
              description="Stunning visual identities and professional logos that capture your brand's essence and values."
              image="lo.avif"
              delay={0.15}
            />
            <ServiceCard
              icon={<ShoppingCart size={28} />}
              title="Design & Branding"
              description="Complete design solutions from posters to pamphlets that elevate your brand presence."
              image="ad.webp"
              delay={0.3}
            />
          </motion.div>
        </div>
      </section>

      {/* 4. Client Testimonials - Cut from Testimonials.tsx */}
      <section id="customerservice" className="relative bg-[#082052] overflow-x-hidden pt-16 pb-16 z-20">
        {/* Background decorations */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-bl from-violet-600/20 to-blue-500/10 blur-3xl opacity-40" />
          <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-gradient-to-tr from-[#0D2D73]/30 to-blue-500/10 blur-3xl opacity-30" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <TestimonialSection />

          {/* Client Logos */}
          <div className="mt-12 pb-8">
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

      {/* 5. Call To Action (#F8F0E5) */}
      <section className="pt-16 pb-16 md:pt-20 md:pb-20 relative overflow-hidden bg-[#F8F0E5] z-20 rounded-t-[3rem] -mt-8 shadow-[0_-20px_40px_rgba(0,0,0,0.15)] border-b border-gray-200">

        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <GlassPanel variant="gradient" blur="xl" className="p-8 md:p-12 text-center relative overflow-hidden bg-white/5 border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] rounded-[2.5rem]">
            <div className="absolute inset-0 -z-10">
              <img
                src="/projects/project3.png"
                alt="Workplace"
                className="w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#082052]/90 via-[#082052]/70 to-[#082052]/90" />
            </div>
            <div className="relative z-10">
              <motion.h2
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#FFFFFF]"
              >
                Let's Build Something Great Together
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="text-[#D8E2F0] mb-8 max-w-2xl mx-auto leading-relaxed text-base md:text-lg"
              >
                Connect with our team to discuss how we can accelerate your digital transformation.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  to="/contact"
                  className="inline-block px-10 py-5 bg-gradient-to-r from-[#4FA9FF] to-blue-600 hover:from-blue-500 hover:to-blue-700 text-[#FFFFFF] rounded-full font-bold shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all text-lg tracking-wide"
                >
                  Contact Us
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
  delay: number;
}

const ServiceCard = ({ icon, title, description, image, delay }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group"
    >
      <GlassPanel variant="gradient" blur="md" className="p-0 h-full hover:border-blue-400/40 overflow-hidden flex flex-col bg-[#082052]/40">
        <div className="h-48 w-full overflow-hidden relative">
          <img
            src={`/${image}`}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#082052] via-[#082052]/40 to-transparent" />
        </div>
        <div className="p-8">
          <div className="h-14 w-14 -mt-16 relative z-10 rounded-xl bg-gradient-to-br from-blue-500/30 to-cyan-500/30 flex items-center justify-center text-blue-300 mb-6 group-hover:from-blue-500/50 group-hover:to-cyan-500/50 transition-all border border-white/10 backdrop-blur-md shadow-lg">
            {icon}
          </div>
          <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-200 transition-colors">{title}</h3>
          <p className="text-gray-300 leading-relaxed">{description}</p>
        </div>
      </GlassPanel>
    </motion.div>
  );
};

export default About;