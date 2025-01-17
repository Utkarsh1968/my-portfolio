import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Trophy } from 'lucide-react';
// import profileimage from './assets/images/profile3.jpg';

const featuredProjects = [
  {
    icon: <Trophy className="w-12 h-12 text-purple-400" />,
    title: "Achievement",
    description: "Got 3rd place in the ThermaOracle event at Cognizance 2024, IIT Roorkee.",
    tech: ["IIT Roorkee", "Machine Learning", "Python"],
    link: "https://hyperstack.id/credential/ea9d5d57-444a-4ffe-a199-dd0805a89642",
    linkname: "Certificate",
  },
  {
    icon: <Code className="w-12 h-12 text-purple-400" />,
    title: "ML Projects",
    description: "Creating innovative machine learning projects to solve real-world problems using predictive analytics, NLP, and deep learning.",
    tech: ["PyTorch", "BERT", "FastAPI"],
    link: "#projects",
    linkname: "Learn More",
  },
  {
    icon: <Database className="w-12 h-12 text-purple-400" />,
    title: "ML Pipeline",
    description: "Automated machine learning pipeline for data processing.",
    tech: ["Scikit-learn", "MLflow", "Docker"],
    // link: "/projects",
     linkname: "Learn More",
  },
];

const Home = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            className="absolute w-full h-full object-cover opacity-40"
            // src="./assets/video/background.mp4" // Update the path if needed
            autoPlay
            loop
            muted
          />
          <div className="absolute inset-0 bg-gradient-to-br from-violet-950/90 via-purple-900/90 to-indigo-950/90" />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 px-4 md:px-8">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-64 h-64 rounded-full overflow-hidden ring-4 ring-purple-400 shadow-2xl"
          >
            <img
              src= "/assets/images/profile3.jpg" // Update the path if needed
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Profile Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mb-4"
            >
              Utkarsh Chauhan
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-2xl md:text-3xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-bold mb-6"
            >
              Machine Learning Engineer
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-gray-300 text-lg md:text-xl max-w-2xl mb-8"
            >
              Building intelligent solutions with deep learning and LLMs to solve real-world problems
              and create meaningful impact.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex items-center justify-center md:justify-start space-x-6"
            >
              <a
                href="https://github.com/Utkarsh1968"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                <Github className="w-8 h-8" />
              </a>
              <a
                href="https://linkedin.com/in/utkarsh-chauhan-648194248/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                <Linkedin className="w-8 h-8" />
              </a>
              <a
                href="mailto:ucinovation2004@gmail.com"
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                <Mail className="w-8 h-8" />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Button */}
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-300 flex flex-col items-center gap-2 cursor-pointer hover:text-purple-400 transition-colors"
        >
          <span className="animate-bounce">
            <ExternalLink className="w-6 h-6" />
          </span>
          <span className="text-sm">Scroll to explore</span>
        </motion.button>
      </div>

      {/* Featured Work Section */}
      <div className="min-h-screen bg-gradient-to-br from-violet-950 via-purple-900 to-indigo-950 flex items-center justify-center p-8">
        <div className="max-w-6xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Featured Work</h2>
            <p className="text-gray-300 text-lg">
              Explore some of my recent projects in AI and machine learning
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800/70 transition-colors group"
              >
                <div className="mb-6">{project.icon}</div>
                <h3 className="text-2xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-purple-500/20 text-purple-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                >
                  {project.linkname}
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
