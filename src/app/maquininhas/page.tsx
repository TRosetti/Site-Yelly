import { Header } from "@/components/Header"
import { Tarja } from "@/components/Tarja";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import styles from './page.module.css'



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

     

      <Footer />
    </div>  
  );
}
