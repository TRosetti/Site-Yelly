import { Header } from "@/components/Header"
import { Tarja } from "@/components/Tarja";
// import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import styles from './page.module.css'



export default function Afiliados() {
  return (
    <div className={styles.app}>
      <Tarja />
      <Header />
      <h1>Afiliado</h1>

     

      <Footer />
    </div>  
  );
}
