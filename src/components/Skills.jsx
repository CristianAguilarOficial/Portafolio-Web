const Skills = () => {
  const skillCategories = [
    {
      name: 'Frontend',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'Redux'],
    },
    {
      name: 'Herramientas',
      skills: ['Git', 'Webpack', 'Vite', 'npm', 'VS Code', 'Figma'],
    },
    {
      name: 'Otros',
      skills: [
        'Responsive Design',
        'Accesibilidad Web',
        'SEO Básico',
        'Testing',
      ],
    },
  ];

  return (
    <section id="skills" className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary">Mis Habilidades</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-2 mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Las tecnologías y herramientas con las que trabajo 2
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-4">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-gray-100 text-gray-800  px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
