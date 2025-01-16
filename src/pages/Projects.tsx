import  { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Medicine Recommendation System",
    description: "Developed a machine learning model to recommend the best medicine based on patient symptoms,achieving 100% accuracy.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80",
    tech: ['Python', 'Random Forest', 'Numpy'],
    github: "https://github.com/Utkarsh1968/Medicine-Recommendaton-system",
    demo: "https://medicine-recommendaton-system.streamlit.app/",
    category: "AI"
  },
  {
    title: "Pet Classification model",
    description: "classification of dogs and cats using pre-trained model VGG16,and achieved 95% accuracy",
    image: "https://images.unsplash.com/photo-1494256997604-768d1f608cac?q=80&w=1858&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tech: ["PyTorch", "VGG16", "CNN"],
    github: "https://github.com/Utkarsh1968/dog_and_cat-classification",
    demo: "https://drive.google.com/file/d/1ZPctqv83gfRvd4mx4-YcHsDe5Eg_fXeY/view?usp=sharing",
    category: "AI"
  },
  {
    title: "Time Series Forecasting",
    description: "LSTM-based model for stock market prediction",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
    tech: ["Keras", "Pandas", "Scikit-learn"],
    github: "#",
    demo: "#",
    category: "LSTM"
  }
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "AI", "LSTM"];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const searchedProjects = filteredProjects.filter(project =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    project.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-20 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-white text-center mb-12">Projects</h2>
        
        {/* Search and Filter Row */}
        <div className="flex justify-center items-center gap-4 mb-8">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search Projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-purple-500 text-white placeholder-white rounded-lg p-3 w-2/5 shadow-md focus:ring-2 focus:ring-purple-500 outline-none"
          />

          {/* Category Dropdown */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-purple-500 text-white rounded-lg p-3 shadow-md w-1/5 focus:ring-2 focus:ring-purple-500 outline-none"
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Displaying Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {searchedProjects.length > 0 ? (
            searchedProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}  // Starts from the right (slide-in effect)
                animate={{ opacity: 1, x: 0 }}  // Ends at normal position
                transition={{ delay: index * 0.2, duration: 0.8 }}  // Staggered animation
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 text-sm bg-purple-500/20 text-purple-300 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a href={project.github} className="flex items-center text-gray-300 hover:text-white">
                      <Github className="w-5 h-5 mr-1" />
                      Code
                    </a>
                    <a href={project.demo} className="flex items-center text-gray-300 hover:text-white">
                      <ExternalLink className="w-5 h-5 mr-1" />
                      Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-white text-center w-full">No projects found</p>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
