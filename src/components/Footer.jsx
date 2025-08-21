import { FaHeart } from 'react-icons/fa';
import ButtonTheme from './ButtonTheme';
import { GitHub, LinkedIn } from './icon/IconRed';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Mi Portafolio</h3>
            <p className="text-gray-300 dark:text-gray-400">
              Análisis y desarrollo de software
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex space-x-4">
              <GitHub />
              <LinkedIn />
              <ButtonTheme />
            </div>

            <p className="text-gray-400 text-sm flex items-center">
              Hecho con <FaHeart size={16} className="mx-1 text-blue-600" /> en{' '}
              {currentYear}
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              ultima actualización: 21-08-2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
