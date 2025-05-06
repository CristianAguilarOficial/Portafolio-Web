import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">MiPortafolio</h3>
            <p className="text-gray-300">Desarrollador Web Frontend</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="mailto:tu@email.com"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
            <p className="text-gray-400 text-sm flex items-center">
              Hecho con <FaHeart size={16} className="mx-1 text-red-500" /> en{' '}
              {currentYear}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
