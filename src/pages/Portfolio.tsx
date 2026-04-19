import { motion } from 'framer-motion';
import { Code, Smartphone, Palette, ShoppingCart, BarChart, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with modern UI/UX design, payment integration, and admin dashboard.",
    image: "/project1.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "https://example.com/project1",
    category: "Web Development"
  },
  {
    title: "Mobile Banking App",
    description: "Secure mobile banking application with biometric authentication and real-time transaction tracking.",
    image: "/project2.jpg",
    technologies: ["React Native", "Firebase", "Node.js"],
    link: "https://example.com/project2",
    category: "Mobile Development"
  },
  {
    title: "Brand Identity Design",
    description: "Complete brand identity package including logo, color palette, typography, and brand guidelines.",
    image: "/project3.jpg",
    technologies: ["Adobe Illustrator", "Photoshop", "Figma"],
    link: "https://example.com/project3",
    category: "Design"
  },
  {
    title: "Analytics Dashboard",
    description: "Interactive data visualization dashboard with real-time analytics and custom reporting features.",
    image: "/project4.jpg",
    technologies: ["React", "D3.js", "Python", "PostgreSQL"],
    link: "https://example.com/project4",
    category: "Data Visualization"
  },
  {
    title: "Restaurant Management System",
    description: "Comprehensive restaurant management solution with POS, inventory, and customer management.",
    image: "/project5.jpg",
    technologies: ["Vue.js", "Laravel", "MySQL"],
    link: "https://example.com/project5",
    category: "Web Development"
  },
  {
    title: "Fitness Tracking App",
    description: "Cross-platform fitness application with workout plans, progress tracking, and social features.",
    image: "/project6.jpg",
    technologies: ["Flutter", "Firebase", "Google Fit API"],
    link: "https://example.com/project6",
    category: "Mobile Development"
  }
];

const Portfolio = () => {
  return (
    <div className="min-h-screen pt-24 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
      </div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-500 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-white">
            Our Portfolio
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Explore our collection of successful projects that showcase our expertise in web development, mobile apps, and design.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                <div className="text-6xl opacity-50">
                  {project.category === 'Web Development' && <Code />}
                  {project.category === 'Mobile Development' && <Smartphone />}
                  {project.category === 'Design' && <Palette />}
                  {project.category === 'Data Visualization' && <BarChart />}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-blue-300 bg-blue-900/50 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>

                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto">
            Let's discuss your ideas and bring them to life with our expertise and creativity.
          </p>
          <a
            href="/register"
            className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
          >
            Start Your Project
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;