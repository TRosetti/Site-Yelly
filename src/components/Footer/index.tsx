import styles from './footer.module.css';

export function Footer (){
    return(
        <section>
            <div className={styles.footerContainer}>
                <div className={styles.topo}>
                    <img src="/logoYelly.svg" alt="Logo Yelly" />
                    <div className={styles.socialMediaContianer}>
                        <div className={styles.socialMedia}>
                            <a href="https://www.instagram.com/sejayelly/%20/" target='_blank'>
                                <img src="/instagram.svg" alt="instagram" />
                            </a>
                            <a href="https://www.facebook.com/maquininhasyelly/" target='_blank'>
                              <img src="/facebook.svg" alt="facebook" />
                            </a>
                            <a href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fyelly-fintech%2F%2520" target='_blank'>
                                <img src="/linkedin.svg" alt="linkedin" />
                            </a>
                            <a href="https://www.youtube.com/@sejayelly" target='_blank'>
                                <img src="/youtube.svg" alt="youtube" />
                            </a>
                        </div>

                        <div className={styles.app}>
                            <a href="https://apps.apple.com/br/app/yelly/id6450483688">
                                <img src="/appleStore.svg" alt="app Apple" />
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=br.com.yellyfintech.yel7f0dc&pli=1">
                                <img src="/googlePlay.svg" alt="app Android" />
                            </a>
                        </div>
                        
                    </div>
                </div>

                <div className={styles.paginas}>
                    <div className={styles.sobreNos}>
                        <div>
                             <a href="#">Sobre nós</a>
                            <p>A Yelly é uma fintech que facilita o acesso a soluções de pagamento para empreendedores e comerciantes de todo o Brasil. Nossa missão é simplificar transações, potencializar vendas e impulsionar negócios por meio de tecnologia acessível e atendimento transparente.</p>
                        </div>
                         <div className={styles.raMobile}>
                            <a href="https://www.reclameaqui.com.br/empresa/yelly-fintech/">
                                <img src="/CertificadoRA.png" alt="Certificado RA" />
                            </a>
                            <a href="https://www.reclameaqui.com.br/empresa/yelly-fintech/premio/">
                            <img src="/PremioRA.png" alt="Premio RA" /></a>
                        </div>
                       
                    </div>
                    <div className={styles.outrasPaginas}>
                        <div>
                            <h3>Soluções</h3>
                            <hr />
                            <a href="#">Maquininhas</a>
                            <a href="#">Link de Pagamento</a>
                            <a href="#">Planos e Taxas</a>
                        </div>
                        <div>
                            <h3>Parcerias</h3>
                            <hr />
                            <a href="#">Seja um Afiliado</a>
                            <a href="#">Yelly Business</a>
                        </div>
                        <div>
                            <h3>Institucional</h3>
                            <hr />
                            <a href="#">Central de Ajuda</a>
                            <a href="#">Ouvidoria</a>
                            <a href="#">Blog</a>
                        </div>
                        <div>
                            <h3>Transparência</h3>
                            <hr />
                            <a href="#">Privacidade</a> 
                            <a href="#">Termos de Uso</a>
                        </div>

                        <div className={styles.ra}>
                            <a href="https://www.reclameaqui.com.br/empresa/yelly-fintech/">
                                <img src="/CertificadoRA.png" alt="Certificado RA" />
                            </a>
                            <a href="https://www.reclameaqui.com.br/empresa/yelly-fintech/premio/">
                            <img src="/PremioRA.png" alt="Premio RA" /></a>
                        </div>
                    </div>
                    
                </div>
                <p>© Yelly Fintech CNPJ: 42.928.123/0001-37. Todos os direitos reservados. WhatsApp: (27) 99607-5780 | E-mail: contato@yelly.com.br</p>
            </div>
        </section>
    )
}