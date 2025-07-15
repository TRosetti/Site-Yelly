'use client' // como estou usando o useTaxas ele usa useEfect, preciso de um use client
import styles from './banner.module.css'
import { useTaxas } from '@/hooks/useTaxas';
// 

export function Banner(){
    const { taxas } = useTaxas();

    if(taxas?.master?.max){
        console.log(taxas?.master?.max[2])
    }

    

    // console.log(taxas ? taxas?.master?.max[12] : " ")

    return (
        <section id='Banner'>
            <div className={styles.bannerContainer}>
                <div className={styles.banner}>
                    <div className={styles.text}>
                        <h2>
                            Mais do que uma maquininha:
                            <span><br />a revolução no jeito de vender!</span>
                        </h2>
                        <div className={styles.taxa}>
                            <p>TAXA EM 12X A PARTIR DE</p>
                            <h4>
                                {taxas?.master?.max ? taxas?.master?.max[12].toFixed(2).replace(".", ",") : "00,00"}%
                            </h4>
                        </div>
                        <a href="#">Garanta agora a sua Yelly com até 70% de desconto!</a>
                    </div>
                    <div className={styles.imgContainer}>
                        <img src="/Banner/Smart_banner.png" alt="Maquininha Smart" />
                        
                    </div>
                </div>

            </div>
        </section>
    )
}

