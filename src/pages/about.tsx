import { motion } from "framer-motion";
import { Github, Linkedin} from "lucide-react";

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
    github: "https://github.com/member2",
    linkedin: "https://linkedin.com/in/member2",   
    description:
      "Creative designer and full-stack developer crafting beautiful, user-friendly interfaces and building scalable web applications with engaging user experiences.",
  },
  {
    name: "Aswin L",
    role: "Frontend & Backend Developer",
    image: "/aswin.jpeg",
    github: "https://github.com/member3",
    linkedin: "https://linkedin.com/in/member3",
    description:
      "Full-stack developer specializing in backend development, building scalable web applications with efficient server-side systems and responsive, user-friendly frontends.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen pt-24 bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800 text-white relative overflow-hidden">
      
      {/* background glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-500 opacity-20 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16 mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Meet Our Team
          </h1>
          <p className="text-blue-200 max-w-2xl mx-auto">
            The passionate team behind DenveX creating modern,
            scalable and innovative digital solutions.
          </p>
        </motion.div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl hover:scale-105 transition-all 
              ${index === 2 ? "md:col-span-2 md:w-1/2 md:mx-auto" : ""}`}
            >
              
              {/* image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-blue-400 mb-4"
              />

              {/* name */}
              <h3 className="text-xl font-semibold">{member.name}</h3>

              {/* role */}
              <p className="text-blue-300 text-sm mb-3">{member.role}</p>

              {/* description */}
              <p className="text-blue-100 text-sm mb-6">
                {member.description}
              </p>

              {/* social icons */}
              <div className="flex justify-center gap-4">
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5 cursor-pointer hover:text-blue-300 transition" />
                </a>

                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5 cursor-pointer hover:text-blue-300 transition" />
                </a>

              
              </div>

            </motion.div>
          ))}
        </div>

        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-24 mb-24 bg-gradient-to-r from-blue-700 to-indigo-700 rounded-2xl p-10 text-center shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>

          <p className="text-blue-100 max-w-3xl mx-auto">
            At DenveX, we believe in building modern digital products
            that combine beautiful design with powerful technology. Our mission
            is to help businesses grow by creating scalable, innovative and
            user-friendly digital solutions.
          </p>
        </motion.div>

      </div>
    </div>
  );
};

export default About;