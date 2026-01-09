import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-3xl sm:text-4xl font-display uppercase tracking-wide mb-8">
            Política de Privacidade
          </h1>
          
          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
            <p className="text-muted-foreground">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">1. Introdução</h2>
              <p className="text-muted-foreground">
                A SKALA Negócios ("nós", "nosso" ou "empresa") está comprometida em proteger sua privacidade. 
                Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações 
                quando você visita nosso site ou utiliza nossos serviços.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">2. Informações que Coletamos</h2>
              <p className="text-muted-foreground">
                Podemos coletar informações pessoais que você nos fornece diretamente, incluindo:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Nome e informações de contato (e-mail, telefone)</li>
                <li>Informações da empresa</li>
                <li>Mensagens e comunicações enviadas para nós</li>
                <li>Informações de uso do site através de cookies</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">3. Como Usamos Suas Informações</h2>
              <p className="text-muted-foreground">
                Utilizamos as informações coletadas para:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Fornecer e melhorar nossos serviços</li>
                <li>Responder às suas solicitações e comunicações</li>
                <li>Enviar informações sobre nossos serviços (com seu consentimento)</li>
                <li>Analisar o uso do site para melhorar a experiência do usuário</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">4. Compartilhamento de Informações</h2>
              <p className="text-muted-foreground">
                Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, 
                exceto quando necessário para fornecer nossos serviços ou quando exigido por lei.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">5. Segurança</h2>
              <p className="text-muted-foreground">
                Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações 
                contra acesso não autorizado, alteração, divulgação ou destruição.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">6. Seus Direitos</h2>
              <p className="text-muted-foreground">
                De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem o direito de:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Acessar seus dados pessoais</li>
                <li>Corrigir dados incompletos ou desatualizados</li>
                <li>Solicitar a exclusão de seus dados</li>
                <li>Revogar seu consentimento a qualquer momento</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">7. Contato</h2>
              <p className="text-muted-foreground">
                Para questões sobre esta política ou sobre seus dados pessoais, entre em contato conosco:
              </p>
              <p className="text-muted-foreground">
                E-mail: startup@skalanegocios.com.br<br />
                Telefone: +55 47 984682257<br />
                Localização: Joinville, Brasil
              </p>
            </section>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;