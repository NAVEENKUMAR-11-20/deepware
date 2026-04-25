import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import GlassPanel from "../components/GlassPanel";

const team = [
  {
    name: "Naveen Kumar P",
    role: "Founder & Full Stack Developer",
    image: "/NAV.jpeg",
    github: "https://github.com/NAVEENKUMAR-11-20",
    linkedin: "https://www.linkedin.com/in/naveen-kumar-p-034658300/",
    description:
      "Passionate developer focused on building scalable web applications and modern digital experiences.",
  },
  {
    name: "Dhinesh S",
    role: "Full Stack Developer & UI / UX Designer",
    image: "/team2.jpg",
    github: "https://github.com/DHINESH2307",
    linkedin: "https://linkedin.com/in/member2",
    description:
      "Creative designer and full-stack developer crafting beautiful, user-friendly interfaces and building scalable web applications.",
  },
  {
    name: "Aswin L",
    role: "Frontend & Backend Developer",
    image: "/aswin.jpeg",
    github: "https://github.com/theaswinloganathan",
    linkedin: "https://www.linkedin.com/in/aswin-loganathan-186812347",
    description:
      "Full-stack developer specializing in backend development and responsive frontends with efficient server-side systems.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen pt-28 pb-20 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-gradient-to-bl from-blue-600/20 to-violet-500/10 blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-gradient-to-tr from-cyan-600/15 to-blue-500/10 blur-3xl opacity-40" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Meet Our Team
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            The passionate team behind DenveX creating modern, scalable, and innovative digital solutions that help businesses thrive.
          </p>
        </motion.div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassPanel variant="dark" blur="lg" className="p-8 h-full text-center hover:border-blue-400/40">
                {/* Image */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-28 h-28 mx-auto rounded-full object-cover border-3 border-blue-400/50 mb-6"
                />

                {/* Name */}
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="text-blue-300 text-sm font-medium mb-4">
                  {member.role}
                </p>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-8 leading-relaxed">
                  {member.description}
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-4 pt-4 border-t border-white/10">
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                    className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:bg-blue-600/30 hover:text-blue-300 transition-all"
                  >
                    <Github size={18} />
                  </a>

                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn"
                    className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:bg-blue-600/30 hover:text-blue-300 transition-all"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </GlassPanel>
            </motion.div>
          ))}
        </div>

        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassPanel variant="gradient" blur="xl" className="p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our Vision
            </h2>

            <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
              At DenveX, we believe in building modern digital products that combine beautiful design with powerful technology. Our mission is to help businesses grow by creating scalable, innovative, and user-friendly digital solutions that stand out in the digital landscape.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-6">
              <div className="px-6 py-3 rounded-full bg-blue-500/20 border border-blue-400/50">
                <p className="text-blue-200 text-sm font-medium">Innovation First</p>
              </div>
              <div className="px-6 py-3 rounded-full bg-cyan-500/20 border border-cyan-400/50">
                <p className="text-cyan-200 text-sm font-medium">User Focused</p>
              </div>
              <div className="px-6 py-3 rounded-full bg-violet-500/20 border border-violet-400/50">
                <p className="text-violet-200 text-sm font-medium">Quality Driven</p>
              </div>
            </div>
          </GlassPanel>
        </motion.div>
      </div>
    </div>
  );
};

export default About;