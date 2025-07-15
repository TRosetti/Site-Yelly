import styles from './beneficios.module.css'

export function Beneficios2(){
    return(
        <section className={styles.beneficios}>
            <div className={styles.containerBeneficios}>

                <div className={styles.beneficiosContainer}>

                    <div className={styles.imageContainer}>
                        <img src="https://yelly.com.br/wp-content/uploads/2024/12/BENEFICIOS-2-1-DESKTOP.png" alt="Beneficios" className={styles.desktop}/>
                        <img src="https://yelly.com.br/wp-content/uploads/2024/12/BENEFICIOS-2-1-MOBILE.png" alt="Beneficios" className={styles.mobile}/>
                    </div>
                    

                    <div className={styles.textContainer}>

                        <div className={styles.card}>
                            <div className={styles.texto}>
                                <img src="https://yelly.com.br/wp-content/uploads/2024/08/unlocked_1f513-1.png" alt="Cadeado" />
                                <h3>Máquinas sem aluguel</h3>
                            </div>
                            <p>Sem precisar pagar mensalidade e com garantia vitalícia sob qualquer defeito.</p>
                        </div>
                        <div className={styles.card}>                            
                            <div className={styles.texto}>
                                <img src="https://yelly.com.br/wp-content/uploads/2024/10/handshake-light-skin-tone-medium-light-skin-tone_1faf1-1f3fb-200d-1faf2-1f3fc.png" alt="Parceria" />
                                <h3>Taxas iguais para CPF ou CNPJ</h3>
                            </div>
                             <p>A Yelly é a única no mercado a oferecer taxas excepcionais tanto para CNPJ quanto para CPF.</p>
                        </div>
                        <div className={styles.card}>                           
                            <div className={styles.texto}>
                                <img src="https://yelly.com.br/wp-content/uploads/2024/10/fire_1f525.png" alt="Fire" />
                                <h3>Receba seu dinheiro em até um dia</h3>                            
                            </div>
                             <p>Escolha a conta para receber suas vendas e o plano de taxas que mais lhe atende</p>
                        </div>

                        

                        <a href="#processoDeCompra" className={styles.linkButton} >Aproveite o desconto!</a>
                    </div>
                </div>

                <div className={`${styles.beneficiosContainer} ${styles.beneficiosContainer2}`}>

                    <div className={styles.imageContainer}>
                        <img src="https://yelly.com.br/wp-content/uploads/2024/12/BENEFICIOS-2-2-DESKTOP.png" alt="Beneficios" className={styles.desktop}/>
                        <img src="https://yelly.com.br/wp-content/uploads/2024/12/BENEFICIOS-2-2-MOBILE.png" alt="Beneficios" className={styles.mobile}/>
                    </div>
                    

                    <div className={styles.textContainer}>

                        <div className={styles.card}>
                            <div className={styles.texto}>
                                <img src="https://yelly.com.br/wp-content/uploads/2024/10/partying-face_1f973.png" alt="Festa" />
                                <h3>Sem taxas escondidas</h3>
                            </div>
                            <p>Não trabalhamos com taxas promocionais, nem pegadinhas!</p>
                        </div>
                        <div className={styles.card}>                            
                            <div className={styles.texto}>
                                <img src="https://yelly.com.br/wp-content/uploads/2024/09/money-mouth-face_1f911.png" alt="Money" />
                                <h3>Venda o quanto quiser</h3>
                            </div>
                            <p>Suas taxas serão de acordo com o plano escolhido independente do seu faturamento.</p>
                        </div>
                        <div className={styles.card}>                           
                            <div className={styles.texto}>
                                <img src="https://yelly.com.br/wp-content/uploads/2024/10/RA2.png" alt="Selo RA1000" />
                                <h3>Yelly no Top 10 Brasil</h3>                            
                            </div>
                             <p>Prêmio Reclame Aqui 2024, categoria Meios de pagamentos eletrônicos - Grandes Operações.</p>
                        </div>
                        <a href="#processoDeCompra" className={styles.linkButton} >Garanta a sua!</a>
                    </div>
                </div>
            </div>
            

        </section>
    )
}