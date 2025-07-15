import { Header } from "@/components/Header"
import { Tarja } from "@/components/Tarja";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import styles from './page.module.css'



export default function Taxas() {
  return (
    <div className={styles.app}>
      <Tarja />
      <Header />
      <Hero 
        highlight="AS MENORES TAXAS DO MERCADO!"
        title={
          <>
          Conheça nosso planos: <br />
          <strong>Taxas imbatíveis</strong> <br />        
          para qualquer negócio!
           
          </>
        }
        paragraph={
          <>
          Escolha o plano perfeito para você! Sem taxas promocionais, sem metas de faturamento e sem surpresas.
          </>
        }

        cta={
          <>
           Veja qual o melhor plano para você!  
          </>
        }


        linkCta="#"
        linkImg="https://yelly.com.br/wp-content/uploads/2024/12/FOTO-1024x768.png"
        altImg="A melhor maquininha"
      />

     

      <Footer />
    </div>  
  );
}
