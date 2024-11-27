'use client';
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";

export default function SignupDialog() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [email, setEmail] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
  };

  return (
    <AnimatePresence>
      {isExpanded ? (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="fixed bottom-8 right-8 bg-black text-white p-8 rounded-3xl shadow-lg max-w-md"
        >
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Join our classes!</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Sign up for our classes and get first two classes free to our first five registrants. And first class is always free even if you missed the deadline!
            </p>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent border-b-2 border-white placeholder:text-gray-400 text-white"
                />
                <div className="space-y-2">
                  <Button
                    type="submit"
                    className="w-full bg-white text-black hover:bg-gray-200"
                  >
                    Let&apos;s go!
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setIsExpanded(false)}
                    className="w-full text-white hover:bg-white/10"
                  >
                    Close
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
            y: isVisible ? 0 : 100 // Move button down 100px when hidden
          }}
          transition={{ duration: 0.3 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={() => setIsExpanded(true)}
          className="fixed bottom-8 right-8 bg-black text-white hover:bg-gray-900 rounded-full px-6 py-4 text-lg font-semibold shadow-lg"
        >
          Join Now! 🥋
        </motion.button>
      )}
    </AnimatePresence>
  );
} 