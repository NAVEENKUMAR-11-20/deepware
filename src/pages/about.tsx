import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const team = [
  {
    name: "Naveen Kumar",
    role: "Founder & Full Stack Developer",
    image: "/team1.jpg",
    description:
      "Passionate developer focused on building scalable web applications and modern digital experiences.",
  },
  {
    name: "Dhinesh S",
    role: "Founder & Full Stack Developer & UI / UX Designer",
    image: "/team2.jpg",
    description:
      "Creative designer crafting beautiful, user-friendly interfaces and engaging user experiences.",
  },
  {
    name: "Aswin L",
    role: "Frontend Developer",
    image: "/team3.jpg",
    description:
      "Specialist in React and modern frontend technologies creating fast and responsive interfaces.",
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
                <Github className="w-5 h-5 cursor-pointer hover:text-blue-300" />
                <Linkedin className="w-5 h-5 cursor-pointer hover:text-blue-300" />
                <Mail className="w-5 h-5 cursor-pointer hover:text-blue-300" />
              </div>
            </motion.div>
          ))}

        </div>

        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-24 bg-gradient-to-r from-blue-700 to-indigo-700 rounded-2xl p-10 text-center shadow-xl"
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