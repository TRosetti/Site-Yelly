'use client'
import stylesHero from './Hero.module.css';
import stylesCard from './Card.module.css';
import { useState } from 'react';



interface ProcessoDeCompraProps {
  apenasProcessoDeCompra?: boolean;
}

export function ProcessoDeCompra({ apenasProcessoDeCompra = false }: ProcessoDeCompraProps) {
    const [planoSelecionado, setPlanoSelecionado] = useState("MAX");

    const planos = [
        {
            nome: 'MAX', 
            h3Recebimentos: "Recebimento no dia seguinte", 
            h3destaque: (
                <>
                Venda mais com as <strong>menores taxas!</strong>
                </>
            )
        },
        {
            nome: 'BASIC', 
            destaque: "ATÉ 70% OFF 🔥", 
            h3Recebimentos: "Recebimento no dia seguinte", 
            h3destaque: (
                <>
                  Máquinas com os  <strong>menores preços!</strong> 🔥
                </>
            )
        },
        {
            nome: "ECONÔMICO", 
            h3Recebimentos: "Recebimento conforme parcelas", 
            h3destaque: (
                <>
                  Plano especial para receber <strong>sem antecipação!</strong>
                </>
            ) 

        },
    ]

    const planoAtual = planos.find(p =>p.nome === planoSelecionado)

  return (
    <section className={stylesHero.processoDeCompra}>
        <div className={stylesHero.container}>

            {/* Hero */}
            {!apenasProcessoDeCompra && (
                <div className={stylesHero.hero}>
                    <div className={stylesHero.titleContainer}>
                        <h2>Venda com a Yelly e receba seu dinheiro de volta!</h2>
                        <p>A cada venda feita com sua maquininha Yelly, você acumula progresso rumo ao seu cashback total ou parcial.</p>
                    </div>
                    <div className={stylesHero.heroContainer}>
                        <div className={stylesHero.imgContainer1}>
                            <img src="https://yelly.com.br/wp-content/uploads/2025/04/IMAGEM.png" alt="Maquininhas" />
                        </div>
                        <div className={stylesHero.textHeroConainer}>
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
                        <div className={stylesHero.imgContainer2}>
                            <img src="https://yelly.com.br/wp-content/uploads/2025/04/Rectangle-160.png" alt="Cash Back" />
                        </div>
                    </div>
                </div>
            )}

            
            {/* Card */}
            <div className={stylesCard.card}>
                <h2>Escolha o <strong>Plano de Taxas</strong> e a <strong>Máquina</strong> para o seu negócio!</h2>

                <div className={stylesCard.selecionarPlanoContainer}>
                    <span>Selecione seu plano</span>    
                    
                    <div className={stylesCard.planos}>

                        {planos.map((plano) => (
                            <button
                                key={plano.nome}
                                className={` 
                                    ${stylesCard.planoButton} 
                                    ${stylesCard[plano.nome.toLowerCase()]}
                                    ${planoSelecionado === plano.nome ? stylesCard.selecionado: ""}
                                `}
                                onClick={() => setPlanoSelecionado(plano.nome)}
                            >


                                <span className={stylesCard.bolinhaExterna}>
                                    <span className={`${stylesCard.bolinha} ${ planoSelecionado === plano.nome ? stylesCard.bolinhaSelecionada: ""}`}></span>
                                </span>
                                <span className={stylesCard.nome}>{plano.nome}</span>
                                {plano.destaque && <span className={stylesCard.destaque}>{plano.destaque}</span>}
                            </button>
                        ))}
                    </div>


                </div>  

                <div className={stylesCard.recebimentoETaxas}>
                    <div className={stylesCard.recebimentos}>
                        <h3>{planoAtual?.h3Recebimentos}</h3> 
                        <div className={stylesCard.divisor}></div>
                        <h3>{planoAtual?.h3destaque}</h3>
                    </div> 

                    <div className={stylesCard.taxasContainer}>
                        <div className={stylesCard.taxas}>
                            <p>Débito:</p>
                            <p>1,39%</p>
                        </div>
                        <div className={stylesCard.taxas}>
                            <p>Crédito 1x:</p>
                            <p>2,91%</p>
                        </div>  
                        <div className={stylesCard.taxas}>
                            <p>Crédito 12x:</p>
                            <p>11,80%</p>
                        </div>
                        
                    </div>
                </div>

                <div className="products">
                    
                </div>
            </div>
        </div>
      
    </section>
  );
}


// Exemplo de uso:
// <ProcessoDeCompra apenasProcessoDeCompra={true} /> // Para exibir apenas o processo de compra
// <ProcessoDeCompra  /> // Para exibir o processo de compra com o hero