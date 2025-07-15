"use client"
import Image from "next/image";
import styles from "./header.module.css";
import { useState } from "react";
import Link from "next/link";



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
                        <Link href="/">
                            <Image src="/logoYelly.svg" alt="Logo Yelly" width={102} height={32}  priority />
                        </Link>                    
                    </div>
                    <div className={styles.menu}>
                        <nav>
                            <ul>
                                <li>
                                    <Link href="/maquininhas">Maquininhas</Link>
                                </li>
                                <li className={styles.dropdown}>
                                    
                                    
                                    Soluções
                                    &nbsp; {/* Adiciona espaço em branco */}
                                    <Image src="/dropdownNav.svg" alt="dropdown" width={12} height={8} />
                                    
                                    <ul className={styles.submenu}>
                                        <li>
                                            <Link href="/cashback">Cashback</Link>
                                            
                                        </li>
                                        <li>
                                            <Link href="/link-de-pagamento">Link de Pagamento</Link>
                                            
                                        </li>                                    
                                    </ul>
                                </li>
                                <li>
                                    <Link href="/taxas">Planos e Taxas</Link>                                    
                                </li>
                                
                                <li className={styles.dropdown}>
                                    
                                        Parcerias
                                        &nbsp; {/* Adiciona espaço em branco */}
                                        <Image src="/dropdownNav.svg" alt="dropdown" width={12} height={8} />
                                
                                <ul className={styles.submenu}> 

                                        <li>
                                            <Link href="/afiliados">Afiliados</Link>                                            
                                        </li>
                                        <li>
                                            <Link href="/yelly-business">Yelly Business</Link>                                            
                                        </li>
                                    </ul>
                                </li>
                                <li className={styles.dropdown}>
                                    
                                        Institucional
                                        &nbsp; {/* Adiciona espaço em branco */}
                                        <Image src="/dropdownNav.svg" alt="dropdown" width={12} height={8} />
                                    
                                    <ul className={styles.submenu}>
                                        <li>
                                            <Link href="/sobre-nos">Sobre Nós</Link>                                            
                                        </li>
                                        <li>
                                            <Link href="/blog">Blog</Link>                                            
                                        </li>
                                        <li>
                                            <Link href="/ouvidoria">Ouvidoria</Link>                                            
                                        </li>
                                        <li>
                                            <Link href="https://conta.yelly.com.br/login" target="_blank">Portal Yelly</Link>                                            
                                        </li>
                                    </ul>
                                </li>                 
                            </ul>
                        </nav>
                    </div>
                    <div className={styles.botoes}>
                        <Link href="https://yellyhelpcenter.tawk.help/" target="_blank">Ajuda</Link>
                        <Link href="https://conta.yelly.com.br/register" target="_blank" className={styles.btn1}>Abrir conta grátis</Link>
                        <Link href="https://conta.yelly.com.br/login" target="_blank" className={styles.btn2}>Login</Link>
                        <Link href="https://checkout.yelly.com.br/"  className="cart">
                            <Image src="/shopping_cart.svg" alt="Carrinho" width={23.98} height={24} priority/>
                        </Link>
                        
                    </div>
                </div>
                
                <div className={`${styles.mobile} ${menuAberto ? styles.menuAberto : ""}`}>
                    <div className={styles.menuBurguer} onClick={ ()=> setMenuAberto(!menuAberto) }>
                        <Image src="/menu_burguer.svg" alt="Menu Burguer" width={40} height={32}  />
                    </div>
                    <div className={styles.logo}>
                        <Link href="/">
                            <Image src="/logoYelly.svg" alt="Logo Yelly" width={102} height={32}  priority />
                        </Link>
                    </div>
                    <div className={styles.botoes}>
                        <Link href="https://conta.yelly.com.br/login" target="_blank" className={styles.btn2}>
                            <Image src="/account.svg" alt="Login" width={23.98} height={24} priority/>
                        </Link>
                       
                        <Link href="https://checkout.yelly.com.br"  className="cart">
                            <Image src="/shopping_cart.svg" alt="Carrinho" width={23.98} height={24} priority/>
                        </Link>
                       
                    </div>
                    <nav>
                            <ul>
                                <li>
                                    <div >
                                        <Link href="/maquininhas" className={styles.alignCenter}>
                                           <Image src="/maquininhas.svg" alt="Maquininhas" width={24} height={24} /> 
                                            Maquininhas`
                                        </Link>
                                        
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
                                         <li>
                                            <Link href="/cashback">Cashback</Link>                                            
                                        </li>
                                        <li>
                                            <Link href="/link-de-pagamento">Link de Pagamento</Link>
                                        </li>                                    
                                    </ul>
                                </li>
                                <li>
                                    <div >
                                        <Link href="/taxas"  className={styles.alignCenter}>
                                            <Image src="/moeda.svg" alt="dropdown" width={24} height={24} />
                                            Planos e Taxas
                                        </Link>
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
                                        <li>
                                            <Link href="/afiliados">Afiliados</Link>                                            
                                        </li>
                                        <li>
                                            <Link href="/yelly-business">Yelly Business</Link>                                            
                                        </li>
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
                                        <li>
                                            <Link href="/sobre-nos">Sobre Nós</Link>                                            
                                        </li>
                                        <li>
                                            <Link href="/blog">Blog</Link>                                            
                                        </li>
                                        <li>
                                            <Link href="/ouvidoria">Ouvidoria</Link>                                            
                                        </li>
                                        <li>
                                            <Link href="https://conta.yelly.com.br/login" target="_blank">Portal Yelly</Link>                                            
                                        </li>
                                    </ul>
                                </li>                 
                            </ul>
                            <div className={styles.botoes}>                              
                                <Link href="https://conta.yelly.com.br/register" target="_blank" className={styles.btn1}>Abrir conta grátis</Link>
                                <Link href="https://yellyhelpcenter.tawk.help/" target="_blank" className={styles.btn2}>Ajuda</Link>
                            </div>
                    </nav>
                </div>
            </div>
        </div>
           
     
    )
}