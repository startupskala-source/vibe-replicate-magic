import { motion } from "framer-motion";
import { Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logoSkala from "@/assets/logo-skala.jpg";

// Custom Threads icon component
const ThreadsIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.182.408-2.256 1.332-3.023.899-.746 2.13-1.109 3.658-1.078.977.018 1.872.14 2.666.364l-.025-1.382c-.016-.96-.078-1.778-.678-2.357-.543-.523-1.378-.79-2.481-.79h-.039c-.869.008-1.972.227-2.618.934l-1.389-1.471c1.03-.979 2.478-1.494 4.065-1.494h.052c1.71.015 3.065.473 4.03 1.363 1.09 1.002 1.18 2.378 1.2 3.596l.036 2.509c.899.378 1.6.9 2.09 1.56.737 1 1.004 2.246 1.004 3.158 0 .964-.197 1.899-.585 2.778-.717 1.62-2.03 2.9-3.912 3.804C17.592 23.64 15.035 24 12.186 24zm.08-8.716c-1.475 0-2.506.553-2.462 1.49.02.428.252.78.696 1.04.512.301 1.199.424 1.894.388 1.105-.06 1.9-.452 2.43-1.202.348-.492.572-1.14.66-1.92-.717-.167-1.51-.253-2.361-.27-.287-.005-.571-.002-.857.007v-.533z"/>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  
  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/skalanegocios", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: ThreadsIcon, href: "#", label: "Threads" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <motion.a
              href="/"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <img src={logoSkala} alt="SKALA" className="h-10 w-auto" />
            </motion.a>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Transformando ideias em resultados digitais. Sua parceira para crescer online.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>


          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                startup@skalanegocios.com.br
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                +55 47 984682257
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5" />
                Joinville, Brasil
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {currentYear} SKALA. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
