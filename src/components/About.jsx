const About = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary">Sobre Mí</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-2 mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Conoce más sobre mi trayectoria profesional y mis habilidades como
            desarrollador.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <p className="text-gray-700 mb-4">
              Soy un desarrollador frontend apasionado con experiencia en la
              creación de aplicaciones web modernas y atractivas. Mi objetivo es
              combinar diseño y funcionalidad para crear experiencias de usuario
              excepcionales.
            </p>
            <p className="text-gray-700 mb-4">
              Comencé mi viaje en el desarrollo web hace X años y desde entonces
              he trabajado en diversos proyectos que me han permitido
              perfeccionar mis habilidades técnicas y creativas.
            </p>
            <p className="text-gray-700 mb-4">
              Me especializo en React, JavaScript, HTML5, CSS3 y herramientas
              modernas de desarrollo frontend. Me encanta aprender nuevas
              tecnologías y metodologías para mejorar constantemente mi trabajo.
            </p>
          </div>

          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-4 text-secondary">
              Educación
            </h3>
            <div className="mb-4">
              <p className="font-medium">Licenciatura en Informática</p>
              <p className="text-gray-600">Universidad XYZ, 20XX - 20XX</p>
            </div>

            <h3 className="text-xl font-semibold mb-4 text-secondary">
              Experiencia
            </h3>
            <div className="mb-4">
              <p className="font-medium">Desarrollador Frontend</p>
              <p className="text-gray-600">Empresa ABC, 20XX - Presente</p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>Desarrollo de aplicaciones web con React</li>
                <li>Implementación de diseños responsivos</li>
                <li>Optimización de rendimiento y usabilidad</li>
              </ul>
            </div>

            <div className="mb-4">
              <p className="font-medium">Desarrollador Web Junior</p>
              <p className="text-gray-600">Startup XYZ, 20XX - 20XX</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
