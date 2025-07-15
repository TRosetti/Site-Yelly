import { Header } from "@/components/Header"
import { Tarja } from "@/components/Tarja";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import styles from './page.module.css'



export default function Afiliados() {
  return (
    <div className={styles.app}>
      <Tarja />
      <Header />
      <Hero 
        highlight="As melhores do Brasil"
        title={
          <>
            A <strong>melhor maquininha</strong><br />
            na palma da sua mão
          </>
        }
        paragraph={
          <>
          Temos a maquininha perfeita para você aumentar seus lucros!
          Parcele em até 18x com as melhores taxas do mercado! 🔥
          </>
        }

        cta={
          <>
            Aproveite até 70% de desconto!  {/* pode ser que entre uma classe aqui para alterar a porcentagem automaticamente */}
          </>
        }


        linkCta="#"
        linkImg="https://yelly.com.br/wp-content/uploads/2024/12/INDY-2025.png"
        altImg="A melhor maquininha"
      />

     

      <Footer />
    </div>  
  );
}
