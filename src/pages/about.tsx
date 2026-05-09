import { motion } from "framer-motion";
import { Github, Linkedin, Briefcase } from "lucide-react";
import GlassPanel from "../components/GlassPanel";
import SEO from "../components/SEO";

const team = [
  {
    name: "Naveen Kumar P",
    role: "Founder & CEO",
    title: "Full Stack Developer",
    label: "Founder",
    image: "/NAV.jpeg",
    github: "https://github.com/NAVEENKUMAR-11-20",
    linkedin: "https://www.linkedin.com/in/naveen-kumar-p-034658300/",
    portfolio: "https://naveen-sport.vercel.app/",
    description:
      "Naveen is a passionate developer and entrepreneur behind DenveX, focused on crafting modern, scalable digital experiences. He combines technical expertise with creative thinking to help businesses stand out and grow in today’s competitive digital landscape.",
  },
  {
    name: "Sridhar C",
    role: "Co-Founder",
    title: "Full Stack Developer",
    label: "Co-Founder",
    image: "/.png",
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
    portfolio: "#",
    description:
      "Sridhar is a co-founder and full-stack developer at DenveX, dedicated to building scalable and efficient web applications. He focuses on delivering high-quality digital solutions that combine technical precision with exceptional user experience.",
  },
  {
    name: "Dhinesh S",
    role: "Full Stack Developer",
    title: "UI / UX Designer",
    label: "Creative Lead",
    image: "/dhinesh.jpg",
    github: "https://github.com/DHINESH2307",
    linkedin: "https://www.linkedin.com/in/dhinesh-s-5987a732a/",
    portfolio: "#",
    description:
      "A creative visionary specialized in crafting beautiful, user-centric interfaces. Dhinesh bridges the gap between complex functionality and intuitive design, ensuring every digital product is as visually stunning as it is performant.",
  },
  {
    name: "Aswin L",
    role: "Full Stack Developer",
    title: "Systems Architect",
    label: "Technical Expert",
    image: "/aswin.jpeg",
    github: "https://github.com/theaswinloganathan",
    linkedin: "https://www.linkedin.com/in/aswin-loganathan-186812347",
    portfolio: "#",
    description:
      "Expert in building robust backend systems and high-performance frontends. Aswin focuses on scalability and efficiency, delivering seamless user experiences through clean code and modern development practices.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen pt-28 pb-20 relative overflow-hidden bg-[#0f172a]">
      <SEO
        title="About DenveX – Modern Website Design Agency"
        description="Learn more about DenveX, a modern website design agency and UI/UX design company dedicated to creating powerful custom web solutions."
        keywords="modern website design agency, UI/UX design company, web development experts, DenveX about"
      />

      {/* Dynamic Navy Background with Animated Glows */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#162d50] via-[#0f172a] to-slate-950" />
        <div className="absolute top-0 left-0 w-full h-[60%] bg-[radial-gradient(ellipse_at_top,rgba(56,139,248,0.1),transparent_70%)]" />
        <div className="absolute top-[-10%] right-[-5%] w-[40rem] h-[40rem] rounded-full bg-blue-600/5 blur-[120px]" />
        <div className="absolute bottom-[20%] left-[-10%] w-[35rem] h-[35rem] rounded-full bg-indigo-600/5 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Team Members Loop */}
        <div className="flex flex-col gap-24 md:gap-40">
          {team.map((member, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <section key={member.name} className="relative pt-10">
                <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-between gap-12 md:gap-20`}>
                  {/* Content Side */}
                  <motion.div
                    initial={{ opacity: 0, x: isReversed ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className={`flex-1 z-20 ${isReversed ? 'text-right' : 'text-left'}`}
                  >
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="inline-block text-blue-400 text-sm font-semibold tracking-[0.2em] uppercase mb-4"
                    >
                      {member.label}
                    </motion.span>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1] md:whitespace-nowrap">
                      {member.name}
                    </h2>
                    <p className={`text-white/80 text-xl md:text-2xl font-light mb-8 italic border-blue-500/50 pl-6 py-1 ${isReversed ? 'border-r-2 border-l-0 pr-6 pl-0' : 'border-l-2'}`}>
                      {member.role} | {member.title}
                    </p>
                    <p className={`text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl mb-12 font-light ${isReversed ? 'ml-auto' : ''}`}>
                      {member.description}
                    </p>

                    {/* Minimalist Social Icons */}
                    <div className={`flex gap-10 items-center ${isReversed ? 'justify-end' : 'justify-start'}`}>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex items-center justify-center"
                        aria-label="LinkedIn"
                      >
                        <div className="absolute -inset-2 bg-blue-500/0 group-hover:bg-blue-500/10 rounded-full transition-all duration-300" />
                        <Linkedin size={26} strokeWidth={1.2} className="text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                      </a>
                      <a
                        href={member.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex items-center justify-center"
                        aria-label="Portfolio"
                      >
                        <div className="absolute -inset-2 bg-blue-500/0 group-hover:bg-blue-500/10 rounded-full transition-all duration-300" />
                        <Briefcase size={26} strokeWidth={1.2} className="text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                      </a>
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex items-center justify-center"
                        aria-label="GitHub"
                      >
                        <div className="absolute -inset-2 bg-white/0 group-hover:bg-white/5 rounded-full transition-all duration-300" />
                        <Github size={26} strokeWidth={1.2} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                      </a>
                    </div>
                  </motion.div>

                  {/* Image Side */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98, x: isReversed ? -40 : 40 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full md:w-[50%] relative"
                  >
                    <div className="relative aspect-[4/5] md:aspect-[5/6] w-full overflow-hidden rounded-2xl shadow-2xl">
                      {/* Layered Overlays for Depth */}
                      <div className={`absolute inset-0 bg-gradient-to-r z-10 ${isReversed ? 'from-transparent via-[#0f172a]/40 to-[#0f172a]' : 'from-[#0f172a] via-[#0f172a]/40 to-transparent'}`} />
                      <div className="absolute inset-0 bg-[#162d50]/10 backdrop-blur-[1px] z-10" />

                      {/* Image */}
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top filter grayscale contrast-110 brightness-90 transition-transform duration-[2s] hover:scale-105"
                      />
                    </div>

                    {/* Soft Ambient Glows */}
                    <div className={`absolute -top-20 ${isReversed ? '-left-20' : '-right-20'} w-80 h-80 bg-blue-500/10 blur-[100px] -z-10`} />
                    <div className={`absolute -bottom-20 ${isReversed ? '-right-20' : '-left-20'} w-80 h-80 bg-indigo-500/10 blur-[100px] -z-10`} />
                  </motion.div>
                </div>
              </section>
            );
          })}
        </div>

        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pt-40 pb-20"
        >
          <GlassPanel variant="gradient" blur="xl" className="p-12 md:p-20 text-center border-none shadow-2xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white tracking-tight">
              Our Vision
            </h2>

            <p className="text-gray-400 max-w-3xl mx-auto text-xl md:text-2xl leading-relaxed font-light">
              At DenveX, we bridge the gap between imagination and reality. Our mission is to empower businesses with cutting-edge digital solutions that are as functional as they are beautiful.
            </p>

            <div className="mt-16 flex flex-wrap justify-center gap-8">
              {['Innovation', 'Excellence', 'Integrity'].map((value) => (
                <div key={value} className="px-8 py-3 rounded-full bg-blue-500/5 border border-white/10 hover:border-blue-500/30 transition-colors">
                  <p className="text-blue-300 text-sm font-medium tracking-[0.2em] uppercase">{value}</p>
                </div>
              ))}
            </div>
          </GlassPanel>
        </motion.div>
      </div>
    </div>
  );
};

export default About;