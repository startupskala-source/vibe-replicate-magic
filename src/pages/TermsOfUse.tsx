import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const TermsOfUse = () => {
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
            Termos de Uso
          </h1>
          
          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
            <p className="text-muted-foreground">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">1. Aceitação dos Termos</h2>
              <p className="text-muted-foreground">
                Ao acessar e usar o site da SKALA Negócios, você concorda em cumprir e estar vinculado 
                a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, 
                não deve usar nosso site ou serviços.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">2. Descrição dos Serviços</h2>
              <p className="text-muted-foreground">
                A SKALA Negócios oferece serviços de marketing digital, desenvolvimento web, 
                design UI/UX e automação de processos. Os detalhes específicos de cada serviço 
                são definidos em contratos individuais com cada cliente.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">3. Uso do Site</h2>
              <p className="text-muted-foreground">
                Você concorda em usar nosso site apenas para fins legais e de maneira que não 
                infrinja os direitos de terceiros. É proibido:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Usar o site para qualquer propósito ilegal</li>
                <li>Tentar obter acesso não autorizado a qualquer parte do site</li>
                <li>Transmitir vírus ou código malicioso</li>
                <li>Coletar informações de outros usuários sem consentimento</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">4. Propriedade Intelectual</h2>
              <p className="text-muted-foreground">
                Todo o conteúdo do site, incluindo textos, gráficos, logos, imagens e software, 
                é propriedade da SKALA Negócios ou de seus licenciadores e está protegido por 
                leis de direitos autorais e propriedade intelectual.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">5. Limitação de Responsabilidade</h2>
              <p className="text-muted-foreground">
                A SKALA Negócios não será responsável por quaisquer danos diretos, indiretos, 
                incidentais ou consequenciais resultantes do uso ou impossibilidade de uso 
                de nosso site ou serviços.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">6. Modificações dos Termos</h2>
              <p className="text-muted-foreground">
                Reservamos o direito de modificar estes Termos de Uso a qualquer momento. 
                As alterações entrarão em vigor imediatamente após sua publicação no site. 
                O uso continuado do site após as alterações constitui sua aceitação dos novos termos.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">7. Lei Aplicável</h2>
              <p className="text-muted-foreground">
                Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. 
                Qualquer disputa será submetida à jurisdição exclusiva dos tribunais de Joinville, 
                Santa Catarina.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">8. Contato</h2>
              <p className="text-muted-foreground">
                Para questões sobre estes Termos de Uso, entre em contato conosco:
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

export default TermsOfUse;