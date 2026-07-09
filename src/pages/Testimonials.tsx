import { motion } from 'framer-motion';
import { TestimonialSection } from '../components/Testimonials';
import SEO from '../components/SEO';

const Testimonials = () => {
  return (
    <div className="relative min-h-screen bg-[#082052] overflow-x-hidden pt-24 pb-16">
      <SEO
        title="Customer Reviews – DenveX"
        description="See what our clients say about DenveX's web design and development services."
        keywords="testimonials, client reviews, DenveX reviews, web design clients"
      />
      
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-bl from-violet-600/20 to-blue-500/10 blur-3xl opacity-40" />
        <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-gradient-to-tr from-[#0D2D73]/30 to-blue-500/10 blur-3xl opacity-30" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <TestimonialSection />

        {/* Client Logos */}
        <div className="mt-24 pb-20">
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
    </div>
  );
};

export default Testimonials;
