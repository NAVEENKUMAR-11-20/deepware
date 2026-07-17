import { motion, useInView } from 'framer-motion';
import { Linkedin, Github, ExternalLink, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';
import { useState, useEffect, useRef } from 'react';

const AnimatedCounter = ({ end, suffix = "", duration = 2000 }: { end: number, suffix?: string, duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [end, duration, isInView]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const team = [
  {
    name: "Naveen Kumar P.",
    role: "Founder & CEO",
    title: "Full Stack Developer",
    label: "Founder",
    image: "/naveend.png",
    github: "https://github.com/NAVEENKUMAR-11-20",
    linkedin: "https://www.linkedin.com/in/naveen-kumar-p-034658300/",
    portfolio: "https://naveen-port.vercel.app/",
    description: "Naveen is a passionate developer and entrepreneur behind DenveX, focused on crafting modern, scalable digital experiences.",
  },
  {
    name: "Sridhar C.",
    role: "Co-Founder",
    title: "Full Stack Developer",
    label: "Co-Founder",
    image: "/srii.png",
    github: "https://github.com/sridhar241030",
    linkedin: "https://www.linkedin.com/in/sridhar-c-447796315/",
    portfolio: "#",
    description: "Sridhar is a co-founder and full-stack developer at DenveX, dedicated to building scalable and efficient web applications.",
  },
  {
    name: "Dhinesh S.",
    role: "Chairperson",
    title: "Executive Leadership",
    label: "Chairperson",
    image: "/dhineshs.png",
    github: "https://github.com/DHINESH2307",
    linkedin: "https://www.linkedin.com/in/dhinesh-s-5987a732a/",
    portfolio: "https://dhinesh-portfolio-ten.vercel.app/",
    description: "Dhinesh serves as a Chairperson at DenveX, providing leadership and strategic governance.",
  },
  {
    name: "Aswin L.",
    role: "Chairperson",
    title: "Executive Leadership",
    label: "Chairperson",
    image: "/aswin.png",
    github: "https://github.com/theaswinloganathan",
    linkedin: "https://www.linkedin.com/in/aswin-loganathan-186812347",
    portfolio: "https://theaswinportfolio.vercel.app/",
    description: "Aswin serves as a Chairperson at DenveX, focusing on governance, strategy, and leadership execution.",
  },
  {
    name: "Hariharan M.",
    role: "Chief Operating Officer",
    title: "Full Stack Developer",
    label: "COO",
    image: "/hari.png",
    github: "https://github.com/24900770",
    linkedin: "https://www.linkedin.com/in/hariharan-m-15797032a/",
    portfolio: "#",
    description: "Hariharan is the COO at DenveX, overseeing the strategic direction and operational excellence of the company.",
  },
];

const Team = () => {
  return (
    <div className="relative min-h-screen bg-[#082052] overflow-x-hidden pt-32">
      <SEO
        title="Our Team – DenveX"
        description="Meet the professionals building the future of DenveX. Discover the team behind our innovative digital solutions."
        keywords="DenveX team, web development team, DenveX founders, UI/UX designers"
      />
      
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] rounded-full bg-gradient-to-bl from-blue-600/10 to-indigo-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] rounded-full bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24 max-w-3xl mx-auto"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-semibold tracking-widest uppercase">
            Leadership & Experts
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Our Team</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            Meet the professionals building the future of DenveX.
          </p>
        </motion.div>

        {/* Responsive Flexbox Layout */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-10 max-w-[1400px] mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="w-full sm:w-[calc(100%-2rem)] md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.7rem)] max-w-[440px]"
            >
              {/* Card Container */}
              <div 
                className="group relative w-full aspect-[3/4] rounded-[24px] overflow-hidden bg-[#041230] shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(8,32,82,0.6)] cursor-default isolate outline-none select-none"
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                {/* Single full background image */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover object-[center_15%] transition-transform duration-700 group-hover:scale-105"
                />

                {/* Triangular translucent overlay */}
                <div
                  className="absolute inset-0 z-10 bg-black/40 pointer-events-none"
                  style={{ clipPath: 'polygon(0 30%, 100% 100%, 0 100%)' }}
                />
                
                {/* Bottom gradient for text readability */}
                <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#041230] via-[#041230]/80 to-transparent z-20" />

                {/* Text Content */}
                <div className="absolute bottom-5 left-5 right-5 z-30 flex flex-col justify-end">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-gray-400 text-[11px] font-semibold tracking-[0.2em] uppercase mb-1">
                      {member.title}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-0.5 drop-shadow-lg">
                      {member.name}
                    </h3>
                    <p className="text-[#60A5FA] font-bold text-xs tracking-[0.15em] uppercase mb-3">
                      {member.role}
                    </p>
                    
                    {/* Description revealed on hover */}
                    <div className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500 delay-100 overflow-hidden">
                      <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                        {member.description}
                      </p>
                    </div>

                    {/* Social Links - always visible */}
                    <div className="flex gap-4">
                      {member.linkedin && member.linkedin !== '#' && (
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#60A5FA] transition-colors pointer-events-auto">
                          <Linkedin size={18} />
                        </a>
                      )}
                      {member.github && member.github !== '#' && (
                        <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#60A5FA] transition-colors pointer-events-auto">
                          <Github size={18} />
                        </a>
                      )}
                      {member.portfolio && member.portfolio !== '#' && (
                        <a href={member.portfolio} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#60A5FA] transition-colors pointer-events-auto">
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Hover border glow */}
                <div className="absolute inset-0 rounded-[24px] border border-white/5 group-hover:border-blue-500/20 transition-colors duration-500 z-30 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* NEW SECTION: DenveX at a Glance / Why Our Team Stands Out */}
      <section className="relative w-full py-24 bg-[#F8F0E5] mt-24 overflow-hidden rounded-t-[3rem] shadow-[0_-20px_40px_rgba(0,0,0,0.2)] z-20 pb-32">
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none rounded-t-[3rem]">
          <div className="absolute top-0 right-1/4 w-[30rem] h-[30rem] rounded-full bg-gradient-to-bl from-[#4FA9FF]/10 to-transparent blur-[80px]" />
          <div className="absolute bottom-0 left-1/4 w-[30rem] h-[30rem] rounded-full bg-gradient-to-tr from-[#4FA9FF]/10 to-transparent blur-[80px]" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-[#082052]/5 border border-[#082052]/10 text-[#082052] text-xs font-semibold tracking-widest uppercase">
              OUR PEOPLE
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#082052] mb-6">Together, We Build Innovation</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#082052] to-[#4FA9FF] mx-auto rounded-full mb-6" />
            <p className="text-[#4A5568] text-lg leading-relaxed">
              Behind every successful project is a passionate team committed to creativity, collaboration, and excellence. At DenveX, we work together to transform ideas into impactful digital solutions while continuously learning, innovating, and growing.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side: Features */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-[#082052] mb-6">Why Our Team Stands Out</h3>
              <p className="text-[#4A5568] text-base leading-relaxed mb-10">
                Our strength lies in collaboration, innovation, and a shared passion for technology. Every member of DenveX contributes unique expertise, creative thinking, and a commitment to delivering high-quality digital solutions. We foster a culture of continuous learning, teamwork, and excellence, ensuring that every project is built with precision, reliability, and innovation. Together, we transform ideas into meaningful digital experiences that create real business value.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: "Collaborative Culture", desc: "We believe teamwork drives innovation and better solutions." },
                  { title: "Innovation First", desc: "We continuously explore modern technologies and creative ideas." },
                  { title: "Professional Excellence", desc: "Quality, precision, and attention to detail in every project." },
                  { title: "Continuous Growth", desc: "Learning, improving, and evolving with every challenge." }
                ].map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-[#082052]/5 flex items-center justify-center text-[#4FA9FF]">
                        <CheckCircle size={18} className="stroke-[2.5]" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#082052] mb-2">{feature.title}</h4>
                      <p className="text-[#4A5568] text-sm leading-relaxed">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Side: Stats Glassmorphism Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-[24px] p-8 md:p-10 shadow-[0_20px_50px_rgba(8,32,82,0.05)] hover:-translate-y-2 transition-transform duration-500">
                <h3 className="text-2xl font-bold text-[#082052] mb-8 text-center">DenveX at a Glance</h3>
                
                <div className="grid grid-cols-2 gap-6 md:gap-8">
                  {[
                    { value: 15, suffix: "+", label: "Projects Delivered" },
                    { value: 13, suffix: "+", label: "Happy Clients" },
                    { value: 8, suffix: "+", label: "Technology Services" },
                    { value: 98, suffix: "%", label: "Client Satisfaction" }
                  ].map((stat, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }}
                      className="text-center p-6 rounded-[20px] bg-white/50 border border-white/60 shadow-sm"
                    >
                      <div className="text-4xl md:text-5xl font-bold text-[#4FA9FF] mb-2">
                        <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                      </div>
                      <div className="text-sm font-semibold text-[#082052] uppercase tracking-wider">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
