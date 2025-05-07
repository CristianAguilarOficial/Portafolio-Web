import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';
import { Moon, Sun } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('theme');

    if (savedMode) {
      // Si hay un valor guardado, úsalo
      const isDark = savedMode === 'dark';
      document.documentElement.classList.toggle('dark', isDark);
      setIsDarkMode(isDark);
    } else {
      // Si no, usa el modo del sistema
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      document.documentElement.classList.toggle('dark', prefersDark);
      setIsDarkMode(prefersDark);
      localStorage.setItem('theme', prefersDark ? 'dark' : 'light');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

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
              <a
                href="https://github.com/CristianAguilarOficial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/cristianaguilaroficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
              <button
                onClick={toggleDarkMode}
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
            <p className="text-gray-400 text-sm flex items-center">
              Hecho con <FaHeart size={16} className="mx-1 text-blue-600" /> en{' '}
              {currentYear}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
