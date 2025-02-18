import React, { useState } from 'react';
import { Heart, Instagram, Facebook, Mail, ChefHat, Menu, X } from 'lucide-react';
import tarta1 from './assets/tarta1.jpg';
import tarta2 from './assets/tarta2.jpg';
import tarta3 from './assets/tarta3.jpg';
import tarta6 from './assets/tarta6.jpg';
import tarta15 from './assets/tarta15.jpg';
import tarta30 from './assets/tarta30.jpg';


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('inicio');

  const cakes = [
    {
      id:1,
      title: "Tarta Cumpleaños Halloween",
      description: "Delicada tarta de tres pisos decorada con rosas de fondant y perlas comestibles.",
      image: tarta1,
      category: "Cumpleaños"
    },
    {
      id: 2,
      title: "Tarta Super Mario",
      description: "Colorida tarta infantil con detalles de unicornio y arcoíris en fondant.",
      image: tarta2,
      category: "Infantil"
    },
    {
      id: 3,
      title: "Tarta Cumpleaños Conejito",
      description: "Elegante diseño con flores de fondant pintadas a mano.",
      image: tarta3,
      category: "Ocasiones Especiales"
    },
    {
      id: 4,
      title: "Tarta Unicornio Fantasia",
      description: "Elegante diseño con flores de fondant pintadas a mano.",
      image: tarta6,
      category: "Ocasiones Especiales"
    },
    {
      id: 5,
      title: "Tarta ChocoFresa y Frutos Rojos",
      description: "Elegante diseño con flores de fondant pintadas a mano.",
      image: tarta15,
      category: "Ocasiones Especiales"
    },
    {
      id: 6,
      title: "Tarta Frozen",
      description: "Elegante diseño con flores de fondant pintadas a mano.",
      image: tarta30,
      category: "Ocasiones Especiales"
    },
    {
      id: 3,
      title: "Tarta Super Mario",
      description: "Elegante diseño con flores de fondant pintadas a mano.",
      image: "https://images.unsplash.com/photo-1562777717-dc6984f65a63?auto=format&fit=crop&q=80&w=800",
      category: "Ocasiones Especiales"
    },
    {
      id: 3,
      title: "Tarta Super Mario",
      description: "Elegante diseño con flores de fondant pintadas a mano.",
      image: "https://images.unsplash.com/photo-1562777717-dc6984f65a63?auto=format&fit=crop&q=80&w=800",
      category: "Ocasiones Especiales"
    },
    {
      id: 3,
      title: "Tarta Super Mario",
      description: "Elegante diseño con flores de fondant pintadas a mano.",
      image: "https://images.unsplash.com/photo-1562777717-dc6984f65a63?auto=format&fit=crop&q=80&w=800",
      category: "Ocasiones Especiales"
    },
    {
      id: 3,
      title: "Tarta Super Mario",
      description: "Elegante diseño con flores de fondant pintadas a mano.",
      image: "https://images.unsplash.com/photo-1562777717-dc6984f65a63?auto=format&fit=crop&q=80&w=800",
      category: "Ocasiones Especiales"
    },
    {
      id: 3,
      title: "Tarta Super Mario",
      description: "Elegante diseño con flores de fondant pintadas a mano.",
      image: "https://images.unsplash.com/photo-1562777717-dc6984f65a63?auto=format&fit=crop&q=80&w=800",
      category: "Ocasiones Especiales"
    },
    {
      id: 3,
      title: "Tarta Super Mario",
      description: "Elegante diseño con flores de fondant pintadas a mano.",
      image: "https://images.unsplash.com/photo-1562777717-dc6984f65a63?auto=format&fit=crop&q=80&w=800",
      category: "Ocasiones Especiales"
    },
    {
      id: 3,
      title: "Tarta Super Mario",
      description: "Elegante diseño con flores de fondant pintadas a mano.",
      image: "https://images.unsplash.com/photo-1562777717-dc6984f65a63?auto=format&fit=crop&q=80&w=800",
      category: "Ocasiones Especiales"
    },
    {
      id: 3,
      title: "Tarta Super Mario",
      description: "Elegante diseño con flores de fondant pintadas a mano.",
      image: "https://images.unsplash.com/photo-1562777717-dc6984f65a63?auto=format&fit=crop&q=80&w=800",
      category: "Ocasiones Especiales"
    }

  ];

  const handleNavigation = (section: string) => {
    setCurrentSection(section);
    setIsMenuOpen(false);
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'galeria':
        return (
          <section className="py-16 container mx-auto px-4">
            <h3 className="text-3xl font-serif text-center mb-12 text-gray-800">Galería de Tartas</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {cakes.map((cake) => (
                <div key={cake.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <img src={cake.image} alt={cake.title} className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <span className="text-[#E8847D] text-sm font-medium">{cake.category}</span>
                    <h4 className="text-xl font-serif text-gray-800 mt-2 mb-3">{cake.title}</h4>
                    <p className="text-gray-600">{cake.description}</p>
                    <button className="mt-4 text-[#E8847D] hover:text-[#D67670] font-medium flex items-center gap-2">
                      Ver más <Heart className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      case 'servicios':
        return (
          <section className="py-16 container mx-auto px-4">
            <h3 className="text-3xl font-serif text-center mb-12 text-gray-800">Mis Especialidades</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h4 className="text-2xl font-serif text-gray-800 mb-4">Tartas Personalizadas</h4>
                <p className="text-gray-600 mb-4">Diseñamos y creamos tartas únicas según tus preferencias y ocasión especial.</p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Tartas de boda</li>
                  <li>• Celebraciones especiales</li>
                  <li>• Cumpleaños temáticos</li>
                  <li>• Reposteria sin Gluten</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h4 className="text-2xl font-serif text-gray-800 mb-4">Tips y Recomendaciones</h4>
                <p className="text-gray-600 mb-4">Aprende el arte del fondant.</p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Técnicas básicas de fondant</li>
                  <li>• Decoración avanzada</li>
                  <li>• Modelado de figuras</li>
                  <li>• Consejos de Reposteria</li>
                </ul>
              </div>
            </div>
          </section>
        );
      case 'contacto':
        return (
          <section className="py-16 container mx-auto px-4">
            <h3 className="text-3xl font-serif text-center mb-12 text-gray-800">Contacto</h3>
            <div className="max-w-2xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Nombre</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#E8847D] focus:border-[#E8847D]"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#E8847D] focus:border-[#E8847D]"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-2">Mensaje</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#E8847D] focus:border-[#E8847D]"
                      placeholder="¿En qué podemos ayudarte?"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#E8847D] hover:bg-[#D67670] text-white px-6 py-3 rounded-md transition-colors"
                  >
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          </section>
        );
      default:
        return (
          <>
            {/* Hero Section */}
            <section className="relative h-[500px] bg-cover bg-center" style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&q=80")'
            }}>
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="relative container mx-auto px-4 h-full flex items-center">
                <div className="max-w-2xl text-white">
                  <h2 className="text-5xl font-serif mb-4">Tartas Artesanales de Fondant</h2>
                  <p className="text-xl mb-8">Creaciones únicas para momentos especiales</p>
                  <button 
                    onClick={() => handleNavigation('contacto')}
                    className="bg-[#E8847D] hover:bg-[#D67670] text-white px-8 py-3 rounded-full transition-colors"
                  >
                    Contacto
                  </button>
                </div>
              </div>
            </section>

            {/* Featured Cakes */}
            <section className="py-16 container mx-auto px-4">
              <h3 className="text-3xl font-serif text-center mb-12 text-gray-800">Mis Creaciones</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {cakes.map((cake) => (
                  <div key={cake.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <img src={cake.image} alt={cake.title} className="w-full h-64 object-cover" />
                    <div className="p-6">
                      <span className="text-[#E8847D] text-sm font-medium">{cake.category}</span>
                      <h4 className="text-xl font-serif text-gray-800 mt-2 mb-3">{cake.title}</h4>
                      <p className="text-gray-600">{cake.description}</p>
                      <button 
                        onClick={() => handleNavigation('galeria')}
                        className="mt-4 text-[#E8847D] hover:text-[#D67670] font-medium flex items-center gap-2"
                      >
                        Ver más <Heart className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#FDF8F5]">
      {/* Header */}
      <header className="bg-white shadow-sm relative">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => handleNavigation('inicio')}>
              <ChefHat className="h-8 w-8 text-[#E8847D]" />
              <h1 className="text-2xl font-serif text-gray-800">Las Tartas de Julia</h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              <button onClick={() => handleNavigation('inicio')} className="text-gray-600 hover:text-[#E8847D] transition-colors">Inicio</button>
              <button onClick={() => handleNavigation('galeria')} className="text-gray-600 hover:text-[#E8847D] transition-colors">Galería</button>
              <button onClick={() => handleNavigation('servicios')} className="text-gray-600 hover:text-[#E8847D] transition-colors">Servicios</button>
              <button onClick={() => handleNavigation('contacto')} className="text-gray-600 hover:text-[#E8847D] transition-colors">Contacto</button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-600 hover:text-[#E8847D] transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50">
              <div className="flex flex-col py-4">
                <button onClick={() => handleNavigation('inicio')} className="px-4 py-2 text-left text-gray-600 hover:bg-[#FDF8F5] hover:text-[#E8847D] transition-colors">
                  Inicio
                </button>
                <button onClick={() => handleNavigation('galeria')} className="px-4 py-2 text-left text-gray-600 hover:bg-[#FDF8F5] hover:text-[#E8847D] transition-colors">
                  Galería
                </button>
                <button onClick={() => handleNavigation('servicios')} className="px-4 py-2 text-left text-gray-600 hover:bg-[#FDF8F5] hover:text-[#E8847D] transition-colors">
                  Tips y Recomendaciones
                </button>
                <button onClick={() => handleNavigation('contacto')} className="px-4 py-2 text-left text-gray-600 hover:bg-[#FDF8F5] hover:text-[#E8847D] transition-colors">
                  Contacto
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      {renderSection()}

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-6 md:mb-0 cursor-pointer" onClick={() => handleNavigation('inicio')}>
              <ChefHat className="h-6 w-6 text-[#E8847D]" />
              <span className="text-xl font-serif text-gray-800">Las Tartas de Julia</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-[#E8847D]">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#E8847D]">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#E8847D]">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="text-center mt-8 text-gray-500 text-sm">
            © 2025 Las Tartas de Julia. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;