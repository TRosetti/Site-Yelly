import styles from './ProcessoDeCompra.module.css';

interface ProcessoDeCompraProps {
  apenasProcessoDeCompra?: boolean;
}

export function ProcessoDeCompra({ apenasProcessoDeCompra = false }: ProcessoDeCompraProps) {
  return (
    <section className={styles.processoDeCompra}>
        <div className={styles.container}>

            {/* Hero */}
            {!apenasProcessoDeCompra && (
                <div className={styles.hero}>
                    <div className={styles.titleContainer}>
                        <h2>Venda com a Yelly e receba seu dinheiro de volta!</h2>
                        <p>A cada venda feita com sua maquininha Yelly, você acumula progresso rumo ao seu cashback total ou parcial.</p>
                    </div>
                    <div className={styles.heroContainer}>
                        <div className={styles.imgContainer1}>
                            <img src="https://yelly.com.br/wp-content/uploads/2025/04/IMAGEM.png" alt="Maquininhas" />
                        </div>
                        <div className={styles.textHeroConainer}>
                            <div>
                               <ul>
                                    <li>Em até 3 meses, você pode receber o valor investido de volta.</li>
                                    <li>Receba 50% ou até 100% do valor da sua máquina de volta!</li>
                                    <li>Quanto mais você vende, mais rápido recupera o valor investido.</li>
                                    <li>Tudo de forma simples, transparente e sem complicações.</li>
                               </ul>
                            </div>
                            <a href="#">Saiba mais</a>
                        </div>
                        <div className={styles.imgContainer2}>
                            <img src="https://yelly.com.br/wp-content/uploads/2025/04/Rectangle-160.png" alt="Cash Back" />
                        </div>
                    </div>
                </div>
            )}

            
            {/* Card */}
            <div className={styles.card}>
                <h2>Teste card</h2>
            </div>
        </div>
      
    </section>
  );
}


// Exemplo de uso:
// <ProcessoDeCompra apenasProcessoDeCompra={true} /> // Para exibir apenas o processo de compra
// <ProcessoDeCompra  /> // Para exibir o processo de compra com o hero