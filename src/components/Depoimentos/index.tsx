import styles from './depoimentos.module.css'
import { Slider } from '../Slider'
import { DepoimentosJson } from '@/constants/depoimentos'




export function Depoimentos(){

    const depoimentos = DepoimentosJson

    const depoimentosList = Object.values(depoimentos.depoimentos);

   
    

    return(
        <section className={styles.depoimentos}>
            <div className={styles.depoimentosContainer}>
                <div className="text">
                    <h2>Quem tem, indica!</h2>
                    <p>Confira nossos clientes satisfeitos e descubra por que a Yelly é a escolha número um para quem busca confiança e excelência em soluções financeiras.</p>
                </div>
               
               
                    <Slider 
                        spaceBetween={16}
                        navigation={true}
                        breakpoints={{
                            1320: { slidesPerView: 3 },
                            1100: { slidesPerView: 2.5 },
                            1080: { slidesPerView: 2 },
                            850: { slidesPerView: 1.5 },
                            680: { slidesPerView: 1 },
                            0: { slidesPerView: 1 },
                        }}
                    >
                    
                    {depoimentosList.map((item, i) => {
                        return(
                            <div className={styles.testemunha} key={i}>
                                <div className={styles.testemunhaBox}>
                                <div className={styles.testemunhaAvatar}>
                                    <img src={item.imgUrl} alt={item.alt} />

                                    <div className={styles.testemunhaName}>
                                        <h3>{item.name}</h3>
                                        <p>{item.insta}</p>
                                    </div>
                                </div>
                                    <div className={styles.testemunhaText}>
                                        <p>{item.depoimento}</p>
                                    </div>
                                </div>
                            </div>
                        )
                        
                    })}

                    
                    
                    
                    </Slider>

                <a href="#" className={styles.linkButton}>Peça a sua máquina agora!</a>
            
               
            </div>
        </section>
    )
}