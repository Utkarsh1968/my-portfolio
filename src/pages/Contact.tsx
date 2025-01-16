import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const serviceID = 'service_79j6f06';
    const templateID = 'template_iltu5lo';
    const publicKey = 'tt7P0w3187edMpqLc';

    if (!serviceID || !templateID || !publicKey) {
      setStatus('error');
      console.error('EmailJS configuration is missing.');
      return;
    }

    setIsSubmitting(true); // Disable button
    try {
      const response = await emailjs.send(serviceID, templateID, formData, publicKey);
      console.log('Email sent successfully:', response);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      setStatus('error');
    } finally {
      setIsSubmitting(false); // Re-enable button
    }
  };

  return (
    <div className="min-h-screen pt-20 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-white text-center mb-12">Get in Touch</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4 text-gray-300">
              <Mail className="w-6 h-6 text-purple-400" />
              <span>Ucinovation2004@gmail.com</span>
            </div>
            <a
              href="https://www.linkedin.com/in/utkarsh-chauhan-648194248/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 text-gray-300"
            >
              <Linkedin className="w-6 h-6 text-purple-400" />
              <span>linkedin.com/in/utkarsh-chauhan-648194248</span>
            </a>
            <div className="flex items-center space-x-4 text-gray-300">
              <MapPin className="w-6 h-6 text-purple-400" />
              <span>New Delhi, India</span>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
                aria-label="Your Name"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
                aria-label="Your Email"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full h-32 px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
                required
                aria-label="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className={`w-full px-6 py-3 bg-purple-600 ${
                isSubmitting ? 'cursor-not-allowed opacity-50' : 'hover:bg-purple-700'
              } text-white rounded-lg flex items-center justify-center space-x-2 transition-colors`}
              disabled={isSubmitting}
            >
              <Send className="w-5 h-5" />
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
            </button>
          </motion.form>
        </div>

        {status === 'success' && (
          <p className="mt-4 text-green-500 text-center">Your message has been sent successfully!</p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-red-500 text-center">
            Failed to send your message. Please try again later or check your network connection.
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default Contact;
