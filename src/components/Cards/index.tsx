import styles from "./cards.module.css"

export function Cards(){
    return(
        <section>
            <div className={styles.cardContainer}>
                <div className={styles.linha1}>
                    <div className={`${styles.card} ${styles.card1}`} style={{background: "url('/Cards/taxas-exclusivas.png')"}}>
                        <h3>Taxas Exclusivas para Todos</h3>
                        <h2>As melhores taxas para você CPF ou CNPJ</h2>
                        <a href="#">
                            Economize com as menores taxas do mercado!
                            <img src="/setaAmarela2.svg" alt="Seta" />
                        </a>
                    </div>
                </div>

                <div className={styles.linha2}>
                    <div className={`${styles.card} ${styles.card2}`} style={{background: "url('/Cards/recebimento-rapido.png')"}}>
                    <h3>Recebimento rápido</h3>
                    <h2>Receba seu dinheiro em até um dia</h2>
                    <a href="#">
                        Confira nossas taxas
                        <img src="/setaAmarela2.svg" alt="Seta" />
                    </a>
                </div>
               <div className={`${styles.card} ${styles.card3}`} style={{background: "url('/Cards/alta-performace.png')"}}>
                    <h3>Alta performace</h3>
                    <h2>A máquina mais moderna do mercado!</h2>
                    <a href="#">
                        Conheça a Yelly Smart
                        <img src="/setaAmarela2.svg" alt="Seta" />
                    </a>
                </div>
                </div>
                <div className={styles.linha3}>
                    <div className={`${styles.card} ${styles.card4}`} style={{background: "url('/Cards/SeloRA1000.png')"}}>
                        <h3>selo RA1000</h3>
                        <h2>Excelência no atendimento</h2>
                        <a href="#">
                            Falar via WhatsApp
                            <img src="/setaAmarela2.svg" alt="Seta" />
                        </a>
                    </div>
                    <div className={`${styles.card} ${styles.card5}`} style={{background: "url('/Cards/redes-sociais.png')"}}>
                        <h3>redes sociais</h3>
                        <h2>Siga a Yelly no Instagram e fique por dentro das novidades!</h2>
                        <a href="#">
                            @sejayelly
                            <img src="/setaAmarela2.svg" alt="Seta" />
                        </a>
                    </div>
                    <div className={`${styles.card} ${styles.card6}`} style={{background: "url('/Cards/link-de-pagamento.png')"}}>
                        <h3>link de pagamento</h3>
                        <h2>Novidade na Yelly!</h2>
                        <a href="#">
                            Saiba mais
                            <img src="/setaAmarela2.svg" alt="Seta" />
                        </a>
                    </div>    
                </div>
               
               
               

            </div>
        </section>
    )
}