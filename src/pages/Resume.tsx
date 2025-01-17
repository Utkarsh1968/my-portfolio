// import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award,  Eye, Hammer} from 'lucide-react';

const Resume = () => {
  return (
    <div className="min-h-screen pt-20 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-white">Resume</h2>
          <a
            href="https://drive.google.com/file/d/1P96-N01YQ2i_uXqnyGFuaLH2bA6gfhRc/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
          >
            <Eye className="w-5 h-5" />
            <span>View Resume</span>
          </a>
        </div>

        <div className="space-y-12">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <Briefcase className="w-6 h-6 mr-2 text-purple-400" />
              Work Experience
            </h3>

            <div className="space-y-6">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
                <h4 className="text-xl font-semibold text-white">Machine Learning intern</h4>
                <p className="text-purple-400">Cognifyz Technology. • July2024 - Aug2024</p>
                <ul className="mt-4 text-gray-300 space-y-2 list-disc list-inside">
                  <li>Developed a Restaurant Rating Predictive System using
                      machine learning algorithms to accurately predict restaurant 
                      <br></br>           
                      ratings based on location, cuisine, and user reviews.</li>
                  <li>Built a Restaurant Recommender System that recommends the
                      top 5 restaurants based on city and cuisine, incorporating
                      advanced filtering and recommendation techniques.</li>
                  <li>Engaged in data preprocessing, feature engineering, model
                      selection, and deployment, delivering practical solutions that
                      enhance the restaurant industry's decision-making processes.</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
                <h4 className="text-xl font-semibold text-white">Artificial Intelligence intern</h4>
                <p className="text-purple-400">Corizo. • April2023 - June2023</p>
                <ul className="mt-4 text-gray-300 space-y-2 list-disc list-inside">
                  <li>Go through a training on AI and Ml for one month</li>
                  <li>Built a spotify clone for music recommendation</li>
                  
                </ul>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <GraduationCap className="w-6 h-6 mr-2 text-purple-400" />
              Education
            </h3>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-xl font-semibold text-white">B.Tech.in Computer Science Engineering</h4>
              <p className="text-purple-400">Noida Institute of Engineering and Technology • 2022 - 2026</p>
              <p className="mt-2 text-gray-300">Specialization in Machine Learning and Artificial Intelligence</p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <Hammer className="w-6 h-6 mr-2 text-purple-400" />
              Skills
            </h3>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Programming Languages</h4>
                  <ul className="text-gray-300 space-y-2 list-disc list-inside">
                    <li>Python</li>
                    <li>Java</li>
                    <li>R</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Frameworks and Libraries</h4>
                  <ul className="text-gray-300 space-y-2 list-disc list-inside">
                    <li>TensorFlow</li>
                    <li>PyTorch</li>
                    <li>Keras</li>
                    <li>Scikit-learn</li>
                    <li>Transformers</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Specializations</h4>
                  <ul className="text-gray-300 space-y-2 list-disc list-inside">
                    <li>Machine Learning</li>
                    <li>Deep Learning </li>
                    <li>Natural Language Processing</li>
                    <li>LLMs</li>
                    <li>Chatgpt</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">DevOps and Tools</h4>
                  <ul className="text-gray-300 space-y-2 list-disc list-inside">
                    <li>Jupyter Notebook</li>
                    <li>Docker</li>
                    <li>Tableau</li>
                    <li>Git & GitHub</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <Award className="w-6 h-6 mr-2 text-purple-400" />
              Certifications
            </h3>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <ul className="text-gray-300 space-y-2 list-disc list-inside">
                    <li>Fundamentals of Deep Learning(NVIDIA)</li>
                    <li>Deep Learning for Developers(Infosys Springboot)</li>
                    <li>Python for Data Science, AI & Development(IBM)</li>
                  </ul>
                </div>
              </div>
            </div>  
          </motion.section>
        </div>
      </motion.div>
    </div>
  );
};

export default Resume;
