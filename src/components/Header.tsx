import Image from "next/image";
import styles from "./header.module.css";


export function Header (){
    return(
       
        <div className={styles.header}>
            <div className={styles.desktop}>
                <div className={styles.logo}>
                    <Image src="/logoYelly.svg" alt="Logo Yelly" width={102} height={32}  priority />
                </div>
                <div className={styles.menu}>
                    <nav>
                        <ul>
                            <li><a href="#">Maquininhas</a></li>
                            <li><a href="#">Soluções</a></li>
                            <li><a href="#">Planos e Taxas</a></li>                            
                            <li><a href="#">Parcerias</a></li>                        
                            <li><a href="#">Institucional</a></li>                    
                        </ul>
                    </nav>
                </div>
                <div className={styles.botoes}>
                    <a href="#">Ajuda</a>
                    <a href="#" className={styles.btn1}>Abrir conta grátis</a>  
                    <a href="#" className={styles.btn2}>Login</a>   
                    <Image src="/shopping_cart.svg" alt="Carrinho" width={23.98} height={24} priority/>
                </div>
            </div>
        </div>
           
     
    )
}