import styles from './Rotulos.module.css'

export function Rotulos(){
    return(
        <section className={styles.Rotulos} id='Rotulos'>
            <div className={styles.rotulosContainer}>
                <h2>Uma empresa que você pode confiar!</h2>

                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <div className={styles.imgContianer}>
                            <img src="https://yelly.com.br/wp-content/uploads/2025/06/PREMIO-1.png" alt="RA premio 2024" />
                            <h3>Top 10 Brasil</h3>
                        </div>

                        <div className={styles.textContainer}>
                            <h3>Top 10 Brasil</h3>
                            <p>Reconhecida pelo Prêmio <br /> Reclame Aqui 2024</p>
                        </div>
                       
                    </div>

                    <div className={styles.divisor}></div>

                    <div className={styles.card}>
                        <div className={styles.imgContianer}>
                            <img src="https://yelly.com.br/wp-content/uploads/2025/06/MOEDAS-3.png" alt="+ 2,5 Bilhões" />
                            <h3>+ de 2,5 bilhões</h3>
                        </div>
                        <div className={styles.textContainer}>
                            <h3>+ de 2,5 bilhões</h3>
                            <p>Transações processadas <br /> no ano de 2024</p>
                        </div>
                        
                    </div>

                    <div className={` ${styles.divisor} ${styles.divisor2} `}></div>

                    <div className={styles.card}>
                        <div className={styles.imgContianer}>
                            <img src="https://yelly.com.br/wp-content/uploads/2025/06/RA1000-2.png" alt="Selo RA1000" />
                            <h3>feedback</h3>
                        </div>
                        <div className={styles.textContainer}>
                            <h3>feedback</h3>
                            <p>Avaliação média de <br /> 4.8/5 por nossos clientes</p>
                        </div>
                       
                    </div>

                    <div className={styles.divisor}></div>

                    <div className={styles.card}>
                        <div className={styles.imgContianer}>
                            <img src="https://yelly.com.br/wp-content/uploads/2025/06/FEEDBACK-1.png" alt="Feedback 5 estrelas" />
                            <h3>Top 10 Brasil</h3>
                        </div>
                        <div className={styles.textContainer}>
                            <h3>Top 10 Brasil</h3>
                             <p>Reconhecida pelo Prêmio <br /> Reclame Aqui 2024</p>
                        </div>
                       
                    </div>
                </div> 
            </div>
        </section>
    )
}