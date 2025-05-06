import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import ImagenHome from '../assets/img/imagen-home.png';

function Home() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <img
            src={ImagenHome}
            alt="Tu perfil"
            className="rounded-full w-64 h-64 object-cover shadow-lg mx-auto"
          />
        </div>

        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Hola, soy <span className="text-blue-600">Cristian Aguilar</span>
          </h1>
          <h2 className="text-2xl text-gray-600 mb-6">
            Tecnológico de Análisis y desarrollo de software
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Entiendo necesidades, diseño soluciones y desarrollo aplicaciones
            web, móviles y de escritorio que resuelven problemas reales.
          </p>

          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="#"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full transition duration-300"
            >
              Ver proyectos
            </a>
            <a
              href="#"
              className="border border-blue-600 text-blue-600 hover:bg-blue-50 py-2 px-6 rounded-full transition duration-300"
            >
              Contacto
            </a>
          </div>

          <div className="flex mt-8 gap-6 justify-center md:justify-start">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:tu@email.com"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
