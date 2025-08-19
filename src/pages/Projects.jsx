import ProjectCard from '../components/ProjectCard';
import tasKimg from '../assets/img/TaskManager.png';
import invimg from '../assets/img/IventarioManager.png';
import Encimg from '../assets/img/Encriptador.png';
import { motion } from 'framer-motion';
import { fadeInUp } from '../styles/Animaciones';
import BannerSinBackend from '../components/BannerSinBackend';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Task Manager',
      description:
        'Web para subir notas o tareas almacenamiento en base de datos en tiempo real mongodb',
      image: tasKimg,
      tags: ['React', 'MongoDB', 'Node.js', 'Tailwind CSS'],
      demoUrl: 'https://beta-notes-manager-not-backend.vercel.app/',
      codeUrl:
        'https://github.com/CristianAguilarOficial/Beta-NotesManager-NotBackend.git',
      isAPI: false,
    },
    {
      id: 2,
      title: 'Inventario Administrativo',
      description: 'Web de control para gestionar gastos.',
      image: invimg,
      tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      demoUrl: 'https://beta-contabilidad-not-backend.vercel.app/',
      codeUrl:
        'https://github.com/CristianAguilarOficial/Beta-Contabilidad-NotBackend.git',
      isAPI: false,
    },
    {
      id: 3,
      title: 'Encriptador de Mensajes',
      description:
        'Aplicación web para encriptar y desencriptar mensajes de texto.',
      image: Encimg,
      tags: ['HTML/CSS', 'JavaScript'],
      demoUrl: 'https://cristianaguilaroficial.github.io/Encriptador',
      codeUrl: 'https://github.com/CristianAguilarOficial/Encriptador',
      isAPI: false,
    },
    {
      id: 4,
      title: 'Conversor de Moneda API',
      description:
        'API para convertir moneda respetando el tipo de cambio con valor a su fecha actual.',
      tags: ['Java', 'API REST', 'Spring Boot'],
      codeUrl:
        'https://github.com/CristianAguilarOficial/conversor-moneda-aluraLatamXoracle',
      isAPI: true,
    },
    {
      id: 5,
      title: 'Sistema de Gestión de Usuarios API NET',
      description:
        'API RESTful para gestión completa de usuarios con autenticación JWT y base de datos MySQL.',
      tags: ['C#', 'NetCore', 'MySQL', 'JWT'],
      codeUrl:
        'https://github.com/CristianAguilarOficial/backend_CoreNetApi.git',
      isAPI: true,
    },
    {
      id: 6,
      title: 'Sistema de Gestión de Usuarios API JAVA',
      description:
        'API RESTful para gestión completa de usuarios con autenticación JWT y base de datos MySQL.',
      tags: ['Java', 'spreeboot', 'MySQL', 'JWT'],
      codeUrl: 'https://github.com/CristianAguilarOficial/JavaApiuserv1.git',
      isAPI: true,
    },
  ];

  return (
    <>
      {/*<BannerSinBackend mensaje="Algunos proyectos son APIs backend sin interfaz visual" />{-*/}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-6 py-16"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-950 dark:text-white">
          Mis Proyectos
        </h1>
        <p className="text-gray-650 dark:text-white text-center max-w-2xl mx-auto mb-12">
          Aquí puedes encontrar algunos de los proyectos en los que he
          trabajado. Cada uno representa diferentes habilidades y tecnologías,
          incluyendo aplicaciones web frontend y APIs backend.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </motion.div>
    </>
  );
}

export default Projects;
