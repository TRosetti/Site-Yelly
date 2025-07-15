import styles from './maquininhas.module.css';

export function Maquininha(){
    return(
        <section id='Maquininhas' className={styles.maquininhas}>
            <div className={styles.maquininhasContainer}>
                <img src="/Maquininhas/SMART.png" alt="Maquininha Smart" />
                <div className="divText">
                    <h3>A máquina de fazer dinheiro</h3>
                    <p>Boa pedida para frente de caixa, a Yelly Smart recebe pagamentos no crédito, débito e por QR Code com rapidez e agilidade. Ela possui design moderno, conexão Wi-Fi, Chip 4G e Bluetooth, tela sensível ao toque e câmera integrada.</p>
                    <div className="divImg">
                        <div className="imgConteudo">
                            <img src="/impressaoSms.svg" alt="Impressão Sms" />
                            <p>Comprovante impresso e SMS</p>
                        </div>
                        <div className="imgConteudo">
                           <img src="/wifi.svg" alt="4g" />

                            <p>Comprovante impresso e SMS</p>
                        </div>
                        <div className="imgConteudo">
                            <img src="/nfc.svg" alt="nfc" />
                            <p>Comprovante impresso e SMS</p>
                        </div>
                        <div className="imgConteudo">
                            <img src="/android.svg" alt="android" />
                            <p>Comprovante impresso e SMS</p>
                        </div>
        
                    </div>
                    <a href="">Peça sua Yelly SMART!</a>
                </div>
            </div>

        </section>
    )
}