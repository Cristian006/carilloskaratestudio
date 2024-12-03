'use client';
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";

const content = {
  es: {
    button: "¡Únete Ahora! 🥋",
    title: "¡Únete a nuestras clases!",
    description: "Regístrate para nuestras clases y obtén las dos primeras clases gratis para nuestros primeros cinco registrados. ¡Y la primera clase siempre es gratis incluso si perdiste la fecha límite!",
    emailPlaceholder: "Correo electrónico",
    submit: "¡Vamos!",
    close: "Cerrar"
  },
  en: {
    button: "Join Now! 🥋",
    title: "Join our classes!",
    description: "Sign up for our classes and get first two classes free to our first five registrants. And first class is always free even if you missed the deadline!",
    emailPlaceholder: "Email",
    submit: "Let's go!",
    close: "Close"
  }
};

export default function SignupDialog({ isOpen, onClose, isEnglish = false }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [email, setEmail] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const t = isEnglish ? content.en : content.es;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Email submitted:', email);
    setIsExpanded(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isExpanded ? (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="fixed bottom-4 right-4 md:bottom-8 md:right-8 bg-black text-white p-8 rounded-3xl shadow-lg max-w-md z-50"
        >
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">{t.title}</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              {t.description}
            </p>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <Input
                  type="email"
                  placeholder={t.emailPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent border-b-2 border-white placeholder:text-gray-400 text-white"
                />
                <div className="space-y-2">
                  <Button
                    type="submit"
                    className="w-full bg-white text-black hover:bg-gray-200"
                  >
                    {t.submit}
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => {
                      setIsExpanded(false);
                      onClose();
                    }}
                    className="w-full text-white hover:bg-white/10 hover:text-white"
                  >
                    {t.close}
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </motion.div>
      ) : (
        <motion.button
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: 1, 
            opacity: 1,
            y: isVisible ? 0 : 100
          }}
          transition={{ duration: 0.3 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={() => setIsExpanded(true)}
          className="fixed bottom-4 right-4 md:bottom-8 md:right-8 bg-black text-white hover:bg-gray-900 rounded-full px-6 py-4 text-lg font-semibold shadow-lg"
        >
          {t.button}
        </motion.button>
      )}
    </AnimatePresence>
  );
} 