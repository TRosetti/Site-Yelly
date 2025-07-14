'use client'
import styles from './faq.module.css';
import { Faqjson } from '@/constants/faq';
import { useState } from 'react';

export function Faq(){

    const [isAberto, setIsAberto] = useState<number | null>(null);

    const faqJson = Object.values(Faqjson.faq);

    const togglePergunta = (index: number) => {
        setIsAberto(isAberto === index ? null : index);
    };

    return(
        <section>
            <div className={styles.faqContainer}>
                <h2 className={styles.desktop}>Perguntas <br />Frequentes</h2>
                <h2 className={styles.mobile}>Perguntas Frequentes</h2>
                
                <div className={styles.faq} >   
                    {faqJson.map((item, index) => (

                        <div className={styles.faqItem} key={index}>
                            <h3 onClick={() => togglePergunta(index)} className={isAberto === index ? styles.aberto : ""}>
                                {item.pergunta}
                                <img src="/dropdownNav.svg" alt="dropdown" />
                            </h3>
                            <p style={{ whiteSpace: 'pre-line' }}>{item.resposta}</p>
                            {/* Esse {whiteSpace; 'pre-line'} serve para pular a linha quando tem \n */}
                        </div>
                    ))}
                </div>
                
            </div>
        </section>
    )
}