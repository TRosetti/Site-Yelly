import { Header } from "@/components/Header"
import { Tarja } from "@/components/Tarja";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import styles from './page.module.css'
import { Bandeiras } from "@/components/Bandeiras";
import { ProcessoDeCompra } from "@/components/ProcessoDeCompra";
import { Depoimentos } from "@/components/Depoimentos";
import { Beneficios2 } from "@/components/Beneficios2";
import { Cards } from "@/components/Cards";
import { Faq } from "@/components/Faq";
import { Maquininha } from "@/components/Maquininhas";


export default function Maquininhas() {
  return (
    <div className={styles.app}>
      <Tarja />
      <Header />
      <Hero 
        highlight="As melhores do Brasil"
        title={
          <>
          Descubra qual é a
          <br /><strong>maquininha ideal</strong><br />
           para lucrar mais!
          </>
        }
        paragraph={
          <>
          Cinco modelos de maquininhas com tecnologia <br /> avançada e segurança para turbinar suas vendas! 🔥
          </>
        }

        cta={
          <>
            Pedir agora  {/* pode ser que entre uma classe aqui para alterar a porcentagem automaticamente */}
          </>
        }


        linkCta="#"
        linkImg="https://yelly.com.br/wp-content/uploads/2024/12/FOTO-1-1024x768.png"
        altImg="Maquininhas"
      />

     
      <Bandeiras />
      <Maquininha />
      <ProcessoDeCompra />
      <Tarja />
      <Depoimentos />
      <Beneficios2 />
      <Cards />
      <Faq />
      <Footer />
    </div>  
  );
}
