import { ExternalLink, Github, Server, Code2 } from 'lucide-react';

function ProjectCard({
  title,
  description,
  image,
  tags,
  demoUrl,
  codeUrl,
  isAPI = false,
}) {
  // Función para renderizar la imagen o el placeholder de API
  const renderImageOrPlaceholder = () => {
    if (isAPI) {
      return (
        <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
          <div className="text-center text-white">
            <Server size={48} className="mx-auto mb-2" />
            <p className="text-lg font-semibold">API</p>
            <p className="text-sm opacity-80">Backend Service</p>
          </div>
        </div>
      );
    }

    if (image && image !== '/api/placeholder/400/250') {
      return (
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      );
    }

    // Placeholder por defecto para proyectos web sin imagen específica
    return (
      <div className="w-full h-48 bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
        <div className="text-center text-white">
          <Code2 size={48} className="mx-auto mb-2" />
          <p className="text-lg font-semibold">Web App</p>
          <p className="text-sm opacity-80">Frontend Project</p>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg dark:bg-zinc-800">
      {renderImageOrPlaceholder()}

      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {title}
          </h3>
          {isAPI && (
            <span className="bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-200 text-xs px-2 py-1 rounded-full font-medium">
              API
            </span>
          )}
        </div>

        <p className="text-gray-800 dark:text-white mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-300 dark:bg-zinc-700 text-blue-700 text-xs px-3 py-1 rounded-full dark:text-zinc-50"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex justify-between">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ExternalLink size={16} className="mr-1" />
              {isAPI ? 'Documentación' : 'Demo'}
            </a>
          )}

          {codeUrl && (
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-750 hover:text-gray-900 transition-colors dark:text-white dark:hover:text-zinc-200"
            >
              <Github size={16} className="mr-1" /> Código
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
