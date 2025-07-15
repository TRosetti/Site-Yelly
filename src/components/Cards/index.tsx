import styles from "./cards.module.css"

export function Cards(){
    return(
        <section id="Cards">
            <div className={styles.cardContainer}>
                <div className={styles.linha1}>
                    <div className={`${styles.card} ${styles.card1}`} >
                        <h3>Taxas Exclusivas para Todos</h3>
                        <h2>As melhores taxas para você CPF ou CNPJ</h2>
                        <a href="/taxas">
                            Economize com as menores taxas do mercado!
                            <img src="/setaAmarela2.svg" alt="Seta" />
                        </a>
                    </div>
                </div>

                <div className={styles.linha2}>
                    <div className={`${styles.card} ${styles.card2}`} >
                    <h3>Recebimento rápido</h3>
                    <h2>Receba seu dinheiro em até um dia</h2>
                    <a href="/taxas/#tabelaTaxas">
                        Confira nossas taxas
                        <img src="/setaAmarela2.svg" alt="Seta" />
                    </a>
                </div>
               <div className={`${styles.card} ${styles.card3}`} >
                    <h3>Alta performace</h3>
                    <h2>A máquina mais <br /> moderna do mercado!</h2>
                    <a href="/maquininhas/#cardSmart">
                        Conheça a Yelly Smart
                        <img src="/setaAmarela2.svg" alt="Seta" />
                    </a>
                </div>
                </div>
                <div className={styles.linha3}>
                    <div className={`${styles.card} ${styles.card4}`} >
                        <h3>selo RA1000</h3>
                        <h2>Excelência no atendimento</h2>
                        <a href="https://api.whatsapp.com/send/?phone=5527996075780&text=Ol%C3%A1%21+Vim+pelo+site+e+desejo+atendimento.&type=phone_number&app_absent=0" target="_blank">
                            Falar via WhatsApp
                            <img src="/setaAmarela2.svg" alt="Seta" />
                        </a>
                    </div>
                    <div className={`${styles.card} ${styles.card5}`} >
                        <h3>redes sociais</h3>
                        <h2>Siga a Yelly no Instagram e fique por dentro das novidades!</h2>
                        <a href="https://www.instagram.com/sejayelly/" target="_blank">
                            @sejayelly
                            <img src="/setaAmarela2.svg" alt="Seta" />
                        </a>
                    </div>
                    <div className={`${styles.card} ${styles.card6}`} >
                        <h3>link de pagamento</h3>
                        <h2>Novidade na Yelly!</h2>
                        <a href="/link-de-pagamento">
                            Saiba mais
                            <img src="/setaAmarela2.svg" alt="Seta" />
                        </a>
                    </div>    
                </div>
               
               
               

            </div>
        </section>
    )
}