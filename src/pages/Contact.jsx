import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = 'aguilarcristian060@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800 dark:text-zinc-200">
        Contáctame
      </h1>
      <p className="text-gray-600 dark:text-zinc-200 text-center max-w-2xl mx-auto mb-12">
        ¿Tienes alguna pregunta o propuesta de proyecto? No dudes en
        contactarme.
      </p>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Contact Info */}
        <div className="lg:w-1/3">
          <h2 className="text-xl font-bold mb-6 text-gray-800 dark:text-zinc-200">
            Información de Contacto
          </h2>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full">
                <Mail size={20} className="text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-gray-800 dark:text-zinc-200 font-medium">
                  Email
                </h3>
                <p
                  onClick={handleCopy}
                  className="text-gray-600  dark:text-zinc-200 cursor-pointer hover:text-blue-600 transition select-none"
                  title="Haz clic para copiar"
                >
                  {copied ? 'Copiado ✅' : email}
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full">
                <Phone size={20} className="text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-gray-800  dark:text-zinc-200 font-medium">
                  Teléfono
                </h3>
                <p className="text-gray-600 dark:text-zinc-200">
                  +57 314 283 2878
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full">
                <MapPin size={20} className="text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-gray-800  dark:text-zinc-200 font-medium">
                  Ubicación
                </h3>
                <p className="text-gray-600 dark:text-zinc-200">
                  Casanare, Colombia
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-gray-800 dark:text-blue-500 font-medium mb-4">
              Sígueme en:
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/cristianaguilaroficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaLinkedin
                  size={20}
                  className="text-gray-800 dark:text-white hover:text-blue-600"
                />
              </a>
              <a
                target="_blank"
                href="https://github.com/CristianAguilarOficial"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaGithub
                  size={20}
                  className="text-gray-800 dark:text-zinc-200 hover:text-white"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:w-2/3 bg-white dark:bg-zinc-800 p-8 rounded-lg shadow-md">
          {submitted ? (
            <div className="text-center py-10">
              <div className="bg-green-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <Send size={24} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                ¡Mensaje enviado!
              </h3>
              <p className="text-gray-600">
                Gracias por contactarme. Te responderé a la brevedad posible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 dark:text-zinc-200 font-medium mb-2"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:placeholder:text-white"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 dark:text-zinc-200 font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:placeholder:text-white"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-gray-700 dark:text-zinc-200 font-medium mb-2"
                >
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:placeholder:text-white"
                  placeholder="Asunto del mensaje"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 dark:text-zinc-200 font-medium mb-2"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:placeholder:text-white"
                  placeholder="Escribe tu mensaje aquí..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition duration-300 flex items-center justify-center"
              >
                <Send size={18} className="mr-2" />
                Enviar Mensaje
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
