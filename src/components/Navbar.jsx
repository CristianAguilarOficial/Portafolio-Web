import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import LogoBasico from '../assets/LogoBaseWeb.svg';
import ButtonTheme from './ButtonTheme';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Sobre mí', path: '/about' },
    { name: 'Proyectos', path: '/projects' },
    { name: 'Contacto', path: '/contact' },
  ];

  const isActive = (path) => {
    return location.pathname === path
      ? 'text-blue-600 font-medium'
      : 'text-gray-100 hover:text-gray-600 dark:text-white';
  };

  return (
    <nav className="bg-gray-800 text-white shadow-sm py-4 sticky top-0 z-10  dark:bg-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo y nombre como enlace */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold">Portafolio</h1>
            <img src={LogoBasico} alt="Logo" className="h-10 w-20 mr-2" />
          </Link>

          {/* Navegación de escritorio */}
          <div className="hidden md:flex space-x-8 ">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${isActive(link.path)} transition duration-300`}
              >
                {link.name}
              </Link>
            ))}
            <ButtonTheme />
          </div>

          {/* Botón menú móvil */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-100 dark:text-white hover:text-blue-600 focus:outline-none "
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menú móvil desplegable */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-2">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`${isActive(
                    link.path
                  )} transition duration-300 py-2 px-1`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <ButtonTheme />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
