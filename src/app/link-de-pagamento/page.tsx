import { Header } from "@/components/Header"
import { Tarja } from "@/components/Tarja";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import styles from './page.module.css'



export default function LinkDePagamento() {
  return (
    <div className={styles.app}>
      <Tarja />
      <Header />
      <Hero 
        highlight="LINK DE PAGAMENTO YELLY"
        title={
          <>
            <strong>Venda online em até 18x</strong><br />
            com facilidade e segurança!
          </>
        }
        paragraph={
          <>
          Com o Link de Pagamento Yelly, você transforma qualquer conversa em uma oportunidade de venda! 🔥
          </>
        }

        cta={
          <>
            Criar Link de Pagamento  
          </>
        }


        linkCta="#"
        linkImg="https://yelly.com.br/wp-content/uploads/2025/05/INDY-2-1024x640.png"
        altImg="A melhor maquininha"
      />

     

      <Footer />
    </div>  
  );
}
