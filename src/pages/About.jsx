import { Code, Wrench, Server, Database } from 'lucide-react';
import ImagenAbout from '../assets/img/imagen-sobre-mi.jpg';

function About() {
  const skills = [
    {
      name: 'Tecnologías',
      icon: <Code size={24} className="text-orange-500" />,
      items: ['HTML/CSS', 'JavaScript', 'Java', 'PHP'],
    },
    {
      name: 'Framework, entornos y bibliotecas',
      icon: <Server size={44} className="text-blue-700" />,
      items: [
        'Node.js',
        'Express',
        'CodeIgniter4',
        'Bootstrap',
        'Tailwindcss',
        'react',
        'API REST',
      ],
    },
    {
      name: 'bases de datos',
      icon: <Database size={24} className="text-green-700" />,
      items: ['MySQL', 'MongoDB'],
    },
    {
      name: 'Herramientas',
      icon: <Wrench size={24} className="text-purple-600" />,
      items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Postman', 'docker'],
    },
  ];

  const experiences = [
    {
      title: 'Developer web',
      company: 'BasicWeb',
      period: '2024 - Presente',
      description:
        'Desarrollo de interfaces de usuario con React y mantenimiento de aplicaciones web existentes, Proyecto gestionado por mi',
    },
    {
      title: 'Developer web',
      company: 'ServiApp',
      period: '2021 - 2023',
      description:
        'Desarrollo en proyecto de sistemas gestión interna de facturación, proyecto del SENA para aprobación de electivas de desarrollo de software.',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
        Sobre Mí
      </h1>
      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
        Conozca un poco más sobre mi trayectoria, habilidades y experiencia
        profesional.
      </p>

      {/* Biography Section */}
      <div className="flex flex-col md:flex-row gap-10 mb-16">
        <div className="md:w-1/3">
          <img
            src={ImagenAbout}
            alt="Tu foto"
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
        </div>

        <div className="md:w-2/3">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Mi Historia</h2>
          <p className="text-gray-700 mb-4">
            Estudiante en etapa práctica del programa Análisis y Desarrollo de
            Software del SENA. A lo largo de mi formación, he desarrollado
            habilidades sólidas en la creación de aplicaciones web, móviles y de
            escritorio, combinando diseño moderno con una arquitectura técnica
            bien estructurada.
          </p>
          <p className="text-gray-700 mb-4">
            Me especializo en el desarrollo frontend, donde aplico buenas
            prácticas de código limpio, diseño minimalista y experiencia de
            usuario. También tengo conocimientos en backend, lo que me permite
            comprender y participar en el desarrollo de sistemas completos,
            desde la interfaz hasta la lógica del servidor.
          </p>
          <p className="text-gray-700 mb-4">
            Como analista, me enfoco en entender las necesidades del usuario y
            del negocio, modelar soluciones eficaces y participar en todas las
            fases del desarrollo: análisis, diseño, programación, pruebas y
            soporte.
          </p>
          <p className="text-gray-700 mb-4">
            Aunque todavía estoy en proceso de adquirir experiencia profesional
            en empresas, tengo una base técnica sólida y muchas ganas de
            aprender, aportar y crecer dentro del mundo del desarrollo de
            software. Estoy abierto a oportunidades de prácticas, pasantías o
            participación en proyectos reales.
          </p>

          <div className="flex items-center gap-6 mt-8">
            <div>
              <p className="text-3xl font-bold text-blue-600">3+</p>
              <p className="text-gray-600">Años de Experiencia</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-600">2+</p>
              <p className="text-gray-600">Proyectos Completados</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-600">15+</p>
              <p className="text-gray-600">Cursos completados</p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">
          Mis Habilidades
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {skill.icon}
                <h3 className="text-xl font-semibold ml-2">{skill.name}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, i) => (
                  <li key={i} className="flex items-center">
                    <Code size={16} className="mr-2 text-gray-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div>
        <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">
          Experiencia Profesional
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-800">
                  {exp.title}
                </h3>
                <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">
                  {exp.period}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{exp.company}</p>
              <p className="text-gray-700">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
