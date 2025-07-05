"use client"
import Image from "next/image";
import styles from "./header.module.css";
import { useState } from "react";



export function Header (){

    const [menuAberto, setMenuAberto] = useState(false);

    const [submenusAbertos, setSubmenusAbertos] = useState<{[chave: string]: boolean}>({
        solucoes: false,
        parcerias: false,
        institucional: false,
    })

    
    return(
       <div className={styles.header}>
        
            <div className={styles.headerContainer}>
                <div className={styles.desktop}>
                    <div className={styles.logo}>
                        <a href="#">
                            <Image src="/logoYelly.svg" alt="Logo Yelly" width={102} height={32}  priority />
                        </a>
                    
                    </div>
                    <div className={styles.menu}>
                        <nav>
                            <ul>
                                <li>
                                    <a href="#">Maquininhas</a>
                                </li>
                                <li className={styles.dropdown}>
                                    <a href="#">
                                        Soluções
                                        &nbsp; {/* Adiciona espaço em branco */}
                                        <Image src="/dropdownNav.svg" alt="dropdown" width={12} height={8} />
                                    </a> 
                                    <ul className={styles.submenu}>
                                        <li><a href="#">Cashback</a></li>
                                        <li><a href="#">Link de Pagamento</a></li>                                    
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Planos e Taxas</a>
                                </li>
                                
                                <li className={styles.dropdown}>
                                    <a href="#">
                                        Parcerias
                                        &nbsp; {/* Adiciona espaço em branco */}
                                        <Image src="/dropdownNav.svg" alt="dropdown" width={12} height={8} />
                                </a>
                                <ul className={styles.submenu}> 
                                        <li><a href="#">Afiliados</a></li>
                                        <li><a href="#">Yelly Business</a></li>
                                    </ul>
                                </li>
                                <li className={styles.dropdown}>
                                    <a href="#">
                                        Institucional
                                        &nbsp; {/* Adiciona espaço em branco */}
                                        <Image src="/dropdownNav.svg" alt="dropdown" width={12} height={8} />
                                    </a>
                                    <ul className={styles.submenu}>
                                        <li><a href="#">Sobre Nós</a></li>
                                        <li><a href="#">Blog</a> </li>
                                        <li><a href="#">Ouvidoria</a></li>
                                        <li><a href="#">Portal Yelly</a></li>
                                    </ul>
                                </li>                 
                            </ul>
                        </nav>
                    </div>
                    <div className={styles.botoes}>
                        <a href="#">Ajuda</a>
                        <a href="#" className={styles.btn1}>Abrir conta grátis</a>  
                        <a href="#" className={styles.btn2}>Login</a>   
                        <a href="#" className="cart">
                            <Image src="/shopping_cart.svg" alt="Carrinho" width={23.98} height={24} priority/>
                        </a>
                    </div>
                </div>
                
                <div className={`${styles.mobile} ${menuAberto ? styles.menuAberto : ""}`}>
                    <div className={styles.menuBurguer} onClick={ ()=> setMenuAberto(!menuAberto) }>
                        <Image src="/menu_burguer.svg" alt="Menu Burguer" width={40} height={32}  />
                    </div>
                    <div className={styles.logo}>
                        <a href="#">
                            <Image src="/logoYelly.svg" alt="Logo Yelly" width={102} height={32}  priority />
                        </a>
                    </div>
                    <div className={styles.botoes}>
                        <a href="#">
                            <Image src="/account.svg" alt="Login" width={23.98} height={24} priority/>
                        </a>
                        <a href="#">
                            <Image src="/shopping_cart.svg" alt="Carrinho" width={23.98} height={24} priority/>
                        </a>
                    </div>
                    <nav>
                            <ul>
                                <li>
                                    <div >
                                        <a href="#" className={styles.alignCenter}>
                                            <Image src="/maquininhas.svg" alt="Maquininhas" width={24} height={24} /> 
                                            Maquininhas
                                        </a>
                                    </div>
                                    
                                </li>
                                <li className={styles.dropdown}>
                                    <div className={styles.alignCenter} onClick={ () => setSubmenusAbertos((prev) => ({...prev, solucoes: !prev.solucoes}))}> 
                                        <Image src="/solucoes.svg" alt="dropdown" width={24} height={24} />
                                        Soluções

                                        <div className={styles.alignRight}>
                                            <Image src="/dropdownNav.svg" alt="dropdown" width={12} height={8} />
                                        </div>
                                    </div>

                                    <ul className={`${styles.submenu} ${submenusAbertos.solucoes ? styles.show : ""}`}>
                                        <li><a href="#">Cashback</a></li>
                                        <li><a href="#">Link de Pagamento</a></li>                                    
                                    </ul>
                                </li>
                                <li>
                                    <div >
                                        <a href="#" className={styles.alignCenter}>
                                            <Image src="/moeda.svg" alt="dropdown" width={24} height={24} />
                                            Planos e Taxas
                                        </a>
                                    </div>
                                
                                </li>
                                
                                <li className={styles.dropdown}>
                                    
                                    <div className={styles.alignCenter} onClick={ () => setSubmenusAbertos((prev) => ({...prev, parcerias: !prev.parcerias}))}> 
                                        <Image src="/uniao.svg" alt="dropdown" width={24} height={24} />
                                        Parcerias

                                        <div className={styles.alignRight}>
                                            <Image src="/dropdownNav.svg" alt="dropdown" width={12} height={8} />
                                        </div>
                                    </div>
                                <ul className={`${styles.submenu} ${submenusAbertos.parcerias ? styles.show : ""}`}>
                                        <li><a href="#">Afiliados</a></li>
                                        <li><a href="#">Yelly Business</a></li>
                                    </ul>
                                </li>
                                <li className={styles.dropdown}>
                                        
                                    <div className={styles.alignCenter} onClick={ () => setSubmenusAbertos((prev) => ({...prev,institucional : !prev.institucional}))}> 
                                        <Image src="/Y.svg" alt="dropdown" width={24} height={24} />
                                        Institucional

                                        <div className={styles.alignRight}>
                                        <Image src="/dropdownNav.svg" alt="dropdown" width={12} height={8} />
                                    </div>
                                    </div>
                                    
                                    <ul className={`${styles.submenu} ${submenusAbertos.institucional ? styles.show : ""}`}>
                                        <li><a href="#">Sobre Nós</a></li>
                                        <li><a href="#">Blog</a> </li>
                                        <li><a href="#">Ouvidoria</a></li>
                                        <li><a href="#">Portal Yelly</a></li>
                                    </ul>
                                </li>                 
                            </ul>
                            <div className={styles.botoes}>                        
                                <a href="#" className={styles.btn1}>Abrir conta grátis</a>  
                                <a href="#" className={styles.btn2}>Ajuda</a>   
                            </div>
                    </nav>
                </div>
            </div>
        </div>
           
     
    )
}