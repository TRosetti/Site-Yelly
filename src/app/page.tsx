import { Header } from "@/components/Header"
import { Tarja } from "@/components/Tarja";
import { Hero } from "@/components/Hero";
import { Bandeiras } from "@/components/Bandeiras";
import { Beneficios } from "@/components/Beneficios";
import { Beneficios2 } from "@/components/Beneficios2";
import { Rotulos } from "@/components/Rotulos"
import { ProcessoDeCompra } from "@/components/ProcessoDeCompra";
import { Depoimentos } from "@/components/Depoimentos";
import { Cards } from "@/components/Cards"
import { Faq } from "@/components/Faq";
// import { Beneficios3 } from "@/components/Beneficios3";
import { Banner } from "@/components/Banner";
import { Footer } from "@/components/Footer";
import styles from './page.module.css'



export default function Home() {
  return (
    <div className={styles.app}>
      <Tarja />
      <Header />
      <Hero 
        highlight="Faça parte da revolução"
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


        linkCta="#processoDeCompra"
        linkImg="https://yelly.com.br/wp-content/uploads/2024/12/INDY-2025.png"
        altImg="A melhor maquininha"
      />
      <Bandeiras />
      <Beneficios /> 
      <Rotulos />
      <Tarja />
     
      <ProcessoDeCompra /> {/* Se eu quiser sem o hero é só adicionar  <ProcessoDeCompra apenasProcessoDeCompra={true} /> */}
      <Tarja />

      <Depoimentos />
      <Beneficios2 />
      <Tarja />
      <Cards />
      <Faq />
      {/* <Beneficios3 /> */}
      <Banner />
      <Footer />
    </div>  
  );
}
