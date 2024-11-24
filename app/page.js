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

export default function Home() {
  const [isEnglish, setIsEnglish] = useState(false);

  const content = {
    es: {
      title: "Carrillo's Karate Do Studio",
      motto: "Disciplina • Respeto • Excelencia",
      hero: {
        title: "Transforma Tu Vida a Través de las Artes Marciales",
        subtitle: "Únete a nuestra comunidad y descubre el camino hacia la fuerza física y mental"
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
      langButton: "English"
    },
    en: {
      title: "Carrillo's Karate Do Studio",
      motto: "Discipline • Respect • Excellence",
      hero: {
        title: "Transform Your Life Through Martial Arts",
        subtitle: "Join our community and discover the path to physical and mental strength"
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
      langButton: "Español"
    }
  };

  const t = isEnglish ? content.en : content.es;

  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-black text-white py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center gap-4 mb-3">
            <Swords className="w-10 h-10 text-red-600" />
            <h1 className="text-5xl font-bold">{t.title}</h1>
          </div>
          <p className="text-center text-red-500 text-lg font-medium">{t.motto}</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col gap-16 py-16 px-6 max-w-6xl mx-auto w-full">
        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">{t.hero.title}</h2>
          <p className="text-xl text-gray-700">{t.hero.subtitle}</p>
        </section>

        <div className="grid md:grid-cols-2 gap-8">
          <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b-2 border-red-600 pb-2">{t.schedule.title}</h2>
            <div className="grid gap-6">
              <div className="flex flex-col gap-2 text-gray-800">
                <span className="font-semibold text-lg">{t.schedule.beginners}</span>
                <span className="text-gray-600">{t.schedule.times.begAdv} - 7:00 PM - 8:00 PM</span>
              </div>
            </div>
          </section>

          <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b-2 border-red-600 pb-2">{t.location.title}</h2>
            <p className="mb-2 text-gray-800">{t.location.address1}</p>
            <p className="mb-2 text-gray-800">{t.location.address2}</p>
            <p className="text-gray-700">{t.location.features}</p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white p-6 mt-12">
        <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-3 text-center">
          <div>
            <h3 className="font-bold text-red-500 mb-2">{t.footer.contact.title}</h3>
            <div className="flex flex-col items-center gap-2">
              <Button
                variant="ghost"
                className="text-gray-100 hover:text-red-500"
                onClick={() => window.location.href = 'tel:5551234567'}
              >
                <Phone />
                (831) 240-2422
              </Button>
              <Button
                variant="ghost"
                className="text-gray-100 hover:text-red-500"
                onClick={() => window.location.href = 'mailto:cristianrponce06@gmail.com'}
              >
                <Mail />
                Contact Us
              </Button>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-red-500 mb-2">{t.footer.hours.title}</h3>
            <p className="text-gray-100">{t.footer.hours.weekdays}</p>
          </div>
          <div>
            <h3 className="font-bold text-red-500 mb-2">{t.footer.social.title}</h3>
            <div className="flex gap-4 justify-center">
              <Button variant="ghost" className="text-gray-100 hover:text-red-500" asChild>
                <a href="#"><Facebook /></a>
              </Button>
              <Button variant="ghost" className="text-gray-100 hover:text-red-500" asChild>
                <a href="#"><Instagram /></a>
              </Button>
            </div>
          </div>
        </div>
        {/* Add Language Toggle here */}
        <div className="text-center mt-6">
          <Select defaultValue={isEnglish ? "en" : "es"} onValueChange={(value) => setIsEnglish(value === "en")}>
            <SelectTrigger className="w-32 mx-auto bg-red-600 hover:bg-red-700 text-white border-none">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="es">Español</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </footer>
    </div>
  );
}
