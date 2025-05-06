import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Aquí iría la lógica para enviar el formulario a un backend
    setSubmitted(true);
    // Reiniciar el formulario
    setFormData({ name: '', email: '', subject: '', message: '' });
    // Mostrar mensaje de éxito por 3 segundos
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
        Contáctame
      </h1>
      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
        ¿Tienes alguna pregunta o propuesta de proyecto? No dudes en
        contactarme.
      </p>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Contact Info */}
        <div className="lg:w-1/3">
          <h2 className="text-xl font-bold mb-6 text-gray-800">
            Información de Contacto
          </h2>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full">
                <Mail size={20} className="text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-gray-800 font-medium">Email</h3>
                <p className="text-gray-600">aguilarcristian060@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full">
                <Phone size={20} className="text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-gray-800 font-medium">Teléfono</h3>
                <p className="text-gray-600">+57 314 283 2878</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full">
                <MapPin size={20} className="text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-gray-800 font-medium">Ubicación</h3>
                <p className="text-gray-600">Casanare, Colombia</p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-gray-800 font-medium mb-4">Sígueme en:</h3>
            <div className="flex space-x-4">
              <a
                target="_blank"
                href="https://github.com/CristianAguilarOficial"
                className="bg-gray-200 p-2 rounded-full hover:bg-blue-100 transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:w-2/3 bg-white p-8 rounded-lg shadow-md">
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
                    className="block text-gray-700 font-medium mb-2"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-gray-700 font-medium mb-2"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Asunto del mensaje"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
