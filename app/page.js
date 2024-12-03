'use client';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Facebook, Instagram, Swords } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Logo from "@/components/logo";
import { motion } from "framer-motion";
import SignupDialog from "@/components/SignupDialog";

const BELT_COLORS = {
  white: '#f3f4f6',
  yellow: '#fbbf24',
  orange: '#f97316',
  green: '#22c55e',
  blue: '#3b82f6',
  purple: '#a855f7',
  brown: '#8B4513',
  black: '#000000'
};

const JAPANESE_NUMBERS = {
  white: '一',   // 1
  yellow: '二',  // 2
  orange: '三',  // 3
  green: '四',   // 4
  blue: '五',    // 5
  purple: '六',  // 6
  brown: '七',   // 7
  black: '八'    // 8
};

export default function Home() {
  const [isEnglish, setIsEnglish] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const content = {
    es: {
      title: "Carrillo's Karate Do Studio",
      subtitle: "カリロ空手道場",
      motto: ["Disciplina", "Respeto", "Excelencia"],
      hero: {
        title: "Inicia Tu Camino",
        subtitle: "¿Tienes lo necesario para convertirte en un verdadero <span class='text-red-700 font-bold'>guerrero</span>? Únete a nuestro dojo para dominar el camino del karate, ganar tu <strong>honor</strong> y forjar tu <strong>destino</strong> junto a otros guerreros en entrenamiento.",
        cta: "Acepta el Desafío"
      },
      schedule: {
        title: "Horario de Clases",
        beginners: "Todos los Niveles",
        times: {
          begAdv: "Lun - Vie",
        }
      },
      location: {
        title: "Ubicación",
        address1: "Patriot Park",
        address2: "Greenfield, CA 93927",
        features: "Amplio estacionamiento • Ubicación céntrica conveniente"
      },
      footer: {
        contact: {
          title: "Contáctanos",
          email: "carrillochris831@gmail.com"
        },
        hours: {
          title: "Horario",
          weekdays: "Lunes - Viernes: 7PM - 8PM",
        },
        social: {
          title: "Redes Sociales"
        }
      },
      langButton: "English",
      training: {
        title: "Nuestra Filosofía de Entrenamiento",
        subtitle: "Descubre los beneficios de entrenar con nosotros",
        benefits: [
          {
            title: "Desarrollo Físico",
            description: "Mejora tu fuerza, flexibilidad, coordinación y resistencia a través de entrenamientos tradicionales de karate.",
            icon: "💪"
          },
          {
            title: "Crecimiento Mental",
            description: "Desarrolla disciplina, concentración y confianza mientras dominas el arte del karate-do.",
            icon: "🧠"
          },
          {
            title: "Espíritu del Karate",
            description: "Aprende los valores fundamentales del karate: respeto, humildad y perseverancia.",
            icon: "⭐"
          }
        ]
      },
      belts: {
        title: "Rangos de Cinturón",
        subtitle: "¿Tienes lo que se necesita para alcanzar la maestría? Con dedicación y perseverancia, cada cinturón está a tu alcance.",
        ranks: [
          { color: "white", name: "Blanco", meaning: "Pureza y comienzo" },
          { color: "yellow", name: "Amarillo", meaning: "Los primeros rayos del sol del conocimiento" },
          { color: "orange", name: "Naranja", meaning: "El poder creciente" },
          { color: "green", name: "Verde", meaning: "El crecimiento y desarrollo" },
          { color: "blue", name: "Azul", meaning: "El cielo hacia el cual crece el árbol" },
          { color: "purple", name: "Morado", meaning: "La transición hacia estados avanzados" },
          { color: "brown", name: "Café", meaning: "La semilla plantada madura" },
          { color: "black", name: "Negro", meaning: "La maestría y el inicio de un nuevo viaje" }
        ]
      },
      startJourney: {
        title: "Comienza Tu Viaje Hoy",
        subtitle: "No necesitas cita - ¡simplemente preséntate y comienza tu transformación! Tu primera clase es gratis."
      }
    },
    en: {
      title: "Carrillo's Karate Do Studio",
      subtitle: "カリロ空手道場",
      motto: ["Discipline", "Respect", "Excellence"],
      hero: {
        title: "Start Your Journey",
        subtitle: "Do you have what it takes to become a true <span class='text-red-700 font-bold'>warrior</span>?<br/>Join our dojo to master the way of karate, earn your <strong>honor</strong>, and forge your <strong>destiny</strong> alongside fellow warriors-in-training.",
        cta: "Accept the Challenge"
      },
      schedule: {
        title: "Class Schedule",
        beginners: "All Levels",
        times: {
          begAdv: "Mon - Fri",
        }
      },
      location: {
        title: "Location",
        address1: "Patriot Park",
        address2: "Greenfield, CA 93927",
        features: "Ample parking available • Convenient downtown location"
      },
      footer: {
        contact: {
          title: "Contact Us",
          email: "carrillochris831@gmail.com"
        },
        hours: {
          title: "Hours",
          weekdays: "Monday - Friday: 7PM - 8PM",
        },
        social: {
          title: "Social Media"
        }
      },
      langButton: "Español",
      training: {
        title: "Our Training Philosophy",
        subtitle: "Discover the benefits of training with us",
        benefits: [
          {
            title: "Physical Development",
            description: "Enhance your strength, flexibility, coordination, and endurance through traditional karate training.",
            icon: "💪"
          },
          {
            title: "Mental Growth",
            description: "Develop discipline, focus, and confidence as you master the art of karate-do.",
            icon: "🧠"
          },
          {
            title: "Karate Spirit",
            description: "Learn the core values of karate: respect, humility, and perseverance.",
            icon: "⭐"
          }
        ]
      },
      belts: {
        title: "Belt Rankings",
        subtitle: "Do you have what it takes to achieve mastery? With dedication and perseverance, every belt is within your reach.",
        ranks: [
          { color: "white", name: "White", meaning: "Purity and beginning" },
          { color: "yellow", name: "Yellow", meaning: "First rays of knowledge's sun" },
          { color: "orange", name: "Orange", meaning: "Growing power" },
          { color: "green", name: "Green", meaning: "Growth and development" },
          { color: "blue", name: "Blue", meaning: "The sky towards which the tree grows" },
          { color: "purple", name: "Purple", meaning: "Transition to advanced states" },
          { color: "brown", name: "Brown", meaning: "The planted seed matures" },
          { color: "black", name: "Black", meaning: "Mastery and beginning of a new journey" }
        ]
      },
      startJourney: {
        title: "Start Your Journey Today",
        subtitle: "No appointment needed - just show up and begin your transformation! Your first class is on us."
      }
    }
  };

  const t = isEnglish ? content.en : content.es;

  const scrollToSchedule = () => {
    document.getElementById('schedule-section').scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <header className="text-black py-8 flex flex-col items-center">
        <div className="hidden md:flex justify-center mt-8 md:mt-0">
          <Logo />
        </div>
        <div className="max-w-6xl mx-auto px-6 pt-0 md:pt-8">
          <div className="flex items-center justify-center gap-4 mb-3">
            <h1 className="text-5xl text-center">{t.title}</h1>
          </div>
          <p className="text-center text-red-500 text-lg font-medium tracking-[1em]">{t.subtitle}</p>
          <div className="flex justify-center gap-12 mt-4">
            {t.motto.map((item, index) => (
              <span key={index} className="text-black opacity-60 text-lg font-thin">
                {item}
              </span>
            ))}
          </div>
        </div>
      </header>
      <div className="flex md:hidden justify-center mt-8 md:mt-0">
        <Logo />
      </div>
      {/* Main Content */}
      <main className="flex flex-col w-full">
        {/* Hero Section - Now full-width with gradient background */}
        <section className="relative py-24 px-6">
          <div className="max-w-6xl mx-auto relative">
            {/* Adjusted decorative kanji positioning and z-index */}
            <div className="absolute left-0 top-0 translate-y-50 select-none pointer-events-none overflow-visible w-full">
              <span className="text-[20rem] text-red-300/20 font-serif absolute -left-12">
                旅
              </span>
            </div>

            <div className="max-w-4xl mx-auto text-center relative">
              <h2 className="text-xl uppercase font-bold mb-8 text-black leading-tight">
                {t.hero.title}
              </h2>
              <p
                className="text-xl  leading-relaxed max-w-3xl mx-auto mb-12"
                dangerouslySetInnerHTML={{ __html: t.hero.subtitle }}
              />
              <motion.button
                onClick={scrollToSchedule}
                className="relative border-2 border-black text-black px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center gap-2 hover:bg-red-600 hover:text-black hover:border-black transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t.hero.cta}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                <motion.span
                  animate={{
                    x: [0, 5, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                >
                  →
                </motion.span>
              </motion.button>
            </div>
          </div>
        </section>

        {/* Training Philosophy Section */}
        <section className="relative bg-gray-100 text-black py-24 px-6">
          <div className="max-w-6xl mx-auto relative">
            <div className="flex items-center gap-4 mb-4 justify-center">
              <h2 className="text-xl uppercase font-bold text-center">{t.training.title}</h2>
            </div>
            <p className="text-xl opacity-75 leading-relaxed max-w-3xl mx-auto mb-12 text-center">{t.training.subtitle}</p>

            <div className="grid md:grid-cols-3 gap-8">
              {t.training.benefits.map((benefit, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white border-black text-black flex flex-col items-center text-center p-10 border-2 rounded-xl transition-transform duration-300 ease-in-out"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Belt Rankings Section */}
        <section className="py-24 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-xl uppercase font-bold mb-4">{t.belts.title}</h2>
              <p className="text-xl opacity-75">{t.belts.subtitle}</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {t.belts.ranks.map((belt, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center gap-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative w-full h-48 flex justify-center">
                    <div className="relative w-48">
                      <span 
                        className="absolute left-0 top-0 text-[5rem] font-serif"
                        style={{ 
                          color: belt.color === 'white' || belt.color === 'black' ? 'black' : BELT_COLORS[belt.color],
                          opacity: belt.color === 'white' ? 0.1 : 0.4
                        }}
                      >
                        {JAPANESE_NUMBERS[belt.color]}
                      </span>
                      <div className="absolute left-1/2 -translate-x-1/2 w-8 h-48 rounded-sm overflow-hidden">
                        <div 
                          className={`absolute inset-0 ${belt.color === 'white' ? 'border border-gray-200' : ''}`}
                          style={{ backgroundColor: BELT_COLORS[belt.color] }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold mb-1">{belt.name}</h3>
                    <p className="text-sm text-gray-600">{belt.meaning}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Schedule & Location - Now side by side without cards */}
        <section id="schedule-section" className="bg-gray-100 py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-xl uppercase font-bold mb-4">{t.startJourney.title}</h2>
              <p className="text-xl opacity-75 max-w-2xl mx-auto">
                {t.startJourney.subtitle}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-thin mb-8">{t.schedule.title}</h2>
                <div className="space-y-4">
                  <div className="border-l-2 border-red-600 pl-6">
                    <h3 className="text-xl mb-2">{t.schedule.beginners}</h3>
                    <p className="text-gray-600">{t.schedule.times.begAdv} - 7:00 PM - 8:00 PM</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-thin mb-8">{t.location.title}</h2>
                <div className="border-l-2 border-red-600 pl-6">
                  <p className="text-xl mb-2">{t.location.address1}</p>
                  <p className="mb-4">{t.location.address2}</p>
                  <p className="text-gray-600">{t.location.features}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Now more minimal */}
      <footer className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-4">
          </div>
          <div className="flex flex-row items-center justify-between my-16">
            <Select defaultValue={isEnglish ? "en" : "es"} onValueChange={(value) => setIsEnglish(value === "en")}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Español</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex gap-4 justify-center">
              <Button variant="ghost" className="hover:text-red-500" asChild>
                <a href="tel:+18312402422"><Phone /></a>
              </Button>
              <Button variant="ghost" className="hover:text-red-500" asChild>
                <a href="mailto:carrillochris831@gmail.com"><Mail /></a>
              </Button>
              <Button variant="ghost" className="hover:text-red-500" asChild>
                <a href="https://www.facebook.com/CarrillosKarateStudio"><Facebook /></a>
              </Button>
            </div>
          </div>
          <div className="md:text-center text-gray-500 text-sm text-start">
            © {new Date().getFullYear()} Carrillo&apos;s Karate Do Studio. All rights reserved.
          </div>
        </div>
      </footer>
      <SignupDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} isEnglish={isEnglish} />
    </div>
  );
}