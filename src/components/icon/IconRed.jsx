import { useRef } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';

export function GitHub() {
  const githubRef = useRef(null);
  const githubInView = useInView(githubRef, { threshold: 0.2 });

  return (
    <motion.a
      ref={githubRef}
      href="https://github.com/CristianAguilarOficial"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={githubInView ? { scale: 1.2 } : { scale: 0 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 15,
      }}
      className=" text-gray-950 dark:text-gray-200 hover:text-white transition-colors"
    >
      <FaGithub size={20} />
    </motion.a>
  );
}

export function LinkedIn() {
  const linkedinRef = useRef(null);
  const linkedinInView = useInView(linkedinRef, { threshold: 0.2 });

  return (
    <motion.a
      ref={linkedinRef}
      href="https://www.linkedin.com/in/cristianaguilaroficial/"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={linkedinInView ? { scale: 1.2 } : { scale: 0 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 15,
      }}
      className="text-blue-600 dark:text-gray-200 hover:text-white transition-colors"
    >
      <FaLinkedin size={20} />
    </motion.a>
  );
}
