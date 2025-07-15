import styles from './beneficios.module.css';

export function Beneficios3(){
    return(
        <section className={styles.beneficios}>
            <div className={styles.beneficiosContainer}>
                <div className={styles.divImage}>
                    <img src="/Beneficios/Beneficio3-1-DESKTOP.png" alt="" className={styles.desktop}/>
                    <img src="/Beneficios/Beneficio3-1-MOBILE.png" alt="" className={styles.mobile}/>
                </div>
                <div className={styles.divText}>
                    <h3>ENTREGA RÁPIDA</h3>
                    <h2>A Yelly garante frete grátis e entrega expressa</h2>
                    <p>Seu negócio não pode esperar, e nós também não. Enviamos sua maquininha para qualquer lugar do Brasil — sem custos extras e com toda a agilidade que você precisa.</p>
                    <a href="#">Peça agora sua Yelly!</a>
                </div>
            </div>
            <div className={styles.beneficiosContainer}>
                <div className={styles.divImage}>
                    <img src="/Beneficios/Beneficio3-2-DESKTOP.png" alt="" className={styles.desktop}/>
                    <img src="/Beneficios/Beneficio3-2-MOBILE.png" alt="" className={styles.mobile}/>
                </div>
                <div className={styles.divText}>
                    <h3>SELO DE QUALIDADE YELLY</h3>
                    <h2>Atendimento reconhecido e confiança garantida!</h2>
                    <p>A Yelly é reconhecida pelo suporte excepcional e transparência. Nosso atendimento foi reconhecido como um dos melhores no setor financeiro, garantindo sua tranquilidade em todas as etapas.</p>
                    <a href="#">Garanta sua maquininha agora</a>
                </div>
            </div>
        </section>
    )
}