import styles from './beneficios.module.css'

export function Beneficios(){
    return(
        <section className={styles.beneficios}>
            <div className={styles.containerBeneficios}>

                <div className={styles.titleContainer}>
                    <h2>Aceite pagamentos com segurança e tecnologia sem complicações</h2>
                    <p>Saiba porque a Yelly se tornou uma das 10 principais empresas de pagamentos do Brasil em tão pouco tempo.</p>
                </div>
                <div className={styles.beneficiosContainer}>

                    <div className={styles.imageContainer}>
                        <img src="https://yelly.com.br/wp-content/uploads/2024/12/IMAGEM.png" alt="Beneficios" />
                    </div>
                    

                    <div className={styles.textContainer}>
                        <div className={styles.grade}>
                            <div className={styles.card}>
                                <img src="https://yelly.com.br/wp-content/uploads/2024/10/fire_1f525.png" alt="Fire" />
                                <div className={styles.texto}>
                                    <h3>Receba em até um dia!</h3>
                                    <p>Escolha o plano de taxas ideal para o seu negócio e acelere suas vendas.</p>
                                </div>
                            </div>
                            <div className={styles.card}>
                                <img src="https://yelly.com.br/wp-content/uploads/2024/10/handshake-light-skin-tone-medium-light-skin-tone_1faf1-1f3fb-200d-1faf2-1f3fc.png" alt="Parceria" />
                                <div className={styles.texto}>
                                    <h3>Taxas iguais para CPF ou CNPJ</h3>
                                    <p>Oferecemos taxas excepcionais tanto para CNPJ quanto para CPF.</p>
                                </div>
                            </div>
                            <div className={styles.card}>
                                <img src="https://yelly.com.br/wp-content/uploads/2024/10/partying-face_1f973.png" alt="Festa" />
                                <div className={styles.texto}>
                                    <h3>Sem taxas escondidas</h3>
                                    <p>Não trabalhamos com taxas promocionais e nem valor mínimo de vendas.</p>
                                </div>
                            </div>
                            <div className={styles.card}>
                                <img src="https://yelly.com.br/wp-content/uploads/2024/10/money-mouth-face_1f911.png" alt="money" />
                                <div className={styles.texto}>
                                    <h3>E as taxas? Pequenininhas!</h3>
                                    <p>Encontre as melhores taxas do Brasil sem complicações.</p>
                                </div>
                            </div>
                        </div>

                        <a href="#processoDeCompra" className={styles.linkButton} >Aproveite!</a>
                    </div>
                </div>
            </div>
            

        </section>
    )
}