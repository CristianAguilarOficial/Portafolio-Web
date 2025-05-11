import { ExternalLink, Github } from 'lucide-react';

function ProjectCard({ title, description, image, tags, demoUrl, codeUrl }) {
  return (
    <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg dark:bg-zinc-800 ">
      <img
        src={image || '/api/placeholder/400/250'}
        alt={title}
        className="w-full h-48 object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
          {title}
        </h3>

        <p className="text-gray-800 dark:text-white mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-300 dark:bg-zinc-700 text-blue-700 text-xs px-3 py-1 rounded-full dark:bg-zinc-750 dark:text-zinc-50 "
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
              <ExternalLink size={16} className="mr-1" /> Demo
            </a>
          )}

          {codeUrl && (
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-750 hover:text-gray-900 transition-colors
              dark:text-white dark:hover:text-zinc-200"
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
