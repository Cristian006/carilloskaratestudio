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
        subtitle: "¿Tienes lo necesario para convertirte en un verdadero guerrero? Únete a nuestro dojo para dominar el camino del karate, ganar tu <strong>honor</strong> y forjar tu destino junto a otros guerreros en entrenamiento.",
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
      }
    },
    en: {
      title: "Carrillo's Karate Do Studio",
      subtitle: "カリロ空手道場",
      motto: ["Discipline", "Respect", "Excellence"],
      hero: {
        title: "Start Your Journey",
        subtitle: "Do you have what it takes to become a true <span class='text-red-700 font-bold'>warrior</span>?<br/>Join our dojo to master the way of karate, earn your <strong>honor</strong>, and forge your path alongside fellow warriors-in-training.",
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
      }
    }
  };

  const t = isEnglish ? content.en : content.es;

  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen bg-gray-50">
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
      <main className="flex flex-col gap-24 px-6 w-full">
        {/* Hero Section - Now full-width with gradient background */}
        <section className="relative bg-gradient-to-b from-gray-50 to-white py-24">
          {/* Adjusted decorative kanji positioning and z-index */}
          <div className="absolute left-0 top-0 -translate-y-1/2 z-0 select-none pointer-events-none overflow-visible w-full">
            <span className="text-[20rem] text-red-300/20 font-serif absolute -left-12">
              旅
            </span>
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-xl uppercase font-bold mb-8 text-black leading-tight">
              {t.hero.title}
            </h2>
            <p
              className="text-xl opacity-75 leading-relaxed max-w-3xl mx-auto mb-12"
              dangerouslySetInnerHTML={{ __html: t.hero.subtitle }}
            />
            <motion.button
              className="relative border-2 border-black text-black px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center gap-2 hover:border-red-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.hero.cta}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-red-600 transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
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
        </section>

        {/* Training Philosophy Section */}
        <section className="relative bg-gradient-to-b from-gray-50 to-white py-24">
          {/* Decorative kanji background */}
          <div className="absolute left-0 top-0 -translate-y-1/2 z-0 select-none pointer-events-none overflow-visible w-full">
            <span className="text-[20rem] text-red-300/20 font-serif absolute -left-12">
              道
            </span>
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="flex items-center gap-4 mb-16 justify-center">
              <h2 className="text-xl uppercase font-bold text-black">{t.training.title}</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-16">
              {t.training.benefits.map((benefit, index) => (
                <motion.div 
                  key={index} 
                  className="flex flex-col items-center text-center p-8 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-4xl mb-6">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Schedule & Location - Now side by side without cards */}
        <section className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 py-16">
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
        </section>
      </main>

      {/* Footer - Now more minimal */}
      <footer className="py-16 px-6 bg-white">
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
                <a href="#"><Facebook /></a>
              </Button>
              <Button variant="ghost" className="hover:text-red-500" asChild>
                <a href="#"><Instagram /></a>
              </Button>
            </div>
          </div>
          <div className="md:text-center text-gray-500 text-sm text-start">
            © {new Date().getFullYear()} Carrillo's Karate Do Studio. All rights reserved.
          </div>
        </div>
      </footer>
      <SignupDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </div>
  );
}