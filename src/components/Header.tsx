import { motion } from "framer-motion";
import { useState } from "react";
import logoSkala from "@/assets/logo-skala.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-full bg-background pt-7 sm:pt-8">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      >
        <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <motion.a
            href="/"
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <img src={logoSkala} alt="SKALA" className="h-8 sm:h-10 w-auto" />
          </motion.a>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="p-2 text-foreground relative w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <motion.span
              className="block w-6 h-0.5 bg-foreground rounded-full origin-center"
              animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
            <motion.span
              className="block w-4 h-0.5 bg-foreground rounded-full"
              animate={isMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-6 h-0.5 bg-foreground rounded-full origin-center"
              animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          </button>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
