import { motion } from 'framer-motion';
import { ArrowDown, Code, Smartphone, Palette, ShoppingCart, BarChart } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#services' && servicesRef.current) {
        servicesRef.current.scrollIntoView({ behavior: 'smooth' });
      } else if (hash === '#testimonials' && testimonialsRef.current) {
        testimonialsRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

    // Handle hash on initial load
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 lg:pt-40 pb-16 md:pb-24 relative overflow-hidden bg-gradient-to-r from-indigo-900 via-blue-800 to-indigo-900">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
        </div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-500 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-20">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-white"
            >
              Transforming Ideas Into Digital Reality
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              We create stunning websites, powerful applications, and unforgettable digital experiences for businesses that want to stand out.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/register"
                className="px-8 py-3 bg-white text-blue-800 rounded-full font-medium shadow-lg hover:shadow-xl transition-all hover:bg-gray-100"
              >
                Start Your Project
              </Link>
              <a
                href="#services"
                className="px-8 py-3 bg-blue-700 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all hover:bg-blue-600 flex items-center justify-center gap-2"
              >
                Our Services <ArrowDown size={16} />
              </a>
            </motion.div>
          </div>

          {/* Decorative code blocks */}
          <div className="hidden md:flex justify-between opacity-50">
            <div className="bg-gray-900 rounded-lg p-4 shadow-xl w-56">
              <pre className="text-blue-400 text-xs">
                <code>{`function createWebsite() {\n  return amazing;\n}`}</code>
              </pre>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 shadow-xl w-56">
              <pre className="text-green-400 text-xs">
                <code>{`<DevFlow>\n  Your vision\n</DevFlow>`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 0L60 10C120 20 240 40 360 50C480 60 600 60 720 50C840 40 960 20 1080 15C1200 10 1320 20 1380 25L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
              fill="#F8FAFC"
            />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} id="services" className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
            >
              Our Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 leading-relaxed"
            >
              We offer a comprehensive range of digital solutions to help your business succeed in the digital landscape.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="https://webdevelopment-gamma.vercel.app/">
              <ServiceCard
                icon={<Code size={24} />}
                title="Web Development"
                description="Custom websites built for performance, user experience, and conversion rates that help your business grow."
                delay={0}
              />
            </Link>
            <Link to="https://logo-indol.vercel.app/">
              <ServiceCard
                icon={<Smartphone size={24} />}
                title="Logo Design"
                description="Native and cross-platform mobile applications that deliver seamless experiences across all devices."
                delay={0.1}
              />
            </Link>
            <Link to="https://post-woad-kappa.vercel.app/">
              <ServiceCard
                icon={<ShoppingCart size={24} />}
                title="Poster/Pemplet Design"
                description="Online stores that drive sales with seamless checkout processes and effective product displays."
                delay={0.3}
              /> 
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} id="testimonials" className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
            >
              What Our Clients Say
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 leading-relaxed"
            >
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Deep Ware completely transformed our online presence. Their team delivered a website that not only looks stunning but also performs exceptionally well."
              author="Sarah Johnson"
              company="TechStart Inc."
              image="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              delay={0}
            />
            <TestimonialCard
              quote="The mobile app they built for us has received incredible feedback from our users. The attention to detail and user experience is unmatched."
              author="Michael Chen"
              company="FinanceApp"
              image="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              delay={0.1}
            />
            <TestimonialCard
              quote="Working with Deep Ware was a game-changer for our e-commerce business. They understood our vision and executed it flawlessly."
              author="Emma Rodriguez"
              company="StyleShop"
              image="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              delay={0.2}
            />
          </div>

          {/* Client Logos */}
          <div className="mt-20">
            <h3 className="text-center text-gray-500 text-sm uppercase tracking-wider mb-10">Trusted by innovative companies</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {/* Placeholder logos - would be replaced with actual client logos */}
              {['Acme Inc.', 'TechCorp', 'Innovate', 'FutureBrand', 'Elevate'].map((company, index) => (
                <div key={index} className="text-xl font-bold bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Start Your Project?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Let's turn your vision into reality. Fill out our project requirements form and we'll get back to you within 24 hours.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              to="/register"
              className="px-8 py-3 bg-white text-blue-700 rounded-full font-medium shadow-lg hover:shadow-xl transition-all hover:bg-gray-100"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard = ({ icon, title, description, delay }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 group"
    >
      <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-5 group-hover:bg-blue-600 group-hover:text-white transition-all">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
  image: string;
  delay: number;
}

const TestimonialCard = ({ quote, author, company, image, delay }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
    >
      <div className="mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star} className="text-yellow-400">
            ★
          </span>
        ))}
      </div>
      <p className="text-gray-700 mb-6 italic">"{quote}"</p>
      <div className="flex items-center">
        <img src={image} alt={author} className="w-12 h-12 rounded-full object-cover mr-4" />
        <div>
          <h4 className="font-semibold text-gray-900">{author}</h4>
          <p className="text-gray-600 text-sm">{company}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default HomePage;