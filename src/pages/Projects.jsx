import ProjectCard from '../components/ProjectCard';
import tasKimg from '../assets/img/TaskManager.png';
import invimg from '../assets/img/IventarioManager.png';
import Encimg from '../assets/img/Encriptador.png';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Task Manager',
      description:
        'Web para subir notas o tareas almacenamiento en base de datos en tiempo real mongodb',
      image: tasKimg,
      tags: ['React', 'mongodb', 'node', 'Tailwind CSS'],
      demoUrl: 'https://mi-frotend-basicweb-task-manager.vercel.app/',
      codeUrl: 'https://github.com/CristianAguilarOficial/mi-frotend',
    },
    {
      id: 2,
      title: 'Inventario Administrativo',
      description: 'Web de control para gestionar gastos.',
      image: invimg,
      tags: ['React', 'Node', 'Mongodb', 'Tailwind CSS'],
      demoUrl: 'https://front-contabilidad.vercel.app/',
      codeUrl: 'https://github.com/CristianAguilarOficial/-front-contabilidad',
    },
    {
      id: 3,
      title: 'Encriptador de Mensajes',
      description:
        'Aplicación web para encriptar y desencriptar mensajes de texto.',
      image: Encimg,
      tags: ['HTML/CSS', 'javascript'],
      demoUrl: 'https://cristianaguilaroficial.github.io/Encriptador',
      codeUrl: 'https://github.com/CristianAguilarOficial/Encriptador',
    },
    {
      id: 4,
      title: 'Conversion de moneda',
      description:
        'Api para convertir moneda respetando el tipo de cambio con valor a su fecha actual.',
      image: '/api/placeholder/400/250',
      tags: ['Java', 'Api'],

      codeUrl:
        'https://github.com/CristianAguilarOficial/conversor-moneda-aluraLatamXoracle',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white ">
        Mis Proyectos
      </h1>
      <p className="text-gray-600 dark:text-white text-center max-w-2xl mx-auto mb-12">
        Aquí puedes encontrar algunos de los proyectos en los que he trabajado.
        Cada uno representa diferentes habilidades y tecnologías.
      </p>

      <div className="grid grid-cols-1    md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
