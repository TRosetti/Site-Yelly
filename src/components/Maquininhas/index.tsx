import styles from './maquininhas.module.css';

export function Maquininha(){
    return(
        <section id='Maquininhas' className={styles.maquininhas}>
            <div className={styles.maquininhasContainer}>
                <img src="/Maquininhas/SMART.png" alt="Maquininha Smart" />
                <div className={styles.divText}>
                    <h3>A máquina de fazer dinheiro</h3>
                    <p>Boa pedida para frente de caixa, a Yelly Smart recebe pagamentos no crédito, débito e por QR Code com rapidez e agilidade. Ela possui design moderno, conexão Wi-Fi, Chip 4G e Bluetooth, tela sensível ao toque e câmera integrada.</p>
                    <div className={styles.divImg}>
                        <div className={styles.imgConteudo}>
                            <img src="/impressaoSms.svg" alt="Impressão Sms" />
                            <p>Comprovante <br /> impresso e SMS</p>
                        </div>
                        <div className={styles.imgConteudo}>
                           <img src="/wifi.svg" alt="4g" />

                            <p>Wifi <br />+ Chip 4G Grátis</p>
                        </div>
                        <div className={styles.imgConteudo}>
                            <img src="/nfc.svg" alt="nfc" />
                            <p>Receba por <br /> aproximação (NFC)</p>
                        </div>
                        <div className={styles.imgConteudo}>
                            <img src="/android.svg" alt="android" />
                            <p>Sistema Android <br />+ Tela Touch</p>
                        </div>
        
                    </div>
                    <a href="">Peça sua Yelly SMART!</a>
                </div>
            </div>
            <div className={styles.maquininhasContainer}>
                <img src="/Maquininhas/PRO.png" alt="Maquininha Pro" />
                <div className={styles.divText}>
                    <h3>Máquina de cartão completa</h3>
                    <p>Aumente suas vendas com rapidez e economia! Este modelo de maquininha combina o melhor custo-benefício do mercado, uma bateria de longa duração e as taxas exclusivas da Yelly para maximizar seus lucros.</p>
                    <div className={styles.divImg}>
                        <div className={styles.imgConteudo}>
                            <img src="/impressaoSms.svg" alt="Impressão Sms" />
                            <p>Comprovante <br /> impresso e SMS</p>
                        </div>
                        <div className={styles.imgConteudo}>
                           <img src="/wifi.svg" alt="4g" />

                            <p>Wifi <br />+ Chip 4G Grátis</p>
                        </div>
                        <div className={styles.imgConteudo}>
                            <img src="/nfc.svg" alt="nfc" />
                            <p>Receba por <br /> aproximação (NFC)</p>
                        </div>
                        <div className={styles.imgConteudo}>
                            <img src="/bateria.svg" alt="bateria" />
                            <p>Bateria de <br />longa duração</p>
                        </div>
        
                    </div>
                    <a href="">Peça sua Yelly PRO!</a>
                </div>
            </div>
            <div className={styles.maquininhasContainer}>
                <img src="/Maquininhas/PLUS.png" alt="Maquininha Plus" />
                <div className={styles.divText}>
                    <h3>Máquina de cartão 100% Yelly</h3>
                    <p>O nosso mais novo lançamento no mercado, confira nossa maquininha de subadquirente. Acompanhe suas vendas e receba seu saldo no app Yelly.</p>
                    <div className={styles.divImg}>
                        <div className={styles.imgConteudo}>
                            <img src="/impressaoSms.svg" alt="Impressão Sms" />
                            <p>Comprovante <br /> impresso e SMS</p>
                        </div>
                        <div className={styles.imgConteudo}>
                           <img src="/wifi.svg" alt="4g" />

                            <p>Wifi <br />+ Chip 4G Grátis</p>
                        </div>
                        <div className={styles.imgConteudo}>
                            <img src="/nfc.svg" alt="nfc" />
                            <p>Receba por <br /> aproximação (NFC)</p>
                        </div>
                        <div className={styles.imgConteudo}>
                            <img src="/bateria.svg" alt="bateria" />
                            <p>Bateria de <br />longa duração</p>
                        </div>
        
                    </div>
                    <a href="">Peça sua Yelly PRO PLUS!</a>
                </div>
            </div>
            <div className={styles.maquininhasContainer}>
                <img src="/Maquininhas/MINI.png" alt="Maquininha Mini" />
                <div className={styles.divText}>
                    <h3>De MINI só o tamanho, o lucro é PLUS!</h3>
                    <p>Chegou a solução que seu negócio precisava. A MINI PLUS além da sua tecnologia, possui uma incrível AGILIDADE devido ao seu sistema 3G e wi-fi grátis. Ideal para profissionais autonomos que deseja LUCRAR MUITO MAIS.</p>
                    <div className={styles.divImg}>
                        <div className={styles.imgConteudo}>
                            <img src="/comprovanteSms.svg" alt="Comprovante Sms" />
                            <p>Comprovante <br /> por SMS</p>
                        </div>
                        <div className={styles.imgConteudo}>
                           <img src="/wifi.svg" alt="4g" />

                            <p style={{color: "var(--amarelo-yelly)"}}>Wifi <br />+ Chip 3G Grátis</p>
                        </div>
                        <div className={styles.imgConteudo}>
                            <img src="/nfc.svg" alt="nfc" />
                            <p>Receba por <br /> aproximação (NFC)</p>
                        </div>
                        <div className={styles.imgConteudo}>
                            <img src="/maisPratica.svg" alt="Maispratica" />
                            <p>A mais prática <br />portátil</p>
                        </div>
        
                    </div>
                    <a href="">Peça sua Yelly MINI!</a>
                </div>
            </div>
            <div className={styles.maquininhasContainer}>
                <img src="/Maquininhas/MINIZINHA.png" alt="Maquininha Minizinha" />
                <div className={styles.divText}>
                    <h3>Uma minizinha de respeito!</h3>
                    <p>Praticidade e economia em suas mãos! A Mini é compacta, acessível e portátil, com tela maior e colorida para facilitar suas vendas diárias. Dispensa celular, possui conexão Wi-Fi e chip com plano de dados grátis para vender onde quiser!</p>
                    <div className={styles.divImg}>
                        <div className={styles.imgConteudo}>
                            <img src="/comprovanteSms.svg" alt="Comprovante Sms" />
                            <p>Comprovante <br /> por SMS</p>
                        </div>
                        <div className={styles.imgConteudo}>
                           <img src="/wifi.svg" alt="4g" />

                            <p>Wifi <br />+ Chip 2G Grátis</p>
                        </div>
                        <div className={styles.imgConteudo}>
                            <img src="/nfc.svg" alt="nfc" />
                            <p>Receba por <br /> aproximação (NFC)</p>
                        </div>
                        <div className={styles.imgConteudo}>
                            <img src="/maisPratica.svg" alt="Maispratica" />
                            <p>A mais prática <br />portátil</p>
                        </div>
        
                    </div>
                    <a href="">Peça sua Yelly MINIZINHA!</a>
                </div>
            </div>

        </section>
    )
}