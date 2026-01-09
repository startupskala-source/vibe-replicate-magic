import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, MenuItem, HoveredLink } from "./ui/navbar-menu";
import logoSkala from "@/assets/logo-skala.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

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

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <Menu setActive={setActive}>
              <MenuItem setActive={setActive} active={active} item="Serviços">
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="#serviços">Tráfego Pago</HoveredLink>
                  <HoveredLink href="#serviços">Sites</HoveredLink>
                  <HoveredLink href="#serviços">Loja Online</HoveredLink>
                  <HoveredLink href="#serviços">Design</HoveredLink>
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="Portfólio">
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="#portfolio">Ver Projetos</HoveredLink>
                  <HoveredLink href="#portfolio">Cases de Sucesso</HoveredLink>
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="Planos">
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="#planos">Basic</HoveredLink>
                  <HoveredLink href="#planos">Pro</HoveredLink>
                  <HoveredLink href="#planos">Enterprise</HoveredLink>
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="Contato">
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="#contato">Fale Conosco</HoveredLink>
                  <HoveredLink href="#contato">Agende uma Reunião</HoveredLink>
                </div>
              </MenuItem>
            </Menu>
          </div>

          <div className="flex items-center gap-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="hidden sm:block"
            >
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Iniciar Projeto
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-foreground relative w-10 h-10 flex flex-col items-center justify-center gap-1.5"
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
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-border bg-background/95 backdrop-blur-md"
            >
              <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
                <div className="py-2">
                  <p className="text-sm font-semibold text-foreground mb-2">Serviços</p>
                  <div className="flex flex-col gap-2 pl-4">
                    <a href="#serviços" onClick={() => setIsMenuOpen(false)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Tráfego Pago</a>
                    <a href="#serviços" onClick={() => setIsMenuOpen(false)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Sites</a>
                  </div>
                </div>

                <div className="py-2">
                  <p className="text-sm font-semibold text-foreground mb-2">Portfólio</p>
                  <div className="flex flex-col gap-2 pl-4">
                    <a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Ver Projetos</a>
                  </div>
                </div>

                <div className="py-2">
                  <p className="text-sm font-semibold text-foreground mb-2">Planos</p>
                  <div className="flex flex-col gap-2 pl-4">
                    <a href="#planos" onClick={() => setIsMenuOpen(false)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Ver Planos</a>
                  </div>
                </div>

                <div className="py-2">
                  <p className="text-sm font-semibold text-foreground mb-2">Contato</p>
                  <div className="flex flex-col gap-2 pl-4">
                    <a href="#contato" onClick={() => setIsMenuOpen(false)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Fale Conosco</a>
                  </div>
                </div>

                <Button size="sm" className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90">
                  Iniciar Projeto
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
};

export default Header;
