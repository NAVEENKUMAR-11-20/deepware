import { motion } from 'framer-motion';
import { Code, Smartphone, ShoppingCart } from 'lucide-react';
import GlassPanel from '../components/GlassPanel';
import SEO from '../components/SEO';

const Services = () => {
  return (
    <div className="relative min-h-screen bg-[#082052] overflow-x-hidden pt-24 pb-16">
      <SEO
        title="Our Services – DenveX"
        description="Explore our comprehensive digital solutions tailored to help your business thrive and stand out."
        keywords="web development, UI/UX design, custom web solutions, DenveX services"
      />
      
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-blue-600/15 to-cyan-500/10 blur-3xl opacity-40" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-gradient-to-tl from-[#0D2D73]/30 to-cyan-500/5 blur-3xl opacity-40" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-semibold tracking-widest uppercase"
          >
            What We Do
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="text-gray-300 leading-relaxed text-lg"
          >
            We offer comprehensive digital solutions tailored to help your business thrive and stand out in the digital landscape.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
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

export default Services;
