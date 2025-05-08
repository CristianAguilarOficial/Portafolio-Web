import {
  FaHtml5,
  FaJs,
  FaJava,
  FaPhp,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaCode,
  FaServer,
  FaDatabase,
  FaWrench,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiFigma,
  SiCodeigniter,
  SiExpress,
  SiBootstrap,
} from 'react-icons/si';

import { RiExchangeLine } from 'react-icons/ri';
import ImagenAbout from '../assets/img/imagen-sobre-mi.jpg';
import { motion } from 'framer-motion';
import { popIn, fadeInUp } from '../styles/Animaciones';

function About() {
  const getSkillIcon = (skill) => {
    const normalized = skill.toLowerCase();
    switch (normalized) {
      case 'html/css':
        return <FaHtml5 size={16} className="mr-2 text-orange-500" />;
      case 'javascript':
        return <FaJs size={16} className="mr-2 text-yellow-500" />;
      case 'java':
        return <FaJava size={16} className="mr-2 text-red-500" />;
      case 'php':
        return <FaPhp size={16} className="mr-2 text-purple-500" />;
      case 'node.js':
        return <FaNodeJs size={16} className="mr-2 text-green-600" />;
      case 'express':
        return <SiExpress size={16} className="mr-2 text-gray-600" />;
      case 'codeigniter4':
        return <SiCodeigniter size={16} className="mr-2 text-red-600" />;
      case 'bootstrap':
        return <SiBootstrap size={16} className="mr-2 text-purple-600" />;
      case 'tailwindcss':
        return <SiTailwindcss size={16} className="mr-2 text-blue-400" />;
      case 'react':
        return <FaReact size={16} className="mr-2 text-blue-500" />;
      case 'api rest':
        return <RiExchangeLine size={16} className="mr-2 text-green-500" />;
      case 'mysql':
        return <SiMysql size={16} className="mr-2 text-orange-500" />;
      case 'mongodb':
        return <SiMongodb size={16} className="mr-2 text-green-600" />;
      case 'git':
        return <FaGitAlt size={16} className="mr-2 text-orange-600" />;
      case 'github':
        return <FaGithub size={16} className="mr-2 text-purple-600" />;
      case 'vs code':
        return <FaCode size={16} className="mr-2 text-blue-600" />;
      case 'figma':
        return <SiFigma size={16} className="mr-2 text-pink-500" />;
      case 'postman':
        return <SiPostman size={16} className="mr-2 text-orange-500" />;
      case 'docker':
        return <FaDocker size={16} className="mr-2 text-blue-500" />;
      default:
        return <FaCode size={16} className="mr-2 text-gray-500" />;
    }
  };

  const skills = [
    {
      name: 'Tecnologías',
      icon: <FaCode size={24} className="text-orange-500" />,
      items: ['HTML/CSS', 'JavaScript', 'Java', 'PHP'],
    },
    {
      name: 'Framework, entornos y bibliotecas',
      icon: <FaServer size={24} className="text-blue-700" />,
      items: [
        'Node.js',
        'Express',
        'CodeIgniter4',
        'Bootstrap',
        'Tailwindcss',
        'React',
        'API REST',
      ],
    },
    {
      name: 'Bases de datos',
      icon: <FaDatabase size={24} className="text-green-700" />,
      items: ['MySQL', 'MongoDB'],
    },
    {
      name: 'Herramientas',
      icon: <FaWrench size={24} className="text-purple-600" />,
      items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Postman', 'Docker'],
    },
  ];

  const experiences = [
    {
      title: 'Developer web',
      company: 'BasicWeb',
      period: '2024 - Presente',
      description:
        'Desarrollo de interfaces de usuario con React y mantenimiento de aplicaciones web existentes. Proyecto gestionado por mí.',
    },
    {
      title: 'Developer web',
      company: 'ServiApp',
      period: '2021 - 2023',
      description:
        'Desarrollo en proyecto de sistemas de gestión interna de facturación. Proyecto del SENA para aprobación de electivas de desarrollo de software.',
    },
  ];

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      className="max-w-6xl mx-auto px-6 py-16"
    >
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-black dark:text-white">
        Sobre Mí
      </h1>
      <p className="text-black dark:text-white text-center max-w-2xl mx-auto mb-12">
        Conozca un poco más sobre mi trayectoria, habilidades y experiencia
        profesional.
      </p>

      <div className="flex flex-col md:flex-row gap-10 mb-16">
        <div className="md:w-1/3">
          <img
            src={ImagenAbout}
            alt="Tu foto"
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
        </div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="md:w-2/3"
        >
          <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">
            Mi Historia
          </h2>
          <p className="text-black dark:text-white mb-4">
            Estudiante en etapa práctica del programa Análisis y Desarrollo de
            Software del SENA. A lo largo de mi formación, he desarrollado
            habilidades sólidas en la creación de aplicaciones web, móviles y de
            escritorio, combinando diseño moderno con una arquitectura técnica
            bien estructurada.
          </p>
          <p className="text-black dark:text-white mb-4">
            Me especializo en el desarrollo frontend, donde aplico buenas
            prácticas de código limpio, diseño minimalista y experiencia de
            usuario. También tengo conocimientos en backend, lo que me permite
            comprender y participar en el desarrollo de sistemas completos,
            desde la interfaz hasta la lógica del servidor.
          </p>
          <p className="text-black dark:text-white mb-4">
            Como analista, me enfoco en entender las necesidades del usuario y
            del negocio, modelar soluciones eficaces y participar en todas las
            fases del desarrollo: análisis, diseño, programación, pruebas y
            soporte.
          </p>
          <p className="text-black dark:text-white mb-4">
            Aunque todavía estoy en proceso de adquirir experiencia profesional
            en empresas, tengo una base técnica sólida y muchas ganas de
            aprender, aportar y crecer dentro del mundo del desarrollo de
            software. Estoy abierto a oportunidades de prácticas, pasantías o
            participación en proyectos reales.
          </p>

          <div className="flex items-center gap-6 mt-8">
            <div>
              <p className="text-3xl font-bold text-blue-600">3+</p>
              <p className="text-black dark:text-white">Años de Experiencia</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-600">2+</p>
              <p className="text-black dark:text-white">
                Proyectos Completados
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-600">15+</p>
              <p className="text-black dark:text-white">Cursos Completados</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center text-black dark:text-white">
          Mis Habilidades
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-zinc-800 p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                {skill.icon}
                <h3 className="text-xl font-semibold ml-2 dark:text-white">
                  {skill.name}
                </h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, i) => (
                  <li key={i} className="flex items-center dark:text-white">
                    {getSkillIcon(item)}
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-white">
          Experiencia Profesional
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-zinc-800 p-6 rounded-lg shadow-md"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {exp.title}
                </h3>
                <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">
                  {exp.period}
                </span>
              </div>
              <p className="text-gray-600 mb-4 dark:text-white">
                {exp.company}
              </p>
              <p className="text-gray-700 dark:text-white">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default About;
