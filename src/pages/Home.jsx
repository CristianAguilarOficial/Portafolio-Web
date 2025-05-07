import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import ImagenHome from '../assets/img/imagen-home.png';

function Home() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto ">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <img
            src={ImagenHome}
            alt="Tu perfil"
            className="rounded-full w-64 h-64 object-cover shadow-lg mx-auto"
          />
        </div>

        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Hola, soy{' '}
            <span className="text-blue-600 dark:text-blue-400">
              Cristian Aguilar
            </span>
          </h1>
          <h2 className="text-2xl text-gray-600 dark:text-gray-300 mb-6">
            Tecnológico de Análisis y desarrollo de software
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Entiendo necesidades, diseño soluciones y desarrollo aplicaciones
            web, móviles y de escritorio que resuelven problemas reales.
          </p>

          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="/projects"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full transition duration-300"
            >
              Ver proyectos
            </a>
            <a
              href="/contact"
              className="border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 py-2 px-6 rounded-full transition duration-300"
            >
              Contacto
            </a>
          </div>

          {/* Botón para descargar CV */}
          <div className="flex mt-8 gap-6 justify-center md:justify-start">
            <a
              href="/cv-cristian-aguilar.pdf"
              download
              className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white py-2 px-6 rounded-full transition duration-300"
            >
              Descargar CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
