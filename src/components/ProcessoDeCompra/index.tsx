'use client'
import stylesHero from './Hero.module.css';
import stylesCard from './Card.module.css';
import { useState } from 'react';
import { useTaxas } from '@/hooks/useTaxas';
import { MaquinasYelly } from '@/constants/maquinas';
import { Slider } from '../Slider';
import { TipoPlano } from '@/types/taxas';
import Image from 'next/image';

// import { SliderTeste } from "@/components/SliderTeste";

interface ProcessoDeCompraProps {
  apenasProcessoDeCompra?: boolean;
}

export function ProcessoDeCompra({ apenasProcessoDeCompra = false }: ProcessoDeCompraProps) {
    const [planoSelecionado, setPlanoSelecionado] = useState<TipoPlano>("max");

    const planos = [
        {
            id: 'max',
            nome: 'MAX', 
            h3Recebimentos: "Recebimento no dia seguinte", 
            h3destaque: (
                <>
                Venda mais com as <strong>menores taxas!</strong>
                </>
            ),
            
        },
        {
            id: 'basic',
            nome: 'BASIC', 
            destaque: "ATÉ 70% OFF 🔥", 
            h3Recebimentos: "Recebimento no dia seguinte", 
            h3destaque: (
                <>
                  Máquinas com os  <strong>menores preços!</strong> 🔥
                </>
            ),
            
        },
        {
            id: "economic", 
            nome: "ECONÔMICO", 
            h3Recebimentos: "Recebimento conforme parcelas", 
            h3destaque: (
                <>
                  Plano especial para receber <strong>sem antecipação!</strong>
                </>
            ),
            

        },
    ]

    const planoAtual = planos.find(p =>p.id === planoSelecionado)


    const { taxas } = useTaxas();

    const plano: TipoPlano = planoSelecionado;

   


    const planoTaxas = taxas?.master?.[plano] as number[] | undefined;

    const produtosDoPlano = MaquinasYelly[plano];

 

    

    // console.log(MaquinasYelly[maquinasMax].Mini.name)
    // console.log(MaquinasYelly[maquinasBasic])
    // console.log(MaquinasYelly[maquinasEconomic])

    // console.log("Taxas débito max:", taxas?.master?.max?.[0] )


   

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
                                key={plano.id}
                                className={` 
                                    ${stylesCard.planoButton} 
                                    ${stylesCard[plano.id]}
                                    ${planoSelecionado === plano.id? stylesCard.selecionado: ""}
                                `}
                                onClick={() => setPlanoSelecionado(plano.id as TipoPlano)}
                            >


                                <span className={stylesCard.bolinhaExterna}>
                                    <span className={`${stylesCard.bolinha} ${ planoSelecionado === plano.id ? stylesCard.bolinhaSelecionada: ""}`}></span>
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
                            {/* <p>{taxas?.master?.max?.[0]}</p> */}
                            <p>{(planoTaxas?.[0] ?? 0).toFixed(2).replace('.', ',')}%</p>
                            
                        </div>
                        <div className={stylesCard.taxas}>
                            <p>Crédito 1x:</p>
                            <p>{(planoTaxas?.[1] ?? 0).toFixed(2).replace('.', ',')}%</p>
                        </div>  
                        <div className={stylesCard.taxas}>
                            <p>Crédito 12x:</p>
                            <p>{(planoTaxas?.[12] ?? 0).toFixed(2).replace('.', ',')}%</p>
                        </div>
                        
                    </div>
                </div>

                <div className={stylesCard.products}>
                    <Slider spaceBetween={16} >
                    {Object.values(produtosDoPlano).map((produto, i) => {
                        const className = produto.name.toLowerCase().replace(/\s+/g, '-');
                        const isUnico = Object.values(produtosDoPlano).length == 1;

                        return (
                            <div className={`${stylesCard.cardProdutos} ${stylesCard[className]} ${isUnico ? stylesCard.isUnico : ''}`} key={i}>

                                <div className={stylesCard.cardContainer}>
                                    <div className={stylesCard.ladoImagem}>
                                        <h4>{produto.desc}</h4>
                                        <img src={produto.imageUrl} alt={produto.name} />
                                    </div>

                                    <div className={stylesCard.ladoTexto}>
                                        <h4>{produto.desc}</h4>
                                        <img src={produto.imageUrl} alt={produto.name} />
                                        <h3>{produto.name}</h3>
                                        <div className={stylesCard.valores}>
                                            <p>12x <br /> <span>sem juros de</span></p>
                                            <div className={stylesCard.preco}>
                                                <p className={stylesCard.precoAntigo}>de R$ <span>{produto.oldPrice.toFixed(2).replace(".", ",")}</span> por</p>
                                                <p className={stylesCard.parcelas}><span>R$</span> {produto.installmentPrice.toFixed(2).replace(".", ",")}</p>
                                                <p className={stylesCard.precoNovo}>ou R$ {produto.newPrice.toFixed(2).replace(".", ",")} à vista</p>
                                            
                                            </div>
                                        </div>
                                        <a href="#">Peça já</a>
                                        <hr />
                                        <ul>
                                            {produto.items.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                        <hr />
                                        <a href="#" className={stylesCard.maisInformacoes}>Mais informações  
                                            <Image src="/setaAmarela.svg" alt="dropdown" width={12} height={8} />
                                        </a>
                                    </div>
                                </div>
                                
                               
                                
                            </div>
                        );
                    })}
                    </Slider>
                </div>
            </div>
        </div>
      
    </section>
  );
}


// Exemplo de uso:
// <ProcessoDeCompra apenasProcessoDeCompra={true} /> // Para exibir apenas o processo de compra
// <ProcessoDeCompra  /> // Para exibir o processo de compra com o hero