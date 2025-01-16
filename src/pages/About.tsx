// import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Wrench } from 'lucide-react';
// import profileimage from './assets/images/profile3.jpg';

const About = () => {
  return (
    <div className="min-h-screen pt-20 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <img
            src="/assets/images/profile3.jpg"
            alt="Profile"
            className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
          />
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 mb-8"
        >
          <p className="text-gray-300 text-lg leading-relaxed">
          I am a Utkarsh chauhan,a Pre-final Year Computer Science Engineering (Artificial Intelligence and Machine Learning) student at Noida Institute of Engineering and Technology, Greater Noida.
          i am interested in Artificial Intelligence and Machine Learning related projects. 
           
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mt-3">
          I have good experience in developing and deploying scalable AI solutions.
          My focus lies in building end-to-end machine learning systems that solve real-world problems,
          imposing advanced techniques in machine learning and deep learning,
          with a strong foundation in data engineering, model optimization, and deployment, I bring a problem-solving mindset to every project.
           
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mt-3">
          Whether designing machine learning pipelines, handling large datasets, or collaborating with cross-functional teams, I am dedicated to creating innovative solutions that drive measurable outcomes. 
          <br></br> 
          I am a self-motivated, hardworking and responsible person, always willing to learn new things and  ready to face new challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
              <Brain className="w-6 h-6 mr-2 text-purple-400" />
              Expertise
            </h3>
            <ul className="text-gray-300 space-y-2 list-disc list-inside">
              <li>Deep Learning</li>
              <li>Machine Learning</li>
              <li>Natural Language Processing</li>
              <li>Large Language Models(LLMs)</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
              <Code className="w-6 h-6 mr-2 text-purple-400" />
              Technologies
            </h3>
            <ul className="text-gray-300 space-y-2 list-disc list-inside">
              <li>Python</li>
              <li>TensorFlow / PyTorch</li>
              <li>Scikit-learn</li>
              <li>nltk</li>
              <li>keras</li>
              <li>spacy</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
              <Wrench className="w-6 h-6 mr-2 text-purple-400" />
              Tools and software
            </h3>
            <ul className="text-gray-300 space-y-2 list-disc list-inside">
              <li>Tableau</li>
              <li>Chatgpt</li>
              <li>Jupyter Notebook</li>
              <li>Docker</li>
              <li>Git</li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
