import { motion } from 'framer-motion';
import SiteNav from './components/SiteNav';
import Section from './components/Section';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';
import { projects } from './data/projects';
import { Github, Linkedin, MessageCircle } from 'lucide-react';

function App() {
  // Smooth scrolling is handled via CSS scroll-behavior: smooth

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Animated background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900" />
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <SiteNav />

      {/* Hero Section */}
      <Section id="hero" className="flex items-center justify-center">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-4"
          >
            Kieran Kinnaird
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            Computer Science student & developer
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              onClick={() => scrollToSection('projects')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-blue-500/50"
            >
              View Projects
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-transparent border-2 border-blue-500 hover:bg-blue-500/10 text-blue-400 font-semibold rounded-lg transition-colors"
            >
              Contact
            </motion.button>
          </motion.div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            Projects
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto">
            A collection of projects showcasing my skills and learning journey
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </Section>

      {/* About / Skills Section */}
      <Section id="about" className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            About
          </h2>
          <p className="text-lg text-gray-300 mb-12 leading-relaxed text-center">
            I'm a Computer Science student and developer passionate about building
            innovative solutions and continuously learning new technologies. I enjoy
            working on projects that challenge me and help me grow as a developer.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Frontend</h3>
              <ul className="space-y-2">
                {['React', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML/CSS'].map((skill) => (
                  <li key={skill} className="text-gray-300 flex items-center">
                    <span className="text-blue-400 mr-2">•</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Backend</h3>
              <ul className="space-y-2">
                {['Node.js', 'Express', 'Python', 'Flask', 'MongoDB', 'Firebase'].map((skill) => (
                  <li key={skill} className="text-gray-300 flex items-center">
                    <span className="text-blue-400 mr-2">•</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Tools</h3>
              <ul className="space-y-2">
                {['Git', 'Vite', 'VS Code', 'Figma', 'Postman'].map((skill) => (
                  <li key={skill} className="text-gray-300 flex items-center">
                    <span className="text-blue-400 mr-2">•</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="py-20 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Feel free to reach out for collaborations, opportunities, or just to say hello!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.a
              href="https://github.com/kierankinnaird"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300 group"
            >
              <Github className="w-12 h-12 mx-auto mb-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
              <h3 className="text-xl font-semibold text-white mb-2">GitHub</h3>
              <p className="text-sm text-gray-400">View my code</p>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/kierankinnaird"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300 group"
            >
              <Linkedin className="w-12 h-12 mx-auto mb-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
              <h3 className="text-xl font-semibold text-white mb-2">LinkedIn</h3>
              <p className="text-sm text-gray-400">Connect with me</p>
            </motion.a>

            <motion.a
              href="https://wa.me/447000000000"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300 group"
            >
              <MessageCircle className="w-12 h-12 mx-auto mb-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
              <h3 className="text-xl font-semibold text-white mb-2">WhatsApp</h3>
              <p className="text-sm text-gray-400">Chat with me</p>
            </motion.a>
          </div>
        </motion.div>
      </Section>

      <Footer />
    </div>
  );
}

export default App;

