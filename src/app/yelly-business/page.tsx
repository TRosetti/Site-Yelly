import { Header } from "@/components/Header"
import { Tarja } from "@/components/Tarja";
// import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import styles from './page.module.css'



export default function YellyBusiness() {
  return (
    <div className={styles.app}>
      <Tarja />
      <Header />
      <h1>Yelly Business</h1>

     

      <Footer />
    </div>  
  );
}
